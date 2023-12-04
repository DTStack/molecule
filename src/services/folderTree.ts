import { BaseService } from 'mo/glue';
import { FolderTreeEvent, FolderTreeModel } from 'mo/models/folderTree';
import type { IMenuItemProps, KeyboardEventHandler, UniqueId } from 'mo/types';
import logger from 'mo/utils/logger';
import { loopTreeAddNode, loopTreeRemoveNode, TreeHelper, TreeNodeModel } from 'mo/utils/tree';
import { injectable } from 'tsyringe';

export interface IFolderTreeService extends BaseService<FolderTreeModel> {
    /**
     * Reset the FolderTreeService state
     */
    reset(): void;
    /**
     * Add data into folder tree
     * @param data
     * @param id - Except adding a root folder, the id is required
     */
    add(data: TreeNodeModel<any>, id?: UniqueId): void;
    /**
     * Remove specific data in folder tree
     * @param id
     */
    remove(id: UniqueId): void;
    /**
     * Update specific data in folder tree
     * @param data - The `id` property is required in data
     */
    update<T>(data: TreeNodeModel<T>): void;
    /**
     * Get specific data in folder tree
     * @param id
     */
    get<T>(id: UniqueId): TreeNodeModel<T> | undefined;
    /**
     * get the current treeNode's parentNode
     * @param id
     */
    getParentNode<T>(id: UniqueId): TreeNodeModel<T> | undefined;
    /**
     * Get the expandKeys in folderTree
     */
    getExpandKeys: () => UniqueId[];
    /**
     * Set the expandKeys for folderTree
     */
    setExpandKeys: (expandKeys: UniqueId[]) => void;
    /**
     * Get the loadedKeys for folderTree
     */
    getLoadedKeys: () => UniqueId[];
    /**
     * Set the loadedKeys for folderTree
     */
    setLoadedKeys: (loadedKeys: UniqueId[]) => void;
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
     * Get the context menus for file
     */
    getFileContextMenu: () => IMenuItemProps[];
    /**
     * Get the context menus for folder
     */
    getFolderContextMenu: () => IMenuItemProps[];
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
     * Set editing FolderTree item
     * @param id itemId
     */
    setEditing: (id: UniqueId) => void;
    /**
     * update data when drop tree
     * @param source dragNode
     * @param target dropNode
     */
    dropTree: (source: TreeNodeModel<any>, target: TreeNodeModel<any>) => void;
    /**
     * Listen to event about onKeyDown file item
     * @params callback
     */
    onTreeItemKeyDown(callback: KeyboardEventHandler): void;
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
    onUpdateFileName(callback: (file: TreeNodeModel<any>) => void): void;
    /**
     * Listen to select a file
     * @param callback
     */
    onSelectFile(callback: (file: TreeNodeModel<any>) => void): void;
    /**
     * Listen to drop event
     * @param treeData
     */
    onDropTree(
        callback: (source: TreeNodeModel<any>, target: TreeNodeModel<any>) => void
    ): void;
    /**
     * Listen to right click event
     * @param callback
     */
    onRightClick(callback: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, treeData: TreeNodeModel<any>) => void): void;
    /**
     * Listen to create a node for folder tree
     * @param callback
     */
    onCreate(callback: (data: TreeNodeModel<any>, nodeId?: UniqueId) => void): void;
    /**
     * Listen to the click event about the context menu except for built-in menus
     * @param callback
     */
    onContextMenu(
        callback: (contextMenuItem: IMenuItemProps, treeNode?: TreeNodeModel<any>) => void
    ): void;
    /**
     * Callback for load folder tree data
     * @param callback
     */
    onLoadData(
        callback: (
            treeNode: TreeNodeModel<any>,
            callback: (treeNode: TreeNodeModel<any>) => void
        ) => void
    ): void;
    /**
     * Callback for expanding tree node
     * @param callback
     */
    onExpandKeys(callback: (expandKeys: UniqueId[]) => void): void;
    /**
     * Callback of the Add Button when data is none
     */
    onCreateRoot: (callback: (e: React.MouseEvent<Element, MouseEvent>) => void) => void;
}

@injectable()
export class FolderTreeService extends BaseService<FolderTreeModel> implements IFolderTreeService {
    protected state: FolderTreeModel;

    constructor() {
        super('folderTree');
        this.state = new FolderTreeModel();
    }

    public reset() {
        this.setState(new FolderTreeModel());
    }

    public getParentNode<T>(id: UniqueId): TreeNodeModel<T> | undefined {
        const { data } = this.getState();
        const helper = new TreeHelper(data);
        const parent = helper.getParent(id);
        return parent;
    }

    public getFileContextMenu() {
        return this.getState().fileContextMenu;
    }

    public setFileContextMenu(menus: IMenuItemProps[]) {
        this.setState({
            fileContextMenu: menus,
        });
    }

    public getFolderContextMenu() {
        return this.getState().folderContextMenu;
    }

    public setFolderContextMenu(menus: IMenuItemProps[]) {
        this.setState({
            folderContextMenu: menus,
        });
    }

    public getExpandKeys() {
        return this.getState().expandKeys;
    }

    public setExpandKeys(expandKeys: UniqueId[]) {
        this.setState({
            expandKeys,
        });
    }

    public getLoadedKeys() {
        return this.getState().loadedKeys;
    }

    public setLoadedKeys(loadedKeys: UniqueId[]) {
        this.setState({
            loadedKeys,
        });
    }

