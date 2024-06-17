import { isUndefined } from 'lodash-es';
import { BaseService } from 'mo/glue';
import { FolderTreeEvent, FolderTreeModel } from 'mo/models/folderTree';
import {
    ContextMenuHandler,
    FileTypes,
    FocusEventHandler,
    type IMenuItemProps,
    InputValidateInfo,
    type KeyboardEventHandler,
    Predict,
    type RequiredId,
    type UniqueId,
} from 'mo/types';
import { searchById } from 'mo/utils';
import { TreeHelper, TreeNodeModel } from 'mo/utils/tree';
import { injectable } from 'tsyringe';

@injectable()
export class FolderTreeService extends BaseService<FolderTreeModel> {
    protected state: FolderTreeModel;

    constructor() {
        super('folderTree');
        this.state = new FolderTreeModel();
    }

    public addLoading(id: UniqueId) {
        this.dispatch((draft) => {
            draft.loadingKeys.push(id);
        });
    }

    public removeLoading(id?: UniqueId) {
        this.dispatch((draft) => {
            if (isUndefined(id)) {
                draft.loadingKeys = [];
                return;
            }
            const idx = draft.loadingKeys.indexOf(id);
            if (idx === -1) return;
            draft.loadingKeys.splice(idx, 1);
        });
    }

    public get<T>(id: UniqueId): TreeNodeModel<T> | undefined {
        if (!this.getState().data.length) return;
        const treeHelper = new TreeHelper(this.getState().data);
        return treeHelper.getNode(id);
    }

    public getParentNode<T>(id: UniqueId): TreeNodeModel<T> | undefined {
        if (!this.getState().data.length) return;
        const treeHelper = new TreeHelper(this.getState().data);
        return treeHelper.getParent(id);
    }

    private addRootFolder(data: TreeNodeModel<any>) {
        this.dispatch((draft) => {
            if (draft.data?.length) return;
            draft.data = [data];
        });
    }

    public add(data: TreeNodeModel<any>, id?: UniqueId): void {
        const isRootFolder = data.fileType === FileTypes.RootFolder;

        if (isRootFolder) {
            this.addRootFolder(data);
            return;
        }
        if (isUndefined(id)) throw new Error('File node or folder node both need id');
        this.dispatch((draft) => {
            const treeHelper = new TreeHelper(draft.data);
            const target = treeHelper.getNode(id);
            if (!target) return;
            target.children ??= [];
            target.children.push(data);
        });
    }

    public remove(id: UniqueId) {
        this.dispatch((draft) => {
            const treeHelper = new TreeHelper(draft.data);
            const parent = treeHelper.getParent(id);
            const idx = parent?.children?.findIndex(searchById(id));
            if (idx === undefined || idx === -1) return;
            parent?.children?.splice(idx, 1);
        });
    }

    public update<T>(id: UniqueId, predict: Predict<TreeNodeModel<T>>): void;
    public update<T>(data: RequiredId<TreeNodeModel<T>>): void;
    public update<T>(item: UniqueId | RequiredId<TreeNodeModel<any>>, predict?: Predict<TreeNodeModel<T>>) {
        this.dispatch((draft) => {
            const treeHelper = new TreeHelper(draft.data);
            const node = treeHelper.getNode(typeof item === 'object' ? item.id : item);
            if (!node) return;
            Object.assign(node, typeof item === 'object' ? item : predict?.(node));
        });

        // ===================== effects =====================
        this.emit(FolderTreeEvent.onUpdate, this.get(typeof item === 'object' ? item.id : item));
    }

    public drop(sourceId: UniqueId, targetId: UniqueId) {
        const source = this.get(sourceId);
        if (!source) return;
        const target = this.get(targetId);
        // ONLY Support drop source node into a folder.
        if (!target || target.fileType === FileTypes.File) return;
        /**
         * 1. Remove source node.
         * 2. Create new source node, before target.
         * Required first remove node, and then add node.
         */
        this.remove(sourceId);
        this.add(source, target.id);
    }

    public setCurrent(id?: UniqueId) {
        this.emit(FolderTreeEvent.onCurrentChange, this.getCurrent(), id);
        this.dispatch((draft) => {
            draft.current = id;
        });
    }

    public getCurrent() {
        return this.getState().current;
    }

