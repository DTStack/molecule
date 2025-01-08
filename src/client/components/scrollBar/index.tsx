import { type CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import useMeasure from 'react-use/esm/useMeasure';
import useScroll from 'react-use/esm/useScroll';
import { upperFirst } from 'lodash-es';
import { classNames } from 'mo/client/classNames';
import { useSlide } from 'mo/client/hooks';
import { Direction, DirectionLiteral } from 'mo/types';
import { isElementInParentView } from 'mo/utils';

import variables from './index.scss';

export interface IScrollbarProps {
    inactiveHidden?: boolean;
    style?: CSSProperties;
    trackStyle?: CSSProperties;
    className?: string;
    direction?: DirectionLiteral;
    isShowShadow?: boolean;
    /**
     * Scroll into active element into View
     *
     * Should specify what value changed will trigger scrollIntoView and how to find active element
     */
    scrollIntoViewDeps?: {
        dep: any;
        activeClassName: string;
        center?: boolean;
    };
    onScroll?: (evt: IScrollEvent, e: MouseEvent | React.MouseEvent) => void;
    onScrollStart?: (evt: IScrollEvent, e: MouseEvent | React.MouseEvent) => void;
    onScrollEnd?: (evt: IScrollEvent, e: MouseEvent | React.MouseEvent) => void;
}

export interface IScrollEvent {
    scrollTop: number;
}

export default function ScrollBar({
    inactiveHidden,
    trackStyle,
    className,
    isShowShadow,
    style,
    direction = 'vertical',
    scrollIntoViewDeps,
    children,
}: React.PropsWithChildren<IScrollbarProps>) {
    const [ref, rect] = useMeasure<HTMLDivElement>();
    const viewport = useRef<HTMLDivElement>(null);
    const track = useRef<HTMLDivElement>(null);
    const scroll = useScroll(viewport);
    const [hovered, setHovered] = useState(false);
    const [slideRef, onSlide, onSlideStart] = useSlide();

    // ======================== Calculate ratio ========================
    const getRatio = () => {
        if (!viewport.current) return 0;
        const viewportSize = viewport.current.getBoundingClientRect()[widthOrHeight];
        const contentSize = viewport.current.firstElementChild?.getBoundingClientRect()[widthOrHeight] || 0;
        const ratio = viewportSize / contentSize;
        return isNaN(ratio) ? 0 : ratio;
    };

    // ======================== Get Basic Params ========================
    const widthOrHeight = useMemo(() => (direction === 'vertical' ? 'height' : 'width'), [direction]);
    const topOrLeft = useMemo(() => (direction === 'vertical' ? 'top' : 'left'), [direction]);
    const xOrY = useMemo(() => (direction === 'vertical' ? 'y' : 'x'), [direction]);
    const supportScroll = getRatio() !== 1;

    // ======================== Get basic size or offset ========================
    const getThumbSize = () => {
        return getRatio() * rect[widthOrHeight];
    };

    const getTranslate = () => {
        if (!viewport.current || !track.current) return '0px, 0px';
        const rect = track.current.getBoundingClientRect();
        return `${(scroll.x / viewport.current.scrollWidth) * rect.width}px, ${
            (scroll.y / viewport.current.scrollHeight) * rect.height
        }px`;
    };

    // ======================== Track or thumb slide ========================
    const handleTrackClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        if (!viewport.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const thumbOffset = e[`client${xOrY.toUpperCase() as 'X' | 'Y'}`] - rect[xOrY] - getThumbSize() / 2;
        const ratio = thumbOffset / rect.height;
        const offset = viewport.current[`scroll${upperFirst(widthOrHeight) as 'Width' | 'Height'}`] * ratio;
        viewport.current.scrollTo({ [topOrLeft]: offset, behavior: 'auto' });
    };

    const basis = useRef({
        top: 0,
        left: 0,
        x: 0,
        y: 0,
    });
    onSlideStart((e) => {
        basis.current.left = viewport.current?.scrollLeft || 0;
        basis.current.top = viewport.current?.scrollTop || 0;
        basis.current.x = e.clientX;
        basis.current.y = e.clientY;
    });

    onSlide((e) => {
        if (!viewport.current) return;
        const ratio = getRatio();
        const offsetX = (e.clientX - basis.current.x) / ratio;
        const offsetY = (e.clientY - basis.current.y) / ratio;
        viewport.current.scrollTo({
            left: basis.current.left + offsetX,
            top: basis.current.top + offsetY,
        });
    });

    // ======================== Scroll into view ========================
    useEffect(() => {
        if (scrollIntoViewDeps?.activeClassName) {
            const raf = window.requestAnimationFrame(() => {
                const parent = viewport.current;
                if (!parent) return;
                const active = parent.querySelector<HTMLDivElement>(`.${scrollIntoViewDeps.activeClassName}`);
                if (!active) return;
                const [inView, isWhichSide] = isElementInParentView(active, parent);

                if (!inView) {
                    const offset = (() => {
                        const { width, height } = parent.getBoundingClientRect();
                        const half = {
                            width: width / 2,
                            height: height / 2,
                        };
                        switch (isWhichSide) {
                            case 'left':
                                return active.offsetLeft - (scrollIntoViewDeps.center ? half.width : 0);
                            case 'right':
                                return (
                                    active.offsetLeft -
                                    (parent.getBoundingClientRect().width - active.getBoundingClientRect().width) +
                                    // Scroll item into screen's center when center is true
                                    (scrollIntoViewDeps.center ? half.width : 0)
                                );
                            case 'top':
                                return active.offsetTop - (scrollIntoViewDeps.center ? half.height : 0);
                            case 'bottom':
                                return (
                                    active.offsetTop -
                                    (parent.getBoundingClientRect().height - active.getBoundingClientRect().height) +
                                    // Scroll item into screen's center when center is true
                                    (scrollIntoViewDeps.center ? half.height : 0)
                                );
                            default:
                                return null;
                        }
                    })();
                    if (offset !== null) {
                        viewport.current.scrollTo({
                            [topOrLeft]: offset,
                        });
                    }
                }
            });

            return () => {
                window.cancelAnimationFrame(raf);
            };
        }
    }, [scrollIntoViewDeps?.dep]);

    return (
        <div
            className={classNames(variables.container, className)}
            ref={ref}
            style={{ ...style, [`--radix-thumb-${direction}`]: `${getThumbSize()}px` }}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {isShowShadow && scroll[xOrY] !== 0 && <div className={classNames(variables.shadow, direction)} />}
            <div className={variables.viewport} ref={viewport}>
                <div
                    style={{
                        display: direction === Direction.horizontal ? 'table' : 'block',
                    }}
                >
                    {children}
                </div>
            </div>
            <div
                className={classNames(
                    variables.track,
                    variables[direction],
                    (!hovered || !supportScroll) && !inactiveHidden && variables.trackHidden
                )}
                onClick={handleTrackClick}
                ref={track}
                style={trackStyle}
                onWheel={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    viewport.current?.scrollTo({
                        left: viewport.current.scrollLeft + e.deltaX,
                        top: viewport.current.scrollTop + e.deltaY,
                    });
                }}
            >
                <div
                    ref={slideRef}
                    className={variables.thumb}
                    style={{ transform: `translate3d(${getTranslate()}, 0px)` }}
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
    );
}
