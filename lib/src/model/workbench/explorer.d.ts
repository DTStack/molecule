import * as React from 'react';
import 'reflect-metadata';
import { ITreeNodeItem, FileType } from 'mo/components/tree';
import { IMenuItem } from 'mo/components/menu';
import { IActivityBarItem } from './activityBar';
export declare enum ExplorerEvent {
    onClick = "explorer.onClick"
}
export interface IPanelItem<T = any> extends IActivityBarItem {
    renderPanel?: (props: any) => React.ReactNode | JSX.Element;
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
export declare const NEW_FILE_COMMAND_ID = "explorer.newFile";
export declare const NEW_FOLDER_COMMAND_ID = "explorer.newFolder";
export declare const RENAME_COMMAND_ID = "explorer.rename";
export declare const REMOVE_COMMAND_ID = "explorer.remove";
export declare const DELETE_COMMAND_ID = "explorer.delete";
export declare const OPEN_TO_SIDE_COMMAND_ID = "explorer.openToSide";
export declare const ADD_ROOT_FOLDER_COMMAND_ID = "addRootFolder";
export declare const FIND_IN_WORKSPACE_ID = "filesExplorer.findInWorkspace";
export declare const DOWNLOAD_COMMAND_ID = "explorer.download";
export declare const commonContextMenu: {
    id: string;
    name: string;
}[];
export declare const baseContextMenu: {
    id: string;
    name: string;
}[];
export declare const rootFolderContextMenu: {
    id: string;
    name: string;
}[];
export declare const fileContextMenu: {
    id: string;
    name: string;
}[];
export declare const folderPanelContextMenu: {
    id: string;
    name: string;
}[];
export declare const EDITOR_PANEL: {
    id: string;
    name: string;
    toolbar: ({
        id: string;
        title: string;
        disabled: boolean;
        iconName: string;
    } | {
        id: string;
        title: string;
        iconName: string;
        disabled?: undefined;
    })[];
    renderPanel: () => JSX.Element;
};
export declare const OUTLINE_PANEL: {
    id: string;
    name: string;
    toolbar: {
        id: string;
        title: string;
        iconName: string;
    }[];
};
export declare const DEFAULT_PANELS: {
    id: string;
    name: string;
    toolbar: {
        id: string;
        title: string;
        iconName: string;
    }[];
}[];
export declare class TreeNodeModel implements ITreeNodeItem {
    id?: number;
    name?: string;
    location?: string;
    fileType?: FileType;
    children?: ITreeNodeItem[];
    icon?: string | React.ReactNode;
    modify?: boolean;
    value?: string;
    constructor(props?: ITreeNodeItem);
}
export declare class IExplorerModel implements IExplorer {
    data: IPanelItem[];
    folderTree: IFolderTree;
    headerToolBar: IActivityBarItem[];
    constructor(data?: IPanelItem[], folderTree?: IFolderTree, headerToolBar?: IActivityBarItem[]);
}
