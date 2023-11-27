import { BaseService } from 'mo/glue';
import { EditorTreeEvent } from 'mo/models/editorTree';
import type { ContextMenuEditorHandler, ContextMenuGroupHandler, UniqueId } from 'mo/types';

export interface IEditorTreeService extends BaseService<void> {
    /**
     * Callback for close tab in this group
     */
    onClose(callback: (tabId: UniqueId, groupId: UniqueId) => void): void;
    /**
     * Callback for select tab in this group
     * @param callback
     */
    onSelect(callback: (tabId: UniqueId, groupId: UniqueId) => void): void;
    /**
     * Callback for context menu click event which isn't in buit-in menus
     * @param callback
     */
    onContextMenu(callback: ContextMenuEditorHandler): void;
    onGroupContextMenu(callback: ContextMenuGroupHandler): void;
}

export class EditorTreeService extends BaseService<void> implements IEditorTreeService {
    protected state: void = undefined;

    constructor() {
        super('editorTree');
    }

    // ===================== Subscriptions =====================
    public onClose(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorTreeEvent.onClose, callback);
    }

    public onSelect(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorTreeEvent.onSelect, callback);
    }

    public onContextMenu(callback: ContextMenuEditorHandler) {
        this.subscribe(EditorTreeEvent.onContextMenu, callback);
    }

    public onGroupContextMenu(callback: ContextMenuGroupHandler) {
        this.subscribe(EditorTreeEvent.onGroupContextMenu, callback);
    }
}
