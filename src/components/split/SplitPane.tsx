import React, {
    memo,
    PropsWithChildren,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from 'mo/common/className';
import './index.scss';
import { debounce } from 'lodash';
import { HTMLElementProps } from 'mo/common/types';

interface ISplitProps extends HTMLElementProps {
    children: React.ReactChild[];
    allowResize?: boolean | boolean[];
    split?: 'vertical' | 'horizontal';
    sizes: (string | number)[];
    onChange: (sizes: number[]) => void;
    paneClassName?: string;
}

interface IPaneProps {
    size: number;
    width: number;
    split: 'vertical' | 'horizontal';
    className?: string;
}

const Pane = memo(
    ({
        children,
        size,
        width,
        split,
        className,
    }: PropsWithChildren<IPaneProps>) => {
        return (
            <div
                className={classNames(
                    'split-view-view',
                    width !== 0 && 'visible',
                    className
                )}
                style={{
                    [split === 'vertical' ? 'left' : 'top']: size || 0,
                    [split === 'vertical' ? 'width' : 'height']: width,
                }}
            >
                {children}
            </div>
        );
    }
);

interface IAxis {
    x: number;
    y: number;
    dragSource: null | HTMLDivElement;
    dragIndex: number;
}

const getDefaultResize = (num: number, defaultValue: boolean | boolean[]) => {
    if (typeof defaultValue === 'boolean') {
        return new Array(num).fill(defaultValue);
    }
    const res: boolean[] = [];
    for (let index = 0; index < num; index++) {
        if (typeof defaultValue[index] === 'boolean') {
            res.push(defaultValue[index]);
        } else {
            res.push(true);
        }
    }
    return res;
};

export default ({
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
    const [allowResize, setResize] = useState<boolean[]>(
        getDefaultResize(children.length, propAllowResize)
    );
    const [draging, setDrag] = useState(false);
    const wrapper = useRef<HTMLDivElement>(null);
    const axis = useRef<IAxis>({
        x: 0,
        y: 0,
        dragSource: null,
        dragIndex: -1,
    });

    const panes = children.map(
        function (pane, paneIndex) {
            // @ts-ignore
            const size = this.sum + (sizes[paneIndex - 1] || 0);
            // @ts-ignore
            this.sum = size;
            return (
                <React.Fragment key={paneIndex}>
                    <Pane
                        className={paneClassName}
                        size={size}
                        width={sizes[paneIndex]}
                        split={split}
                    >
                        {pane}
                    </Pane>
                </React.Fragment>
            );
        },
        { sum: 0 }
    );

    const handleMouseDown = (e, index) => {
        setDrag(true);
        axis.current = {
            x: e.clientX - e.target.offsetLeft,
            y: e.clientY - e.target.offsetTop,
            dragSource: e.target,
            dragIndex: index,
        };
    };

    const handleMouseMove = (e) => {
        if (draging) {
            const currentAxis = {
                x: e.clientX - axis.current.dragSource!.offsetLeft,
                y: e.clientY - axis.current.dragSource!.offsetTop,
            };
            const distanceX =
                axis.current[split === 'vertical' ? 'x' : 'y'] -
                currentAxis[split === 'vertical' ? 'x' : 'y'];

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

    const sash = children.map(
        function (pane, paneIndex) {
            // @ts-ignore
            const size = this.sum + (sizes[paneIndex - 1] || 0);
            // @ts-ignore
            this.sum = size;
            return (
                <React.Fragment key={paneIndex}>
                    <div
                        className={classNames(
                            'sash',
                            !allowResize[paneIndex] && 'disabled',
                            split
                        )}
                        style={{
                            [split === 'vertical' ? 'left' : 'top']: size - 2,
                            width: split === 'vertical' ? 4 : '100%',
                            height: split === 'vertical' ? '100%' : 4,
                        }}
                        onMouseDown={(e) => handleMouseDown(e, paneIndex)}
                    ></div>
                </React.Fragment>
            );
        },
        { sum: 0 }
    );

    const replaceAuto = (sizes: (string | number)[]) => {
        let res: (string | number)[] = [];
        // 先补全
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

        // 获取外层容器的高度或宽度
        const { width, height } = wrapper.current!.getBoundingClientRect();

        // 平均分配 auto
        let count = 0;
        let restSize = split === 'vertical' ? width : height;
        const nextRes = res.map((size) => {
            // 先把百分比和 px 换算了，并且计算出 auto 的个数和剩余高宽
            if (typeof size === 'number') {
                restSize = restSize - size;
                return size;
            } else if (size.endsWith('%')) {
                const percent = Number(size.replace('%', '')) / 100;
                const countSize =
                    (split === 'vertical' ? width : height) * percent;
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

        // 存在 auto，则进行 auto 的换算
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
        setSize(replaceAuto(propSizes));
    }, [propSizes]);

    const handleResize = useCallback(
        debounce(() => {
            setSize((sizes) => {
                const sum = sizes.reduce((sum, cur) => {
                    sum = sum + cur;
                    return sum;
                }, 0);
                const percents = sizes.map((size) => size / sum);

                // 获取外层容器的高度或宽度
                const {
                    width,
                    height,
                } = wrapper.current!.getBoundingClientRect();
                const nextSizes = percents.map((percent) => {
                    return (split === 'vertical' ? width : height) * percent;
                });
                return nextSizes;
            });
        }, 300),
        []
    );
    useEffect(() => {
        // 按照百分比 resize
        window.addEventListener('resize', handleResize);
        return () => window.addEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setResize(getDefaultResize(children.length, propAllowResize));
    }, [children.length, propAllowResize]);

    return (
        <div
            className={classNames('split-view', className)}
            ref={wrapper}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            title={title}
            role={role}
            style={style}
        >
            <div className="sash-container">{sash}</div>
            <div className="split-view-container">{panes}</div>
        </div>
    );
};
