/// <reference types="react" />
import 'reflect-metadata';
import { IActionBarItem } from 'mo/components/actionBar';
import { ITreeNodeItem, FileType } from 'mo/components/tree';
import { IMenuItem } from 'mo/components/menu';
export declare enum ExplorerEvent {
    onClick = "explorer.onClick"
}
export interface IPanelItem<T = any> extends IActionBarItem {
    renderPanel?: (props: any) => React.ReactNode | JSX.Element;
    toolbar?: T;
}
export interface IFolderTree {
    data?: ITreeNodeItem[];
    contextMenu?: IMenuItem[];
    current?: ITreeNodeItem | null;
}
export interface IExplorer {
    data?: IPanelItem[];
    headerToolBar?: IActionBarItem[];
    folderTree?: IFolderTree;
}
export declare class TreeNodeModel implements ITreeNodeItem {
    id?: number;
    name?: string;
    location?: string;
    fileType?: FileType;
    children?: ITreeNodeItem[];
    icon?: string | React.ReactNode;
    modify?: boolean;
    constructor(props?: ITreeNodeItem);
}
export declare class IExplorerModel implements IExplorer {
    data: IPanelItem[];
    folderTree: IFolderTree;
    headerToolBar: IActionBarItem[];
}
