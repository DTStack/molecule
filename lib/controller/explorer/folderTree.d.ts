/// <reference types="react" />
import { Controller } from 'mo/react/controller';
import { ITreeNodeItem } from 'mo/components/tree';
import { IMenuItem } from 'mo/components/menu';
export interface IFolderTreeController {
    readonly onSelectFile?: (file: ITreeNodeItem) => void;
    readonly onSelectTree?: (id: number) => void;
    readonly onDropTree?: (treeNode: ITreeNodeItem[]) => void;
    readonly onClickContextMenu?: (e: React.MouseEvent, item: IMenuItem, node: ITreeNodeItem, callback?: Function) => void;
    readonly filterContextMenu?: (menus: IMenuItem[], treeNode: ITreeNodeItem) => IMenuItem[];
}
export declare class FolderTreeController extends Controller implements IFolderTreeController {
    constructor();
    private initView;
    readonly onSelectFile: (file: ITreeNodeItem) => void;
    onSelectTree: (id: number) => void;
    readonly onDropTree: (treeNode: ITreeNodeItem[]) => void;
    readonly onClickContextMenu: (e: React.MouseEvent, item: IMenuItem, node: ITreeNodeItem, callback?: Function | undefined) => void;
    readonly filterContextMenu: (menus: any, node: any) => any;
}
