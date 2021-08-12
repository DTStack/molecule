import React, { PropsWithChildren } from 'react';

export enum LayoutPriority {
    Normal,
    Low,
    High,
}

export interface PaneProps {
    minSize?: string | number;
    initialSize?: string | number;
    maxSize?: string | number;
    priority?: LayoutPriority;

    className?: string;
    hidden?: boolean;
}

export interface PaneInstanceProps extends PaneProps {
    readonly _cachedVisibleSize?: number;
    setVisible(visible: boolean, size?: number): void;
}

export function Pane({ children, className }: PropsWithChildren<PaneProps>) {
    return className ? (
        <div className={className}>{children}</div>
    ) : (
        <>{children}</>
    );
}
