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
    IFolderTreeNodeProps,
} from 'mo/model/workbench/explorer/folderTree';
import { TreeViewUtil } from '../../../common/treeUtil';
import { ExplorerService, IExplorerService } from './explorerService';
import { IMenuItemProps } from 'mo/components';
import logger from 'mo/common/logger';
import { BuiltinService, IBuiltinService } from 'mo/services';
import type { UniqueId } from 'mo/common/types';

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
    add(data: IFolderTreeNodeProps, id?: UniqueId): void;
    /**
     * Remove specific data in folder tree
     * @param id
     */
    remove(id: UniqueId): void;
    /**
     * Update specific data in folder tree
     * @param data - The `id` property is required in data
     */
    update(data: IFolderTreeNodeProps): void;
    /**
     * Get specific data in folder tree
     * @param id
     */
    get(id: UniqueId): IFolderTreeNodeProps | null;
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
    setActive(id?: UniqueId): void;
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
    onRename(callback: (id: UniqueId) => void): void;
    /**
     * Listen to remove a node
     * @param callback
     */
    onRemove(callback: (id: UniqueId) => void): void;
    /**
     * Listen to update file or folder name
     * @param callback
     */
    onUpdateFileName(callback: (file: IFolderTreeNodeProps) => void): void;
    /**
     * Listen to select a file
     * @param callback
     */
    onSelectFile(callback: (file: IFolderTreeNodeProps) => void): void;
    /**
     * Listen to drop event
     * @param treeData
     */
    onDropTree(
        callback: (
            source: IFolderTreeNodeProps,
            target: IFolderTreeNodeProps
        ) => void
    ): void;
    /**
     * Listen to right click event
     * @param callback
     */
    onRightClick(
        callback: (
            treeData: IFolderTreeNodeProps,
            menus: IMenuItemProps[]
        ) => void
    ): void;
    /**
     * Listen to create a node for folder tree
     * @param callback
     */
    onCreate(callback: (type: FileType, nodeId?: UniqueId) => void): void;
    /**
     * Listen to the click event about the context menu except for built-in menus
     * @param callback
     */
    onContextMenu(
        callback: (
            contextMenu: IMenuItemProps,
            treeNode?: IFolderTreeNodeProps
        ) => void
    ): void;
    /**
     * Callback for load folder tree data
     * @param callback
     */
    onLoadData(
        callback: (
            treeNode: IFolderTreeNodeProps,
            callback: (treeNode: IFolderTreeNodeProps) => void
        ) => void
    ): void;
}

