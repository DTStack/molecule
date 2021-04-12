import { Component } from 'mo/react/component';
import { IPanelItem, IExplorer } from 'mo/model/workbench/explorer';
import { ITreeNodeItem } from 'mo/components/tree';
export interface IExplorerService extends Component<IExplorer> {
    addPanel(panel: IPanelItem | IPanelItem[]): void;
    reset(): void;
    remove(id: string): void;
    addOrRemovePanel(id: string): void;
    getRootFolderByRootId(id: number): ITreeNodeItem | undefined;
    addRootFolder(folder?: ITreeNodeItem | ITreeNodeItem[]): void;
    removeRootFolder(id: number): void;
    setActive(id: number): void;
    updateFileName(file: ITreeNodeItem, callback?: Function): void;
    updateFileContent(id?: number, value?: string): void;
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
    addOrRemovePanel(id: string): void;
    remove(id: string): void;
    private getFileIconByExtensionName;
    private getCurrentRootFolderInfo;
    private createTargetNodeById;
    getRootFolderIndexByRootId(id: number): number | undefined;
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
    onDropTree: (treeData: ITreeNodeItem[]) => void;
}
