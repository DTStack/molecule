import * as React from 'react';
export interface IActionBarItem<T = any> {
    id: string;
    name?: string;
    title?: string;
    iconName?: string;
    disabled?: boolean;
    data?: T;
    className?: string;
    onClick?(event: React.MouseEvent, item: IActionBarItem): void;
}
export interface IActionBar<T = any> {
    data: IActionBarItem<T>[];
    className?: string;
    onClick?(event: React.MouseEvent, item: IActionBarItem): void;
}
export declare function ActionBarItem(props: IActionBarItem): JSX.Element;
export default function ActionBar<T = any>(props: IActionBar<T>): JSX.Element;
