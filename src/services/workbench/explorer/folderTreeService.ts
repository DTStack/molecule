import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import cloneDeep from 'lodash/cloneDeep';
import { Component } from 'mo/react/component';
import {
    FileTypes,
    FileType,
    FolderTreeEvent,
    IFolderTree,
    IFolderTreeModel,
} from 'mo/model/workbench/explorer/folderTree';
import { TreeViewUtil } from '../../helper';
import { ITreeNodeItemProps } from 'mo/components/tree';
import { ExplorerService, IExplorerService } from './explorerService';
import { SAMPLE_FOLDER_PANEL_ID } from 'mo/model';

export interface IFolderTreeService extends Component<IFolderTree> {
    initTree?: (data: ITreeNodeItemProps[]) => void;
    onNewFile(callback: (id: number) => void);
    onNewFolder(callback: (id: number) => void);
    onNewRootFolder(callback: (id: number) => void);
    onRename(callback: (id: number) => void);
    onDelete(callback: (id: number) => void);
    onUpdateFileName(callback: (file: ITreeNodeItemProps) => void);
    onUpdateFileContent(callback: (id: number, value?: string) => void);
    onSelectFile(
        callback: (file: ITreeNodeItemProps, isUpdate: boolean) => void
    );
    getRootFolderByRootId(id: number): ITreeNodeItemProps | undefined;
    /**
     * Returns the index of the root folder with equals id
     */
    getRootFolderIndexByRootId(id: number): number;
    /**
     * Returns an object within
     * - the node of current root folder
     * - the index of current root folder
     * - the instance of current root folder
     */
    getCurrentRootFolderInfo(
        id: number
    ): {
        currentRootFolder: ITreeNodeItemProps;
        index: number;
        tree: TreeViewUtil<ITreeNodeItemProps>;
    };
    /**
     * add a root folder for project
     * **Attention**, each project only has one root folder
     */
    addRootFolder(folder?: ITreeNodeItemProps): void;
    removeRootFolder(id: number): void;
    setActive(id?: number): void;
    setEntry(entry: React.ReactNode): void;
    onDropTree(treeData: ITreeNodeItemProps[]): void;
    getFileIconByExtensionName(name: string, fileType: FileType): string;
    /**
     * insert `data` into foder tree in where the `id` is
     */
    addNode(id: number, data: ITreeNodeItemProps): void;
}

