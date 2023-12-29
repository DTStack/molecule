import { type CSSProperties, useEffect, useRef, useState } from 'react';
import { classNames } from 'mo/client/classNames';

import Prevent from '../../prevent';
import variables from './index.scss';

export interface ISashProps {
    className?: string;
    style?: CSSProperties;
    disabled?: boolean;
    split?: 'vertical' | 'horizontal';
    onDragStart: React.MouseEventHandler<HTMLDivElement>;
    onDragging: React.MouseEventHandler<HTMLDivElement>;
    onDragEnd: React.MouseEventHandler<HTMLDivElement>;
}

export function Sash({
    className,
    disabled,
    style,
    split,
    onDragStart,
    onDragging,
    onDragEnd,
}: ISashProps) {
    const timeout = useRef<number>();
    const [active, setActive] = useState(false);
    const [dragging, setDrag] = useState(false);

    useEffect(function () {
        return function () {
            window.clearTimeout(timeout.current);
        };
    }, []);

    return (
        <Prevent
            role="Resizer"
            style={style}
            className={classNames(
                variables.container,
                (dragging || active) && variables.hover,
                disabled && variables.disabled,
                split === 'vertical' ? variables.vertical : variables.horizontal,
                className
            )}
            onMouseEnter={() => {
                timeout.current = window.setTimeout(() => {
                    setActive(true);
                }, 150);
            }}
            onMouseLeave={() => {
                if (timeout.current) {
                    setActive(false);
                    clearTimeout(timeout.current);
                }
            }}
            onMouseDown={(e) => {
                setDrag(true);
                onDragStart(e);
                const handleMouseMove: any = function (
                    e: React.MouseEvent<HTMLDivElement, MouseEvent>
                ) {
                    onDragging(e);
                };
                const handleMouseUp: any = function (
                    e: React.MouseEvent<HTMLDivElement, MouseEvent>
                ) {
                    setDrag(false);
                    onDragEnd(e);
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('mouseup', handleMouseUp);
                };
                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseup', handleMouseUp);
            }}
        />
    );
}
