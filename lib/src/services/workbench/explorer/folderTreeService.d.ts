import { Component } from 'mo/react/component';
import { IFolderTree } from 'mo/model/workbench/explorer/folderTree';
import { ITreeNodeItem } from 'mo/components/tree';
export interface IFolderTreeService extends Component<IFolderTree> {
    initTree?: (data: ITreeNodeItem[]) => void;
    getRootFolderByRootId(id: number): ITreeNodeItem | undefined;
    addRootFolder(folder?: ITreeNodeItem | ITreeNodeItem[]): void;
    removeRootFolder(id: number): void;
    setActive(id?: number): void;
    updateFileName(file: ITreeNodeItem, callback?: Function): void;
    updateFileContent(id?: number, value?: string): void;
    newFile(id?: number, callback?: Function): void;
    newFolder(id?: number, callback?: Function): void;
    rename(id: number, callback?: Function): void;
    delete(id: number, callback?: Function): void;
    onSelectFile(callback: (file: ITreeNodeItem, isUpdate: boolean) => void): any;
    onDropTree(treeData: ITreeNodeItem[]): void;
}
export declare class FolderTreeService extends Component<IFolderTree> implements IFolderTreeService {
    protected state: IFolderTree;
    constructor();
    private getFileIconByExtensionName;
    private getCurrentRootFolderInfo;
    private createTargetNodeById;
    getRootFolderIndexByRootId(id: number): number | undefined;
    initTree: (tree: ITreeNodeItem[]) => void;
    getRootFolderByRootId(id: number): ITreeNodeItem | undefined;
    getRootFolderById(id: number): ITreeNodeItem;
    addRootFolder(folder: ITreeNodeItem | ITreeNodeItem[]): void;
    removeRootFolder(id: number): void;
    setActive(id: number): void;
    updateFileName(file: any, callback: any): void;
    updateFileContent(id: number, value: string): void;
    rename(id: number, callback?: Function): void;
    delete(id: number, callback?: Function): void;
    newFile(id: number, callback?: Function): void;
    newFolder(id: any, callback: Function): void;
    onSelectFile(callback: (file: ITreeNodeItem, isUpdate: boolean) => void): void;
    onDropTree: (treeData: ITreeNodeItem[]) => void;
}
