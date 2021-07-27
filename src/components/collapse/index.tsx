import * as React from 'react';
import { useState } from 'react';
import Logger from 'mo/common/logger';
import { Toolbar } from 'mo/components/toolbar';
import { Icon } from 'mo/components/icon';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { classNames } from 'mo/common/className';
import {
    defaultCollapseClassName,
    collapseItemClassName,
    collapseActiveClassName,
    collapseHeaderClassName,
    collapseExtraClassName,
    collapseContentClassName,
} from './base';
import { select } from 'mo/common/dom';

type RenderFunctionProps = (data: DataBaseProps) => React.ReactNode;
export interface DataBaseProps {
    id: React.Key;
    name: string;
    className?: string;
    hidden?: boolean;
    toolbar?: IActionBarItemProps[];
    renderPanel?: RenderFunctionProps;

    // detect the collapse panel whether empty
    _isEmpty?: boolean;
    config?: {
        /**
         * Specify how much of the remaining space should be assigned to the item, default is 1
         *
         * It unfolds in its own content height or the `MAX_GROW_HEIGHT` rather than in calculated height
         */
        grow?: number;
    };

    [key: string]: any;
}

export interface ICollapseProps {
    data?: Partial<DataBaseProps>[];
    className?: string;
    onCollapseChange?: (keys: React.Key[]) => void;
    onToolbarClick?: (
        item: IActionBarItemProps,
        parentPanel: DataBaseProps
    ) => void;
}

// default collapse height, only contains header
export const HEADER_HEIGTH = 26;
/**
 * It's the max height for the item which set the grow to 0
 */
export const MAX_GROW_HEIGHT = 220;

