import { BaseController } from 'mo/glue';
import { EditorEvent } from 'mo/models/editor';
import { SettingsEvent } from 'mo/models/setting';
import { BuiltinService } from 'mo/services/builtin';
import { ContextMenuService } from 'mo/services/contextMenu';
import { EditorService } from 'mo/services/editor';
import { LayoutService } from 'mo/services/layout';
import type {
    ContextMenuGroupHandler,
    ContextMenuWithItemHandler,
    IDragProps,
    UniqueId,
} from 'mo/types';
import type { editor } from 'monaco-editor';
import { inject, injectable } from 'tsyringe';

type EditorContextMenu = ContextMenuWithItemHandler<[tabId: UniqueId, groupId: UniqueId]>;

export interface IEditorController extends BaseController {
    onMount?: (tabId: UniqueId, groupId: UniqueId, model: editor.ITextModel) => void;
    onPaneSizeChange?: (size: number[]) => void;
    onSelectTab?: (tabId: UniqueId, group: UniqueId) => void;
    onFocus?: (instance: editor.IStandaloneCodeEditor) => void;
    onCloseTab?: (tabId: UniqueId, groupId: UniqueId) => void;
    onDrag?: (params: IDragProps) => void;
    onChange?: (
        value: string | undefined,
        ev: editor.IModelContentChangedEvent,
        extraProps: { tabId?: UniqueId; groupId?: UniqueId }
    ) => void;
    onCursorSelection?: (
        instance: editor.IStandaloneCodeEditor,
        ev: editor.ICursorSelectionChangedEvent
    ) => void;
    onContextMenu?: EditorContextMenu;
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
        const { EDITOR_TOOLBAR } = this.builtin.getModules();
        if (EDITOR_TOOLBAR) {
            this.editor.addActions(EDITOR_TOOLBAR);
        }
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
        this.emit(EditorEvent.onSelectTab, tabId, groupId);
    };

    public onFocus = (instance: editor.IStandaloneCodeEditor) => {
        this.emit(EditorEvent.onFocus, instance);
    };

    public onCloseTab: IEditorController['onCloseTab'] = (tabId, groupId) => {
        this.emit(EditorEvent.onCloseTab, tabId, groupId);
    };

    public onDrag: IEditorController['onDrag'] = (props) => {
        this.emit(EditorEvent.onMoveTab, props);
    };

    public onCursorSelection = (
        instance: editor.IStandaloneCodeEditor,
        ev: editor.ICursorSelectionChangedEvent
    ) => {
        this.emit(EditorEvent.onCursorSelection, instance, ev);
    };

    public onContextMenu: EditorContextMenu = (pos, tabId, groupId) => {
        this.emit(EditorEvent.onContextMenu, pos, tabId, groupId);
    };

    // ActionBar callback
    public onToolbarClick?: ContextMenuGroupHandler | undefined = (item, groupId) => {
        this.emit(EditorEvent.onToolbarClick, item, groupId);
    };

    // Editor value onChange callback
    public onChange = (
        value: string | undefined,
        ev: editor.IModelContentChangedEvent,
        extraProps: { tabId?: UniqueId; groupId?: UniqueId }
    ) => {
        if (extraProps.tabId === this.builtin.getState().constants.EDITOR_ITEM_SETTING) {
            this.emit(SettingsEvent.OnChange, value);
        }

        this.emit(EditorEvent.onChangeTab, value, ev, extraProps);
    };
}
