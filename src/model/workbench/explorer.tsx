import * as React from 'react';
import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { ITreeNodeItem, FileType, FileTypes } from 'mo/components/tree';
import { IMenuItem } from 'mo/components/menu';
import { IActivityBarItem } from './activityBar';
import { randomId } from 'mo/common/utils';
export enum ExplorerEvent {
    onClick = 'explorer.onClick',
}
export interface IPanelItem<T = any> extends IActivityBarItem {
    renderPanel?: (props) => React.ReactNode | JSX.Element;
    toolbar?: T;
}

export interface IFolderInputEvent {
    onFocus: () => void;
    setValue: (value: string) => void;
}

export interface IFolderTree {
    data?: ITreeNodeItem[];
    contextMenu?: IMenuItem[];
    folderPanelContextMenu?: IMenuItem[];
    current?: ITreeNodeItem | null;
}
export interface IExplorer {
    data?: IPanelItem[];
    headerToolBar?: IActivityBarItem[];
    folderTree?: IFolderTree;
}

export const NEW_FILE_COMMAND_ID = 'explorer.newFile';
export const NEW_FOLDER_COMMAND_ID = 'explorer.newFolder';
export const RENAME_COMMAND_ID = 'explorer.rename';
export const REMOVE_COMMAND_ID = 'explorer.remove';
export const DELETE_COMMAND_ID = 'explorer.delete';
export const OPEN_TO_SIDE_COMMAND_ID = 'explorer.openToSide';
export const ADD_ROOT_FOLDER_COMMAND_ID = 'addRootFolder';
export const FIND_IN_WORKSPACE_ID = 'filesExplorer.findInWorkspace';
export const DOWNLOAD_COMMAND_ID = 'explorer.download';

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

// TODO: name property extract, to adapt Localize
export const commonContextMenu = [
    {
        id: RENAME_COMMAND_ID,
        name: 'Rename',
    },
    {
        id: DELETE_COMMAND_ID,
        name: 'Delete',
    },
];
export const baseContextMenu = [
    {
        id: NEW_FILE_COMMAND_ID,
        name: 'New File',
    },
    {
        id: NEW_FOLDER_COMMAND_ID,
        name: 'New Folder',
    },
];

export const rootFolderContextMenu = [
    {
        id: REMOVE_COMMAND_ID,
        name: 'Remove Folder',
    },
];
export const fileContextMenu = [
    {
        id: OPEN_TO_SIDE_COMMAND_ID,
        name: 'Open to the Side',
    },
];
// Sample folder panel area ContextMenu
export const folderPanelContextMenu = [
    {
        id: ADD_ROOT_FOLDER_COMMAND_ID,
        name: 'Add Folder to Workspace...',
    },
    {
        id: FIND_IN_WORKSPACE_ID,
        name: 'Find in Workspace...',
    },
    {
        id: DOWNLOAD_COMMAND_ID,
        name: 'Download...',
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
export const DEFAULT_PANELS = [EDITOR_PANEL, OUTLINE_PANEL];

export class TreeNodeModel implements ITreeNodeItem {
    id?: number;
    name?: string;
    location?: string;
    fileType?: FileType;
    children?: ITreeNodeItem[];
    icon?: string | React.ReactNode;
    modify?: boolean;

    constructor(props: ITreeNodeItem = {}) {
        const {
            id,
            name = '',
            location = '',
            fileType = FileTypes.file as FileType,
            children = [],
            icon = '',
            modify = false,
        } = props;
        this.fileType = fileType;
        this.modify = modify;
        this.name = name;
        this.id = id || randomId();
        this.location = location;
        this.children = children;
        this.icon = icon;
    }
}

@injectable()
export class IExplorerModel implements IExplorer {
    public data: IPanelItem[] = DEFAULT_PANELS;
    public folderTree: IFolderTree = {
        contextMenu: commonContextMenu,
        current: null,
        folderPanelContextMenu: folderPanelContextMenu,
        data: [],
    };
    public headerToolBar: IActivityBarItem[] = builtInHeaderToolbar;
}
