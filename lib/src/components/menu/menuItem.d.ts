import * as React from 'react';
export interface IMenuItem extends HTMLElementProps {
    /**
     * The name of icon
     */
    icon?: string;
    /**
     * Item Name
     */
    name?: ReactNode;
    disabled?: boolean;
    /**
     * The description of keybinding
     * example: ⇧⌘P
     */
    keybinding?: string;
    /**
     * Custom render
     */
    render?: (data: IMenuItem) => ReactNode;
    onClick?: (e: React.MouseEvent, item?: IMenuItem) => void;
    sortIndex?: number;
}
export declare function MenuItem(props: React.PropsWithChildren<IMenuItem>): JSX.Element;
