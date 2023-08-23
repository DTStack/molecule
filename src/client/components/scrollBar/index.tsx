import {
    type CSSProperties,
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from 'react';
import { classNames } from 'mo/client/classNames';
import { Direction } from 'mo/types';

import variables from './index.scss';

export interface IScrollbarProps {
    inactiveHidden?: boolean;
    style?: CSSProperties;
    trackStyle?: CSSProperties;
    className?: string;
    direction?: Direction;
    isShowShadow?: boolean;
    onScroll?: (evt: IScrollEvent, e: MouseEvent | React.MouseEvent) => void;
    onScrollStart?: (evt: IScrollEvent, e: MouseEvent | React.MouseEvent) => void;
    onScrollEnd?: (evt: IScrollEvent, e: MouseEvent | React.MouseEvent) => void;
}

export interface IScrollEvent {
    scrollTop: number;
}

export interface IScrollRef {
    scrollHeight: number;
    scrollTo: (offset: number) => void;
}

function isVertical(direction: Direction): direction is Direction.vertical {
    return direction === Direction.vertical;
}

/**
 * Concat width or height with string or just get width and height
 */
function getSizeLiteral(direction: Direction): 'width' | 'height';
function getSizeLiteral<T extends string>(
    direction: Direction,
    concatStr: T
): `${T}Width` | `${T}Height`;
function getSizeLiteral<T extends string>(direction: Direction, concatStr?: T) {
    const sizeLiteral = !isVertical(direction) ? 'width' : 'height';
    if (!concatStr) return sizeLiteral;

    const upperCase = `${sizeLiteral.substring(0, 1).toUpperCase()}${sizeLiteral.substring(1)}` as
        | 'Width'
        | 'Height';

    return `${concatStr}${upperCase}`;
}

/**
 * Concat top or left with string or just get top and left
 */
function getOffsetLiteral(direction: Direction): 'top' | 'left';
function getOffsetLiteral<T extends string>(
    direction: Direction,
    concatStr: T
): `${T}Top` | `${T}Left`;
function getOffsetLiteral<T extends string>(direction: Direction, concatStr?: T) {
    const offsetLiteral = isVertical(direction) ? 'top' : 'left';
    if (!concatStr) return offsetLiteral;

    const upperCase = `${offsetLiteral.substring(0, 1).toUpperCase()}${offsetLiteral.substring(
        1
    )}` as 'Top' | 'Left';

    return `${concatStr}${upperCase}`;
}

export const ScrollBar = forwardRef<IScrollRef, React.PropsWithChildren<IScrollbarProps>>(function (
    {
        children,
        style,
        trackStyle,
        className,
        isShowShadow = false,
        inactiveHidden = true,
        direction = Direction.vertical,
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
        startOffset: 0,
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
     * Get the scrollTop or scrollLeft of wrapper area
     */
    const getWrapperScrollOffset = () => {
        return wrapper.current?.[getOffsetLiteral(direction, 'scroll')] || 0;
    };

    /**
     * Get the height or width of track
     */
    const getTrackSize = (): number => {
        return track.current?.getBoundingClientRect()[getSizeLiteral(direction)] || 0;
    };

    /**
     * Get the height or width of thumb
     */
    const getThumbSize = () => {
        return thumb.current?.getBoundingClientRect()[getSizeLiteral(direction)] || 0;
    };

    /**
     * Get the top or left of thumb
     */
    const getThumbOffset = () => {
        return thumb.current?.[getOffsetLiteral(direction, 'offset')] || 0;
    };

    useImperativeHandle(ref, () => ({
        scrollTo: (offset: number) => {
            if (!isSupportScroll()) return;

            if (typeof offset === 'number') {
                const thumbOffset = (offset / getContentScrollSize()) * getTrackSize();
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

                const scrollOffset = getWrapperScrollOffset();

                const thumbOffset = (scrollOffset / contentSize) * getTrackSize();

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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

            const scrollOffset = getWrapperScrollOffset();

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

            const factor = e[isVertical(direction) ? 'deltaY' : 'deltaX'] / 10;
            const threshold = 5 * factor;

            const thumbOffset =
                (scrollOffset / this[isVertical(direction) ? 'scrollHeight' : 'scrollWidth']) *
                getTrackSize();

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
            const offsetLiteral = getOffsetLiteral(direction);
            if (offset <= 0) {
                thumb.current!.style[offsetLiteral] = '0px';
            } else if (offset >= trackSize - thumbSize) {
                thumb.current!.style[offsetLiteral] = `${trackSize - thumbSize}px`;
            } else {
                thumb.current!.style[offsetLiteral] = `${offset}px`;
            }
        });
    };

    const contentScrollTo = (offset: number) => {
        requestAnimationFrame(() => {
            const offsetLiteral = getOffsetLiteral(direction);
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

    const handleTrackClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        if (!isSupportScroll()) return;
        const { y, height, x, width } = (e.target as HTMLDivElement).getBoundingClientRect();
        const thumbSize = getThumbSize();
        const halfThumbSize = thumbSize / 2;
        const contentSize = getContentScrollSize();

        const thumbOffset =
            e[isVertical(direction) ? 'clientY' : 'clientX'] - (isVertical(direction) ? y : x);

        const thumbCenterOffset = thumbOffset - halfThumbSize;
        const rate = thumbCenterOffset / (isVertical(direction) ? height : width);
        onScrollStart?.(
            {
                scrollTop: getWrapperScrollOffset(),
            },
            e
        );

        contentScrollTo(contentSize * rate);
        thumbScrollTo(thumbCenterOffset);

        onScroll?.(
            {
                scrollTop: getWrapperScrollOffset(),
            },
            e
        );
        onScrollEnd?.(
            {
                scrollTop: getWrapperScrollOffset(),
            },
            e
        );
    };

    const handleMouseDrag = useCallback((e: MouseEvent) => {
        const clientOffset = e[isVertical(direction) ? 'clientY' : 'clientX'];
        const distanceChanged = clientOffset - dragPosition.current.y;
        const currentThumbOffset = dragPosition.current.startOffset;

        const trackSize = getTrackSize();
        const nextThumbOffset = currentThumbOffset + distanceChanged;

        const rate = nextThumbOffset / trackSize;
        const contentHeight = getContentScrollSize();

        contentScrollTo(contentHeight * rate);
        thumbScrollTo(nextThumbOffset);

        onScroll?.(
            {
                scrollTop: getWrapperScrollOffset(),
            },
            e
        );
    }, []);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isSupportScroll()) return;

        setDragging(true);
        onScrollStart?.(
            {
                scrollTop: getWrapperScrollOffset(),
            },
            e
        );
        dragPosition.current = {
            y: e[isVertical(direction) ? 'clientY' : 'clientX'],
            startOffset: getThumbOffset(),
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
                        scrollTop: getWrapperScrollOffset(),
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
        if (contentSize <= wrapperSize) return true;

        return !isDragging && !isMouseOver;
    }, [isDragging, isMouseOver]);

    return (
        <div
            className={classNames(variables.wrapper, className)}
            ref={wrapper}
            style={style}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
        >
            {isShowShadow && (
                <div
                    className={classNames(variables.shadow, isOffsetZero && variables.shadowHidden)}
                />
            )}
            <div
                className={classNames(
                    variables.container,
                    isVertical(direction) ? variables.vertical : variables.horizontal
                )}
                ref={content}
            >
                {children}
            </div>
            <div
                className={classNames(
                    variables.track,
                    isVertical(direction) ? variables.trackVertical : variables.trackHorizontal,
                    inactiveHidden && isHidden && variables.trackHidden
                )}
                ref={track}
                onClick={handleTrackClick}
                style={trackStyle}
            >
                <div
                    className={variables.thumb}
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
