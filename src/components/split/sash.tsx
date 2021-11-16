import React, { CSSProperties } from 'react';

interface ISashProps {
    className?: string;
    style?: CSSProperties;
    onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

export default function Sash({
    className,
    style,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
}: ISashProps) {
    return (
        <div
            className={className}
            style={style}
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
    );
}
