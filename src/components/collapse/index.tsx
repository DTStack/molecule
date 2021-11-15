import { classNames } from 'mo/common/className';
import { isEqual } from 'lodash';
import { HTMLElementProps, UniqueId } from 'mo/common/types';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { IActionBarItemProps, Icon, Toolbar } from '..';
import SplitPane from '../split/SplitPane';
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

type RenderFunctionProps = (data: ICollapseItem) => React.ReactNode;
export interface ICollapseItem extends HTMLElementProps {
    id: UniqueId;
    name: string;
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
    className,
    data = [],
    onCollapseChange,
    onToolbarClick,
    title,
    style,
    role,
    onResize,
    ...restProps
}: ICollapseProps) {
    const [activePanelKeys, setActivePanelKeys] = useState<React.Key[]>([]);
    const [collapsing, setCollapsing] = useState(false);
    const wrapper = useRef<HTMLDivElement>(null);
    const [sizes, setSizes] = useState(
        new Array(data.length).fill(HEADER_HEIGTH)
    );
    // cache the adjusted size
    const adjustedSize = useRef<number[]>([]);
    const [resize, setResize] = useState(new Array(data.length).fill(false));
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

    // 渲染平缓过度的 sizes
    const performSmoothSizes = () => {
        setCollapsing(true);
        performSizes();
        setTimeout(() => {
            setCollapsing(false);
        }, 300);
    };

    // 渲染新的 sizes
    const performSizes = () => {
        const activeLength = activePanelKeys.length;
        if (activeLength) {
            const { height } = wrapper.current!.getBoundingClientRect();
            let restHeight = height;
            let count = 0;
            // 对所有 sizes 进行重新计算赋值
            // 不管之前的 sizes 是多少，新的 sizes 只存在两种状态
            // 1. 新的 sizes 是收起状态，则直接赋值
            // 2. 新的 sizes 是展开状态，则高度必有变化，需要重新计算
            const wipSizes = sizes.map((size, index) => {
                const isHidden = data[index].hidden;
                if (isHidden) {
                    return 0;
                }
                const willCollapsing = activePanelKeys.includes(data[index].id);
                if (!willCollapsing) {
                    restHeight = restHeight - HEADER_HEIGTH;
                    return HEADER_HEIGTH;
                }

                const panel = data[index];
                // 如果设置了 grow 是 0 的话，直接通过子结点去拿高度，然后自适应高度
                if (panel.config?.grow === 0) {
                    const correspondDOM = wrapper.current
                        ?.querySelector(
                            `.${collapseContentClassName}[data-collapse-index='${index}']`
                        )
                        ?.querySelector(`[data-content='${panel.id}']`);
                    if (!correspondDOM) {
                        restHeight = restHeight - HEADER_HEIGTH;
                        return HEADER_HEIGTH;
                    }
                    const {
                        height: contentHeight,
                    } = correspondDOM.getBoundingClientRect();
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

                // 如果 grow 非 0，则统计 grow 的总数，即剩余空间要被分成几份
                // 占位符，用于计算出剩余空间后对其进行替换
                count = count + (panel.config?.grow || 1);
                return 'auto';
            });

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

    // 根据新的 sizes 值，渲染 resizes 的值
    const performResize = () => {
        const res: boolean[] = [];
        sizes.forEach((size, index) => {
            if (!index) {
                res.push(false);
            } else if (data[index].config?.grow === 2) {
                // When specify grow to be 2, then it wouldn't be resized
                res.push(false);
            } else {
                const isCollapsing = !!size && size !== HEADER_HEIGTH;
                const lastCollasping =
                    !!sizes[index - 1] && sizes[index - 1] !== HEADER_HEIGTH;
                // 当前为展开且上一个 pane 也为展开状态
                res.push(isCollapsing && lastCollasping);
            }
        });

        const didChanged = !isEqual(res, resize);
        if (didChanged) {
            setResize(res);
        }
    };

    useLayoutEffect(() => {
        if (!first.current) {
            performSmoothSizes();
        }
    }, [activePanelKeys]);

    useLayoutEffect(() => {
        if (!first.current) {
            console.log('data 改变了', data);
            performSmoothSizes();
        }
    }, [data]);

    useEffect(() => {
        if (!first.current) {
            performResize();
        }

        first.current = false;
    }, [sizes]);

    return (
        <div
            ref={wrapper}
            className={classNames(defaultCollapseClassName, className)}
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
            >
                {data.map((panel, index) => {
                    const isActive = activePanelKeys.includes(panel.id);
                    return (
                        <div
                            className={classNames(
                                panel.className,
                                collapseItemClassName,
                                isActive && collapseActiveClassName
                            )}
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
                    );
                })}
            </SplitPane>
        </div>
    );
}
