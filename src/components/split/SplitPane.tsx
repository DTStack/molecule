import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { classNames } from 'mo/common/className';
import { debounce, isEqual } from 'lodash';
import { HTMLElementProps } from 'mo/common/types';
import Pane, { IPaneConfigs } from './pane';
import Sash from './sash';
import {
    paneContainerClassName,
    paneItemClassName,
    paneItemVisibleClassName,
    sashContainerClassName,
    sashDisabledClassName,
    sashHorizontalClassName,
    sashHoverClassName,
    sashItemClassName,
    sashVerticalClassName,
    splitClassName,
} from './base';
import { react } from 'mo/molecule.api';

/**
 * Keep for keep size when resize
 * Pave for NOT keep size when resize
 */
export type ResizeStratygy = 'keep' | 'pave';
export interface ISplitProps extends HTMLElementProps {
    children: JSX.Element[];
    /**
     * Should allowed to resized
     *
     * default is true
     */
    allowResize?: boolean | boolean[];
    /**
     * How to split the space
     *
     * default is vertical
     */
    split?: 'vertical' | 'horizontal';
    /**
     * Only support controlled mode, so it's required
     */
    sizes: (string | number)[];
    onChange: (sizes: number[]) => void;
    paneClassName?: string;
    /**
     * Spicify how to assign the remaining space when window.onresize called
     */
    onResizeStrategy?: (sizes: number[]) => ResizeStratygy | ResizeStratygy[];
    /**
     * Specify the size fo resizer
     *
     * defualt size is 4px
     */
    resizerSize?: number;
}

interface IAxis {
    x: number;
    y: number;
    dragSource: null | HTMLDivElement;
    dragIndex: number;
}

type PercentString = `${number}%`;

type LimitedSizes = {
    minSize: number | PercentString;
    maxSize: number | PercentString;
};

/**
 * Convert sizes to absolute number or percent number
 * @param size
 * @param defaultValue
 * @returns
 */
const assertsSizes = (
    size: string | number | undefined,
    defaultValue: LimitedSizes['maxSize']
) => {
    if (typeof size === 'undefined') return defaultValue;
    if (typeof size === 'number') return size;
    if (size.endsWith('%')) return size as PercentString;
    if (size.endsWith('px')) return Number(size.replace('px', ''));
    return defaultValue;
};

function useDelayHover(): [
    { [x: number]: boolean },
    (index: number) => void,
    (index: number) => void,
    (index: number) => void
] {
    const timeout = useRef<NodeJS.Timeout>();
    const [active, setActive] = useState<{ [x: number]: boolean }>({});

    const onMouseEnter = (index: number) => {
        timeout.current = setTimeout(() => {
            setActive({ [index]: true });
        }, 150);
    };

    const onMouseLeave = (index: number) => {
        if (timeout.current) {
            setActive({ [index]: false });
            clearTimeout(timeout.current);
        }
    };

    const resetHover = (index: number) => {
        if (timeout.current) {
            clearTimeout(timeout.current);
            timeout.current = undefined;
        }
        setActive({ [index]: false });
    };

    return [active, onMouseEnter, onMouseLeave, resetHover];
}