    private addRootFolder(data: TreeNodeModel<any>) {
        if (this.getState().data?.length) {
            // if root folder exists, then do nothing
            return;
        }
        this.setState({
            data: [data],
        });
    }

    public add(data: TreeNodeModel<any>, id?: UniqueId): void {
        const isRootFolder = data.fileType === 'RootFolder';

        if (isRootFolder) {
            this.addRootFolder(data);
            return;
        }
        if (!id && id !== 0) throw new Error('File node or folder node both need id');

        const treeHelper = new TreeHelper(this.getState().data);
        const target = treeHelper.getParent(id);
        if (!target) {
            logger.error('Please check id again, there is not folder tree');
            return;
        }
        target.children ??= [];
        target.children.push(data);
        this.setState((prev) => ({
            ...prev,
            data: [...prev.data],
        }));
    }

    public remove(id: UniqueId) {
        if (!this.getState().data.length) {
            logger.error(`There is unable to find a tree node whose id is ${id}`);
            return;
        }
        const treeHelper = new TreeHelper(this.getState().data);
        const parent = treeHelper.getParent(id);
        const node = treeHelper.getNode(id);
        if (!node) {
            logger.error(`There is unable to find a tree node whose id is ${id}`);
            return;
        }
        if (!parent) {
            logger.error("You Can't remove a root folder");
            return;
        }
        parent.children = parent.children?.filter((i) => i !== node) || [];
        this.setState((prev) => ({
            ...prev,
            data: [...prev.data],
        }));

        // ===================== effects =====================
        const { expandKeys, loadedKeys } = this.getState();
        this.setExpandKeys(expandKeys.filter((i) => i !== id));
        this.setLoadedKeys(loadedKeys.filter((i) => i !== id));
    }

    public update(data: TreeNodeModel<any>) {
        const { id, ...restData } = data;
        if (!id && id !== 0) {
            logger.error('Id is required in updating data');
            return;
        }
        if (!this.getState().data.length) {
            logger.error(`There is unable to find a tree node whose id is ${id}`);
            return;
        }
        const treeHelper = new TreeHelper(this.getState().data);
        const target = treeHelper.getNode(data.id);
        if (!target) {
            logger.error(`There is unable to find a tree node whose id is ${id}`);
            return;
        }
        Object.assign(target, restData);
        this.setState((prev) => ({
            ...prev,
            data: [...prev.data],
            editing: undefined,
        }));
    }

    public dropTree(source: TreeNodeModel<any>, target: TreeNodeModel<any>) {
        const { data = [] } = this.getState();
        const cpData = [...data];
        /**
         * 1. Remove source node.
         * 2. Create new source node, before target.
         * Required first remove node, and then add node.
         */
        loopTreeRemoveNode({ tree: cpData, source });
        loopTreeAddNode({ tree: cpData, source, target });
        this.setState({ data: cpData });
    };

    public get(id: UniqueId) {
        if (!this.getState().data.length) return;
        const treeHelper = new TreeHelper(this.getState().data);
        return treeHelper.getNode(id);
    }

    public setActive(id?: UniqueId) {
        this.setState({
            current: id,
        });
    }

    public setEntry(entry: React.ReactNode) {
        this.setState({
            entry,
        });
    }

    public setEditing(id: UniqueId) {
        this.setState({ editing: id });
    };

    // ===================== Subscriptions =====================
    public onRename(callback: (id: UniqueId) => void) {
        this.subscribe(FolderTreeEvent.onRename, callback);
    }

    public onRemove(callback: (id: UniqueId) => void) {
        this.subscribe(FolderTreeEvent.onDelete, callback);
    }

    public onUpdateFileName(callback: (file: TreeNodeModel<any>) => void) {
        this.subscribe(FolderTreeEvent.onUpdateFileName, callback);
    }

    public onSelectFile(callback: (file: TreeNodeModel<any>) => void) {
        this.subscribe(FolderTreeEvent.onSelectFile, callback);
    }

    public onDropTree = (
        callback: (source: TreeNodeModel<any>, target: TreeNodeModel<any>) => void
    ) => {
        this.subscribe(FolderTreeEvent.onDrop, callback);
    };

    public onRightClick = (
        callback: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, treeData: TreeNodeModel<any>) => void
    ) => {
        this.subscribe(FolderTreeEvent.onRightClick, callback);
    };

    public onCreate = (callback: (data: TreeNodeModel<any>, nodeId?: UniqueId) => void) => {
        this.subscribe(FolderTreeEvent.onCreate, callback);
    };

    public onContextMenu = (
        callback: (contextMenu: IMenuItemProps, treeNode?: TreeNodeModel<any>) => void
    ) => {
        this.subscribe(FolderTreeEvent.onContextMenuClick, callback);
    };

    public onLoadData = (
        callback: (
            treeNode: TreeNodeModel<any>,
            callback: (treeNode: TreeNodeModel<any>) => void
        ) => void
    ) => {
        this.subscribe(FolderTreeEvent.onLoadData, callback);
    };

    public onExpandKeys = (callback: (expandKeys: UniqueId[]) => void) => {
        this.subscribe(FolderTreeEvent.onExpandKeys, callback);
    };

    public onTreeItemKeyDown(callback: KeyboardEventHandler): void {
        this.subscribe(FolderTreeEvent.onTreeItemKeyDown, callback);
    }

    public onCreateRoot(callback: (e: React.MouseEvent<Element, MouseEvent>) => void): void {
        this.subscribe(FolderTreeEvent.onCreateRoot, callback);
    };
}
