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
    IFolderTreeSubItem,
    BASE_CONTEXT_MENU,
    FILE_CONTEXT_MENU,
} from 'mo/model/workbench/explorer/folderTree';
import { TreeViewUtil } from '../../helper';
import { ITreeNodeItemProps } from 'mo/components/tree';
import { ExplorerService, IExplorerService } from './explorerService';
import { SAMPLE_FOLDER_PANEL_ID, builtInFolderTree } from 'mo/model';
import { IMenuItemProps } from 'mo/components';
import type { LoadEventData } from 'mo/controller';

export interface IFolderTreeService extends Component<IFolderTree> {
    /**
     * Reset the FolderTreeService state
     */
    reset(): void;
    /**
     * Add data into folder tree
     * @param data
     * @param id - Except adding a root folder, the id is required
     */
    add(data: ITreeNodeItemProps, id?: number): void;
    /**
     * Remove specific data in folder tree
     * @param id
     */
    remove(id: number): void;
    /**
     * Update specific data in folder tree
     * @param data - The `id` property is required in data
     */
    update(data: ITreeNodeItemProps): void;
    /**
     * Get specific data in folder tree
     * @param id
     */
    get(id: number): ITreeNodeItemProps | null;
    /**
     * Get the context menus for file
     */
    getFileContextMenu: () => IMenuItemProps[];
    /**
     * Get the context menus for folder
     */
    getFolderContextMenu: () => IMenuItemProps[];
    /**
     * Active specific node,
     * or unactive any node in folder tree
     * @param id
     */
    setActive(id?: number): void;
    /**
     * Set a entry page for folder tree
     * @param entry
     */
    setEntry(entry: React.ReactNode): void;
    /**
     * Set the context menus for file
     * @param menus
     */
    setFileContextMenu: (menus: IMenuItemProps[]) => void;
    /**
     * Set the context menus for folder
     * @param menus
     */
    setFolderContextMenu: (menus: IMenuItemProps[]) => void;
    /**
     * Listen to event about clicking rename button
     * @param callback
     */
    onRename(callback: (id: number) => void): void;
    /**
     * Listen to remove a node
     * @param callback
     */
    onRemove(callback: (id: number) => void): void;
    /**
     * Listen to update file or folder name
     * @param callback
     */
    onUpdateFileName(callback: (file: ITreeNodeItemProps) => void): void;
    /**
     * Listen to select a file
     * @param callback
     */
    onSelectFile(callback: (file: ITreeNodeItemProps) => void): void;
    /**
     * Listen to drop event
     * @param treeData
     */
    onDropTree(
        callback: (
            source: ITreeNodeItemProps,
            target: ITreeNodeItemProps
        ) => void
    ): void;
    /**
     * Listen to right click event
     * @param callback
     */
    onRightClick(
        callback: (
            treeData: ITreeNodeItemProps,
            menus: IMenuItemProps[]
        ) => void
    ): void;
    /**
     * Listen to create a node for folder tree
     * @param callback
     */
    onCreate(callback: (type: FileType, nodeId?: number) => void): void;
    /**
     * Listen to the click event about the context menu except for built-in menus
     * @param callback
     */
    onContextMenu(
        callback: (
            contextMenu: IMenuItemProps,
            treeNode?: ITreeNodeItemProps
        ) => void
    ): void;
    /**
     * Callback for load folder tree data
     * @param callback
     */
    onLoadData(callback: (treeNode: LoadEventData) => void): void;
}