export function Collapse(props: ICollapseProps) {
    const [activePanelKeys, setActivePanelKeys] = useState<React.Key[]>([]);
    const wrapper = React.useRef<HTMLDivElement>(null);
    const requestAF = React.useRef<number>();

    const {
        className,
        data = [],
        onCollapseChange,
        onToolbarClick,
        ...restProps
    } = props;

    const visibleData = data.filter((d) => !d.hidden);

    // assets data must have id
    const filterData = visibleData.filter(
        (panel) => panel.id
    ) as DataBaseProps[];
    if (filterData.length < visibleData.length) {
        Logger.warn(new SyntaxError('collapse data must have id'));
    }

    // to save position temporarily, empty array when rerender
    const _cachePosition: number[][] = [];
    let _cacheWrapperHeight = React.useRef(0);

    const handleResize = React.useCallback(() => {
        // just want to trigger rerender
        setActivePanelKeys((keys) => keys.concat());
    }, []);

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    React.useLayoutEffect(() => {
        // It's necessary to check panel's empty before calculate every panel
        filterData.forEach((panel) => {
            const isActive = activePanelKeys.includes(panel.id);
            let isEmpty = true;
            if (isActive) {
                const contentDom =
                    select(
                        `.${collapseContentClassName}[data-content='${panel.id}']`
                    )?.querySelector(`[data-content='${panel.id}']`) ||
                    select(
                        `.${collapseContentClassName}[data-content='${panel.id}']`
                    );

                isEmpty = !contentDom?.hasChildNodes();
            }
            panel._isEmpty = isEmpty;
        });

        filterData.forEach((panel) => {
            const [height, top] = calcPosition(
                activePanelKeys,
                panel,
                filterData
            );
            _cachePosition.push([height, top]);
            const dom = select<HTMLElement>(
                `.${collapseItemClassName}[data-content='${panel.id}']`
            );

            if (dom) {
                requestAF.current = requestAnimationFrame(() => {
                    dom.style.height = `${height}px`;
                    dom.style.top = `${top}px`;
                });
            }
        });

        return () => {
            if (requestAF.current) {
                cancelAnimationFrame(requestAF.current);
                requestAF.current = undefined;
            }
        };
    }, [filterData]);

    const handleChangeCallback = (key: React.Key) => {
        const currentKeys = activePanelKeys.concat();
        if (currentKeys.includes(key)) {
            currentKeys.splice(currentKeys.indexOf(key), 1);
        } else {
            currentKeys.push(key);
        }
        onCollapseChange?.(currentKeys);
        setActivePanelKeys(currentKeys);
    };

    const handleToolbarClick = (
        e: React.MouseEvent,
        item: IActionBarItemProps,
        panel: DataBaseProps
    ) => {
        e.stopPropagation();
        onToolbarClick?.(item, panel);
    };

    const renderPanels = (
        data: DataBaseProps,
        render?: RenderFunctionProps
    ) => {
        if (render) {
            return render(data);
        }
        return null;
    };

    /**
     * Returns the grow of data, or 1
     */
    const getGrow = (data: DataBaseProps) => {
        if (typeof data.config?.grow === 'number') {
            return data.config.grow;
        } else {
            return 1;
        }
    };

    /**
     * Returns the key whose panel is active and whose grow is 0
     */
    const getZeroPanelsByKeys = (
        keys: React.Key[],
        panels: DataBaseProps[]
    ) => {
        return keys.filter((key) => {
            const targetPanel = panels.find((panel) => panel.id === key);
            if (targetPanel) {
                return targetPanel.config?.grow === 0;
            }
            return false;
        });
    };

    /**
     * Returns the collections of height
     */
    const getContentHeightsByKeys = (data: React.Key[]) => {
        return data.map((key) => {
            const contentDom = select(
                `.${collapseContentClassName}[data-content='${key}']`
            );

            const childrenDom = contentDom?.querySelector(
                `[data-content='${key}']`
            );

            let contentHeight = contentDom?.getBoundingClientRect().height || 0;

            if (childrenDom) {
                contentHeight = childrenDom.getBoundingClientRect().height;
            }

            // border-top-width + border-bottom-width = 2
            const height =
                parseInt(contentHeight.toFixed(0)) - 2 + HEADER_HEIGTH;

            return height > MAX_GROW_HEIGHT ? MAX_GROW_HEIGHT : height;
        });
    };

    /**
     * Calculate the position of the panel in view
     * @param keys Current active keys
     * @param panel Current panel
     * @param panels All panels array
     * @returns Tuple - [height, top]
     */
    const calcPosition = (
        keys: React.Key[],
        panel: DataBaseProps,
        panels: DataBaseProps[]
    ) => {
        // init a Tuple save height and top
        const res = [0, 0];
        const isActive = keys.includes(panel.id);
        // calculate height for current panel
        if (!isActive || panel._isEmpty) {
            // the height of inactive panel or empty panel is a fixed value
            res[0] = HEADER_HEIGTH;
        } else {
            if (panel.config?.grow === 0) {
                // to get current panel content
                const contentDom = select(
                    `.${collapseContentClassName}[data-content='${panel.id}']`
                )?.querySelector(`[data-content='${panel.id}']`);

                if (contentDom) {
                    const height =
                        contentDom.getBoundingClientRect().height +
                        2 +
                        HEADER_HEIGTH;
                    res[0] =
                        height > MAX_GROW_HEIGHT ? MAX_GROW_HEIGHT : height;
                }
            } else {
                // get the height of the wrapper
                let wrapperHeight =
                    wrapper.current?.getBoundingClientRect().height ||
                    _cacheWrapperHeight.current;
                _cacheWrapperHeight.current = wrapperHeight;
                // count active panels
                const activeCount = keys.length;
                const inactiveCount = panels.length - activeCount;
                // the height active panels can occupied
                wrapperHeight = wrapperHeight - HEADER_HEIGTH * inactiveCount;

                // get grow-zero panels' heights
                const growZeroPanelsKeys = getZeroPanelsByKeys(keys, panels);
                const growZeroPanelsHeights = getContentHeightsByKeys(
                    growZeroPanelsKeys
                );

                // the height grow-normal panels can occupied =
                // the height active panels can occupied -
                // each grow-zero panels' heights
                growZeroPanelsHeights.forEach((height) => {
                    wrapperHeight -= height;
                });

                // count the non-empty & active & non-grow-zero panels in active panels
                const nonEmptyAndActivePanels: DataBaseProps[] = [];
                const nonEmptyAndActivePanelKeys = keys.filter((key) => {
                    const target = panels.find((p) => p.id === key);
                    if (target) {
                        if (getGrow(target) === 0) return false;
                        if (typeof target._isEmpty === 'boolean') {
                            !target._isEmpty &&
                                nonEmptyAndActivePanels.push(target);
                            return !target._isEmpty;
                        }
                        // In general, the following code will not be excuted
                        const contentDom = select(
                            `.${collapseContentClassName}[data-content='${panel.id}']`
                        )?.querySelector(`[data-content='${panel.id}']`);
                        return contentDom?.hasChildNodes();
                    }
                    return false;
                });

                const growSum = nonEmptyAndActivePanels.reduce((pre, cur) => {
                    return pre + getGrow(cur);
                }, 0);

                const emptyAndActivePanelsHeights =
                    HEADER_HEIGTH *
                    (keys.length -
                        growZeroPanelsKeys.length -
                        nonEmptyAndActivePanelKeys.length);

                // the height for grow-normal panels is divided by non-empty & active & grow-normal panels depends on grow number
                res[0] =
                    ((wrapperHeight - emptyAndActivePanelsHeights) *
                        getGrow(panel)) /
                    growSum;
            }
        }

        // calculate top for current panel
        let topCount = 0;
        for (let index = 0; index < panels.length; index++) {
            const element = panels[index];
            // only count the position of front panel
            if (element === panel) {
                break;
            }
            // if this element is a active panel, then get height via cache
            // else count default height in
            if (keys.includes(element.id)) {
                const [cacheHeight] = _cachePosition[index];
                topCount += cacheHeight;
            } else {
                topCount += HEADER_HEIGTH;
            }
        }
        res[1] = topCount;
        return res;
    };

    return (
        <div
            className={classNames(defaultCollapseClassName, className)}
            ref={wrapper}
            {...restProps}
        >
            {filterData
                .filter((p) => !p.hidden)
                .map((panel) => {
                    const isActive = activePanelKeys.includes(panel.id);
                    return (
                        <div
                            className={classNames(
                                collapseItemClassName,
                                isActive && collapseActiveClassName
                            )}
                            data-content={panel.id}
                            key={panel.id}
                        >
                            <div
                                className={collapseHeaderClassName}
                                tabIndex={0}
                                onClick={() => handleChangeCallback(panel.id)}
                            >
                                <Icon
                                    type={
                                        isActive
                                            ? 'chevron-down'
                                            : 'chevron-right'
                                    }
                                />
                                {panel.name}
                                <div className={collapseExtraClassName}>
                                    {isActive && (
                                        <Toolbar
                                            key={panel.id}
                                            data={panel.toolbar || []}
                                            onClick={(e, item) =>
                                                handleToolbarClick(
                                                    e,
                                                    item,
                                                    panel
                                                )
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                            <div
                                className={collapseContentClassName}
                                data-content={panel.id}
                                tabIndex={0}
                            >
                                {renderPanels(panel, panel.renderPanel)}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