@singleton()
export class FolderTreeService
    extends Component<IFolderTree>
    implements IFolderTreeService {
    protected state: IFolderTree;
    private readonly explorerService: IExplorerService;
    private readonly builtinService: IBuiltinService;
    private fileContextMenu: IMenuItemProps[] = [];
    private folderContextMenu: IMenuItemProps[] = [];

    constructor() {
        super();
        this.state = container.resolve(IFolderTreeModel);
        this.explorerService = container.resolve(ExplorerService);
        this.builtinService = container.resolve(BuiltinService);
    }

    public reset() {
        this.setState({
            folderTree: {
                contextMenu: [],
                current: null,
                folderPanelContextMenu: [],
                data: [],
            },
            entry: undefined,
        });
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

    private setCurrentFolderLocation(data: IFolderTreeNodeProps, id: UniqueId) {
        const children = data.children;
        const { tree } = this.getCurrentRootFolderInfo(id);
        // The tree exist in certainly, because it was prejudged in the previous processing
        const parentIndex = tree!.getHashMap(id);

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
    private getRootFolderById(id: UniqueId) {
        const stateData = this.state.folderTree?.data || [];
        for (let index = 0; index < stateData.length; index++) {
            const folder = stateData[index];
            const treeInstance = new TreeViewUtil<IFolderTreeNodeProps>(folder);
            if (treeInstance.getNode(id)) {
                return folder;
            }
        }
        return null;
    }

    private addRootFolder(folder: IFolderTreeNodeProps) {
        const { folderTree } = this.state;

        if (folderTree?.data?.length) {
            // if root folder exists, then do nothing
            return;
        }
        this.setState({
            folderTree: { ...folderTree, data: [folder] },
        });

        const { SAMPLE_FOLDER_PANEL_ID } = this.builtinService.getConstants();

        this.explorerService.updatePanel({
            id: SAMPLE_FOLDER_PANEL_ID,
            name: folder.name || 'Default Root Folder',
        });
    }

    private getRootFolderIndex(id: UniqueId) {
        const data = this.state.folderTree?.data || [];
        const index = data.findIndex((folder) => folder.id === id);
        return index;
    }

    private getCurrentRootFolderInfo(id: UniqueId) {
        const currentRootFolder = this.getRootFolderById(id);
        if (!currentRootFolder) {
            return {
                currentRootFolder: null,
                index: -1,
                tree: null,
            };
        }
        const index = this.getRootFolderIndex(currentRootFolder.id!);
        const tree = new TreeViewUtil<IFolderTreeNodeProps>(currentRootFolder);

        return {
            currentRootFolder,
            index,
            tree,
        };
    }

    public add(data: IFolderTreeNodeProps, id?: UniqueId): void {
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
            logger.error('Please check id again, there is not folder tree');
            return;
        }

        const currentIndex = tree!.getHashMap(id)!;

        if (currentIndex.node.fileType === FileTypes.File) {
            data.location =
                currentIndex.node.location?.replace(
                    /(?<=\/)[^\/]+$/,
                    `${data.name}`
                ) || '';
            tree!.prepend(data, currentIndex.parent!);
        } else {
            this.setCurrentFolderLocation(data, id);
            tree!.append(data, id);
        }

        cloneData[index] = tree!.obj;
        this.setState({
            folderTree: {
                ...this.state.folderTree,
                data: cloneDeep(cloneData),
            },
        });
    }

    public remove(id: UniqueId) {
        const folderTree: IFolderTreeSubItem = cloneDeep(
            this.getState().folderTree || {}
        );
        const nextData = folderTree.data || [];
        const { tree, index } = this.getCurrentRootFolderInfo(id);
        if (!tree || index === -1) {
            logger.error(
                `There is unable to find a tree node whose id is ${id}`
            );
            return;
        }

        tree.removeNode(id);
        if (index > -1) nextData[index] = tree.obj;
        this.setState({
            folderTree,
        });
    }

    public update(data: IFolderTreeNodeProps) {
        const { id, ...restData } = data;
        if (!id) throw new Error('Id is required in updating data');
        const folderTree: IFolderTreeSubItem = cloneDeep(
            this.getState().folderTree || {}
        );
        const nextData = folderTree.data || [];
        const { tree, index } = this.getCurrentRootFolderInfo(id);

        if (!tree) {
            logger.error(
                `There is unable to find a tree node whose id is ${id}`
            );
            return;
        }
        tree.updateNode(id, restData);
        if (index > -1) nextData[index] = tree.obj;
        this.setState({
            folderTree,
        });
    }

    public get(id: UniqueId) {
        const { tree } = this.getCurrentRootFolderInfo(id);

        if (!tree) {
            return null;
        }
        const node = tree.getNode(id);

        return node;
    }

    public setActive(id?: UniqueId) {
        const { folderTree } = this.state;

        const pendingActiveNode =
            typeof id === 'undefined' ? null : this.get(id);

        this.setState({
            folderTree: {
                ...folderTree,
                current: pendingActiveNode,
            },
        });
    }

    public setEntry(entry: React.ReactNode) {
        this.setState({
            entry,
        });
    }

    public onRename(callback: (id: UniqueId) => void) {
        this.subscribe(FolderTreeEvent.onRename, callback);
    }

    public onRemove(callback: (id: UniqueId) => void) {
        this.subscribe(FolderTreeEvent.onDelete, callback);
    }

    public onUpdateFileName(callback: (file: IFolderTreeNodeProps) => void) {
        this.subscribe(FolderTreeEvent.onUpdateFileName, callback);
    }

    public onSelectFile(callback: (file: IFolderTreeNodeProps) => void) {
        this.subscribe(FolderTreeEvent.onSelectFile, callback);
    }

    public onDropTree = (
        callback: (
            source: IFolderTreeNodeProps,
            target: IFolderTreeNodeProps
        ) => void
    ) => {
        this.subscribe(FolderTreeEvent.onDrop, callback);
    };

    public onRightClick = (
        callback: (
            treeData: IFolderTreeNodeProps,
            menus: IMenuItemProps[]
        ) => void
    ) => {
        this.subscribe(FolderTreeEvent.onRightClick, callback);
    };

    public onCreate = (
        callback: (type: FileType, nodeId?: UniqueId) => void
    ) => {
        this.subscribe(FolderTreeEvent.onCreate, callback);
    };

    public onContextMenu = (
        callback: (
            contextMenu: IMenuItemProps,
            treeNode?: IFolderTreeNodeProps
        ) => void
    ) => {
        this.subscribe(FolderTreeEvent.onContextMenuClick, callback);
    };

    public onLoadData = (
        callback: (
            treeNode: IFolderTreeNodeProps,
            callback: (treeNode: IFolderTreeNodeProps) => void
        ) => void
    ) => {
        this.subscribe(FolderTreeEvent.onLoadData, callback);
    };
}
