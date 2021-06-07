import * as React from 'react';
import { localize } from 'mo/i18n/localize';
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

export const PANEL_TOOLBOX_CLOSE = 'panel.toolbox.closePanel';
export const PANEL_TOOLBOX_RESIZE = 'panel.toolbox.maximize';
export const PANEL_TOOLBOX_RESTORE_SIZE = 'panel.toolbox.restoreSize';
export const PANEL_OUTPUT = 'panel.output.title';

export interface IPanel {
    current?: IPanelItem;
    data?: IPanelItem[];
    toolbox?: IActionBarItemProps[];
    hidden?: boolean;
    maximize?: boolean;
}

export function builtInOutputPanel() {
    return {
        id: PANEL_OUTPUT,
        name: localize(PANEL_OUTPUT, 'output'),
        data: 'output',
        renderPane: (item) => <Output {...item} />,
    };
}

export function builtInPanelToolboxResize(): IActionBarItemProps {
    return {
        id: PANEL_TOOLBOX_RESIZE,
        title: localize(PANEL_TOOLBOX_RESIZE, 'Maximize Panel Size'),
        iconName: 'codicon-chevron-up',
    };
}

export function builtInPanelToolbox(): IActionBarItemProps[] {
    return [
        builtInPanelToolboxResize(),
        {
            id: PANEL_TOOLBOX_CLOSE,
            title: localize(PANEL_TOOLBOX_CLOSE, 'Close Panel'),
            iconName: 'codicon-close',
        },
    ];
}

export class PanelModel implements IPanel {
    public current: IPanelItem | undefined;
    public data: IPanelItem[];
    public hidden = false;
    public maximize = false;
    public toolbox: IActionBarItemProps[];

    constructor(
        current: IPanelItem | undefined = undefined,
        data: IPanelItem[] = [],
        hidden = false,
        maximize = false,
        toolbox: IActionBarItemProps[] = []
    ) {
        this.current = current;
        this.data = data;
        this.hidden = hidden;
        this.maximize = maximize;
        this.toolbox = toolbox;
    }
}
