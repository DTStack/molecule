import * as React from 'react';
export interface ITab<T = any, P = any> {
    active?: boolean;
    closable?: boolean;
    editable?: boolean;
    index?: number;
    id?: string;
    name?: string;
    renderPanel?: ((item: P) => ReactNode) | ReactNode;
    data?: T;
}
export interface ITabEvent {
    onMoveTab?: (dragIndex: number, hoverIndex: number) => void;
    onCloseTab?: (key?: string) => void;
    onSelectTab?: (key?: string) => void;
    onContextMenu?: <T = any>(event: React.MouseEvent, tab: ITab<T>) => void;
}
export declare const tabClassName: string;
export declare const tabItemClassName: string;
export declare function Tab<T>(props: ITab & ITabEvent): JSX.Element;
