import { BaseService } from 'mo/glue';
import type { EditorGroupModel } from 'mo/models/editor';
import { EditorTreeEvent, EditorTreeModel } from 'mo/models/editorTree';
import type {
    Arraylize,
    ContextMenuHandler,
    GroupMenuHandler,
    IEditorTab,
    IMenuItemProps,
    RequiredId,
    UniqueId,
} from 'mo/types';
import { arraylize, searchById } from 'mo/utils';

type ContextMenuType = ContextMenuHandler<[group: EditorGroupModel, tab?: IEditorTab<any>]>;

export class EditorTreeService extends BaseService<EditorTreeModel> {
    protected state: EditorTreeModel;

    constructor() {
        super('editorTree');
        this.state = new EditorTreeModel();
    }

    public getToolbar(id: UniqueId) {
        return this.state.toolbar.find(searchById(id));
    }

    public addToolbar(toolbar: Arraylize<IMenuItemProps>) {
        this.dispatch((draft) => {
            draft.toolbar.push(...arraylize(toolbar));
        });
    }

    public updateToolbar(toolbar: RequiredId<IMenuItemProps>) {
        this.dispatch((draft) => {
            const target = draft.toolbar.find(searchById(toolbar.id));
            if (target) {
                Object.assign(target, toolbar);
            }
        });
    }

    public removeToolbar(id: UniqueId): void {
        this.dispatch((draft) => {
            const idx = draft.toolbar.findIndex(searchById(id));
            if (idx !== -1) draft.toolbar.splice(idx, 1);
        });
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

    public onToolbarClick(callback: GroupMenuHandler): void {
        this.subscribe(EditorTreeEvent.onToolbarClick, callback);
    }
}
