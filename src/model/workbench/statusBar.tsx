import * as React from 'react';
import EditorStatusBarView from 'mo/workbench/editor/statusBarView';
import { IMenuItemProps } from 'mo/components/menu';
export interface IStatusBarItem<T = any> extends HTMLElementProps {
    id: string;
    sortIndex: number;
    data?: T;
    onClick?(e: React.MouseEvent, item?: IStatusBarItem);
    render?: (item: IStatusBarItem) => React.ReactNode;
    name?: string;
}

export interface IStatusBar {
    rightItems: IStatusBarItem[];
    leftItems: IStatusBarItem[];
    contextMenu?: IMenuItemProps[];
}

export const STATUS_EDITOR_INFO: IStatusBarItem = {
    id: 'MoEditorInfo',
    sortIndex: 2,
    data: {
        ln: 0,
        col: 0,
    },
    name: 'Go to Line/Column',
    render: (item: IStatusBarItem) => <EditorStatusBarView {...item} />,
};

/**
 * The activity bar event definition
 */
export enum StatusBarEvent {
    /**
     * Selected an activity bar
     */
    onClick = 'statusBar.onClick',
    /**
     * Activity bar data changed
     */
    DataChanged = 'statusBar.data',
}

export const CONTEXT_MENU_HIDE_STATUS_BAR = {
    id: 'hide',
    name: 'Hide Status Bar',
};
export class StatusBarModel implements IStatusBar {
    public leftItems: IStatusBarItem[] = [];
    public rightItems: IStatusBarItem[] = [];
    public contextMenu: IMenuItemProps[];

    constructor(
        leftItems: IStatusBarItem[] = [],
        rightItems: IStatusBarItem[] = [STATUS_EDITOR_INFO],
        contextMenu: IMenuItemProps[] = [CONTEXT_MENU_HIDE_STATUS_BAR]
    ) {
        this.leftItems = leftItems;
        this.rightItems = rightItems;
        this.contextMenu = contextMenu;
    }
}