const SplitPane = ({
    children,
    sizes: propSizes,
    allowResize: propAllowResize = true,
    split = 'vertical',
    title,
    style,
    role,
    className,
    paneClassName,
    resizerSize = 4,
    onChange,
    onResizeStrategy,
}: ISplitProps) => {
    const [sizes, setSize] = useState<number[]>([]);
    const limitedSizes = useRef<LimitedSizes[]>([]);
    const [draging, setDrag] = useState<boolean[]>([]);
    const [
        sashActive,
        handleMouseEnterSash,
        handleMouseLeaveSash,
        resetHover,
    ] = useDelayHover();
    const wrapper = useRef<HTMLDivElement>(null);
    const axis = useRef<IAxis>({
        x: 0,
        y: 0,
        dragSource: null,
        dragIndex: -1,
    });

    /**
     * Get some size infos via split
     * @param split
     * @returns
     */
    const getSplitSizeName = (): {
        sizeName: 'width' | 'height';
        pos: 'top' | 'left';
        axis: 'x' | 'y';
    } => {
        return {
            sizeName: split === 'vertical' ? 'width' : 'height',
            pos: split === 'vertical' ? 'left' : 'top',
            axis: split === 'vertical' ? 'x' : 'y',
        };
    };

    /**
     * Calculate the percent size based on rect
     * @param size
     * @returns
     */
    const calcPercent = (size: `${number}%`) => {
        const rect = wrapper.current!.getBoundingClientRect();
        const rectSize = rect[getSplitSizeName().sizeName];

        return rectSize * (Number(size.replace('%', '')) / 100);
    };

    /**
     * Register the limited sizes
     * @param child
     * @returns
     */
    const registerLimitedSizes = (child: JSX.Element): LimitedSizes => {
        if (child.type === Pane) {
            const { maxSize, minSize } = child.props as IPaneConfigs;
            return {
                minSize: assertsSizes(minSize, 0),
                maxSize: assertsSizes(maxSize, '100%'),
            };
        } else {
            return {
                minSize: 0,
                maxSize: '100%',
            };
        }
    };

    // recommended to set key for the Pane
    const childrenKey: React.Key[] = useMemo(() => {
        const nextKey = children.map((child, index) => {
            limitedSizes.current[index] = registerLimitedSizes(child);
            return child.key || index;
        });
        // improving performance
        if (isEqual(nextKey, childrenKey)) {
            return childrenKey;
        }
        return nextKey;
    }, [children]);

    const handleMouseDown = (e, index) => {
        setDrag((dragList) => {
            const next = dragList.concat();
            next[index] = true;
            return next;
        });
        // reset the hover status
        resetHover(index);

        // calculate the limited sizes
        limitedSizes.current = limitedSizes.current.map((size) => {
            return {
                minSize:
                    typeof size.minSize === 'number'
                        ? size.minSize
                        : calcPercent(size.minSize),
                maxSize:
                    typeof size.maxSize === 'number'
                        ? size.maxSize
                        : calcPercent(size.maxSize),
            };
        });

        axis.current = {
            x: e.clientX - e.target.offsetLeft,
            y: e.clientY - e.target.offsetTop,
            dragSource: e.target,
            dragIndex: index,
        };
    };

    const handleMouseMove = (e) => {
        if (draging.some((i) => i)) {
            const currentAxis = {
                x: e.clientX - axis.current.dragSource!.offsetLeft,
                y: e.clientY - axis.current.dragSource!.offsetTop,
            };
            const distanceX =
                axis.current[getSplitSizeName().axis] -
                currentAxis[getSplitSizeName().axis];

            setSize((s) => {
                const nextSizes = s.map(
                    function (size, index) {
                        if (index === axis.current.dragIndex - 1) {
                            const nSize = size - distanceX;

                            // TODO check the reason why always have blank
                            const minSize = limitedSizes.current[index]
                                .minSize as number;
                            const maxSize = limitedSizes.current[index]
                                .maxSize as number;

                            if (nSize < minSize) {
                                // @ts-ignore
                                this.isChanged = false;
                                return minSize;
                            }

                            if (nSize > maxSize) {
                                // @ts-ignore
                                this.isChanged = false;
                                return maxSize;
                            }

                            return nSize;
                        }
                        if (index === axis.current.dragIndex) {
                            // @ts-ignore
                            if (this.isChanged) {
                                return size + distanceX;
                            }
                            return size;
                        }
                        return size;
                    },
                    { isChanged: true }
                );

                onChange(nextSizes);
                return s;
            });
        }
    };

    const handleMouseUp = (e) => {
        if (draging.some((i) => i)) {
            setDrag([]);
            axis.current = {
                x: 0,
                y: 0,
                dragSource: null,
                dragIndex: -1,
            };
        }
    };

    /**
     * SplitPane allows sizes in string and number, but the state sizes only support number,
     * so convert string and number to number in here
     * ```ts
     * 'auto' -> divide the remaining space equally
     * 'xxxpx' -> xxx
     * 'xxx%' -> wrapper.size * xxx/100
     * xxx -> xxx
     * ```
     */
    const convertSizes = (sizes: (string | number)[]) => {
        let res: (string | number)[] = [];
        // insert 'auto' to make the length completion
        if (sizes.length === children.length) {
            res.push(...sizes);
        } else {
            res.push(
                ...children.map((_, index) =>
                    typeof propSizes[index] === 'undefined'
                        ? 'auto'
                        : propSizes[index]
                )
            );
        }

        // Get the height or width of container
        const rect = wrapper.current!.getBoundingClientRect();

        let count = 0;
        let restSize = rect[getSplitSizeName().sizeName];

        const nextRes = res.map((size) => {
            // convert percent and px to absolute number
            // count the auto number
            // and calculate the rest size by minus of absolute number
            if (typeof size === 'number') {
                restSize = restSize - size;
                return size;
            } else if (size.endsWith('%')) {
                const percent = Number(size.replace('%', '')) / 100;
                const countSize = rect[getSplitSizeName().sizeName] * percent;
                restSize = restSize - countSize;
                return countSize;
            } else if (size.endsWith('px')) {
                const countSize = Number(size.replace('px', ''));
                restSize = restSize - countSize;
                return countSize;
            } else {
                count += 1;
                return size;
            }
        });

        // convert auto to absolute number
        if (count) {
            let average = restSize / count;

            return nextRes.map((size) => {
                if (typeof size === 'string') {
                    return average;
                }
                return size;
            });
        } else {
            return nextRes as number[];
        }
    };

    useEffect(() => {
        setSize(convertSizes(propSizes));
    }, [propSizes]);

    const handleResize = useCallback(
        debounce(() => {
            let stratygies: ResizeStratygy[] = [];
            setSize((sizes) => {
                if (!stratygies.length) {
                    const res = onResizeStrategy?.(sizes);
                    if (typeof res === 'string') {
                        // global stratygies
                        stratygies = sizes.map(() => res);
                    } else if (Array.isArray(res)) {
                        stratygies = res;
                    } else {
                        // default strategies
                        stratygies = sizes.map(() => 'pave');
                    }
                }

                const rect = wrapper.current!.getBoundingClientRect();
                let restSize = rect[getSplitSizeName().sizeName];
                let count = 0;
                const wipSizes = sizes.map((size, index) => {
                    if (stratygies[index] === 'keep') {
                        restSize = restSize - size;
                        return size;
                    }
                    count += 1;
                    return 'pave';
                });

                return wipSizes.map((size) =>
                    size === 'pave' ? restSize / count : size
                );
            });
        }, 150),
        []
    );

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.addEventListener('resize', handleResize);
    }, []);

    // perform the task for recalculating resizable
    const allowResize = useMemo(() => {
        if (typeof propAllowResize === 'boolean') {
            const next = new Array(childrenKey.length).fill(propAllowResize);
            if (isEqual(next, allowResize)) {
                return allowResize;
            }
            return next;
        }
        const res: boolean[] = [];
        for (let index = 0; index < childrenKey.length; index++) {
            res.push(
                typeof propAllowResize[index] === 'undefined'
                    ? true
                    : propAllowResize[index]
            );
        }
        if (isEqual(res, allowResize)) {
            return allowResize;
        }
        return res;
    }, [childrenKey.length, propAllowResize]);

    // perform the Panes
    const panes = useMemo(() => {
        return childrenKey.map(
            function (_, paneIndex) {
                // @ts-ignore
                const size = this.sum + (sizes[paneIndex - 1] || 0);
                // @ts-ignore
                this.sum = size;

                const isPane = children[paneIndex].type === Pane;
                if (isPane) {
                    const { className = '', style = {} } = children[
                        paneIndex
                    ].props;
                    return react.cloneReactChildren(children[paneIndex], {
                        key: paneIndex,
                        className: classNames(
                            paneItemClassName,
                            sizes[paneIndex] !== 0 && paneItemVisibleClassName,
                            paneClassName,
                            className
                        ),
                        style: {
                            [getSplitSizeName().sizeName]: sizes[paneIndex],
                            [getSplitSizeName().pos]: size || 0,
                            ...style,
                        },
                    });
                }

                return (
                    <Pane
                        key={paneIndex}
                        className={classNames(
                            paneItemClassName,
                            sizes[paneIndex] !== 0 && paneItemVisibleClassName,
                            paneClassName
                        )}
                        style={{
                            [getSplitSizeName().sizeName]: sizes[paneIndex],
                            [getSplitSizeName().pos]: size || 0,
                        }}
                    >
                        {children[paneIndex]}
                    </Pane>
                );
            },
            { sum: 0 }
        );
    }, [childrenKey, sizes]);

    // perform the Sashs
    const sashs = useMemo(() => {
        return childrenKey.map(
            function (_, paneIndex) {
                // @ts-ignore
                const size = this.sum + (sizes[paneIndex - 1] || 0);
                // @ts-ignore
                this.sum = size;

                const isActive = draging[paneIndex] || sashActive[paneIndex];
                return (
                    <Sash
                        key={paneIndex}
                        className={classNames(
                            sashItemClassName,
                            !allowResize[paneIndex] && sashDisabledClassName,
                            isActive && sashHoverClassName,
                            split === 'vertical'
                                ? sashVerticalClassName
                                : sashHorizontalClassName
                        )}
                        style={{
                            [getSplitSizeName().sizeName]: resizerSize,
                            [getSplitSizeName().pos]: size - resizerSize / 2,
                        }}
                        onMouseDown={(e) => handleMouseDown(e, paneIndex)}
                        onMouseEnter={() => handleMouseEnterSash(paneIndex)}
                        onMouseLeave={() => handleMouseLeaveSash(paneIndex)}
                    />
                );
            },
            { sum: 0 }
        );
    }, [childrenKey, sizes, allowResize, sashActive, draging]);

    return (
        <div
            className={classNames(splitClassName, className)}
            ref={wrapper}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            title={title}
            role={role}
            style={style}
        >
            <div className={classNames(sashContainerClassName)}>{sashs}</div>
            <div className={classNames(paneContainerClassName)}>{panes}</div>
        </div>
    );
};

export default SplitPane;
