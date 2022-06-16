import React, { useLayoutEffect, useRef, useState } from 'react';
import { classNames } from 'mo/common/className';
import { HTMLElementProps, UniqueId } from 'mo/common/types';
import { getDataAttributionsFromProps } from 'mo/common/dom';

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
import { IActionBarItemProps } from '../actionBar';
import { Icon } from '../icon';
import { Toolbar } from '../toolbar';
import SplitPane, { Pane } from '../split';

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
    activePanelKeys?: UniqueId[];
    data?: ICollapseItem[];
    onCollapseChange?: (keys: UniqueId[]) => void;
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
    activePanelKeys: controlActivePanelKeys,
    className,
    title,
    style,
    role,
    onCollapseChange,
    onToolbarClick,
    onResize,
    ...restProps
}: ICollapseProps) {
    const [activePanelKeys, setActivePanelKeys] = useState<UniqueId[]>(
        new Array(data.length)
    );

    const [collapsing, setCollapsing] = useState(false);
    const wrapper = useRef<HTMLDivElement>(null);
    const [sizes, setSizes] = useState<number[]>(
        data.map((pane) => (pane.hidden ? 0 : HEADER_HEIGTH))
    );
    const [showSashs, setShowSashes] = useState<boolean | boolean[]>(false);
    // cache the adjusted size for restoring the adjusted size in next uncollapsing
    const adjustedSize = useRef<number[]>([]);
    const first = useRef(true);

    const isUndefined = (key): boolean => {
        return key === undefined;
    };

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

    const handleChangeCallback = (key: UniqueId, index) => {
        const currentKeys = [...activePanelKeys];
        if (!isUndefined(currentKeys[index])) {
            delete currentKeys[index];
        } else {
            currentKeys[index] = key;
        }
        onCollapseChange?.(currentKeys);
        setActivePanelKeys(currentKeys.concat());
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
        const activeLength = activePanelKeys.filter(
            (v) => !isUndefined(v)
        ).length;
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
                    const { height: contentHeight } =
                        correspondDOM.getBoundingClientRect();
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

            const nextSash: boolean[] = [];
            for (let i = 1; i < activePanelKeys.length; i++) {
                nextSash.push(
                    !isUndefined(activePanelKeys[i - 1]) &&
                        data[i - 1]?.config?.grow !== 0 &&
                        !isUndefined(activePanelKeys[i])
                );
            }
            setShowSashes(nextSash);

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

    useLayoutEffect(() => {
        Array.isArray(controlActivePanelKeys) &&
            setActivePanelKeys(controlActivePanelKeys);
    }, [controlActivePanelKeys]);
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
                allowResize={data.map((item, index) => {
                    if (item?.config?.grow === 0) {
                        return false;
                    }
                    return !!activePanelKeys[index];
                })}
                showSashes={showSashs}
                paneClassName={classNames(
                    collapsePaneClassName,
                    collapsing && collapsingClassName
                )}
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
                                        handleChangeCallback(panel.id, index)
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
