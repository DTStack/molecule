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
import Pane from './pane';
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

export type ResizeStratygy = 'keep' | 'pave';
export interface ISplitProps extends HTMLElementProps {
    children: JSX.Element[];
    allowResize?: boolean | boolean[];
    split?: 'vertical' | 'horizontal';
    sizes: (string | number)[];
    onChange: (sizes: number[]) => void;
    paneClassName?: string;
    onResizeStrategy?: (sizes: number[]) => ResizeStratygy | ResizeStratygy[];
    resizerSize?: number;
}

interface IAxis {
    x: number;
    y: number;
    dragSource: null | HTMLDivElement;
    dragIndex: number;
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
    const [draging, setDrag] = useState(false);
    const [sashActive, setActive] = useState<{ [x: number]: boolean }>({});
    const wrapper = useRef<HTMLDivElement>(null);
    const axis = useRef<IAxis>({
        x: 0,
        y: 0,
        dragSource: null,
        dragIndex: -1,
    });

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

    // recommended to set key for the Pane, it's used for improving performance
    const childrenKey: React.Key[] = useMemo(() => {
        const nextKey = children.map((child, index) => child.key || index);
        if (isEqual(nextKey, childrenKey)) {
            return childrenKey;
        }
        return nextKey;
    }, [children]);

    const handleMouseDown = (e, index) => {
        setDrag(true);
        axis.current = {
            x: e.clientX - e.target.offsetLeft,
            y: e.clientY - e.target.offsetTop,
            dragSource: e.target,
            dragIndex: index,
        };
    };

    const timeout = useRef<NodeJS.Timeout>();
    const handleMouseEnterSash = (paneIndex) => {
        timeout.current = setTimeout(() => {
            setActive({ [paneIndex]: true });
        }, 150);
    };

    const handleMouseLeaveSash = (paneIndex) => {
        if (timeout.current) {
            setActive({ [paneIndex]: false });
            clearTimeout(timeout.current);
        }
    };

    const handleMouseMove = (e) => {
        if (draging) {
            const currentAxis = {
                x: e.clientX - axis.current.dragSource!.offsetLeft,
                y: e.clientY - axis.current.dragSource!.offsetTop,
            };
            const distanceX =
                axis.current[getSplitSizeName().axis] -
                currentAxis[getSplitSizeName().axis];

            onChange(
                sizes.map((size, index) => {
                    if (index === axis.current.dragIndex - 1) {
                        return size - distanceX;
                    }
                    if (index === axis.current.dragIndex) {
                        return size + distanceX;
                    }
                    return size;
                })
            );
        }
    };

    const handleMouseUp = () => {
        if (draging) {
            setDrag(false);
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
            res.push(propAllowResize[index]);
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
                return (
                    <Sash
                        key={paneIndex}
                        className={classNames(
                            sashItemClassName,
                            !allowResize[paneIndex] && sashDisabledClassName,
                            sashActive[paneIndex] && sashHoverClassName,
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
    }, [childrenKey, sizes, allowResize, sashActive]);

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
