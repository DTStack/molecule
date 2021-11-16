import React, { CSSProperties, PropsWithChildren } from 'react';

interface IPaneProps {
    style?: CSSProperties;
    className?: string;
}

export default function Pane({
    children,
    style,
    className,
}: PropsWithChildren<IPaneProps>) {
    return (
        <div className={className} style={style}>
            {children}
        </div>
    );
}
