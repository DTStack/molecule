import { BaseService } from 'mo/glue';
import type { EditorGroupModel } from 'mo/models/editor';
import { EditorTreeEvent, EditorTreeModel, IEditorTree } from 'mo/models/editorTree';
import type {
    ArraylizeOrSingle,
    ContextMenuGroupHandler,
    ContextMenuWithItemHandler,
    IEditorTab,
    IMenuItemProps,
    RequiredId,
    UniqueId,
} from 'mo/types';
import { arraylize, searchById } from 'mo/utils';

type ContextMenuType = ContextMenuWithItemHandler<[group: EditorGroupModel, tab?: IEditorTab<any>]>;

export interface IEditorTreeService extends BaseService<IEditorTree> {
    addToolbar(toolbar: ArraylizeOrSingle<IMenuItemProps>): void;
    updateToolbar(toolbar: RequiredId<IMenuItemProps>): void;
    getToolbar(id: UniqueId): IMenuItemProps | undefined;
    removeToolbar(id: UniqueId): void;
    /**
     * Callback for close tab in this group
     */
    onClose(callback: (tabId: UniqueId, groupId: UniqueId) => void): void;
    /**
     * Callback for select tab in this group
     * @param callback
     */
    onSelect(callback: (tabId: UniqueId, groupId: UniqueId) => void): void;
    onGroupClick(callback: (groupId: UniqueId) => void): void;
    onContextMenu(callback: ContextMenuType): void;
    onToolbarClick(callback: ContextMenuGroupHandler): void;
}

export class EditorTreeService extends BaseService<IEditorTree> implements IEditorTreeService {
    protected state: IEditorTree;

    constructor() {
        super('editorTree');
        this.state = new EditorTreeModel();
    }

    public getToolbar(id: UniqueId) {
        return this.state.toolbar.find(searchById(id));
    }

    public addToolbar(toolbar: ArraylizeOrSingle<IMenuItemProps>) {
        const toolbars = arraylize(toolbar);
        this.setState((prev) => ({ ...prev, toolbar: [...prev.toolbar, ...toolbars] }));
    }

    public updateToolbar(toolbar: RequiredId<IMenuItemProps>) {
        this.setState((prev) => {
            const target = this.getToolbar(toolbar.id);
            if (target) {
                Object.assign(target, toolbar);
            }
            return { ...prev };
        });
    }

    public removeToolbar(id: UniqueId): void {
        this.setState((prev) => ({ ...prev, toolbar: prev.toolbar.filter((t) => t.id !== id) }));
    }

    // ===================== Subscriptions =====================
    public onClose(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorTreeEvent.onClose, callback);
    }

    public onGroupClick(callback: (groupId: UniqueId) => void): void {
        this.subscribe(EditorTreeEvent.onGroupClick, callback);
    }

    public onSelect(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorTreeEvent.onSelect, callback);
    }

    public onContextMenu(callback: ContextMenuType) {
        this.subscribe(EditorTreeEvent.onContextMenu, callback);
    }

    public onToolbarClick(callback: ContextMenuGroupHandler): void {
        this.subscribe(EditorTreeEvent.onToolbarClick, callback);
    }
}
