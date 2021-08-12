import React, {
    forwardRef,
    useImperativeHandle,
    useLayoutEffect,
    useRef,
    useState,
    useEffect,
    useCallback,
} from 'react';
import { SplitView as MonacoSplitView } from 'monaco-editor/esm/vs/base/browser/ui/splitview/splitview';
import ReactDOM from 'react-dom';
import logger from 'mo/common/logger';
import { LayoutPriority, Pane, PaneInstanceProps, PaneProps } from './pane';

export enum Orientation {
    VERTICAL,
    HORIZONTAL,
}

interface SplitPaneProps {
    children: React.ReactElement<PaneProps>[];
    className?: string;
    split?: Orientation.VERTICAL | Orientation.HORIZONTAL;
    proportionalLayout?: boolean;
    onChange?: (sizes: number[]) => void;
    onWillUnMount?: () => void;
    onDidMount?: () => void;
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
    {
        children,
        onChange,
        className,
        onDidMount,
        onWillUnMount,
        split,
        proportionalLayout,
    },
    ref
) {
    const container = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement[]>([]);
    const splitviewRef = useRef<MonacoSplitView>();
    const sizes = useRef<number[]>([]);
    const [update, forceUpdate] = useState(false);

    const getView = (index: number) => {
        return getViews()[index];
    };

    const getViews = () => {
        return splitviewRef.current.viewItems;
    };

    const getViewCachedVisibleSize = (index: number): number | undefined => {
        const viewItem = getView(index);

        return viewItem._cachedVisibleSize;
    };

    const setViewVisible = (index: number, visible: boolean, size?: number) => {
        const viewItem = getView(index);
        // There will be undefined if get viewItem before componentDidMount
        if (viewItem) {
            viewItem.setVisible(visible, size);

            splitviewRef.current.distributeEmptySpace(index);
            splitviewRef.current.layoutViews();
            splitviewRef.current.saveProportions();
        }
    };

    useImperativeHandle(
        ref,
        () =>
            ({
                splitView: splitviewRef.current,
                getView: (index: number) => getView(index),
                getViews: () => getViews(),
                getViewCachedVisibleSize: (index: number) =>
                    getViewCachedVisibleSize(index),
                setViewVisible: (
                    index: number,
                    visible: boolean,
                    size?: number
                ) => setViewVisible(index, visible, size),
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

    const getParentSize = () => {
        if (container.current) {
            const {
                height = 0,
                width = 0,
            } = container.current.getBoundingClientRect();
            const size = split === Orientation.VERTICAL ? height : width;
            return size;
        }
        return 0;
    };

    /**
     * Once a pane append into Split, SplitPane will push these new panes into workInProgressPanes
     * And add panes into view via componentDidMount
     */
    const componentDidMount = async (
        workInProgressPanes: {
            child: typeof children[number];
            dom: HTMLDivElement;
        }[]
    ) => {
        const splitview = splitviewRef.current;
        const parentSize = getParentSize();

        const initSizes = await Promise.all(
            workInProgressPanes.map((children, index) => {
                const { child, dom } = children;
                return new Promise<number | null>((resolve) => {
                    if (child?.type === Pane) {
                        const {
                            minSize = 0,
                            initialSize = 200,
                            maxSize = parentSize,
                            priority = LayoutPriority.Normal,
                        } = child.props;
                        const initSize = getSize(initialSize, parentSize);
                        splitview.addView(
                            {
                                onDidChange: () => {},
                                element: dom,
                                minimumSize: getSize(minSize, parentSize),
                                maximumSize: getSize(maxSize, parentSize),
                                priority,
                                layout: (size: number) => {
                                    resolve(size);
                                },
                            },
                            initSize,
                            undefined,
                            index !== workInProgressPanes.length - 1
                        );
                    } else {
                        resolve(null);
                    }
                });
            })
        );
        sizes.current = sizes.current.concat(
            initSizes.filter(Boolean) as number[]
        );
        forceUpdate((i) => !i);
        onDidMount?.();
    };

    const renderChildren = () => {
        const workInProgressPanes: {
            child: typeof children[number];
            dom: HTMLDivElement;
        }[] = [];
        React.Children.map(children, (child, index) => {
            if (child?.type === Pane) {
                const { hidden } = child.props;
                const isFirstRender = !wrapper.current[index];
                const dom = getWrapper(index);
                className && dom.classList.add(className);

                if (isFirstRender) {
                    workInProgressPanes.push({ child, dom });
                }
                ReactDOM.render(child, dom, () => {
                    if (isFirstRender && index === children.length - 1) {
                        componentDidMount(workInProgressPanes);
                    }

                    setViewVisible(index, !hidden);
                });
            } else {
                logger.warn(
                    'Please use Pane component as the children of SplitPane'
                );
            }
        });
    };

    const catchError = useCallback(function (event) {
        if (event.reason && event.reason.name === 'Canceled') {
            // monaco editor promise cancelation
            event.preventDefault();
        }
    }, []);

    const handleResize = useCallback(() => {
        const parentSize = getParentSize();
        splitviewRef.current.layout(parentSize);
    }, []);

    useLayoutEffect(() => {
        if (container.current) {
            const splitview = new MonacoSplitView(container.current, {
                orientation: split || Orientation.VERTICAL,
                proportionalLayout: proportionalLayout || true,
            });
            const parentSize = getParentSize();
            splitview.layout(parentSize);
            renderChildren();

            splitviewRef.current = splitview;
        }
        return () => {
            onWillUnMount?.();
            splitviewRef.current?.dispose();
        };
    }, []);

    useLayoutEffect(() => {
        onChange?.(sizes.current);
    }, [update]);

    useEffect(() => {
        renderChildren();
    }, [children]);

    useEffect(() => {
        // [TODO]: fixed in monaco-editor@^0.24.0 (#2382)[https://github.com/Microsoft/monaco-editor/issues/2382]
        window.addEventListener('unhandledrejection', catchError);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('unhandledrejection', catchError);
        };
    }, []);

    return <div ref={container} style={{ height: '100%' }}></div>;
});

type InternalSplitPaneType = typeof InternalSplit;

interface SplitPaneType extends InternalSplitPaneType {
    Pane: typeof Pane;
}

const SplitPane = InternalSplit as SplitPaneType;
SplitPane.Pane = Pane;
export { SplitPane };
