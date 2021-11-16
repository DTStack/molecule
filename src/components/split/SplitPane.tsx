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

export interface ISplitProps extends HTMLElementProps {
    children: JSX.Element[];
    allowResize?: boolean | boolean[];
    split?: 'vertical' | 'horizontal';
    sizes: (string | number)[];
    onChange: (sizes: number[]) => void;
    paneClassName?: string;
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
    onChange,
    title,
    style,
    role,
    className,
    paneClassName,
}: ISplitProps) => {
    const [sizes, setSize] = useState<number[]>([]);
    const [draging, setDrag] = useState(false);
    const [sashHovering, setHover] = useState<{ [x: number]: boolean }>({});
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
            setHover({ [paneIndex]: true });
        }, 300);
    };

    const handleMouseLeaveSash = (paneIndex) => {
        if (timeout.current) {
            setHover({ [paneIndex]: false });
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
            setSize((sizes) => {
                const sum = sizes.reduce((sum, cur) => {
                    sum = sum + cur;
                    return sum;
                }, 0);
                const percents = sizes.map((size) => size / sum);

                const rect = wrapper.current!.getBoundingClientRect();
                const nextSizes = percents.map((percent) => {
                    return rect[getSplitSizeName().sizeName] * percent;
                });
                return nextSizes;
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
            if (typeof propAllowResize[index] === 'boolean') {
                res.push(propAllowResize[index]);
            } else {
                res.push(true);
            }
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
                            sashHovering[paneIndex] && sashHoverClassName,
                            split === 'vertical'
                                ? sashVerticalClassName
                                : sashHorizontalClassName
                        )}
                        style={{
                            [getSplitSizeName().sizeName]: 4,
                            [getSplitSizeName().pos]: size - 2,
                        }}
                        onMouseDown={(e) => handleMouseDown(e, paneIndex)}
                        onMouseEnter={() => handleMouseEnterSash(paneIndex)}
                        onMouseLeave={() => handleMouseLeaveSash(paneIndex)}
                    />
                );
            },
            { sum: 0 }
        );
    }, [childrenKey, sizes, allowResize, sashHovering]);

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
            <div className={sashContainerClassName}>{sashs}</div>
            <div className={paneContainerClassName}>{panes}</div>
        </div>
    );
};

export default SplitPane;
