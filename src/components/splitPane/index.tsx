import React, {
    forwardRef,
    useImperativeHandle,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import { SplitView as MonacoSplitView } from 'monaco-editor/esm/vs/base/browser/ui/splitview/splitview';
import ReactDOM from 'react-dom';
import logger from 'mo/common/logger';
import { LayoutPriority, Pane, PaneInstanceProps, PaneProps } from './pane';

interface SplitPaneProps {
    children: React.ReactElement<PaneProps>[];
    split?: 'vertical' | 'horizontal';
    allowResize?: boolean;
    onChange?: (sizes: number[]) => void;
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
    getViewCachedVisibleSize(index: number): number | undefined;
    setViewVisible(index: number, visible: boolean, size?: number): void;
}

const InternalSplit = forwardRef<SplitPaneRef, SplitPaneProps>(function (
    { children, onChange },
    ref
) {
    const container = useRef<HTMLDivElement>(null);
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
            } as SplitPaneRef)
    );

    useLayoutEffect(() => {
        const splitview = new MonacoSplitView(container.current, {});
        const parentHeight =
            container.current?.getBoundingClientRect().height || 0;
        const initSizes = React.Children.map(children, (child, index) => {
            if (child?.type === Pane) {
                const {
                    minSize = 0,
                    initialSize = 200,
                    maxSize = parentHeight,
                    priority = LayoutPriority.Normal,
                } = child.props;
                const wrapper = document.createElement('div');
                wrapper.style.height = '100%';

                ReactDOM.render(child, wrapper, () => {
                    splitview.addView(
                        {
                            onDidChange: () => {},
                            element: wrapper,
                            minimumSize: getSize(minSize, parentHeight),
                            maximumSize: getSize(maxSize, parentHeight),
                            priority,
                            layout: (size) => {
                                sizes.current[index] = size;
                                if (index === children.length - 1) {
                                    forceUpdate((i) => !i);
                                }
                            },
                        },
                        getSize(initialSize, parentHeight)
                    );

                    splitview.layout(parentHeight);
                });

                return getSize(initialSize, parentHeight);
            }

            logger.warn(
                'Please use Pane component as the children of SplitPane'
            );
            return 0;
        });

        sizes.current = initSizes;
        splitviewRef.current = splitview;
    }, []);

    useLayoutEffect(() => {
        onChange?.(sizes.current);
    }, [update]);

    return <div ref={container} style={{ height: '100%' }}></div>;
});

type InternalSplitPaneType = typeof InternalSplit;

interface SplitPaneType extends InternalSplitPaneType {
    Pane: typeof Pane;
}

const SplitPane = InternalSplit as SplitPaneType;
SplitPane.Pane = Pane;
export { SplitPane };
