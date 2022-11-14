import { classNames } from 'mo/common/className';
import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    useMemo,
    CSSProperties,
    useImperativeHandle,
    forwardRef,
} from 'react';
import {
    scrollBarClassName,
    scrollBarContainerClassName,
    scrollBarContainerHorizontalClassName,
    scrollBarContainerVerticalClassName,
    scrollBarShadowClassName,
    scrollBarShadowHiddenClassName,
    scrollBarThumbClassName,
    scrollBarTrackClassName,
    scrollBarTrackHiddenClassName,
    scrollBarTrackHorizontalClassName,
    scrollBarTrackVerticalClassName,
} from './base';

export enum DirectionKind {
    vertical = 'vertical',
    horizontal = 'horizontal',
}

export interface IScrollbarProps {
    inactiveHidden?: boolean;
    style?: CSSProperties;
    trackStyle?: CSSProperties;
    className?: string;
    direction?: DirectionKind;
    isShowShadow?: boolean;
    onScroll?: (evt: IScrollEvent, e: MouseEvent | React.MouseEvent) => void;
    onScrollStart?: (
        evt: IScrollEvent,
        e: MouseEvent | React.MouseEvent
    ) => void;
    onScrollEnd?: (evt: IScrollEvent, e: MouseEvent | React.MouseEvent) => void;
}

export interface IScrollEvent {
    scrollTop: number;
}

export interface IScrollRef {
    scrollHeight: number;
    scrollTo: (offset: number) => void;
}

function getSizeLiteral(direction: DirectionKind): 'width' | 'height';
function getSizeLiteral<T extends string>(
    direction: DirectionKind,
    concatStr: T
): `${T}Width` | `${T}Height`;
function getSizeLiteral<T extends string>(
    direction: DirectionKind,
    concatStr?: T
) {
    const sizeLiteral =
        direction === DirectionKind.horizontal ? 'width' : 'height';
    if (!concatStr) return sizeLiteral;

    const upperCase = `${sizeLiteral
        .substring(0, 1)
        .toUpperCase()}${sizeLiteral.substring(1)}` as 'Width' | 'Height';

    return `${concatStr}${upperCase}`;
}

const ScrollBar = forwardRef<
    IScrollRef,
    React.PropsWithChildren<IScrollbarProps>
