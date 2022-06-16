import React, { useRef, useState, CSSProperties } from 'react';
import { classNames } from 'mo/common/className';
import { sashHoverClassName, sashItemClassName } from './base';

interface ISashProps {
    className?: string;
    style: CSSProperties;
    onDragStart: React.MouseEventHandler<HTMLDivElement>;
    onDragging: React.MouseEventHandler<HTMLDivElement>;
    onDragEnd: React.MouseEventHandler<HTMLDivElement>;
}

export default function Sash({
    className,
    onDragStart,
    onDragging,
    onDragEnd,
    ...restProps
}: ISashProps) {
    const timeout = useRef<NodeJS.Timeout>();
    const [active, setActive] = useState(false);
    const [draging, setDrag] = useState(false);

    const handleMouseMove = function (e) {
        onDragging(e);
    };

    const handleMouseUp = function (e) {
        setDrag(false);
        onDragEnd(e);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    };

    return (
        <div
            role="Resizer"
            className={classNames(
                sashItemClassName,
                (draging || active) && sashHoverClassName,
                className
            )}
            onMouseEnter={() => {
                timeout.current = setTimeout(() => {
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

                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseup', handleMouseUp);
            }}
            {...restProps}
        />
    );
}
