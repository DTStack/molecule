import { BaseController } from 'mo/glue';
import { EditorEvent, type IEditorTab } from 'mo/models/editor';
import { BuiltinService } from 'mo/services/builtin';
import { ContextMenuService } from 'mo/services/contextMenu';
import { EditorService } from 'mo/services/editor';
import { LayoutService } from 'mo/services/layout';
import type { ContextMenuEditorHandler, ContextMenuGroupHandler, UniqueId } from 'mo/types';
import { searchById } from 'mo/utils';
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
    onMoveTab?: (params: { tabs: IEditorTab<any>[]; groupId?: UniqueId, tabId?: UniqueId }) => void;
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

    public onCloseTab = (tabId: UniqueId, groupId: UniqueId) => {
        this.emit(EditorEvent.OnCloseTab, tabId, groupId);
        this.editor.closeTab(tabId, groupId);
    };

    public onMoveTab: IEditorController['onMoveTab'] = ({ groupId, tabs, tabId }) => {
        this.emit(EditorEvent.OnMoveTab, tabs, groupId);
        // moveTab set dragTab is activeTab
        this.editor.updateGroup(groupId!, { data: tabs, activeTab: tabId, dragHoverTab: undefined });
    };

    public onCloseOther: IEditorController['onCloseOther'] = (tabId, groupId) => {
        this.emit(EditorEvent.OnCloseOther, tabId, groupId);
        this.editor.closeOther(tabId, groupId);
    };

    public onCloseToLeft: IEditorController['onCloseToLeft'] = (tabId, groupId) => {
        this.emit(EditorEvent.OnCloseToLeft, tabId, groupId);
        this.editor.closeToLeft(tabId, groupId);
    };

    public onCloseToRight: IEditorController['onCloseToRight'] = (tabId, groupId) => {
        this.emit(EditorEvent.OnCloseToRight, tabId, groupId);
        this.editor.closeToRight(tabId, groupId);
    };

    public onCloseAll: IEditorController['onCloseAll'] = (groupId) => {
        this.emit(EditorEvent.OnCloseAll, groupId);
        this.editor.closeAll(groupId);
    };

    public onCursorSelection = (
        instance: editor.IStandaloneCodeEditor,
        ev: editor.ICursorSelectionChangedEvent
    ) => {
        this.emit(EditorEvent.onCursorSelection, instance, ev);
    };

    public onContextMenu?: ContextMenuEditorHandler | undefined = (item, tabId, groupId) => {
        this.emit(EditorEvent.onContextMenu, item, tabId, groupId);
        const {
            EDITOR_MENU_CLOSE,
            EDITOR_MENU_CLOSE_ALL,
            EDITOR_MENU_CLOSE_OTHERS,
            // EDITOR_MENU_CLOSE_SAVED,
            EDITOR_MENU_CLOSE_TO_LEFT,
            EDITOR_MENU_CLOSE_TO_RIGHT,
        } = this.builtin.getState().constants;
        switch (item.id) {
            case EDITOR_MENU_CLOSE:
                this.onCloseTab?.(tabId, groupId);
                break;
            case EDITOR_MENU_CLOSE_OTHERS:
                this.onCloseOther?.(tabId, groupId);
                break;
            case EDITOR_MENU_CLOSE_TO_RIGHT:
                this.onCloseToRight?.(tabId, groupId);
                break;
            case EDITOR_MENU_CLOSE_TO_LEFT:
                this.onCloseToLeft?.(tabId, groupId);
                break;
            case EDITOR_MENU_CLOSE_ALL:
                this.onCloseAll?.(groupId);
                break;
            default:
                break;
        };
    };

    public onToolbarClick?: ContextMenuGroupHandler | undefined = (item, groupId) => {
        this.emit(EditorEvent.onToolbarClick, item, groupId);
        const {
            EDITOR_MENU_SPLIT,
            EDITOR_MENU_CLOSE_ALL,
        } = this.builtin.getState().constants;

    switch (item.id) {
        case EDITOR_MENU_SPLIT: {
            const group = this.editor.getGroupById(groupId);
            if (!group || !group.activeTab) return;
            this.editor.cloneTab(group.activeTab, group.id);
            break;
        }
        case EDITOR_MENU_CLOSE_ALL: {
            this.editor.closeAll(groupId);
            break;
        }
        default:
            break;
    }
    };

    public onChange = (value: string | undefined, ev: editor.IModelContentChangedEvent, extraProps: { tabId?: UniqueId; groupId?: UniqueId }) => {
        const { tabId, groupId } = extraProps;
        const { groups } = this.editor.getState();
        const groupIndex = groups.findIndex?.(searchById(groupId as UniqueId));
        if (groupIndex === -1) return;
        this.editor.setState({
            groups: groups.map((groupItem) => {
                if (groupItem.id !== groupId) return groupItem;
                return {
                    ...groupItem,
                    data: groupItem?.data?.map?.((tabItem) => {
                        if (tabItem.id !== tabId) return tabItem;
                        return {
                            ...tabItem,
                            // TODO use hash compare
                            modified: tabItem.value !== value,
                        };
                    }),
                };
            }),
        });
    };
}
