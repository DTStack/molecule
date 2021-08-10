import React, {
    forwardRef,
    useImperativeHandle,
    useLayoutEffect,
    useRef,
    useState,
    useEffect,
} from 'react';
import { SplitView as MonacoSplitView } from 'monaco-editor/esm/vs/base/browser/ui/splitview/splitview';
import ReactDOM from 'react-dom';
import logger from 'mo/common/logger';
import { LayoutPriority, Pane, PaneInstanceProps, PaneProps } from './pane';

interface SplitPaneProps {
    children: React.ReactElement<PaneProps>[];
    className?: string;
    split?: 'vertical' | 'horizontal';
    allowResize?: boolean;
    onChange?: (sizes: number[]) => void;
    layoutHeight?: number | string;
}

function getSize(size: string | number | undefined, total: number) {
    if (!size) return 0;

    if (typeof size === 'string') {
        return size.endsWith('%')
            ? (parseInt(size, 10) / 100) * total
            : parseInt(size, 10);
    }
    return size;
}

export interface SplitPaneRef {
    splitView: MonacoSplitView;
    getView(index: number): PaneInstanceProps;
    getViews(): PaneInstanceProps[];
    setSizes(sizes: number[]): void;
    getViewCachedVisibleSize(index: number): number | undefined;
    setViewVisible(index: number, visible: boolean, size?: number): void;
}

const InternalSplit = forwardRef<SplitPaneRef, SplitPaneProps>(function (
    { children, onChange, className, layoutHeight },
    ref
) {
    const container = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement[]>([]);
    const splitviewRef = useRef<MonacoSplitView>();
    const sizes = useRef<number[]>([]);
    const [update, forceUpdate] = useState(false);

    useImperativeHandle(
        ref,
        () =>
            ({
                splitView: splitviewRef.current,
                getView(index: number) {
                    return this.getViews()[index];
                },
                getViews() {
                    return splitviewRef.current.viewItems;
                },
                getViewCachedVisibleSize(index: number): number | undefined {
                    const viewItem = this.getView(index);

                    return viewItem._cachedVisibleSize;
                },
                setViewVisible(index: number, visible: boolean, size?: number) {
                    const viewItem = this.getView(index);
                    viewItem.setVisible(visible, size);

                    splitviewRef.current.distributeEmptySpace(index);
                    splitviewRef.current.layoutViews();
                    splitviewRef.current.saveProportions();
                },
                setSizes(sizes: number[]): void {
                    sizes.forEach((size, index) => {
                        splitviewRef.current.resizeView(index, size);
                    });
                },
            } as SplitPaneRef)
    );

    const getWrapper = (index: number) => {
        if (wrapper.current[index]) {
            return wrapper.current[index];
        }
        const div = document.createElement('div');
        div.style.height = '100%';
        wrapper.current[index] = div;
        return div;
    };

    const renderChildren = (splitview, parentHeight) => {
        return React.Children.map(children, (child, index) => {
            if (child?.type === Pane) {
                const {
                    minSize = 0,
                    initialSize = 200,
                    maxSize = parentHeight,
                    priority = LayoutPriority.Normal,
                } = child.props;

                const isFirstRender = !wrapper.current[index];
                const dom = getWrapper(index);
                className && dom.classList.add(className);

                ReactDOM.render(child, dom, () => {
                    if (isFirstRender) {
                        splitview.addView(
                            {
                                onDidChange: () => {},
                                element: dom,
                                minimumSize: getSize(minSize, parentHeight),
                                maximumSize: getSize(maxSize, parentHeight),
                                priority,
                                layout: (size: number) => {
                                    sizes.current[index] = size;
                                    if (index === children.length - 1) {
                                        forceUpdate((i) => !i);
                                    }
                                },
                            },
                            getSize(initialSize, parentHeight),
                            undefined,
                            index !== children.length - 1
                        );
                    }
                });

                return getSize(initialSize, parentHeight);
            }

            logger.warn(
                'Please use Pane component as the children of SplitPane'
            );
            return 0;
        });
    };

    useLayoutEffect(() => {
        const splitview = new MonacoSplitView(container.current, {});
        const parentHeight =
            container.current?.getBoundingClientRect().height || 0;
        splitview.layout(getSize(layoutHeight, parentHeight) || parentHeight);
        const initSizes = renderChildren(splitview, parentHeight);
        sizes.current = initSizes;
        splitviewRef.current = splitview;

        return () => {
            splitview.dispose();
        };
    }, []);

    useLayoutEffect(() => {
        onChange?.(sizes.current);
    }, [update]);

    useEffect(() => {
        const splitview = splitviewRef.current;
        const parentHeight =
            container.current?.getBoundingClientRect().height || 0;
        if (splitview) {
            renderChildren(splitview, parentHeight);
        }
    }, [children]);

    return <div ref={container} style={{ height: '100%' }}></div>;
});

type InternalSplitPaneType = typeof InternalSplit;

interface SplitPaneType extends InternalSplitPaneType {
    Pane: typeof Pane;
}

const SplitPane = InternalSplit as SplitPaneType;
SplitPane.Pane = Pane;
export { SplitPane };
