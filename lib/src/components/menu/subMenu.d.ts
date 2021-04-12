import * as React from 'react';
import { TriggerEvent } from 'mo/common/dom';
import { IMenuItem } from './menuItem';
export declare enum MenuMode {
    Vertical = "vertical",
    Horizontal = "horizontal"
}
export declare function isHorizontal(mode: MenuMode): boolean;
export declare function isVertical(mode: MenuMode): boolean;
export interface ISubMenu extends IMenuItem {
    /**
     * The event of show subMenu, default value is 'hover'
     */
    trigger?: TriggerEvent;
    icon?: string;
    data?: ISubMenu[];
    mode?: MenuMode;
}
export declare function SubMenu(props: React.PropsWithChildren<ISubMenu>): JSX.Element;
