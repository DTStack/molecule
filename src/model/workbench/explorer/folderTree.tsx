import * as React from 'react';
import 'reflect-metadata';
import { ITreeNodeItemProps } from 'mo/components/tree';
import { IMenuItemProps } from 'mo/components/menu';
import { randomId } from 'mo/common/utils';

export enum FileTypes {
    File = 'File',
    Folder = 'Folder',
    RootFolder = 'RootFolder',
}

export type FileType = keyof typeof FileTypes;

export enum FolderTreeEvent {
    onClick = 'folderTree.onClick',
    onSelectFile = 'folderTree.onSelectFile',
    onNewFile = 'folderTree.onNewFile',
    onNewFolder = 'folderTree.onNewFolder',
    onNewRootFolder = 'folderTree.onNewRootFolder',
    onDelete = 'folderTree.onDelete',
    onRename = 'folderTree.onRename',
    onUpdateFileName = 'folderTree.onUpdateFileName',
    onUpdateFileContent = 'folderTree.onUpdateFileContent',
}

export interface IFolderInputEvent {
    onFocus: () => void;
    setValue: (value: string) => void;
}

export interface IFolderTreeSubItem {
    data?: TreeNodeModel[];
    contextMenu?: IMenuItemProps[];
    folderPanelContextMenu?: IMenuItemProps[];
    current?: TreeNodeModel | null;
}
export interface IFolderTree {
    folderTree?: IFolderTreeSubItem;
}

export const NEW_FILE_COMMAND_ID = 'explorer.newFile';
export const NEW_FOLDER_COMMAND_ID = 'explorer.newFolder';
export const RENAME_COMMAND_ID = 'explorer.rename';
export const REMOVE_COMMAND_ID = 'explorer.remove';
export const DELETE_COMMAND_ID = 'explorer.delete';
export const OPEN_TO_SIDE_COMMAND_ID = 'explorer.openToSide';
export const FIND_IN_WORKSPACE_ID = 'filesExplorer.findInWorkspace';
export const DOWNLOAD_COMMAND_ID = 'explorer.download';

export const COMMON_CONTEXT_MENU = [
    {
        id: RENAME_COMMAND_ID,
        name: 'Rename',
    },
    {
        id: DELETE_COMMAND_ID,
        name: 'Delete',
    },
];
export const BASE_CONTEXT_MENU = [
    {
        id: NEW_FILE_COMMAND_ID,
        name: 'New File',
    },
    {
        id: NEW_FOLDER_COMMAND_ID,
        name: 'New Folder',
    },
];

export const ROOT_FOLDER_CONTEXT_MENU = [
    {
        id: REMOVE_COMMAND_ID,
        name: 'Remove Folder',
    },
];
export const FILE_CONTEXT_MENU = [
    {
        id: OPEN_TO_SIDE_COMMAND_ID,
        name: 'Open to the Side',
    },
];
// Sample folder panel area ContextMenu
export const FOLDER_PANEL_CONTEXT_MENU = [
    {
        id: NEW_FOLDER_COMMAND_ID,
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

export class TreeNodeModel implements ITreeNodeItemProps {
    id?: number;
    name?: string;
    location?: string;
    fileType?: FileType;
    children?: TreeNodeModel[];
    icon?: string | React.ReactNode;
    isEditable?: boolean;
    content?: string;

    constructor(props: ITreeNodeItemProps = {}) {
        const {
            id,
            name = '',
            location = '',
            fileType = FileTypes.File,
            children = [],
            icon = '',
            isEditable = false,
            content = '',
        } = props;
        this.fileType = fileType;
        this.isEditable = isEditable;
        this.name = name;
        this.id = id || randomId();
        this.location = location;
        this.children = children;
        this.icon = icon;
        this.content = content;
    }
}

const builtInFolderTree = {
    contextMenu: COMMON_CONTEXT_MENU,
    current: null,
    folderPanelContextMenu: FOLDER_PANEL_CONTEXT_MENU,
    data: [],
};

export class IFolderTreeModel implements IFolderTree {
    public folderTree: IFolderTreeSubItem;

    constructor(folderTree: IFolderTreeSubItem = builtInFolderTree) {
        this.folderTree = folderTree;
    }
}
