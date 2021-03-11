import * as React from 'react';
import { IActionBarItem } from 'mo/components/actionBar';
import { ITab } from 'mo/components/tabs/tab';
import { injectable } from 'tsyringe';
import Output from 'mo/workbench/panel/output';
import Problems from 'mo/workbench/panel/problems';

export interface IPanelItem<T = any> extends ITab<any> {
    id: string;
    title?: string;
    toolbox?: IActionBarItem[];
    data?: T;
    render?(item: IPanelItem): ReactNode;
}

export enum PanelEvent {
    onTabChange = 'panel.onTabChange',
    onToolbarClick = 'panel.onToolbarClick',
}

export const PANEL_PROBLEMS: IPanelItem = {
    id: 'ProblemsPane',
    name: 'problems',
    data: null,
    renderPanel: (item) => <Problems {...item} />,
};

export const PANEL_OUTPUT: IPanelItem = {
    id: 'OutputPane',
    name: 'output',
    data: 'output',
    renderPanel: (item) => <Output {...item} />,
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
    toolbox?: IActionBarItem[];
    hidden?: boolean;
    maximize?: boolean;
}

@injectable()
export class PanelModel implements IPanel {
    public current: IPanelItem | undefined;
    public data: IPanelItem[];
    public hidden = false;
    public maximize = false;
    public toolbox: IActionBarItem[];

    constructor(
        current: IPanelItem = PANEL_OUTPUT,
        data: IPanelItem[] = ([] = [PANEL_PROBLEMS, PANEL_OUTPUT]),
        hidden = false,
        maximize = false,
        toolbox: IActionBarItem[] = [PANEL_TOOLBOX_RESIZE, PANEL_TOOLBOX_CLOSE]
    ) {
        this.current = current;
        this.data = data;
        this.hidden = hidden;
        this.maximize = maximize;
        this.toolbox = toolbox;
    }
}
