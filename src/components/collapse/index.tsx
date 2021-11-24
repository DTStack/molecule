import { classNames } from 'mo/common/className';
import { isEqual } from 'lodash';
import { HTMLElementProps, UniqueId } from 'mo/common/types';
import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { IActionBarItemProps, Icon, Toolbar } from '..';
import SplitPane, { ResizeStratygy } from '../split/SplitPane';
import {
    collapseActiveClassName,
    collapseContentClassName,
    collapseExtraClassName,
    collapseHeaderClassName,
    collapseItemClassName,
    collapsePaneClassName,
    collapseTitleClassName,
    collapsingClassName,
    defaultCollapseClassName,
} from './base';
import { getDataAttributionsFromProps } from 'mo/common/dom';
import Pane from '../split/pane';

type RenderFunctionProps = (data: ICollapseItem) => React.ReactNode;
export interface ICollapseItem extends HTMLElementProps {
    id: UniqueId;
    name: string;
    hidden?: boolean;
    toolbar?: IActionBarItemProps[];
    renderPanel?: RenderFunctionProps;
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

export interface ICollapseProps extends HTMLElementProps {
    data?: ICollapseItem[];
    onCollapseChange?: (keys: React.Key[]) => void;
    onResize?: (resizes: number[]) => void;
    onToolbarClick?: (
        item: IActionBarItemProps,
        parentPanel: ICollapseItem
    ) => void;

