import * as React from 'react';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { ITabProps } from 'mo/components/tabs/tab';
import Output from 'mo/workbench/panel/output';
export interface IPanelItem<T = any> extends ITabProps<any> {
    id: string;
    title?: string;
    toolbox?: IActionBarItemProps[];
    data?: T;
    render?(item: IPanelItem): ReactNode;
}

export enum PanelEvent {
    onTabChange = 'panel.onTabChange',
    onToolbarClick = 'panel.onToolbarClick',
}

export const PANEL_OUTPUT: IPanelItem = {
    id: 'OutputPane',
    name: 'output',
    data: 'output',
    renderPane: (item) => <Output {...item} />,
};

export const PANEL_TOOLBOX_CLOSE = {
    id: 'Close',
    title: 'Close Panel',
    iconName: 'codicon-close',
};

export const PANEL_TOOLBOX_RESIZE = {
    id: 'Resize',
    title: 'Maximize Panel Size',
    iconName: 'codicon-chevron-up',
};

export interface IPanel {
    current?: IPanelItem;
    data?: IPanelItem[];
    toolbox?: IActionBarItemProps[];
    hidden?: boolean;
    maximize?: boolean;
}

export class PanelModel implements IPanel {
    public current: IPanelItem | undefined;
    public data: IPanelItem[];
    public hidden = false;
    public maximize = false;
    public toolbox: IActionBarItemProps[];

    constructor(
        current: IPanelItem = PANEL_OUTPUT,
        data: IPanelItem[] = ([] = [PANEL_OUTPUT]),
        hidden = false,
        maximize = false,
        toolbox: IActionBarItemProps[] = [
            PANEL_TOOLBOX_RESIZE,
            PANEL_TOOLBOX_CLOSE,
        ]
    ) {
        this.current = current;
        this.data = data;
        this.hidden = hidden;
        this.maximize = maximize;
        this.toolbox = toolbox;
    }
}
