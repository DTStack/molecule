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
    current?: IPanelItem | null;
    data?: IPanelItem[];
    toolbox?: IActionBarItemProps[];
}

export interface IOutput extends IPanelItem {
    outputEditorInstance?: IStandaloneCodeEditor;
    onUpdateEditorIns?(editorInstance: IStandaloneCodeEditor): void;
}

export function builtInOutputPanel() {
    const outputPane: IOutput = {
        id: PANEL_OUTPUT,
        name: localize(PANEL_OUTPUT, 'output'),
        data: '',
    };

    function onUpdateEditorIns(editorInstance: IStandaloneCodeEditor) {
        outputPane.outputEditorInstance = editorInstance;
    }

    outputPane.renderPane = (item) => (
        <Output onUpdateEditorIns={onUpdateEditorIns} {...item} />
    );

    return outputPane;
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
    public current: IPanelItem | null;
    public data: IPanelItem[];
    public hidden = false;
    public maximize = false;
    public toolbox: IActionBarItemProps[];

    constructor(
        current: IPanelItem | null = null,
        data: IPanelItem[] = [],
        toolbox: IActionBarItemProps[] = []
    ) {
        this.current = current;
        this.data = data;
        this.toolbox = toolbox;
    }
}