@singleton()
export class FolderTreeService
    extends Component<IFolderTree>
    implements IFolderTreeService {
    protected state: IFolderTree;
    private readonly explorerService: IExplorerService;

    constructor() {
        super();
        this.state = container.resolve(IFolderTreeModel);
        this.explorerService = container.resolve(ExplorerService);
    }

    public addNode(id: number, data: ITreeNodeItemProps): void {
        const cloneData = this.state.folderTree?.data || [];
        const { tree, index } = this.getCurrentRootFolderInfo(id);
        // this index is root folder index
        if (index > -1) {
            const currentIndex = tree.getIndex(id);
            if (currentIndex?.node?.fileType === FileTypes.File) {
                const locations = currentIndex.node.location.split('/');
                locations[locations.length - 1] = data.name;
                data.location = locations.join('/');
                tree.prepend(data, currentIndex.parent!);
            } else {
                data.location = `${currentIndex!.node!.location}/${data.name}`;
                tree.append(data, id);
            }
            cloneData[index] = tree.obj;
            this.setState({
                folderTree: {
                    ...this.state.folderTree,
                    data: cloneDeep(cloneData),
                },
            });
        } else {
            console.warn('Please check id again, there is not folder tree');
        }
    }

    public getFileIconByExtensionName(
        name: string,
        fileType: FileType
    ): string {
        if (fileType === FileTypes.Folder) return '';
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

    public getCurrentRootFolderInfo(
        id: number
    ): {
        currentRootFolder: ITreeNodeItemProps;
        index: number;
        tree: TreeViewUtil<ITreeNodeItemProps>;
    } {
        const currentRootFolder = this.getRootFolderById(id);
        const index = this.getRootFolderIndexByRootId(currentRootFolder.id!);
        const tree = new TreeViewUtil<ITreeNodeItemProps>(currentRootFolder);
        return {
            currentRootFolder,
            index,
            tree,
        };
    }

    public getRootFolderIndexByRootId(id: number) {
        const index = this.state.folderTree?.data!.findIndex(
            (folder) => folder.id === id
        );
        return typeof index === 'number' ? index : -1;
    }

    public getRootFolderByRootId(id: number): ITreeNodeItemProps | undefined {
        return this.state.folderTree?.data!.find((folder) => folder.id === id);
    }

    /**
     * Returns the node of root folder in folderTree
     */
    private getRootFolderById(id: number) {
        let rootNode: ITreeNodeItemProps = {};
        this.state.folderTree?.data?.forEach((folder) => {
            const treeInstance = new TreeViewUtil<ITreeNodeItemProps>(folder);
            if (treeInstance.get(id)) rootNode = folder;
        });
        return rootNode;
    }

    public initTree = (tree: ITreeNodeItemProps[]) => {
        const { folderTree } = this.state;
        this.setState({
            folderTree: { ...folderTree, data: tree },
        });
    };

    public addRootFolder(folder: ITreeNodeItemProps) {
        const { folderTree } = this.state;
        const {} = this.explorerService;
        if (folderTree?.data?.length) {
            // if root folder exists, then do nothing
            return;
        }
        this.setState({
            folderTree: { ...folderTree, data: [folder] },
        });
        const { data = [] } = this.explorerService.getState();
        this.explorerService.updatePanel(
            data.map((item) => {
                if (item.id === SAMPLE_FOLDER_PANEL_ID) {
                    item.name = folder.name || 'Default Root Folder';
                }
                return item;
            })
        );
    }

    public removeRootFolder(id: number) {
        const { folderTree } = this.state;
        const next = [...folderTree?.data!];
        const index = this.getRootFolderIndexByRootId(id);
        if (index > -1) {
            next.splice(index, 1);
        }
        this.setState({
            folderTree: { ...folderTree, data: next },
        });
        this.explorerService.render();
    }

    public setActive(id: number) {
        const { folderTree } = this.state;
        const { tree } = this.getCurrentRootFolderInfo(id);
        const currentNode = tree.get(id) as any;
        this.setState({
            folderTree: { ...folderTree, current: currentNode },
        });
    }

    public setEntry(entry: React.ReactNode) {
        this.setState({
            entry,
        });
    }

    public onRename(callback: (id: number) => void) {
        this.subscribe(FolderTreeEvent.onRename, callback);
    }

    public onDelete(callback: (id: number) => void) {
        this.subscribe(FolderTreeEvent.onDelete, callback);
    }

    public onNewFile(callback: (id: number) => void) {
        this.subscribe(FolderTreeEvent.onNewFile, callback);
    }

    public onNewRootFolder(callback: (id: number) => void) {
        this.subscribe(FolderTreeEvent.onNewRootFolder, callback);
    }

    public onNewFolder(callback: (id: number) => void) {
        this.subscribe(FolderTreeEvent.onNewFolder, callback);
    }

    public onUpdateFileName(callback: (file: ITreeNodeItemProps) => void) {
        this.subscribe(FolderTreeEvent.onUpdateFileName, callback);
    }

    public onUpdateFileContent(callback: (id: number, value?: string) => void) {
        this.subscribe(FolderTreeEvent.onUpdateFileContent, callback);
    }

    public onSelectFile(
        callback: (file: ITreeNodeItemProps, isUpdate: boolean) => void
    ) {
        this.subscribe(FolderTreeEvent.onSelectFile, callback);
    }

    public onDropTree = (treeData: ITreeNodeItemProps[]) => {
        this.setState({
            folderTree: Object.assign(this.state.folderTree?.data, {
                data: treeData,
            }),
        });
    };
}
