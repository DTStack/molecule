import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    IPanelItem,
    IExplorer,
    IExplorerModel,
} from 'mo/model/workbench/explorer';
import { DEFAULT_PANELS } from 'mo/model/workbench/explorer';
import { TreeViewUtil, searchById } from '../helper';
import { ITreeNodeItem, FileTypes, FileType } from 'mo/components/tree';
import { editorService } from 'mo';
import { TreeNodeModel } from 'mo/model';
import { randomId } from 'mo/common/utils';

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

@singleton()
export class ExplorerService
    extends Component<IExplorer>
    implements IExplorerService {
    protected state: IExplorer;
    constructor() {
        super();
        this.state = container.resolve(IExplorerModel);
    }

    /* ============================Panel============================ */
    public addPanel(data: IPanelItem | IPanelItem[]) {
        let next = [...this.state.data!];
        if (Array.isArray(data)) {
            next = next?.concat(data);
        } else {
            next?.push(data);
        }
        this.setState({
            data: next,
        });
    }

    public reset() {
        this.setState({
            data: [],
        });
    }

    public addOrRemovePanel(id: string) {
        const { data } = this.state;
        const next = [...data!];
        const index = next.findIndex(searchById(id));
        if (index > -1) {
            this.remove(id);
        } else {
            const existPanel = DEFAULT_PANELS.find(searchById(id));
            if (!existPanel) return;
            this.addPanel(existPanel);
        }
    }

    public remove(id: string) {
        const { data } = this.state;
        const next = [...data!];
        const index = next.findIndex(searchById(id));
        if (index > -1) {
            next.splice(index, 1);
        }
        this.setState({
            data: next,
        });
    }

    // private updateHeaderToolBarCheckStatus(id: string) {
    //     const { headerToolBar, data } = this.state;
    //     const existPanel = data?.find(searchById(id));
    //     const next = [...headerToolBar!];
    //     this.setState({
    //         headerToolBar: next,
    //     });
    // }

    /* ============================Tree============================ */

    private getFileIconByExtensionName(
        name: string,
        fileType: FileType
    ): string {
        if (fileType === FileTypes.folder) return '';
        const fileExtension = name && name.split('.')?.[1];
        let icon = 'symbol-file';
        switch (fileExtension) {
            case 'txt': {
                icon = 'symbol-file';
                break;
            }
            case 'js': {
                icon = 'file-binary';
                break;
            }
            case 'html': {
                icon = 'file-code';
                break;
            }
            case 'zip': {
                icon = 'file-zip';
                break;
            }
            default:
                icon;
        }
        return icon;
    }

    private getCurrentRootFolderInfo(id: number) {
        const currentRootFolder: ITreeNodeItem = this.getRootFolderById(id);
        const index = this.getRootFolderIndexByRootId(
            (currentRootFolder as any).id
        ) as number;
        const tree = new TreeViewUtil(currentRootFolder);
        return {
            index,
            currentRootFolder,
            tree,
        };
    }

    private createTargetNodeById(
        id: number,
        treeInstance,
        extra?: ITreeNodeItem
    ) {
        const currentIndex = treeInstance.getIndex(id);
        // If the node type of the current id is a file, insert it at the parent node above it
        if (currentIndex?.node?.fileType === FileTypes.file) {
            treeInstance.prepend(
                new TreeNodeModel(extra),
                currentIndex?.parent
            );
        } else {
            treeInstance.append(new TreeNodeModel(extra), id);
        }
    }

    public getRootFolderIndexByRootId(id: number): number | undefined {
        return this.state.folderTree?.data!.findIndex(
            (folder) => folder.id === id
        );
    }

    public getRootFolderByRootId(id: number): ITreeNodeItem | undefined {
        return this.state.folderTree?.data!.find((folder) => folder.id === id);
    }

    public getRootFolderById(id: number): ITreeNodeItem {
        let rootNode = {};
        this.state.folderTree?.data?.forEach((folder) => {
            const treeInstance = new TreeViewUtil(folder);
            if (treeInstance.get(id)) {
                rootNode = folder;
            }
        });
        return rootNode;
    }

    public addRootFolder(folder: ITreeNodeItem | ITreeNodeItem[]) {
        const { folderTree } = this.state;
        let next = [...folderTree?.data!];
        if (Array.isArray(folder)) {
            next = next?.concat(folder);
        } else {
            next?.push(folder);
        }
        this.setState({
            folderTree: { ...folderTree, data: next },
        });
    }

    public removeRootFolder(id: number) {
        const { folderTree } = this.state;
        const next = [...folderTree?.data!];
        const index = this.getRootFolderIndexByRootId(id) as number;
        if (index > -1) {
            next.splice(index, 1);
        }
        this.setState({
            folderTree: { ...folderTree, data: next },
        });
    }

    public setActive(id: number) {
        const { folderTree } = this.state;
        const { tree } = this.getCurrentRootFolderInfo(id);
        const currentNode = tree.get(id);
        this.setState({
            folderTree: { ...folderTree, current: currentNode },
        });
    }

    public updateFileName(file, callback) {
        const { folderTree } = this.state;
        const { id, name, fileType } = file;
        const cloneData: ITreeNodeItem[] = folderTree?.data || [];
        const { tree, index } = this.getCurrentRootFolderInfo(id);
        if (name) {
            tree.update(id, {
                ...file,
                icon: this.getFileIconByExtensionName(name, fileType),
                modify: false,
            });
        } else {
            tree.remove(id);
        }
        if (index > -1) cloneData[index] = tree.obj;
        this.setState({
            folderTree: { ...folderTree, data: cloneData },
        });
        if (callback) callback();
    }

    public updateFileContent(id: number, value: string) {
        const { folderTree } = this.state;
        const cloneData: ITreeNodeItem[] = folderTree?.data || [];
        const { tree, index } = this.getCurrentRootFolderInfo(id);
        tree.update(id, {
            value,
        });
        if (index > -1) cloneData[index] = tree.obj;
        this.setState({
            folderTree: { ...folderTree, data: cloneData },
        });
    }

    public rename(id: number, callback?: Function) {
        const { folderTree } = this.state;
        const cloneData: ITreeNodeItem[] = folderTree?.data || [];
        const { tree, index } = this.getCurrentRootFolderInfo(id);
        tree.update(id, {
            modify: true,
        });
        if (index > -1) cloneData[index] = tree.obj;
        this.setState({
            folderTree: { ...folderTree, data: cloneData },
        });
        if (callback) callback();
    }

    public delete(id: number, callback?: Function) {
        const { folderTree } = this.state;
        const cloneData: ITreeNodeItem[] = folderTree?.data || [];
        const { tree, index } = this.getCurrentRootFolderInfo(id);
        tree.remove(id);
        if (index > -1) cloneData[index] = tree.obj;
        this.setState({
            folderTree: { ...folderTree, data: cloneData },
        });
        if (callback) callback();
    }

    public newFile(id: number, callback?: Function) {
        const { folderTree } = this.state;
        const cloneData: ITreeNodeItem[] = folderTree?.data || [];
        const { tree, index } = this.getCurrentRootFolderInfo(id);
        if (!id) {
            const tabData = {
                id: `${randomId()}`,
                name: `Untitled`,
                data: {
                    modified: false,
                },
            };
            editorService.open(tabData);
        }
        this.createTargetNodeById(id, tree, {
            modify: true,
        });
        if (index > -1) cloneData[index] = tree.obj;
        this.setState({
            folderTree: { ...folderTree, data: cloneData },
        });
        if (callback) callback();
    }

    public newFolder(id, callback: Function) {
        const { folderTree } = this.state;
        const cloneData: ITreeNodeItem[] = folderTree?.data || [];
        const { tree, index } = this.getCurrentRootFolderInfo(id);
        this.createTargetNodeById(id, tree, {
            fileType: FileTypes.folder as FileType,
            modify: true,
        });
        if (index > -1) cloneData[index] = tree.obj;
        this.setState({
            folderTree: { ...folderTree, data: cloneData },
        });
        if (callback) callback();
    }

    public onDropTree = (treeData: ITreeNodeItem[]) => {
        this.setState({
            folderTree: Object.assign(this.state.folderTree?.data, {
                data: treeData,
            }),
        });
    };
}
