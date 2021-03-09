import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    IPanelItem,
    IExplorer,
    IExplorerModel,
} from 'mo/model/workbench/explorer';
import { TreeViewUtil } from '../helper';
import { ITreeNodeItem, FileTypes, FileType } from 'mo/components/tree';
import { editorService } from 'mo';
import { TreeNodeModel } from 'mo/model';

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

    public remove(index: number) {
        const { data } = this.state;
        const next = [...data!];
        if (index > -1) {
            next.splice(index, 1);
        }
        this.setState({
            data: next,
        });
    }

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

    private getCurrentRootFolderAndIndex(id: number) {
        const currentRootFolder: ITreeNodeItem = this.getRootFolderById(id);
        const index = this.getRootFolderIndexByRootId(
            (currentRootFolder as any).id
        ) as number;
        return {
            index,
            currentRootFolder,
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
        const { currentRootFolder } = this.getCurrentRootFolderAndIndex(id);
        const tree = new TreeViewUtil(currentRootFolder);
        const currentNode = tree.get(id);
        this.setState({
            folderTree: { ...folderTree, current: currentNode },
        });
    }

    public updateFile(file, callback) {
        const { folderTree } = this.state;
        const { id, name, fileType } = file;
        const cloneData: ITreeNodeItem[] = folderTree?.data || [];
        const { currentRootFolder, index } = this.getCurrentRootFolderAndIndex(
            id
        );
        const tree = new TreeViewUtil(currentRootFolder);
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

    public rename(id: number, callback?: Function) {
        const { folderTree } = this.state;
        const cloneData: ITreeNodeItem[] = folderTree?.data || [];
        const { currentRootFolder, index } = this.getCurrentRootFolderAndIndex(
            id
        );
        const tree = new TreeViewUtil(currentRootFolder);
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
        const { currentRootFolder, index } = this.getCurrentRootFolderAndIndex(
            id
        );
        const tree = new TreeViewUtil(currentRootFolder);
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
        const { currentRootFolder, index } = this.getCurrentRootFolderAndIndex(
            id
        );
        const tree = new TreeViewUtil(currentRootFolder);
        if (!id) {
            const tabData = {
                id: `${Math.random() * 10 + 1}`,
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
        const { currentRootFolder, index } = this.getCurrentRootFolderAndIndex(
            id
        );
        const tree = new TreeViewUtil(currentRootFolder);
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