@singleton()
export class FolderTreeService
    extends Component<IFolderTree>
    implements IFolderTreeService {
    protected state: IFolderTree;
    private readonly explorerService: IExplorerService;
    private fileContextMenu: IMenuItemProps[] = FILE_CONTEXT_MENU;
    private folderContextMenu: IMenuItemProps[] = BASE_CONTEXT_MENU;

    constructor() {
        super();
        this.state = container.resolve(IFolderTreeModel);
        this.explorerService = container.resolve(ExplorerService);
    }

    public reset() {
        this.setState(builtInFolderTree as any);
    }

    public getFileContextMenu() {
        return this.fileContextMenu;
    }

    public setFileContextMenu(menus: IMenuItemProps[]) {
        this.fileContextMenu = menus;
    }

    public getFolderContextMenu() {
        return this.folderContextMenu;
    }

    public setFolderContextMenu(menus: IMenuItemProps[]) {
        this.folderContextMenu = menus;
    }

    private setCurrentFolderLocation(data: ITreeNodeItemProps, id: number) {
        const children = data.children;
        const { tree } = this.getCurrentRootFolderInfo(id);
        const parentIndex = tree.getIndex(id);

        data.location = `${parentIndex!.node!.location}/${data.name}`;
        if (children?.length) {
            children.forEach((child) => {
                child.location = `${data.location}/${child.name}`;
            });
        }
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

    private addRootFolder(folder: ITreeNodeItemProps) {
        const { folderTree } = this.state;

        if (folderTree?.data?.length) {
            // if root folder exists, then do nothing
            return;
        }
        this.setState({
            folderTree: { ...folderTree, data: [folder] },
        });

        this.explorerService.updatePanel({
            id: SAMPLE_FOLDER_PANEL_ID,
            name: folder.name || 'Default Root Folder',
        });
    }

    private getRootFolderIndex(id: number) {
        const data = this.state.folderTree?.data || [];
        const index = data.findIndex((folder) => folder.id === id);
        return index;
    }

    private getCurrentRootFolderInfo(
        id: number
    ): {
        currentRootFolder: ITreeNodeItemProps;
        index: number;
        tree: TreeViewUtil<ITreeNodeItemProps>;
    } {
        const currentRootFolder = this.getRootFolderById(id);
        const index = this.getRootFolderIndex(currentRootFolder.id!);
        const tree = new TreeViewUtil<ITreeNodeItemProps>(currentRootFolder);

        return {
            currentRootFolder,
            index,
            tree,
        };
    }

    public add(data: ITreeNodeItemProps, id?: number): void {
        const isRootFolder = data.fileType === 'RootFolder';

        if (isRootFolder) {
            this.addRootFolder(data);
            return;
        }
        if (!id && id !== 0)
            throw new Error('File node or folder node both need id');

        const cloneData = this.state.folderTree?.data || [];
        const { tree, index } = this.getCurrentRootFolderInfo(id);

        // this index is root folder index
        if (index <= -1) {
            return console.warn(
                'Please check id again, there is not folder tree'
            );
        }

        const currentIndex = tree.getIndex(id);

        if (currentIndex?.node?.fileType === FileTypes.File) {
            data.location = currentIndex.node.location.replace(
                /(?<=\/)[^\/]+$/,
                `${data.name}`
            );
            tree.prepend(data, currentIndex.parent!);
        } else {
            this.setCurrentFolderLocation(data, id);
            tree.append(data, id);
        }

        cloneData[index] = tree.obj;
        this.setState({
            folderTree: {
                ...this.state.folderTree,
                data: cloneDeep(cloneData),
            },
        });
    }

    public remove(id: number) {
        const folderTree: IFolderTreeSubItem = cloneDeep(
            this.getState().folderTree || {}
        );
        const nextData = folderTree.data || [];
        const { tree, index } = this.getCurrentRootFolderInfo(id);

        tree.remove(id);
        if (index > -1) nextData[index] = tree.obj;
        this.setState({
            folderTree,
        });
    }

    public update(data: ITreeNodeItemProps) {
        const { id, ...restData } = data;
        if (!id) throw new Error('Id is required in updating data');
        const folderTree: IFolderTreeSubItem = cloneDeep(
            this.getState().folderTree || {}
        );
        const nextData = folderTree.data || [];
        const { tree, index } = this.getCurrentRootFolderInfo(id);

        tree.update(id, restData);
        if (index > -1) nextData[index] = tree.obj;
        this.setState({
            folderTree,
        });
    }

    public get(id: number) {
        const { tree } = this.getCurrentRootFolderInfo(id);

        const node = tree.get(id);

        return node;
    }

    public setActive(id?: number) {
        const { folderTree } = this.state;

        this.setState({
            folderTree: {
                ...folderTree,
                current: id || id === 0 ? this.get(id) : null,
            },
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

    public onRemove(callback: (id: number) => void) {
        this.subscribe(FolderTreeEvent.onDelete, callback);
    }

    public onUpdateFileName(callback: (file: ITreeNodeItemProps) => void) {
        this.subscribe(FolderTreeEvent.onUpdateFileName, callback);
    }

    public onSelectFile(callback: (file: ITreeNodeItemProps) => void) {
        this.subscribe(FolderTreeEvent.onSelectFile, callback);
    }

    public onDropTree = (
        callback: (
            source: ITreeNodeItemProps,
            target: ITreeNodeItemProps
        ) => void
    ) => {
        this.subscribe(FolderTreeEvent.onDrop, callback);
    };

    public onRightClick = (
        callback: (
            treeData: ITreeNodeItemProps,
            menus: IMenuItemProps[]
        ) => void
    ) => {
        this.subscribe(FolderTreeEvent.onRightClick, callback);
    };

    public onCreate = (callback: (type: FileType, nodeId?: number) => void) => {
        this.subscribe(FolderTreeEvent.onCreate, callback);
    };

    public onContextMenu = (
        callback: (
            contextMenu: IMenuItemProps,
            treeNode?: ITreeNodeItemProps
        ) => void
    ) => {
        this.subscribe(FolderTreeEvent.onContextMenuClick, callback);
    };

    public onLoadData = (callback: (treeNode: LoadEventData) => void) => {
        this.subscribe(FolderTreeEvent.onLoadData, callback);
    };
}
