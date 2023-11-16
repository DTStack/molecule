import { BaseController } from 'mo/glue';
import { EditorEvent } from 'mo/models/editor';
import { SettingsEvent } from 'mo/models/setting';
import { BuiltinService } from 'mo/services/builtin';
import { ContextMenuService } from 'mo/services/contextMenu';
import { EditorService } from 'mo/services/editor';
import { LayoutService } from 'mo/services/layout';
import type { ContextMenuEditorHandler, ContextMenuGroupHandler, IDragProps, UniqueId } from 'mo/types';
import type { editor } from 'monaco-editor';
import { inject, injectable } from 'tsyringe';

export interface IEditorController extends BaseController {
    onMount?: (tabId: UniqueId, groupId: UniqueId, model: editor.ITextModel) => void;
    onPaneSizeChange?: (size: number[]) => void;
    onSelectTab?: (tabId: UniqueId, group: UniqueId) => void;
    onFocus?: (instance: editor.IStandaloneCodeEditor) => void;
    onCloseTab?: (tabId: UniqueId, groupId: UniqueId) => void;
    onCloseOther?: (tabId: UniqueId, groupId: UniqueId) => void;
    onCloseToRight?: (tabId: UniqueId, groupId: UniqueId) => void;
    onCloseToLeft?: (tabId: UniqueId, groupId: UniqueId) => void;
    onCloseAll?: (groupId: UniqueId) => void;
    onSplitEditorRight?: (activeTabId: UniqueId, groupId: UniqueId) => void;
    onDrag?: (params: IDragProps) => void;
    onChange?: (value: string | undefined, ev: editor.IModelContentChangedEvent, extraProps: { tabId?: UniqueId; groupId?: UniqueId }) => void;
    onCursorSelection?: (
        instance: editor.IStandaloneCodeEditor,
        ev: editor.ICursorSelectionChangedEvent
    ) => void;
    onContextMenu?: ContextMenuEditorHandler;
    onToolbarClick?: ContextMenuGroupHandler;
}

@injectable()
export class EditorController extends BaseController implements IEditorController {
    constructor(
        @inject('layout') private layout: LayoutService,
        @inject('editor') private editor: EditorService,
        @inject('contextMenu') private contextMenu: ContextMenuService,
        @inject('builtin') private builtin: BuiltinService
    ) {
        super();
        this.initView();
    }
    private initView() {
        const { builtInEditorInitialMenu, builtInEditorInitialActions } =
            this.builtin.getState().modules;
        this.contextMenu.add('editorTab', builtInEditorInitialMenu);
        this.editor.addActions(builtInEditorInitialActions);
    }

    public onPaneSizeChange = (size: number[]) => {
        this.layout.setGroupSplitSize(size);
    };

    public onMount = (tabId: UniqueId, groupId: UniqueId, model: editor.ITextModel) => {
        const tab = this.editor.getTabById(tabId, groupId);
        if (tab) {
            tab.model = model;
            this.editor.updateTab(tab, groupId);
        }
    };

    public onSelectTab = (tabId: UniqueId, groupId: UniqueId) => {
        this.emit(EditorEvent.OnSelectTab, tabId, groupId);
    };

    public onFocus = (instance: editor.IStandaloneCodeEditor) => {
        this.emit(EditorEvent.onFocus, instance);
    };

    public onCloseTab: IEditorController['onCloseTab'] = (tabId, groupId) => {
        this.emit(EditorEvent.OnCloseTab, tabId, groupId);
    };

    public onDrag: IEditorController['onDrag'] = (props) => {
        this.emit(EditorEvent.OnMoveTab, props);
    };

    public onCloseOther: IEditorController['onCloseOther'] = (tabId, groupId) => {
        this.emit(EditorEvent.OnCloseOther, tabId, groupId);
    };

    public onCloseToLeft: IEditorController['onCloseToLeft'] = (tabId, groupId) => {
        this.emit(EditorEvent.OnCloseToLeft, tabId, groupId);
    };

    public onCloseToRight: IEditorController['onCloseToRight'] = (tabId, groupId) => {
        this.emit(EditorEvent.OnCloseToRight, tabId, groupId);
    };

    public onCloseAll: IEditorController['onCloseAll'] = (groupId) => {
        this.emit(EditorEvent.OnCloseAll, groupId);
    };

    public onCursorSelection = (
        instance: editor.IStandaloneCodeEditor,
        ev: editor.ICursorSelectionChangedEvent
    ) => {
        this.emit(EditorEvent.onCursorSelection, instance, ev);
    };

    public onContextMenu?: ContextMenuEditorHandler | undefined = (item, tabId, groupId) => {
        this.emit(EditorEvent.onContextMenu, item, tabId, groupId);
    };

    // ActionBar callback
    public onToolbarClick?: ContextMenuGroupHandler | undefined = (item, groupId) => {
        this.emit(EditorEvent.onToolbarClick, item, groupId);
    };

    // ActionBar splitEditor Right callback
    public onSplitEditorRight?: IEditorController['onSplitEditorRight'] = (activeTabId, groupId) => {
        this.emit(EditorEvent.OnSplitEditorRight, activeTabId, groupId);
    };

    // Editor value onChange callback
    public onChange = (
        value: string | undefined,
        ev: editor.IModelContentChangedEvent,
        extraProps: { tabId?: UniqueId; groupId?: UniqueId }
    ) => {
        if (extraProps.tabId === this.builtin.getState().constants.SETTING_ID) {
            this.emit(SettingsEvent.OnChange, value);
        }

        this.emit(EditorEvent.OnChangeTab, value, ev, extraProps);
    };
}
