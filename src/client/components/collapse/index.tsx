import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { classNames } from 'mo/client/classNames';
import { HTMLElementProps, IMenuItemProps, RenderFunctionProps, UniqueId } from 'mo/types';

import ActionBar from '../actionBar';
import Icon from '../icon';
import { Pane, SplitPane } from '../split';
import variables from './index.scss';

export interface ICollapseItem extends HTMLElementProps {
    id: UniqueId;
    name: string;
    hidden?: boolean;
    toolbar?: IMenuItemProps[];
    render?: RenderFunctionProps<ICollapseItem>;
    config?: {
        /**
         * Specify how much of the remaining space should be assigned to the item, default is 1
         *
         * It unfolds in its own content height or the `MAX_GROW_HEIGHT` rather than in calculated height
         */
        grow?: number;
    };
}

export interface ICollapseProps extends HTMLElementProps {
    activePanelKeys?: UniqueId[];
    data?: ICollapseItem[];
    onCollapseChange?: (keys: UniqueId[]) => void;
    onResize?: (resizes: number[]) => void;
    onToolbarClick?: (item: IMenuItemProps, parentPanel: ICollapseItem) => void;
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
}: ICollapseProps) {
    const [activePanelKeys, setActivePanelKeys] = useState<UniqueId[]>(new Array(data.length));
    const [collapsing, setCollapsing] = useState(false);
    const wrapper = useRef<HTMLDivElement>(null);
    const [sizes, setSizes] = useState<number[]>(
        data.map((pane) => (pane.hidden ? 0 : HEADER_HEIGTH))
    );
    // cache the adjusted size for restoring the adjusted size in next uncollapsing
    const adjustedSize = useRef<number[]>([]);
    const first = useRef(true);

    const isUndefined = (key: UniqueId): boolean => {
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

    const handleToolbarClick = (item: IMenuItemProps, panel: ICollapseItem) => {
        onToolbarClick?.(item, panel);
    };

    const renderPanels = (data: ICollapseItem, render?: RenderFunctionProps<ICollapseItem>) => {
        if (render) {
            return render(data);
        }
        return null;
    };

    const handleChangeCallback = (key: UniqueId, index: number) => {
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
        const activeLength = activePanelKeys.filter((v) => !isUndefined(v)).length;
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
                        ?.querySelector(`.${variables.content}[data-collapse-index='${index}']`)
                        ?.querySelector(`[data-content='${pane.id}']`);
                    if (!correspondDOM) {
                        restHeight = restHeight - HEADER_HEIGTH;
                        return HEADER_HEIGTH;
                    }
                    const { height: contentHeight } = correspondDOM.getBoundingClientRect();
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
                size === 'auto' ? averageHeight * (data[index].config?.grow || 1) : size
            );

            onResize?.(nextSizes);
            setSizes(nextSizes);
        } else {
            const nextSizes = data.map((pane) => (pane.hidden ? 0 : HEADER_HEIGTH));
            onResize?.(nextSizes);
            setSizes(nextSizes);
        }
    };

    const { nextSashes, allowResize } = useMemo(
        function () {
            const nextSashes: boolean[] = [];
            for (let i = 1; i < activePanelKeys.length; i++) {
                const prevPaneActive = !isUndefined(activePanelKeys[i - 1]);
                const prePaneAutoHeight: boolean = data[i - 1]?.config?.grow !== 0;
                const curPaneActive = !isUndefined(activePanelKeys[i]);
                const showSash = prevPaneActive && prePaneAutoHeight && curPaneActive;

                nextSashes.push(showSash);
            }
            return {
                nextSashes,
                allowResize: data.map((pane, index) => {
                    if (pane?.config?.grow === 0) {
                        return false;
                    }
                    return !isUndefined(activePanelKeys[index]);
                }),
            };
        },
        [activePanelKeys, data]
    );

    useLayoutEffect(() => {
        if (!first.current) {
            performSmoothSizes();
        }

        first.current = false;
    }, [activePanelKeys, data]);

    useLayoutEffect(() => {
        Array.isArray(controlActivePanelKeys) && setActivePanelKeys(controlActivePanelKeys);
    }, [controlActivePanelKeys]);

    return (
        <div
            ref={wrapper}
            className={classNames(variables.collapse, className)}
            title={title}
            style={style}
            role={role}
        >
            <SplitPane
                sizes={sizes}
                onChange={handleSplitChange}
                split="horizontal"
                allowResize={allowResize}
                showSashes={nextSashes}
                paneClassName={classNames(variables.pane, collapsing && variables.collapsing)}
            >
                {data.map((panel, index) => {
                    const isActive = activePanelKeys.includes(panel.id);
                    return (
                        <Pane key={panel.id} minSize={HEADER_HEIGTH}>
                            <div
                                className={classNames(
                                    variables.item,
                                    panel.className,
                                    isActive && variables.active
                                )}
                                data-collapse-id={panel.id}
                            >
                                <div
                                    className={variables.header}
                                    tabIndex={0}
                                    onClick={() => handleChangeCallback(panel.id, index)}
                                >
                                    <Icon type={isActive ? 'chevron-down' : 'chevron-right'} />
                                    <span className={variables.title}>{panel.name}</span>
                                    <div className={variables.extra}>
                                        {isActive && (
                                            <ActionBar
                                                key={panel.id}
                                                data={panel.toolbar || []}
                                                onClick={(item) => handleToolbarClick(item, panel)}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div
                                    className={variables.content}
                                    tabIndex={0}
                                    data-collapse-index={index}
                                >
                                    {renderPanels(panel, panel.render)}
                                </div>
                            </div>
                        </Pane>
                    );
                })}
            </SplitPane>
        </div>
    );
}
