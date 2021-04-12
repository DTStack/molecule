import * as React from 'react';
import 'reflect-metadata';
import { ITreeNodeItem, FileType } from 'mo/components/tree';
import { IMenuItem } from 'mo/components/menu';
export declare enum FolderTreeEvent {
    onClick = "folderTree.onClick",
    onSelectFile = "folderTree.onSelectFile"
}
export interface IFolderInputEvent {
    onFocus: () => void;
    setValue: (value: string) => void;
}
export interface IFolderTreeSubItem {
    data?: ITreeNodeItem[];
    contextMenu?: IMenuItem[];
    folderPanelContextMenu?: IMenuItem[];
    current?: ITreeNodeItem | null;
}
export interface IFolderTree {
    folderTree?: IFolderTreeSubItem;
}
export declare const NEW_FILE_COMMAND_ID = "explorer.newFile";
export declare const NEW_FOLDER_COMMAND_ID = "explorer.newFolder";
export declare const RENAME_COMMAND_ID = "explorer.rename";
export declare const REMOVE_COMMAND_ID = "explorer.remove";
export declare const DELETE_COMMAND_ID = "explorer.delete";
export declare const OPEN_TO_SIDE_COMMAND_ID = "explorer.openToSide";
export declare const ADD_ROOT_FOLDER_COMMAND_ID = "addRootFolder";
export declare const FIND_IN_WORKSPACE_ID = "filesExplorer.findInWorkspace";
export declare const DOWNLOAD_COMMAND_ID = "explorer.download";
export declare const COMMON_CONTEXT_MENU: {
    id: string;
    name: string;
}[];
export declare const BASE_CONTEXT_MENU: {
    id: string;
    name: string;
}[];
export declare const ROOT_FOLDER_CONTEXT_MENU: {
    id: string;
    name: string;
}[];
export declare const FILE_CONTEXT_MENU: {
    id: string;
    name: string;
}[];
export declare const FOLDER_PANEL_CONTEXT_MENU: {
    id: string;
    name: string;
}[];
export declare class TreeNodeModel implements ITreeNodeItem {
    id?: number;
    name?: string;
    location?: string;
    fileType?: FileType;
    children?: ITreeNodeItem[];
    icon?: string | React.ReactNode;
    isEditable?: boolean;
    content?: string;
    constructor(props?: ITreeNodeItem);
}
export declare class IFolderTreeModel implements IFolderTree {
    folderTree: IFolderTreeSubItem;
    constructor(folderTree?: IFolderTreeSubItem);
}
