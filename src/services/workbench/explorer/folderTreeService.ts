import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    FolderTreeEvent,
    IFolderTree,
    IFolderTreeModel,
} from 'mo/model/workbench/explorer/folderTree';
import { TreeViewUtil, ITreeInstance } from '../../helper';
import { ITreeNodeItemProps, FileTypes, FileType } from 'mo/components/tree';
import { ExplorerService, IExplorerService } from './explorerService';

export interface IFolderTreeService extends Component<IFolderTree> {
    initTree?: (data: ITreeNodeItemProps[]) => void;
    onNewFile(callback: (id: number) => void);
    onNewFolder(callback: (id: number) => void);
    onRename(callback: (id: number) => void);
    onDelete(callback: (id: number) => void);
    onUpdateFileName(callback: (file: ITreeNodeItemProps) => void);
    onUpdateFileContent(callback: (id: number, value?: string) => void);
    onSelectFile(
        callback: (file: ITreeNodeItemProps, isUpdate: boolean) => void
    );
    getRootFolderByRootId(id: number): ITreeNodeItemProps | undefined;
    getRootFolderIndexByRootId(id: number): ITreeNodeItemProps | undefined;
    getCurrentRootFolderInfo?: any;
    addRootFolder(folder?: ITreeNodeItemProps | ITreeNodeItemProps[]): void;
    removeRootFolder(id: number): void;
    setActive(id?: number): void;
    onDropTree(treeData: ITreeNodeItemProps[]): void;
    getFileIconByExtensionName(name: string, fileType: FileType): void;
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

    public getFileIconByExtensionName(
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

    public getCurrentRootFolderInfo(
        id: number
    ): {
        index: number;
        currentRootFolder: ITreeNodeItemProps;
        tree: ITreeInstance;
    } {
        const currentRootFolder: ITreeNodeItemProps = this.getRootFolderById(
            id
        );
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

    public getRootFolderIndexByRootId(id: number): any {
        return this.state.folderTree?.data!.findIndex(
            (folder) => folder.id === id
        );
    }

    public getRootFolderByRootId(id: number): ITreeNodeItemProps | undefined {
        return this.state.folderTree?.data!.find((folder) => folder.id === id);
    }

    private getRootFolderById(id: number): ITreeNodeItemProps {
        let rootNode = {};
        this.state.folderTree?.data?.forEach((folder) => {
            const treeInstance = new TreeViewUtil(folder);
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

    public addRootFolder(folder: ITreeNodeItemProps | ITreeNodeItemProps[]) {
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
        this.explorerService.updateRender();
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
        this.explorerService.updateRender();
    }

    public setActive(id: number) {
        const { folderTree } = this.state;
        const { tree } = this.getCurrentRootFolderInfo(id);
        const currentNode = tree.get(id) as any;
        this.setState({
            folderTree: { ...folderTree, current: currentNode },
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