    public getExpanded() {
        return this.getState().expandedKeys;
    }

    public addExpanded(id: UniqueId) {
        this.dispatch((draft) => {
            draft.expandedKeys.push(id);
        });
    }

    public removeExpanded(id?: UniqueId) {
        this.dispatch((draft) => {
            if (isUndefined(id)) {
                draft.expandedKeys = [];
                return;
            }
            const idx = draft.expandedKeys.indexOf(id);
            if (idx === -1) return;
            draft.expandedKeys.splice(idx, 1);
        });
    }

    public toggleExpanded(id: UniqueId) {
        if (this.getExpanded().includes(id)) {
            this.removeExpanded(id);
        } else {
            this.addExpanded(id);
        }
    }

    public setValidateInfo(message?: string | InputValidateInfo) {
        this.dispatch((draft) => {
            draft.validateInfo = typeof message === 'string' ? { status: 'info', message } : message;
        });
    }

    public setEntry(entry: React.ReactNode) {
        this.dispatch((draft) => {
            draft.entry = entry;
        });
    }

    public setEditing(id?: UniqueId) {
        this.dispatch((draft) => {
            draft.editing = id;
        });
    }

    public reset() {
        this.setState(new FolderTreeModel());
    }

    // ===================== Subscriptions =====================
    public onRename<T = any>(callback: (ele: HTMLTextAreaElement, treeNode: TreeNodeModel<T>) => void) {
        this.subscribe(FolderTreeEvent.onRename, callback);
    }

    public onRemove(callback: (id: UniqueId) => void) {
        this.subscribe(FolderTreeEvent.onDelete, callback);
    }

    public onSelect<T = any>(callback: (treeNode: TreeNodeModel<T>) => void) {
        this.subscribe(FolderTreeEvent.onSelect, callback);
    }

    public onContextMenu = <T = any>(callback: ContextMenuHandler<[treeNode: TreeNodeModel<T>]>) => {
        this.subscribe(FolderTreeEvent.onContextMenu, callback);
    };

    public onContextMenuClick<T = any>(callback: (item: IMenuItemProps, treeNode: TreeNodeModel<T>) => void): void {
        this.subscribe(FolderTreeEvent.onContextMenuClick, callback);
    }

    public onExpand = <T = any>(
        callback: (expanded: boolean, expandKeys: UniqueId[], treeNode: TreeNodeModel<T>) => void
    ) => {
        this.subscribe(FolderTreeEvent.onExpand, callback);
    };

    public onKeyDown(callback: KeyboardEventHandler<HTMLElement>): void {
        this.subscribe(FolderTreeEvent.onKeyDown, callback);
    }

    public onCreateRoot(callback: (e: React.MouseEvent<Element, MouseEvent>) => void): void {
        this.subscribe(FolderTreeEvent.onCreateRoot, callback);
    }

    public onUpdate<T = any>(callback: (data: RequiredId<TreeNodeModel<T>>) => void): void {
        this.subscribe(FolderTreeEvent.onUpdate, callback);
    }

    public onBlur(callback: FocusEventHandler<HTMLElement>): void {
        this.subscribe(FolderTreeEvent.onBlur, callback);
    }

    public onLoad(callback: (id: UniqueId) => void): void {
        this.subscribe(FolderTreeEvent.onLoad, callback);
    }

    public onDragStart<T = any>(callback: (source: TreeNodeModel<T>) => void): void {
        this.subscribe(FolderTreeEvent.onDragStart, callback);
    }

    public onDragOver = <T = any>(callback: (source: TreeNodeModel<T>, target: TreeNodeModel<T>) => void) => {
        this.subscribe(FolderTreeEvent.onDragOver, callback);
    };

    public onDragEnd<T = any>(callback: (source: TreeNodeModel<T>) => void): void {
        this.subscribe(FolderTreeEvent.onDragEnd, callback);
    }

    public onDrop = <T = any>(callback: (source: TreeNodeModel<T>, target: TreeNodeModel<T>) => void) => {
        this.subscribe(FolderTreeEvent.onDrop, callback);
    };

    public onCurrentChange(callback: (prev: UniqueId, next: UniqueId) => void) {
        this.subscribe(FolderTreeEvent.onCurrentChange, callback);
    }
}
