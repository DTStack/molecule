import { Component } from 'mo/react/component';
import { IPanelItem, IExplorer } from 'mo/model/workbench/explorer';
import { ITreeNodeItem } from 'mo/components/tree';
export interface IIndex {
    id?: number;
    node?: ITreeNodeItem;
    parent?: number;
    prev?: number;
    next?: number;
    [x: string]: any;
}
export interface IIndexs {
    [index: number]: IIndex;
}
export interface ITreeInterface {
    count: number;
    obj: ITreeNodeItem;
    indexes: IIndexs;
    childNodeName: string;
}
export declare class TreeView implements ITreeInterface {
    count: number;
    obj: ITreeNodeItem;
    indexes: IIndexs;
    childNodeName: string;
    /**
     *
     * @param obj // tree object
     * @param childNodeName // loop properties
     * @example indexes data structure example:
     * {
            [2]: {
                id: 2,
                node: {},
                parent: 1,
                prev: null,
                next: 3
            },
            ...
        }
     */
    constructor(obj: any, childNodeName?: string);
    generate(obj: any): IIndex;
    getIndex(id: any): any;
    removeIndex(index: any): void;
    get(id: number): any;
    remove(id: number): any;
    update(id: number, extra?: {}): any;
    updateChildren(children: IIndex): void;
    insert(obj: ITreeNodeItem, parentId: number, i: number): IIndex;
    insertBefore(obj: ITreeNodeItem, destId: number): IIndex;
    insertAfter(obj: ITreeNodeItem, destId: number): IIndex;
    prepend(obj: ITreeNodeItem, destId: number): IIndex;
    append(obj: ITreeNodeItem, destId: number): IIndex;
}
export interface IExplorerService extends Component<IExplorer> {
    addPanel(panel: IPanelItem | IPanelItem[]): void;
    reset(): void;
    remove(index: number): void;
    getRootFolderByRootId(id: number): ITreeNodeItem | undefined;
    addRootFolder(folder?: ITreeNodeItem | ITreeNodeItem[]): void;
    removeRootFolder(id: number): void;
    setActive(id: number): void;
    updateFile(file: ITreeNodeItem, callback?: Function): void;
    newFile(id?: number, callback?: Function): void;
    newFolder(id?: number, callback?: Function): void;
    rename(id: number, callback?: Function): void;
    delete(id: number, callback?: Function): void;
    onDropTree(treeData: ITreeNodeItem[]): void;
}
export declare class ExplorerService extends Component<IExplorer> implements IExplorerService {
    protected state: IExplorer;
    constructor();
    addPanel(data: IPanelItem | IPanelItem[]): void;
    reset(): void;
    remove(index: number): void;
    private getFileIconByExtensionName;
    private getCurrentRootFolderAndIndex;
    private createTargetNodeById;
    getRootFolderIndexByRootId(id: number): number | undefined;
    getRootFolderByRootId(id: number): ITreeNodeItem | undefined;
    getRootFolderById(id: number): ITreeNodeItem;
    addRootFolder(folder: ITreeNodeItem | ITreeNodeItem[]): void;
    removeRootFolder(id: number): void;
    setActive(id: number): void;
    updateFile(file: any, callback: any): void;
    rename(id: number, callback?: Function): void;
    delete(id: number, callback?: Function): void;
    newFile(id: number, callback?: Function): void;
    newFolder(id: any, callback: Function): void;
    onDropTree: (treeData: ITreeNodeItem[]) => void;
}
