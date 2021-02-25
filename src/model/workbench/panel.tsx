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
    onClick = 'panel.onClick',
}

export const PANEL_PROBLEMS: IPanelItem = {
    id: 'ProblemsPane',
    name: 'problems',
    renderPanel: 'Problems',
    data: null,
    render: (item) => <Problems {...item} />,
};

export const PANEL_OUTPUT: IPanelItem = {
    id: 'OutputPane',
    name: 'output',
    renderPanel: 'output',
    data: 'output',
    render: (item) => <Output {...item} />,
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
    public current: IPanelItem | undefined = PANEL_OUTPUT;
    public data: IPanelItem[] = ([] = [PANEL_PROBLEMS, PANEL_OUTPUT]);
    public hidden = false;
    public maximize = false;
    public toolbox: IActionBarItem[] = [
        PANEL_TOOLBOX_RESIZE,
        PANEL_TOOLBOX_CLOSE,
    ];
}
