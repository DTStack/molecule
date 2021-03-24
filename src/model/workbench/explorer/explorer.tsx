import * as React from 'react';
import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { IActivityBarItem } from '../activityBar';
import { NEW_FILE_COMMAND_ID, NEW_FOLDER_COMMAND_ID } from './folderTree';
export enum ExplorerEvent {
    onClick = 'explorer.onClick',
}
export interface IPanelItem<T = any> extends IActivityBarItem {
    renderPanel?: (props) => React.ReactNode | JSX.Element;
    toolbar?: T;
}

export interface IExplorer {
    data?: IPanelItem[];
    headerToolBar?: IActivityBarItem[];
}

const builtInHeaderToolbar: IActivityBarItem[] = [
    {
        id: 'explorer-more',
        name: 'View and More Actions...',
        iconName: 'codicon-ellipsis',
        type: 'global',
        contextMenu: [
            {
                id: 'OpenEditors',
                name: 'Open Editors',
                icon: 'check',
            },
            {
                id: 'Folders',
                name: 'Folders',
                icon: 'check',
            },
            {
                id: 'Outline',
                name: 'Outline',
                icon: 'check',
            },
        ],
    },
];

// Dedault Panel
export const EDITOR_PANEL = {
    id: 'OpenEditors',
    name: 'OPEN EDITORS',
    toolbar: [
        {
            id: 'toggle',
            title: 'Toggle Vertical',
            disabled: true,
            iconName: 'codicon-editor-layout',
        },
        {
            id: 'save',
            title: 'Save All',
            disabled: true,
            iconName: 'codicon-save-all',
        },
        {
            id: 'close',
            title: 'Close All Editors',
            iconName: 'codicon-close-all',
        },
    ],
    renderPanel: () => {
        return <span>editors</span>;
    },
};

export const OUTLINE_PANEL = {
    id: 'Outline',
    name: 'OUTLINE',
    toolbar: [
        {
            id: 'outline-collapse',
            title: 'Collapse All',
            iconName: 'codicon-collapse-all',
        },
        {
            id: 'outline-more',
            title: 'More Actions...',
            iconName: 'codicon-ellipsis',
        },
    ],
};
export const SAMPLE_FOLDER_PANEL = {
    id: 'Folders',
    name: 'Sample Folder',
    className: 'samplefolder',
    toolbar: [
        {
            id: NEW_FILE_COMMAND_ID,
            title: 'New File',
            iconName: 'codicon-new-file',
        },
        {
            id: NEW_FOLDER_COMMAND_ID,
            title: 'New Folder',
            iconName: 'codicon-new-folder',
        },
        {
            id: 'refresh',
            title: 'Refresh Explorer',
            iconName: 'codicon-refresh',
        },
        {
            id: 'collapse',
            title: 'Collapse Folders in Explorer',
            iconName: 'codicon-collapse-all',
        },
    ],
};

export const DEFAULT_PANELS = [EDITOR_PANEL, OUTLINE_PANEL];
@injectable()
export class IExplorerModel implements IExplorer {
    public data: IPanelItem[] = DEFAULT_PANELS;
    public headerToolBar: IActivityBarItem[];

    constructor(
        data: IPanelItem[] = DEFAULT_PANELS,
        headerToolBar: IActivityBarItem[] = builtInHeaderToolbar
    ) {
        this.data = data;
        this.headerToolBar = headerToolBar;
    }
}