>(function (
    {
        children,
        style,
        trackStyle,
        className,
        isShowShadow = false,
        inactiveHidden = true,
        direction = DirectionKind.vertical,
        onScroll,
        onScrollStart,
        onScrollEnd,
    },
    ref
) {
    const [viewRate, setViewRate] = useState(0.1);
    const [isOffsetZero, setOffsetZero] = useState(true);
    const [isDragging, setDragging] = useState(false);
    const [isMouseOver, setMouseOver] = useState(false);

    const wrapper = useRef<HTMLDivElement>(null);
    const content = useRef<HTMLDivElement>(null);
    const track = useRef<HTMLDivElement>(null);
    const thumb = useRef<HTMLDivElement>(null);

    const dragPosition = useRef({
        y: 0,
    });

    /**
     * Get the scrollHeight or scrollWidth of content area
     */
    const getContentScrollSize = (): number => {
        return content.current?.[getSizeLiteral(direction, 'scroll')] || 0;
    };

    /**
     * Get the clientHeight or clientWidth of wrapper area
     */
    const getWrapperClientSize = (): number => {
        return wrapper.current?.[getSizeLiteral(direction, 'client')] || 0;
    };

    /**
     * Get the height or width of track
     */
    const getTrackSize = (): number => {
        return (
            track.current?.getBoundingClientRect()[getSizeLiteral(direction)] ||
            0
        );
    };

    /**
     * Get the height or width of thumb
     */
    const getThumbSize = () => {
        return (
            thumb.current?.getBoundingClientRect()[getSizeLiteral(direction)] ||
            0
        );
    };

    useImperativeHandle(ref, () => ({
        scrollTo: (offset: number) => {
            if (!isSupportScroll()) return;

            if (typeof offset === 'number') {
                const thumbOffset =
                    (offset / getContentScrollSize()) * getTrackSize();
                contentScrollTo(offset);
                thumbScrollTo(thumbOffset);
            }
        },
        scrollHeight: wrapper.current?.scrollHeight || 0,
    }));

    // listen to the wrapper's size changed
    useEffect(() => {
        const ro = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const cr = entry.contentRect;
                const wrapperSize = cr[getSizeLiteral(direction)];
                const contentSize = getContentScrollSize();
                let rate = wrapperSize / contentSize;

                // prevent contentHeight to be 0
                if (Number.isNaN(rate)) rate = 1;

                const scrollOffset =
                    entry.target[
                        direction === DirectionKind.vertical
                            ? 'scrollTop'
                            : 'scrollLeft'
                    ];

                const thumbOffset =
                    (scrollOffset / contentSize) * getTrackSize();

                contentScrollTo(scrollOffset);
                thumbScrollTo(thumbOffset);
                setViewRate(rate > 1 ? 1 : rate);
            }
        });

        ro.observe(wrapper.current!);
        return () => {
            ro.disconnect();
        };
    }, []);

    useEffect(() => {
        const ro = new ResizeObserver((entries) => {
            for (const _ of entries) {
                const contentSize = getContentScrollSize();
                const wrapperSize = getWrapperClientSize();
                const rate = wrapperSize / contentSize;

                setViewRate(rate > 1 ? 1 : rate);
            }
        });

        ro.observe(content.current!);
        return () => {
            ro.disconnect();
        };
    }, []);

    useEffect(() => {
        let timeout = 0;
        function handleWheelListener(this: HTMLDivElement, e: WheelEvent) {
            if (!isSupportScroll()) return;
            e.preventDefault();

            const scrollOffset =
                this[
                    direction === DirectionKind.vertical
                        ? 'scrollTop'
                        : 'scrollLeft'
                ];

            if (!timeout) {
                onScrollStart?.({ scrollTop: scrollOffset }, e);
                setDragging(true);
            } else {
                window.clearTimeout(timeout);
            }
            timeout = window.setTimeout(() => {
                onScrollEnd?.({ scrollTop: scrollOffset }, e);
                timeout = 0;
                setDragging(false);
            }, 150);

            const factor =
                e[direction === DirectionKind.vertical ? 'deltaY' : 'deltaX'] /
                10;
            const threshold = 5 * factor;

            const thumbOffset =
                (scrollOffset /
                    this[
                        direction === DirectionKind.vertical
                            ? 'scrollHeight'
                            : 'scrollWidth'
                    ]) *
                track.current!.getBoundingClientRect()[
                    direction === DirectionKind.vertical ? 'height' : 'width'
                ];

            thumbScrollTo(thumbOffset);
            contentScrollTo(scrollOffset + threshold);

            onScroll?.({ scrollTop: scrollOffset }, e);
        }
        wrapper.current?.addEventListener('wheel', handleWheelListener);

        return () => {
            wrapper.current?.removeEventListener('wheel', handleWheelListener);
        };
    }, []);

    const isSupportScroll = () => {
        return getContentScrollSize() > getWrapperClientSize();
    };

    const thumbScrollTo = (offset: number) => {
        const trackSize = getTrackSize();
        const thumbSize = getThumbSize();
        requestAnimationFrame(() => {
            const offsetLiteral =
                direction === DirectionKind.vertical ? 'top' : 'left';
            if (offset <= 0) {
                thumb.current!.style[offsetLiteral] = '0px';
            } else if (offset >= trackSize - thumbSize) {
                thumb.current!.style[offsetLiteral] = `${
                    trackSize - thumbSize
                }px`;
            } else {
                thumb.current!.style[offsetLiteral] = `${offset}px`;
            }
        });
    };

    const contentScrollTo = (offset: number) => {
        requestIdleCallback(() => {
            const offsetLiteral =
                direction === DirectionKind.vertical ? 'top' : 'left';
            if (offset <= 0) {
                wrapper.current?.scrollTo({ [offsetLiteral]: 0 });
                setOffsetZero(true);
            } else if (offset >= getContentScrollSize() - getTrackSize()) {
                wrapper.current?.scrollTo({
                    [offsetLiteral]: getContentScrollSize(),
                });
                setOffsetZero(false);
            } else {
                wrapper.current?.scrollTo({ [offsetLiteral]: offset });
                setOffsetZero(false);
            }
        });
    };

    const handleTrackClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        e.stopPropagation();
        if (!isSupportScroll()) return;
        const { y, height, x, width } = (
            e.target as HTMLDivElement
        ).getBoundingClientRect();
        const thumbSize = getThumbSize();
        const halfThumbSize = thumbSize / 2;
        const contentSize = getContentScrollSize();

        const thumbOffset =
            e[direction === DirectionKind.vertical ? 'clientY' : 'clientX'] -
            (direction === DirectionKind.vertical ? y : x);

        const thumbCenterOffset = thumbOffset - halfThumbSize;
        const rate =
            thumbCenterOffset /
            (direction === DirectionKind.vertical ? height : width);
        onScrollStart?.(
            {
                scrollTop:
                    wrapper.current?.[
                        direction === DirectionKind.vertical
                            ? 'scrollTop'
                            : 'scrollLeft'
                    ] || 0,
            },
            e
        );

        contentScrollTo(contentSize * rate);
        thumbScrollTo(thumbCenterOffset);

        onScroll?.(
            {
                scrollTop:
                    wrapper.current?.[
                        direction === DirectionKind.vertical
                            ? 'scrollTop'
                            : 'scrollLeft'
                    ] || 0,
            },
            e
        );
        onScrollEnd?.(
            {
                scrollTop:
                    wrapper.current?.[
                        direction === DirectionKind.vertical
                            ? 'scrollTop'
                            : 'scrollLeft'
                    ] || 0,
            },
            e
        );
    };

    const handleMouseDrag = useCallback((e: MouseEvent) => {
        const distanceChanged =
            e[direction === DirectionKind.vertical ? 'clientY' : 'clientX'] -
            dragPosition.current.y;
        const currentThumbOffset =
            thumb.current![
                direction === DirectionKind.vertical
                    ? 'offsetTop'
                    : 'offsetLeft'
            ];
        const trackSize = getTrackSize();
        const nextThumbOffset = currentThumbOffset + distanceChanged;

        const rate = nextThumbOffset / trackSize;
        const contentHeight = getContentScrollSize();

        contentScrollTo(contentHeight * rate);
        thumbScrollTo(nextThumbOffset);
        dragPosition.current.y =
            e[direction === DirectionKind.vertical ? 'clientY' : 'clientX'];

        onScroll?.(
            {
                scrollTop:
                    wrapper.current?.[
                        direction === DirectionKind.vertical
                            ? 'scrollTop'
                            : 'scrollLeft'
                    ] || 0,
            },
            e
        );
    }, []);

    const handleMouseDown = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (!isSupportScroll()) return;

        setDragging(true);
        onScrollStart?.(
            {
                scrollTop:
                    wrapper.current?.[
                        direction === DirectionKind.vertical
                            ? 'scrollTop'
                            : 'scrollLeft'
                    ] || 0,
            },
            e
        );
        dragPosition.current = {
            y: e[direction === DirectionKind.vertical ? 'clientY' : 'clientX'],
        };

        document.body.style.userSelect = 'none';

        window.addEventListener(
            'mouseup',
            (e) => {
                e.stopPropagation();
                e.preventDefault();
                setDragging(false);
                onScrollEnd?.(
                    {
                        scrollTop:
                            wrapper.current?.[
                                direction === DirectionKind.vertical
                                    ? 'scrollTop'
                                    : 'scrollLeft'
                            ] || 0,
                    },
                    e
                );
                document.body.style.removeProperty('user-select');
                window.removeEventListener('mousemove', handleMouseDrag);
            },
            { once: true }
        );

        window.addEventListener('mousemove', handleMouseDrag, {
            passive: false,
        });
    };

    const isHidden = useMemo(() => {
        const contentSize = getContentScrollSize();
        const wrapperSize = getWrapperClientSize();

        // if content's height less than wrapper's height
        // it's no need to scroll
        if (contentSize <= wrapperSize) {
            return true;
        }
        return !isDragging && !isMouseOver;
    }, [isDragging, isMouseOver]);

    return (
        <div
            className={classNames(scrollBarClassName, className)}
            ref={wrapper}
            style={style}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
        >
            {isShowShadow && (
                <div
                    className={classNames(
                        scrollBarShadowClassName,
                        isOffsetZero && scrollBarShadowHiddenClassName
                    )}
                />
            )}
            <div
                className={classNames(
                    scrollBarContainerClassName,
                    direction === DirectionKind.horizontal
                        ? scrollBarContainerHorizontalClassName
                        : scrollBarContainerVerticalClassName
                )}
                ref={content}
            >
                {children}
            </div>
            <div
                className={classNames(
                    scrollBarTrackClassName,
                    direction === DirectionKind.horizontal
                        ? scrollBarTrackHorizontalClassName
                        : scrollBarTrackVerticalClassName,
                    inactiveHidden && isHidden && scrollBarTrackHiddenClassName
                )}
                ref={track}
                onClick={handleTrackClick}
                style={trackStyle}
            >
                <div
                    className={scrollBarThumbClassName}
                    style={{
                        [getSizeLiteral(direction)]: `calc(100% * ${viewRate})`,
                    }}
                    ref={thumb}
                    onClick={(e) => e.stopPropagation()}
                    onMouseDown={handleMouseDown}
                />
            </div>
        </div>
    );
});

export default ScrollBar;
