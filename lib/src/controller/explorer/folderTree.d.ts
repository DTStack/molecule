import * as React from 'react';
import { Controller } from 'mo/react/controller';
import { ITreeNodeItem } from 'mo/components/tree';
import { IMenuItem } from 'mo/components/menu';
import { IFolderInputEvent } from 'mo/model';
export interface IFolderTreeController {
    readonly onSelectFile?: (file: ITreeNodeItem, isUpdate?: boolean) => void;
    readonly onDropTree?: (treeNode: ITreeNodeItem[]) => void;
    readonly onClickContextMenu?: (e: React.MouseEvent, item: IMenuItem, node?: ITreeNodeItem, events?: IFolderInputEvent) => void;
    readonly filterContextMenu?: (menus: IMenuItem[], treeNode: ITreeNodeItem) => IMenuItem[];
    readonly getInputEvent?: (events: IFolderInputEvent) => IFolderInputEvent;
}
export declare class FolderTreeController extends Controller implements IFolderTreeController {
    constructor();
    private initView;
    readonly onSelectFile: (file: ITreeNodeItem, isUpdate?: boolean | undefined) => void;
    readonly onDropTree: (treeNode: ITreeNodeItem[]) => void;
    readonly getInputEvent: (events: IFolderInputEvent) => IFolderInputEvent;
    readonly onClickContextMenu: (e: React.MouseEvent, item: IMenuItem, node?: {}, events?: IFolderInputEvent | undefined) => void;
    readonly filterContextMenu: (menus: any, node: any) => any;
}
