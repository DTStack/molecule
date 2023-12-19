import { BaseService } from 'mo/glue';
import { FolderTreeEvent, FolderTreeModel } from 'mo/models/folderTree';
import {
    ContextMenuWithItemHandler,
    FileTypes,
    FocusEventHandler,
    type FolderTreeInsertOption,
    type IMenuItemProps,
    InputValidateInfo,
    type KeyboardEventHandler,
    type RequiredId,
    type UniqueId,
} from 'mo/types';
import logger from 'mo/utils/logger';
import { TreeHelper, TreeNodeModel } from 'mo/utils/tree';
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
    update<T>(data: RequiredId<TreeNodeModel<T>>): void;
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
    setValidateInfo: (message: string | InputValidateInfo) => void;
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
     * Set editing FolderTree item
     * @param id itemId
     */
    setEditing: (id?: UniqueId) => void;
    addLoading: (id: UniqueId) => void;
    removeLoading: (id: UniqueId) => void;
    addExpanded: (id: UniqueId) => void;
    removeExpanded: (id: UniqueId) => void;
    toggleExpanded: (id: UniqueId) => void;
    /**
     * update data when drop tree
     * @param source dragNode
     * @param target dropNode
     */
    drop: (sourceId: UniqueId, targetId: UniqueId) => void;
    /**
     * Listen to event about onKeyDown file item
     * @params callback
     */
    onKeyDown(callback: KeyboardEventHandler<HTMLElement>): void;
    /**
     * Listen to event about clicking rename button
     * @param callback
     */
    onRename(callback: (ele: HTMLTextAreaElement, treeNode: TreeNodeModel<any>) => void): void;
    /**
     * Listen to remove a node
     * @param callback
     */
    onRemove(callback: (id: UniqueId) => void): void;
    onSelect(callback: (treeNode: TreeNodeModel<any>) => void): void;

    onContextMenu(callback: ContextMenuWithItemHandler<[treeNode: TreeNodeModel<any>]>): void;
    /**
     * Listen to the click event about the context menu except for built-in menus
     * @param callback
     */
    onContextMenuClick(
        callback: (item: IMenuItemProps, treeNode: TreeNodeModel<any>) => void
    ): void;
    /**
     * Callback for expanding tree node
     * @param callback
     */
    onExpand(
        callback: (expanded: boolean, expandKeys: UniqueId[], treeNode: TreeNodeModel<any>) => void
    ): void;
    /**
     * Callback of the Add Button when data is none
     */
    onCreateRoot: (callback: (e: React.MouseEvent<Element, MouseEvent>) => void) => void;
    onUpdate: <T>(callback: (data: RequiredId<TreeNodeModel<T>>) => void) => void;
    onBlur: (callback: FocusEventHandler<HTMLElement>) => void;
    onLoad: (callback: (id: UniqueId) => void) => void;
    onDragStart: (callback: (source: TreeNodeModel<any>) => void) => void;
    onDragOver: (
        callback: (source: TreeNodeModel<any>, target: TreeNodeModel<any>) => void
    ) => void;
    onDragEnd: (callback: (source: TreeNodeModel<any>) => void) => void;
    /**
     * Listen to drop event
     * @param treeData
     */
    onDrop(callback: (source: TreeNodeModel<any>, target: TreeNodeModel<any>) => void): void;
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

    public addLoading: (id: UniqueId) => void = (id) => {
        this.setState((prev) => ({
            ...prev,
            loadingKeys: [...prev.loadingKeys, id],
        }));
    };

    public removeLoading: (id: UniqueId) => void = (id) => {
        this.setState((prev) => ({
            ...prev,
            loadingKeys: prev.loadingKeys.filter((i) => i !== id),
        }));
    };

    public getParentNode<T>(id: UniqueId): TreeNodeModel<T> | undefined {
        const { data } = this.getState();
        const helper = new TreeHelper(data);
        const parent = helper.getParent(id);
        return parent;
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

    public add(data: TreeNodeModel<any>, id?: UniqueId, opts?: FolderTreeInsertOption): void {
        const isRootFolder = data.fileType === FileTypes.RootFolder;

        if (isRootFolder) {
            this.addRootFolder(data);
            return;
        }
        if (!id && id !== 0) throw new Error('File node or folder node both need id');

        const treeHelper = new TreeHelper(this.getState().data);
        const target = treeHelper.getNode(id);
        if (!opts?.gap) {
            // same level
            const targetParent = treeHelper.getParent(id);
            if (!targetParent) {
                logger.error('Please check id again, there is not folder tree');
                return;
            }
            targetParent.children ??= [];
            if (!Object.hasOwn(opts || {}, 'index')) {
                targetParent.children.push(data);
            } else {
                targetParent.children.splice(opts?.index || 0, 0, data);
            }
        } else {
            // child level
            if (target?.fileType === FileTypes.File) {
                throw new Error('File node can not use Folder');
            }
            if (target) {
                target.children ??= [];
            }
            if (!Object.hasOwn(opts || {}, 'index')) {
                target?.children?.push(data);
            } else {
                target?.children?.splice(opts?.index || 0, 0, data);
            }
        }
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
    }

    public update(data: RequiredId<TreeNodeModel<any>>) {
        const target = this.get(data.id);
        if (!target) {
            logger.error(`There is unable to find a tree node whose id is ${data.id}`);
            return;
        }
        Object.assign(target, data);
        this.setState((prev) => ({
            ...prev,
            data: [...prev.data],
        }));

        // ===================== effects =====================
        this.emit(FolderTreeEvent.onUpdate, data);
    }

    public drop(sourceId: UniqueId, targetId: UniqueId) {
        const source = this.get(sourceId);
        if (!source) return;
        const target = this.get(targetId);
        if (!target || target.fileType === FileTypes.File) return;
        /**
         * 1. Remove source node.
         * 2. Create new source node, before target.
         * Required first remove node, and then add node.
         */
        this.remove(sourceId);
        this.add(source, target?.id, { gap: true });
    }

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

    public addExpanded(id: UniqueId) {
        this.setState((prev) => ({
            expandedKeys: [...prev.expandedKeys, id],
        }));
    }

    public removeExpanded(id: UniqueId) {
        this.setState((prev) => ({
            expandedKeys: prev.expandedKeys.filter((i) => i !== id),
        }));
    }

    public toggleExpanded(id: UniqueId) {
        if (this.getState().expandedKeys.includes(id)) {
            this.removeExpanded(id);
        } else {
            this.addExpanded(id);
        }
    }

    public setValidateInfo(message?: string | InputValidateInfo) {
        this.setState({
            validateInfo: typeof message === 'string' ? { status: 'info', message } : message,
        });
    }

    public setEntry(entry: React.ReactNode) {
        this.setState({
            entry,
        });
    }

    public setEditing(id?: UniqueId) {
        this.setState({ editing: id });
    }

    // ===================== Subscriptions =====================
    public onRename(callback: (ele: HTMLTextAreaElement, treeNode: TreeNodeModel<any>) => void) {
        this.subscribe(FolderTreeEvent.onRename, callback);
    }

    public onRemove(callback: (id: UniqueId) => void) {
        this.subscribe(FolderTreeEvent.onDelete, callback);
    }

    public onSelect(callback: (treeNode: TreeNodeModel<any>) => void) {
        this.subscribe(FolderTreeEvent.onSelect, callback);
    }

    public onContextMenu = (
        callback: ContextMenuWithItemHandler<[treeNode: TreeNodeModel<any>]>
    ) => {
        this.subscribe(FolderTreeEvent.onContextMenu, callback);
    };

    public onContextMenuClick(
        callback: (item: IMenuItemProps, treeNode: TreeNodeModel<any>) => void
    ): void {
        this.subscribe(FolderTreeEvent.onContextMenuClick, callback);
    }

    public onExpand = (
        callback: (expanded: boolean, expandKeys: UniqueId[], treeNode: TreeNodeModel<any>) => void
    ) => {
        this.subscribe(FolderTreeEvent.onExpand, callback);
    };

    public onKeyDown(callback: KeyboardEventHandler<HTMLElement>): void {
        this.subscribe(FolderTreeEvent.onKeyDown, callback);
    }

    public onCreateRoot(callback: (e: React.MouseEvent<Element, MouseEvent>) => void): void {
        this.subscribe(FolderTreeEvent.onCreateRoot, callback);
    }

    public onUpdate<T>(callback: (data: RequiredId<TreeNodeModel<T>>) => void): void {
        this.subscribe(FolderTreeEvent.onUpdate, callback);
    }

    public onBlur(callback: FocusEventHandler<HTMLElement>): void {
        this.subscribe(FolderTreeEvent.onBlur, callback);
    }

    public onLoad(callback: (id: UniqueId) => void): void {
        this.subscribe(FolderTreeEvent.onLoad, callback);
    }

    public onDragStart(callback: (source: TreeNodeModel<any>) => void): void {
        this.subscribe(FolderTreeEvent.onDragStart, callback);
    }

    public onDragOver = (
        callback: (source: TreeNodeModel<any>, target: TreeNodeModel<any>) => void
    ) => {
        this.subscribe(FolderTreeEvent.onDragOver, callback);
    };

    public onDragEnd(callback: (source: TreeNodeModel<any>) => void): void {
        this.subscribe(FolderTreeEvent.onDragEnd, callback);
    }

    public onDrop = (
        callback: (source: TreeNodeModel<any>, target: TreeNodeModel<any>) => void
    ) => {
        this.subscribe(FolderTreeEvent.onDrop, callback);
    };
}
