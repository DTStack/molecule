import React from 'react';
import 'reflect-metadata';
import type { ITreeNodeItemProps } from 'mo/components/tree';
import type { IMenuItemProps } from 'mo/components/menu';
import { localize } from 'mo/i18n/localize';

export enum FileTypes {
    File = 'File',
    Folder = 'Folder',
    RootFolder = 'RootFolder',
}

export type FileType = keyof typeof FileTypes;

export enum FolderTreeEvent {
    onSelectFile = 'folderTree.onSelectFile',
    onDelete = 'folderTree.onDelete',
    onRename = 'folderTree.onRename',
    onUpdateFileName = 'folderTree.onUpdateFileName',
    onRightClick = 'folderTree.onRightClick',
    onContextMenuClick = 'folderTree.onContextMenuClick',
    onCreate = 'folderTree.onCreate',
    onLoadData = 'folderTree.onLoadData',
    onDrop = 'folderTree.onDrop',
}

export interface IFolderInputEvent {
    onFocus: () => void;
    setValue: (value: string) => void;
}

export interface IFolderTreeSubItem {
    data?: IFolderTreeNodeProps[];
    contextMenu?: IMenuItemProps[];
    folderPanelContextMenu?: IMenuItemProps[];
    current?: IFolderTreeNodeProps | null;
}
export interface IFolderTree {
    folderTree?: IFolderTreeSubItem;
    entry?: React.ReactNode;
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
        name: localize('contextmenu.rename', 'Rename'),
    },
    {
        id: DELETE_COMMAND_ID,
        name: localize('contextmenu.delete', 'Delete'),
    },
];
export const BASE_CONTEXT_MENU = [
    {
        id: NEW_FILE_COMMAND_ID,
        name: localize('contextmenu.newFile', 'New File'),
    },
    {
        id: NEW_FOLDER_COMMAND_ID,
        name: localize('contextmenu.newFolder', 'New Folder'),
    },
];

export const ROOT_FOLDER_CONTEXT_MENU = [
    {
        id: REMOVE_COMMAND_ID,
        name: localize('contextmenu.removeFolder', 'Remove Folder'),
    },
];
export const FILE_CONTEXT_MENU = [
    {
        id: OPEN_TO_SIDE_COMMAND_ID,
        name: localize('contextmenu.openToTheSide', 'Open to the Side'),
    },
];
// Sample folder panel area ContextMenu
export const FOLDER_PANEL_CONTEXT_MENU = [
    {
        id: NEW_FOLDER_COMMAND_ID,
        name: localize(
            'contextmenu.addFolderToSpace',
            'Add Folder to Workspace...'
        ),
    },
    {
        id: FIND_IN_WORKSPACE_ID,
        name: localize('contextmenu.findInSpace', 'Find in Workspace...'),
    },
    {
        id: DOWNLOAD_COMMAND_ID,
        name: localize('contextmenu.download', 'Download...'),
    },
];

export interface IFolderTreeNodeProps extends ITreeNodeItemProps<any> {
    location?: string;
    content?: string;
    fileType?: FileType;
    children?: IFolderTreeNodeProps[];
}

export class TreeNodeModel implements IFolderTreeNodeProps {
    id: UniqueId;
    name?: string;
    location?: string;
    isLeaf?: boolean;
    fileType: FileType = FileTypes.File;
    children?: IFolderTreeNodeProps[];
    icon?: string | JSX.Element;
    isEditable?: boolean;
    content?: string;

    data?: any;

    constructor(props: IFolderTreeNodeProps) {
        const {
            id,
            name = '',
            location = '',
            fileType = FileTypes.File,
            children = [],
            icon = '',
            isEditable = false,
            content = '',
            isLeaf = true,
            data,
        } = props;
        this.fileType = fileType;
        this.isEditable = isEditable;
        this.name = name;
        this.id = id;
        this.location = location;
        this.children = children;
        this.icon = icon;
        this.content = content;
        this.data = data;
        this.isLeaf = isLeaf;
    }
}

export const builtInFolderTree = {
    contextMenu: COMMON_CONTEXT_MENU,
    current: null,
    folderPanelContextMenu: FOLDER_PANEL_CONTEXT_MENU,
    data: [],
};

export class IFolderTreeModel implements IFolderTree {
    public folderTree: IFolderTreeSubItem;
    public entry: React.ReactNode;

    constructor(
        folderTree: IFolderTreeSubItem = builtInFolderTree,
        entry?: React.ReactNode
    ) {
        this.folderTree = folderTree;
        this.entry = entry;
    }
}
