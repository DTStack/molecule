import * as React from 'react';
import { ITab } from './tab';
export declare type TabsType = 'line' | 'card';
export interface ITabs<T> extends React.ComponentProps<any> {
    className?: string;
    closable?: boolean;
    editable?: boolean;
    data?: ITab<T>[];
    activeTab?: string;
    type?: TabsType;
    style?: React.CSSProperties;
    onCloseTab?: (key?: string) => void;
    onMoveTab?: (tabs: ITab<T>[]) => void;
    onSelectTab?: (key?: string) => void;
}
export declare const tabsClassName: string;
export declare const tabsHeader: string;
export declare const tabsContent: string;
export declare const tabsContentItem: string;
export declare const tabItemCloseClassName: string;
export declare function Tabs<T>(props: ITabs<T>): JSX.Element;