    [key: string]: any;
}

/**
 * It's the max height for the item which set the grow to 0
 */
export const MAX_GROW_HEIGHT = 220;
// default collapse height, only contains header
export const HEADER_HEIGTH = 26;

export function Collapse({
    data = [],
    className,
    title,
    style,
    role,
    onCollapseChange,
    onToolbarClick,
    onResize,
    ...restProps
}: ICollapseProps) {
    const [activePanelKeys, setActivePanelKeys] = useState<React.Key[]>([]);
    const [collapsing, setCollapsing] = useState(false);
    const wrapper = useRef<HTMLDivElement>(null);
    const [sizes, setSizes] = useState<number[]>(
        data.map((pane) => (pane.hidden ? 0 : HEADER_HEIGTH))
    );
    // cache the adjusted size for restoring the adjusted size in next uncollapsing
    const adjustedSize = useRef<number[]>([]);
    const first = useRef(true);

    // compare two sizes to find the change one
    const compareTheSizes = (sizes: number[], otherSizes: number[]) => {
        for (let index = 0; index < sizes.length; index++) {
            if (sizes[index] !== otherSizes[index]) {
                return index + 1;
            }
        }
        return -1;
    };

    const handleSplitChange = (nextSizes: number[]) => {
        const index = compareTheSizes(sizes, nextSizes);
        if (index === -1) {
            return;
        }
        adjustedSize.current[index] = nextSizes[index];
        onResize?.(nextSizes);
        setSizes(nextSizes);
    };

    const handleToolbarClick = (
        e: React.MouseEvent,
        item: IActionBarItemProps,
        panel: ICollapseItem
    ) => {
        e.stopPropagation();
        onToolbarClick?.(item, panel);
    };

    const renderPanels = (
        data: ICollapseItem,
        render?: RenderFunctionProps
    ) => {
        if (render) {
            return render(data);
        }
        return null;
    };

    const handleChangeCallback = (key: React.Key) => {
        const currentKeys = activePanelKeys.concat();
        if (currentKeys.includes(key)) {
            currentKeys.splice(currentKeys.indexOf(key), 1);
        } else {
            currentKeys.push(key);
        }
        onCollapseChange?.(currentKeys);
        setActivePanelKeys(currentKeys.concat());
    };

    const handleStrategies = (sizes: number[]): ResizeStratygy[] => {
        let maxGrowIndex = -1;
        let maxGrow = Number.MIN_SAFE_INTEGER;
        const wip: ResizeStratygy[] = sizes.map((size, index) => {
            const grow =
                typeof data[index].config?.grow === 'undefined'
                    ? 1
                    : data[index].config!.grow!;
            if (grow > maxGrow && size !== HEADER_HEIGTH) {
                maxGrow = grow;
                maxGrowIndex = index;
            }
            return 'keep';
        });
        // set pave for max grow data
        wip[maxGrowIndex] = 'pave';
        return wip;
    };

    // perform smoothly the task to recalculate sizes
    const performSmoothSizes = () => {
        setCollapsing(true);
        performSizes();
        setTimeout(() => {
            setCollapsing(false);
        }, 300);
    };

    // perform the tasks to recalculate sizes
    const performSizes = () => {
        const activeLength = activePanelKeys.length;
        if (activeLength) {
            const { height } = wrapper.current!.getBoundingClientRect();
            let restHeight = height;
            let count = 0;
            // don't care of what the previous sizes are, the next sizes only contains:
            // 1. directly assignment for the next size is collapsing
            // 2. recalculate for the next size is uncollapsing
            const wipSizes = data.map((pane, index) => {
                const isHidden = pane.hidden;
                if (isHidden) {
                    return 0;
                }
                const willCollapsing = activePanelKeys.includes(pane.id);
                if (!willCollapsing) {
                    restHeight = restHeight - HEADER_HEIGTH;
                    return HEADER_HEIGTH;
                }

                // to get the height of content while grow is 0
                if (pane.config?.grow === 0) {
                    const correspondDOM = wrapper.current
                        ?.querySelector(
                            `.${collapseContentClassName}[data-collapse-index='${index}']`
                        )
                        ?.querySelector(`[data-content='${pane.id}']`);
                    if (!correspondDOM) {
                        restHeight = restHeight - HEADER_HEIGTH;
                        return HEADER_HEIGTH;
                    }
                    const {
                        height: contentHeight,
                    } = correspondDOM.getBoundingClientRect();
                    // for preventing the loss of DOM height, don't set the display to be none for DOM
                    const height = contentHeight + HEADER_HEIGTH;

                    if (height > MAX_GROW_HEIGHT) {
                        restHeight = restHeight - MAX_GROW_HEIGHT;
                        return MAX_GROW_HEIGHT;
                    }
                    restHeight = restHeight - height;
                    return height;
                }

                // there is a cached size
                if (typeof adjustedSize.current[index] !== 'undefined') {
                    restHeight = restHeight - adjustedSize.current[index];
                    return adjustedSize.current[index];
                }

                // count the sum of grow that isn't 0, for how many parts the remaing part should be divided into
                count = count + (pane.config?.grow || 1);
                // auto is a placeholder for calculation in next process
                return 'auto';
            });

            // count the average size for each auto
            const averageHeight = restHeight / count;
            const nextSizes = wipSizes.map((size, index) =>
                size === 'auto'
                    ? averageHeight * (data[index].config?.grow || 1)
                    : size
            );

            onResize?.(nextSizes);
            setSizes(nextSizes);
        } else {
            const nextSizes = data.map((pane) =>
                pane.hidden ? 0 : HEADER_HEIGTH
            );
            onResize?.(nextSizes);
            setSizes(nextSizes);
        }
    };

    useLayoutEffect(() => {
        if (!first.current) {
            performSmoothSizes();
        }

        first.current = false;
    }, [activePanelKeys, data]);

    // perform the next resizes value via sizes
    // the effects of data changes will lead to perform recalculate sizes, which cause recalculate the resizers
    // so don't need to add data into deps
    const resize = useMemo(() => {
        const res: boolean[] = [];
        sizes.forEach((size, index) => {
            if (!index) {
                // the first pane couldn't be resized
                res.push(false);
            } else if (data[index].config?.grow === 2) {
                // when specify grow to be 2, this pane couldn't be resized
                res.push(false);
            } else {
                const isCollapsing = !!size && size !== HEADER_HEIGTH;
                const lastCollasping =
                    !!sizes[index - 1] && sizes[index - 1] !== HEADER_HEIGTH;
                // the pane could be resized only when the last pane is collapsing and the current pane is collapsing
                res.push(isCollapsing && lastCollasping);
            }
        });

        const didChanged = !isEqual(res, resize);
        if (didChanged) {
            return res;
        }
        return resize;
    }, [sizes]);

    const dataAttrProps = getDataAttributionsFromProps(restProps);

    return (
        <div
            ref={wrapper}
            className={classNames(defaultCollapseClassName, className)}
            title={title}
            style={style}
            role={role}
            {...dataAttrProps}
        >
            <SplitPane
                sizes={sizes}
                onChange={handleSplitChange}
                split="horizontal"
                allowResize={resize}
                paneClassName={classNames(
                    collapsePaneClassName,
                    collapsing && collapsingClassName
                )}
                onResizeStrategy={handleStrategies}
            >
                {data.map((panel, index) => {
                    const isActive = activePanelKeys.includes(panel.id);
                    return (
                        <Pane key={panel.id} minSize={HEADER_HEIGTH}>
                            <div
                                className={classNames(
                                    panel.className,
                                    collapseItemClassName,
                                    isActive && collapseActiveClassName
                                )}
                                data-collapse-id={panel.id}
                            >
                                <div
                                    className={collapseHeaderClassName}
                                    tabIndex={0}
                                    onClick={() =>
                                        handleChangeCallback(panel.id)
                                    }
                                >
                                    <Icon
                                        type={
                                            isActive
                                                ? 'chevron-down'
                                                : 'chevron-right'
                                        }
                                    />
                                    <span className={collapseTitleClassName}>
                                        {panel.name}
                                    </span>
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
                                    tabIndex={0}
                                    data-collapse-index={index}
                                >
                                    {renderPanels(panel, panel.renderPanel)}
                                </div>
                            </div>
                        </Pane>
                    );
                })}
            </SplitPane>
        </div>
    );
}
