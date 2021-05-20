import * as React from 'react';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { NEW_FILE_COMMAND_ID, NEW_FOLDER_COMMAND_ID } from './folderTree';
export enum ExplorerEvent {
    onClick = 'explorer.onClick',
    onCollapseChange = 'explorer.onCollapseChange',
}
export interface IExplorerPanelItem<T = any> extends IActionBarItemProps {
    renderPanel?: (props) => React.ReactNode | JSX.Element;
    toolbar?: T;
}

export interface IExplorer {
    data?: IExplorerPanelItem[];
    headerToolBar?: IActionBarItemProps;
}

export const SAMPLE_FOLDER_PANEL_ID = 'Folders';
export const EDITOR_PANEL_ID = 'OpenEditors';
export const OUTLINE_PANEL_ID = 'Outline';

export const EXPLORER_ACTIVITY_ITEM = {
    id: 'active-explorer',
    name: 'Explore',
    iconName: 'codicon-files',
};

const builtInHeaderToolbar = {
    id: 'explorer-more',
    title: 'View and More Actions...',
    iconName: 'codicon-ellipsis',
    contextMenu: [
        {
            id: EDITOR_PANEL_ID,
            title: 'Open Editors',
            name: 'Open Editors',
            icon: 'check',
        },
        {
            id: SAMPLE_FOLDER_PANEL_ID,
            title: 'Folders',
            name: 'Folders',
            disabled: true,
            icon: 'check',
        },
        {
            id: OUTLINE_PANEL_ID,
            title: 'Outline',
            name: 'Outline',
            icon: 'check',
        },
    ],
};

// Dedault Panel
export const EDITOR_PANEL = {
    id: EDITOR_PANEL_ID,
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
    id: OUTLINE_PANEL_ID,
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
    id: SAMPLE_FOLDER_PANEL_ID,
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
export class IExplorerModel implements IExplorer {
    public data: IExplorerPanelItem[] = DEFAULT_PANELS;
    public headerToolBar: IActionBarItemProps;

    constructor(
        data: IExplorerPanelItem[] = DEFAULT_PANELS,
        headerToolBar: IActionBarItemProps = builtInHeaderToolbar
    ) {
        this.data = data;
        this.headerToolBar = headerToolBar;
    }
}
