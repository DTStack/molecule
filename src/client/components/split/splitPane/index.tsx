import React, { type CSSProperties, forwardRef, type ReactNode, useEffect, useMemo, useRef } from 'react';
import { classNames } from 'mo/client/classNames';
import { useDeepState, useResize } from 'mo/client/hooks';
import { cloneReactChildren } from 'mo/utils';

import { type IPaneConfigs, Pane } from '../pane';
import { Sash } from '../sash';
import variables from './index.scss';

interface IAxis {
    x: number;
    y: number;
}

export interface ISplitProps {
    children: JSX.Element[];
    title?: string;
    style?: React.CSSProperties;
    /**
     * default is vertical
     */
    split?: 'vertical' | 'horizontal';
    sizes: number[];
    className?: string;
    sashClassName?: string;
    paneClassName?: string;
    /**
     * Specify the size fo resizer
     *
     * default size is 4px
     */
    resizerSize?: number;
    onChange?: (sizes: number[]) => void;
}

export const SplitPane = forwardRef<HTMLDivElement, ISplitProps>(function (
    {
        sizes: propSizes,
        title,
        style,
        children,
        split = 'vertical',
        className,
        sashClassName,
        paneClassName,
        resizerSize = 4,
        onChange,
    },
    forwarded
) {
    // ======================== Basic params ========================
    const sizeName = split === 'vertical' ? 'width' : 'height';
    const sPos = split === 'vertical' ? 'left' : 'top';
    const sAxis = split === 'vertical' ? 'x' : 'y';
    const [ref, resizing, resizeListener] = useResize<HTMLDivElement>();

    // ======================== Extract config from Pane ========================
    const [limitSizes, setLimitSizes] = useDeepState<[number, number][]>([]);
    const [resizable, setResizable] = useDeepState<boolean[]>([]);
    const [hidden, setHidden] = useDeepState<boolean[]>([]);

    useEffect(() => {
        const nextLimit: [number, number][] = [];
        const nextResizable: boolean[] = [];
        const nextHidden: boolean[] = [];
        for (let index = 0; index < children.length; index++) {
            const child = children[index];
            if (child.type === Pane) {
                const { minSize, maxSize, resizable: paneResizable, hidden } = child.props as IPaneConfigs;
                nextLimit.push([minSize ?? 0, maxSize ?? Number.MAX_SAFE_INTEGER]);
                nextResizable.push(paneResizable ?? true);
                nextHidden.push(hidden ?? false);
            } else {
                nextLimit.push([0, Number.MAX_SAFE_INTEGER]);
                nextResizable.push(true);
                nextHidden.push(false);
            }
        }
        setLimitSizes(nextLimit);
        setResizable(nextResizable);
        setHidden(nextHidden);
    }, [children]);

    // ======================== (Re)calculate sizes ========================
    const sizes = useMemo<number[]>(() => {
        const validSizes: number[] = [...propSizes];
        // 1. Check hidden pane
        hidden.forEach((hidden, index) => {
            if (hidden) {
                if (validSizes[index + 1] !== undefined) {
                    validSizes[index + 1] += validSizes[index];
                } else if (validSizes[index - 1] !== undefined) {
                    validSizes[index - 1] += validSizes[index];
                }
                validSizes[index] = 0;
            }
        });

        // 2. Check NaN and negative number
        return validSizes.map((size) => {
            if (Number.isNaN(size)) return 0;
            if (size < 0) return 0;
            return size;
        });
    }, [propSizes, hidden]);

    // ======================== (Re)calculate sash's position ========================
    const sashPosSizes = useMemo(() => {
        return sizes.reduce((a, b) => [...a, a[a.length - 1] + b], [0]);
    }, [sizes]);

    // ======================== Resize handler ========================
    const axis = useRef<IAxis>({ x: 0, y: 0 });
    const tmpSize = useRef<number[]>([]);
    // Record the maximum distance range of current sash can move left and right
    const sizeRange = useRef<[number, number]>([0, 0]);

    resizeListener.onResizeStart((e, i) => {
        // Record start position
        axis.current = {
            x: e.pageX ?? e.screenX,
            y: e.pageY ?? e.screenY,
        };
        tmpSize.current = sizes;

        const leftPaneSize = tmpSize.current[i];
        const rightPaneSize = tmpSize.current[i + 1];
        const [leftMinSize, leftMaxSize] = limitSizes[i];
        const [rightMinSize, rightMaxSize] = limitSizes[i + 1];
        sizeRange.current = [
            -Math.min(leftPaneSize - leftMinSize, rightMaxSize - rightPaneSize),
            Math.min(rightPaneSize - rightMinSize, leftMaxSize - leftPaneSize),
        ];
    });

    resizeListener.onResize((e, i) => {
        const curAxis = {
            x: e.pageX ?? e.screenX,
            y: e.pageY ?? e.screenY,
        };
        let distanceX = curAxis[sAxis] - axis.current[sAxis];

        const [left, right] = sizeRange.current;

        if (distanceX < left) {
            distanceX = left;
        }
        if (distanceX > right) {
            distanceX = right;
        }

        const nextSizes = [...tmpSize.current];
        nextSizes[i] += distanceX;
        nextSizes[i + 1] -= distanceX;

        onChange?.(nextSizes);
    });

    return (
        <div className={classNames(variables.container, className)} ref={forwarded} title={title} style={style}>
            {Boolean(sizes.length) &&
                children.map((childNode, idx) => {
                    const sPosValue = sashPosSizes[idx] ?? 0;
                    const paneStyle: CSSProperties = {
                        [sizeName]: sizes[idx],
                        [sPos]: sPosValue,
                    };

                    if (hidden[idx]) return <React.Fragment key={idx} />;
                    if (resizing()) {
                        paneStyle.pointerEvents = 'none';
                        paneStyle.transition = 'none';
                    }

                    let sashChild: ReactNode = null;
                    if (idx > 0 && !hidden[idx - 1]) {
                        const disabled = !resizable[idx];

                        sashChild = (
                            <Sash
                                ref={ref(idx - 1)}
                                className={classNames(sashClassName)}
                                disabled={disabled}
                                dragging={resizing(idx - 1)}
                                split={split}
                                style={{
                                    [sizeName]: resizerSize,
                                    [sPos]: sPosValue - resizerSize / 2,
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
                                    className: classNames(paneClassName, className),
                                    style: { ...style, ...paneStyle },
                                })}
                            </React.Fragment>
                        );
                    }

                    return (
                        <React.Fragment key={idx}>
                            {sashChild}
                            <Pane className={paneClassName} style={paneStyle}>
                                {childNode}
                            </Pane>
                        </React.Fragment>
                    );
                })}
        </div>
    );
});
