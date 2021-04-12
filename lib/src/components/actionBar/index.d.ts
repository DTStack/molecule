import * as React from 'react';
import { IMenuItem } from 'mo/components/menu';
export interface IActionBarItem<T = any> {
    id?: string;
    name?: string;
    title?: string;
    iconName?: string;
    disabled?: boolean;
    checked?: boolean;
    data?: T;
    contextMenu?: IMenuItem[];
    className?: string;
    onContextMenuClick?: (e: React.MouseEvent, item: IMenuItem | undefined) => void;
    onClick?(event: React.MouseEvent, item: IActionBarItem): void;
}
export interface IActionBar<T = any> {
    data: IActionBarItem<T>[];
    className?: string;
    onContextMenuClick?: (e: React.MouseEvent, item: IMenuItem | undefined) => void;
    onClick?(event: React.MouseEvent, item: IActionBarItem): void;
}
export declare function ActionBarItem(props: IActionBarItem): JSX.Element;
export default function ActionBar<T = any>(props: IActionBar<T>): JSX.Element;
