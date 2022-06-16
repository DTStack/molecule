import React, {
    ReactNode,
    useEffect,
    useMemo,
    useCallback,
    useRef,
    useState,
} from 'react';
import { cloneReactChildren } from 'mo/react';
import { classNames } from 'mo/common/className';
import { HTMLElementProps } from 'mo/common/types';
import Pane, { IPaneConfigs } from './pane';
import Sash from './sash';
import {
    paneItemClassName,
    splitClassName,
    splitDraggingClassName,
    splitVerticalClassName,
    splitHorizontalClassName,
    sashDisabledClassName,
    sashHorizontalClassName,
    sashVerticalClassName,
} from './base';

interface IAxis {
    x: number;
    y: number;
}

export interface ISplitProps extends HTMLElementProps {
    children: JSX.Element[];
    /**
     * Should allowed to resized
     *
     * default is true
     */
    allowResize?: boolean | boolean[];
    /**
     * Should show the sashes
     *
     * default is true
     */
    showSashes?: boolean | boolean[];
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
    className?: string;
    sashClassName?: string;
    paneClassName?: string;
    /**
     * Specify the size fo resizer
     *
     * defualt size is 4px
     */
    resizerSize?: number;
}

/**
 * Convert size to absolute number or Infinity
 */
const assertsSize = function (
    size: string | number | undefined,
    sum: number,
    defaultValue = Infinity
) {
    if (typeof size === 'undefined') return defaultValue;
    if (typeof size === 'number') return size;
    if (size.endsWith('%')) return sum * (+size.replace('%', '') / 100);
    if (size.endsWith('px')) return +size.replace('px', '');
    return defaultValue;
};

