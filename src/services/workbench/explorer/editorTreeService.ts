import { IActionBarItemProps, IMenuItemProps, ITabProps } from 'mo/components';
import { IEditor, IEditorTab } from 'mo/model';
import { EditorTreeEvent } from 'mo/model/workbench/explorer/editorTree';
import { Component } from 'mo/react';
import { EditorService } from 'mo/services';
import { container, singleton } from 'tsyringe';
import { UniqueId } from 'mo/common/types';

export interface IEditorTreeService extends Component<IEditor> {
    /**
     * Callabck for close a certain tab
     * @param callback
     */
    onClose(callback: (tabId: UniqueId, groupId: UniqueId) => void): void;
    /**
     * Callback for close others tabs except this tabItem
     * @param callback
     */
    onCloseOthers(
        callback: (tabItem: IEditorTab, groupId: UniqueId) => void
    ): void;
    /**
     * Callback for close saved tabs in this group
     * @param callback
     */
    onCloseSaved(callback: (groupId: UniqueId) => void): void;
    /**
     * Callback for select tab in this group
     * @param callback
     */
    onSelect(callback: (tabId: UniqueId, groupId: UniqueId) => void): void;
    /**
     * Callback for close all tabs
     * When specify groupId, it'll close that group
     * @param callback
     */
    onCloseAll(callback: (groupId?: UniqueId) => void): void;
    /**
     * Callback for save all tabs
     * When specify groupId, it'll save that group
     * @param callback
     */
    onSaveAll(callback: (groupId?: UniqueId) => void): void;
    /**
     * Callback for the click event from toolbar buttons, except for saving button and closing button,
     * if you want to subscribe to the click events for these two buttons, please use the methods of `onSaveAll` and `onCloseAll`
     * @param callback
     */
    onToolbarClick(
        callback: (toolbar: IActionBarItemProps, groupId?: UniqueId) => void
    ): void;
    /**
     * Callback for adjust editor layout
     * @param callback
     */
    onLayout(callback: () => void): void;
    /**
     * Callback for context menu click event which isn't in buit-in menus
     * @param callback
     */
    onContextMenu(
        callback: (
            menu: IMenuItemProps,
            file: ITabProps,
            groupId: UniqueId
        ) => void
    ): void;
}

@singleton()
export class EditorTreeService
    extends Component<IEditor>
    implements IEditorTreeService
{
    protected state: IEditor;
    private readonly editorService: EditorService;

    constructor() {
        super();
        this.editorService = container.resolve(EditorService);
        this.state = this.editorService.getState();
    }

    public onClose(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorTreeEvent.onClose, callback);
    }

    public onCloseOthers(
        callback: (tabItem: IEditorTab, groupId: UniqueId) => void
    ) {
        this.subscribe(EditorTreeEvent.onCloseOthers, callback);
    }

    public onCloseSaved(callback: (groupId: UniqueId) => void) {
        this.subscribe(EditorTreeEvent.onCloseSaved, callback);
    }

    public onSelect(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorTreeEvent.onSelect, callback);
    }

    public onCloseAll(callback: (groupId?: UniqueId) => void) {
        this.subscribe(EditorTreeEvent.onCloseAll, callback);
    }

    public onSaveAll(callback: (groupId?: UniqueId) => void) {
        this.subscribe(EditorTreeEvent.onSaveAll, callback);
    }

    public onToolbarClick(
        callback: (toolbar: IActionBarItemProps, groupId?: UniqueId) => void
    ) {
        this.subscribe(EditorTreeEvent.onToolbarClick, callback);
    }

    public onLayout(callback: () => void) {
        this.subscribe(EditorTreeEvent.onSplitEditorLayout, callback);
    }

    public onContextMenu(
        callback: (
            menu: IMenuItemProps,
            file: ITabProps,
            groupId: UniqueId
        ) => void
    ) {
        this.subscribe(EditorTreeEvent.onContextMenu, callback);
    }
}
