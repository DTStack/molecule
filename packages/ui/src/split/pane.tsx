import React, { PropsWithChildren } from 'react';
import type { HTMLElementProps } from '@dtinsight/molecule-common';

interface IPaneProps extends HTMLElementProps {}

export interface IPaneConfigs {
    maxSize?: number | string;
    minSize?: number | string;
}

export default function Pane({
    children,
    style,
    className,
    role,
    title,
}: PropsWithChildren<IPaneProps & IPaneConfigs>) {
    return (
        <div role={role} title={title} className={className} style={style}>
            {children}
        </div>
    );
}