const SplitPane = ({
    children,
    sizes: propSizes,
    allowResize: propAllowResize = true,
    showSashes = true,
    split = 'vertical',
    className,
    sashClassName,
    paneClassName,
    resizerSize = 4,
    onChange,
    ...others
}: ISplitProps) => {
    const axis = useRef<IAxis>({ x: 0, y: 0 });
    const wrapper = useRef<HTMLDivElement>(null);
    const [wrapperRect, setWrapperRect] = useState({});
    const [draging, setDrag] = useState(false);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            setWrapperRect(wrapper.current!.getBoundingClientRect());
        });
        resizeObserver.observe(wrapper.current!);
        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    // Get some size infos via split
    const { sizeName, sPos, sAxis } = useMemo(
        function () {
            return {
                sizeName: split === 'vertical' ? 'width' : 'height',
                sPos: split === 'vertical' ? 'left' : 'top',
                sAxis: split === 'vertical' ? 'x' : 'y',
            };
        },
        [split]
    );

    const wrapSize: number = wrapperRect[sizeName] ?? 0;

    // Get limit sizes via children
    const paneLimitSizes = useMemo(
        function () {
            return children.map((childNode) => {
                const limits = [0, Infinity];
                if (childNode.type === Pane) {
                    const { minSize, maxSize } =
                        childNode.props as IPaneConfigs;
                    limits[0] = assertsSize(minSize, wrapSize, 0);
                    limits[1] = assertsSize(maxSize, wrapSize);
                }
                return limits;
            });
        },
        [children, wrapSize]
    );

    // perform the task for recalculating resizable
    const allowResize = useMemo(() => {
        if (typeof propAllowResize === 'boolean') {
            return new Array(children.length).fill(propAllowResize);
        }
        return children.map((_, index) => propAllowResize[index] ?? true);
    }, [children.length, propAllowResize]);

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
    const sizes = useMemo(
        function () {
            let count = 0;
            let curSum = 0;
            let allowResizeSum = 0;
            const res = children.map((_, index) => {
                const size = assertsSize(propSizes[index], wrapSize);
                if (size === Infinity) {
                    count++;
                } else {
                    curSum += size;
                    if (allowResize[index]) allowResizeSum += size;
                }
                return size;
            });

            const allowResizePanes: number = allowResize.filter(
                (item) => item === true
            ).length;

            if (allowResizePanes === 0) return res;

            // resize or illegal size input,recalculate pane sizes
            if (curSum > wrapSize || (!count && curSum < wrapSize)) {
                const gap = (curSum - wrapSize) / allowResizeSum;
                return res.map((size, index) => {
                    if (size === Infinity) return 0;
                    return allowResize[index] ? size - size * gap : size;
                });
            }

            if (count > 0) {
                const average = (wrapSize - curSum) / count;
                return res.map((size) => {
                    return size === Infinity ? average : size;
                });
            }

            return res;
        },
        [...propSizes, children.length, wrapSize, ...allowResize]
    );

    // Gets dragging axis position
    const sashPosSizes = useMemo(
        function () {
            return sizes.reduce(
                function (a, b) {
                    return [...a, a[a.length - 1] + b];
                },
                [0]
            );
        },
        [...sizes]
    );

    const onDragStart = useCallback(function (e) {
        axis.current = {
            x: e.pageX ?? e.screenX,
            y: e.pageY ?? e.screenY,
        };
        setDrag(true);
    }, []);

    const onDragging = useCallback(
        function (e, i) {
            const curAxis = {
                x: e.pageX ?? e.screenX,
                y: e.pageY ?? e.screenY,
            };
            let distanceX = curAxis[sAxis] - axis.current[sAxis];

            const leftBorder = -Math.min(
                sizes[i] - paneLimitSizes[i][0],
                paneLimitSizes[i + 1][1] - sizes[i + 1]
            );
            const rightBorder = Math.min(
                sizes[i + 1] - paneLimitSizes[i + 1][0],
                paneLimitSizes[i][1] - sizes[i]
            );

            if (distanceX < leftBorder) {
                distanceX = leftBorder;
            }
            if (distanceX > rightBorder) {
                distanceX = rightBorder;
            }

            const nextSizes = [...sizes];
            nextSizes[i] += distanceX;
            nextSizes[i + 1] -= distanceX;

            onChange(nextSizes);
        },
        [paneLimitSizes, onChange, sizes]
    );

    return (
        <div
            className={classNames(
                splitClassName,
                draging && splitDraggingClassName,
                split === 'vertical' && splitVerticalClassName,
                split === 'horizontal' && splitHorizontalClassName,
                className
            )}
            ref={wrapper}
            {...others}
        >
            {children.map((childNode, idx) => {
                const paneClasses = classNames(
                    paneItemClassName,
                    paneClassName
                );
                const paneStyle = {
                    [sizeName]: sizes[idx],
                    [sPos]: sashPosSizes[idx],
                };

                let sashChild: ReactNode = null;
                if (idx > 0) {
                    const disabled =
                        showSashes === false || showSashes?.[idx - 1] === false;
                    sashChild = (
                        <Sash
                            className={classNames(
                                disabled && sashDisabledClassName,
                                split === 'vertical'
                                    ? sashVerticalClassName
                                    : sashHorizontalClassName,
                                sashClassName
                            )}
                            style={{
                                [sizeName]: resizerSize,
                                [sPos]: sashPosSizes[idx] - resizerSize / 2,
                            }}
                            onDragStart={onDragStart}
                            onDragging={(e) => onDragging(e, idx - 1)}
                            onDragEnd={() => {
                                setDrag(false);
                            }}
                        />
                    );
                }

                if (childNode.type === Pane) {
                    const { className = '', style = {} } = childNode.props;
                    return (
                        <React.Fragment key={idx}>
                            {sashChild}
                            {cloneReactChildren(childNode, {
                                className: classNames(paneClasses, className),
                                style: { ...style, ...paneStyle },
                            })}
                        </React.Fragment>
                    );
                }

                return (
                    <React.Fragment key={idx}>
                        {sashChild}
                        <Pane className={paneClasses} style={paneStyle}>
                            {childNode}
                        </Pane>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default SplitPane;
