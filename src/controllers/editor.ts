import { BaseController } from 'mo/glue';
import { EditorEvent } from 'mo/models/editor';
import { SettingsEvent } from 'mo/models/setting';
import type { editor } from 'mo/monaco';
import { BuiltinService } from 'mo/services/builtin';
import { EditorService } from 'mo/services/editor';
import { LayoutService } from 'mo/services/layout';
import type { ContextMenuHandler, GroupMenuHandler, TabGroup, UniqueId } from 'mo/types';
import { inject, injectable } from 'tsyringe';

type EditorContextMenu = ContextMenuHandler<[tabId: UniqueId, groupId: UniqueId]>;

export interface IEditorController extends BaseController {
    onMount?: (groupId: UniqueId, editorInstance: editor.IStandaloneCodeEditor) => void;
    onModelMount?: (tabId: UniqueId, groupId: UniqueId, model: editor.ITextModel) => void;
    onDiffEditorMount?: (groupId: UniqueId, editorInstance: editor.IStandaloneDiffEditor) => void;
    onDiffEditorModelMount?: (tabId: UniqueId, groupId: UniqueId, model: editor.IDiffEditorModel) => void;
    onPaneSizeChange?: (size: number[]) => void;
    onSelectTab?: (tabId: UniqueId, group: UniqueId) => void;
    onFocus?: (instance: editor.IStandaloneCodeEditor) => void;
    onCloseTab?: (tabId: UniqueId, groupId: UniqueId) => void;
    onDragStart?: (tabId: UniqueId, groupId: UniqueId) => void;
    onDragEnd?: (tabId: UniqueId, groupId: UniqueId) => void;
    onDragEnter?: (from: TabGroup, to: TabGroup) => void;
    onDragLeave?: (from: TabGroup, to: TabGroup) => void;
    onDragOver?: (from: TabGroup, to: TabGroup) => void;
    onDrop?: (from: TabGroup, to: TabGroup) => void;
    onChange?: (item: TabGroup & { value: string | undefined }, ev: editor.IModelContentChangedEvent) => void;
    onCursorSelection?: (instance: editor.IStandaloneCodeEditor, ev: editor.ICursorSelectionChangedEvent) => void;
    onContextMenu?: EditorContextMenu;
    onToolbarClick?: GroupMenuHandler;
}

@injectable()
export class EditorController extends BaseController implements IEditorController {
    constructor(
        @inject('layout') private layout: LayoutService,
        @inject('editor') private editor: EditorService,
        @inject('builtin') private builtin: BuiltinService
    ) {
        super();
        this.initView();
    }
    private initView() {
        const { EDITOR_TOOLBAR } = this.builtin.getModules();
        if (EDITOR_TOOLBAR) {
            this.editor.addToolbars(EDITOR_TOOLBAR);
        }
    }

    public onPaneSizeChange = (size: number[]) => {
        this.layout.setGroupSplitSize(size);
    };

    public onMount = (groupId: UniqueId, editorInstance: editor.IStandaloneCodeEditor) => {
        // Emit onChangeTab event handler
        editorInstance.onDidChangeModelContent((ev) => {
            const model = editorInstance.getModel();
            if (!model) return;
            const tab = this.editor.getGroup(groupId)?.data.find((tab) => tab.model === model);
            if (!tab) return;
            this.onChange({ value: model.getValue(), tabId: tab.id, groupId }, ev);
        });

        // Emit onFocus event handler
        editorInstance.onDidFocusEditorText(() => {
            this.onFocus(editorInstance);
        });

        // Emit onCursorSelection event handler
        editorInstance.onDidChangeCursorSelection((ev) => {
            this.onCursorSelection(editorInstance, ev);
        });

        this.editor.updateGroup({
            id: groupId,
            editorInstance,
        });

        // [NOTE]: NOT put updateGroup into onMount's callback as we don't want it could be stopped by user
        this.emit(EditorEvent.onMount, groupId, editorInstance);
    };

    public onModelMount?: (tabId: UniqueId, groupId: UniqueId, model: editor.ITextModel) => void = (
        tabId,
        groupId,
        model
    ) => {
        this.editor.updateTab(
            {
                id: tabId,
                model,
            },
            groupId
        );
        // [NOTE]: We don't want it to be stopped by user
        this.emit(EditorEvent.onModelMount, tabId, groupId, model);
    };

    public onDiffEditorMount = (groupId: UniqueId, diffEditorInstance: editor.IStandaloneDiffEditor) => {
        this.editor.updateGroup({
            id: groupId,
            diffEditorInstance,
        });
        this.emit(EditorEvent.onDiffEditorMount, groupId, diffEditorInstance);
    };

    public onDiffEditorModelMount = (tabId: UniqueId, groupId: UniqueId, model: editor.IDiffEditorModel) => {
        this.editor.updateTab(
            {
                id: tabId,
                diffEditorModel: model,
            },
            groupId
        );
        this.emit(EditorEvent.onDiffEditorModelMount, tabId, groupId, model);
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

    public onDragStart: (tabId: UniqueId, groupId: UniqueId) => void = (tabId, groupId) => {
        this.emit(EditorEvent.onDragStart, tabId, groupId);
    };

    public onDragEnd: (tabId: UniqueId, groupId: UniqueId) => void = (tabId, groupId) => {
        this.emit(EditorEvent.onDragEnd, tabId, groupId);
    };

    public onDragEnter: (from: TabGroup, to: TabGroup) => void = (from, to) => {
        this.emit(EditorEvent.onDragEnter, from, to);
    };

    public onDragLeave: (from: TabGroup, to: TabGroup) => void = (from, to) => {
        this.emit(EditorEvent.onDragLeave, from, to);
    };

    public onDragOver: (from: TabGroup, to: TabGroup) => void = (from, to) => {
        this.emit(EditorEvent.onDragOver, from, to);
    };

    public onDrop: (from: TabGroup, to: TabGroup) => void = (from, to) => {
        this.emit(EditorEvent.onDrop, from, to);
    };

    public onCursorSelection = (instance: editor.IStandaloneCodeEditor, ev: editor.ICursorSelectionChangedEvent) => {
        this.emit(EditorEvent.onCursorSelection, instance, ev);
    };

    public onContextMenu: EditorContextMenu = (pos, tabId, groupId) => {
        this.emit(EditorEvent.onContextMenu, pos, tabId, groupId);
    };

    // ActionBar callback
    public onToolbarClick?: GroupMenuHandler | undefined = (item, groupId) => {
        this.emit(EditorEvent.onToolbarClick, item, groupId);
    };

    // Editor value onChange callback
    public onChange = (item: TabGroup & { value: string | undefined }, ev: editor.IModelContentChangedEvent) => {
        if (item.tabId === this.builtin.getState().constants.EDITOR_ITEM_SETTING) {
            this.emit(SettingsEvent.OnChange, item.value);
        }

        this.emit(EditorEvent.onChange, item, ev);
    };
}
