import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    FileTypes,
    FileType,
    FolderTreeEvent,
    IFolderTree,
    IFolderTreeModel,
    TreeNodeModel,
} from 'mo/model/workbench/explorer/folderTree';
import { TreeViewUtil, ITreeInstance } from '../../helper';
import { ITreeNodeItemProps } from 'mo/components/tree';
import { ExplorerService, IExplorerService } from './explorerService';
import { SAMPLE_FOLDER_PANEL_ID } from 'mo/model';

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
    /**
     * add a root folder for project
     * **Attention**, each project only has one root folder
     */
    addRootFolder(folder?: ITreeNodeItemProps | ITreeNodeItemProps[]): void;
    removeRootFolder(id: number): void;
    setActive(id?: number): void;
    onDropTree(treeData: ITreeNodeItemProps[]): void;
    getFileIconByExtensionName(name: string, fileType: FileType): void;
    /**
     * add a file or folder into file systems
     */
    addNode(data: ITreeNodeItemProps): void;
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

    private getParentNode(data: TreeNodeModel[], current: TreeNodeModel) {
        const stack: TreeNodeModel[] = [];
        if (data.find((item) => item === current)) {
            // keep same as others
            return { children: data };
        } else {
            stack.push(...data.filter((i) => i.fileType !== 'file'));
        }
        let res: TreeNodeModel | null = null;
        while (stack.length) {
            const folder = stack.shift()!;
            const target = folder.children?.find((item) => item === current);
            if (target) {
                res = folder;
                break;
            } else {
                stack.push(
                    ...(folder.children?.filter((f) => f.fileType !== 'file') ||
                        [])
                );
            }
        }
        return res;
    }

    public addNode(data: ITreeNodeItemProps): void {
        const { data: folderData = [], current } = this.state.folderTree || {};
        if (!folderData.length) {
            console.warn(
                'Please create a root folder before creating a file or folder'
            );
            return;
        }
        if (current) {
            console.log('current', current);
            if (current.fileType === 'file') {
                // add new data as a sibling of current file
                const currentParent = this.getParentNode(folderData, current);
                // currentParent is a reference type
                currentParent?.children?.push(data);
            } else {
                // add data as a child of current folder
                // current is a reference type
                current.children?.push(data);
            }
            console.log('folderData;', folderData);
            this.setState({
                folderTree: {
                    ...this.state.folderTree,
                    data: folderData,
                },
            });
        } else {
            const folders = folderData[0].children;
            folders?.push(data);
            this.setState({
                folderTree: {
                    ...this.state.folderTree,
                    data: folderData,
                },
            });
        }
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

    public addRootFolder(folder: TreeNodeModel) {
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
        this.explorerService.editPanel(
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
