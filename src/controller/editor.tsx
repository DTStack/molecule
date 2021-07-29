import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import * as React from 'react';

import {
    EditorEvent,
    IEditorTab,
    EDITOR_MENU_CLOSE,
    EDITOR_MENU_CLOSE_OTHERS,
    EDITOR_MENU_CLOSE_TO_RIGHT,
    EDITOR_MENU_CLOSE_TO_LEFT,
    EDITOR_MENU_CLOSE_ALL,
    IEditorActionsProps,
    EDITOR_MENU_SHOW_OPENEDITORS,
    EDITOR_MENU_SPILIT,
} from 'mo/model/workbench/editor';
import {
    MENU_FILE_UNDO,
    MENU_FILE_REDO,
    menuActionRegistrar,
} from 'mo/model/workbench/menuBar';
import { Controller } from 'mo/react/controller';
import { IMenuItemProps } from 'mo/components/menu';
import { STATUS_EDITOR_INFO } from 'mo/model/workbench/statusBar';
import { IMonacoEditorProps } from 'mo/components/monaco';
import { editor as MonacoEditor, Uri } from 'mo/monaco';

import {
    EditorService,
    ExplorerService,
    IEditorService,
    IExplorerService,
    IStatusBarService,
    StatusBarService,
} from 'mo/services';

export interface IEditorController {
    groupSplitPos?: string[];
    open?<T = any>(tab: IEditorTab<T>, groupId?: number): void;
    onClickContextMenu?: (
        e: React.MouseEvent,
        item: IMenuItemProps,
        tabItem?: IEditorTab
    ) => void;
    onCloseAll?: (group: number) => void;
    onCloseTab?: (tabId: string, group: number) => void;
    onCloseToLeft?: (tab: IEditorTab, group: number) => void;
    onCloseToRight?: (tab: IEditorTab, group: number) => void;
    onCloseOthers?: (tab: IEditorTab, group: number) => void;
    onCloseSaved?: (group: number) => void;
    onChangeEditorProps?: (
        preProps: IMonacoEditorProps,
        nextProps: IMonacoEditorProps
    ) => void;
    onMoveTab?: <T = any>(updateTabs: IEditorTab<T>[], group: number) => void;
    onSelectTab?: (tabId: string, group: number) => void;
    onClickActions: (action: IEditorActionsProps) => void;
    onUpdateEditorIns?: (editorInstance: any, groupId: number) => void;
    onPaneSizeChange?: (newSize: number) => void;
}
@singleton()
export class EditorController extends Controller implements IEditorController {
    // Group Pos locate here temporary, we can move it to state or localStorage in future.
    public groupSplitPos: string[] = [];
    private editorStates = new Map();
    private readonly editorService: IEditorService;
    private readonly statusBarService: IStatusBarService;
    private readonly explorerService: IExplorerService;
    private _actionAutomaton = {
        [MENU_FILE_UNDO]: (editorInstance: IStandaloneCodeEditor, id: string) =>
            this.actionForUndoOrReDo(editorInstance, id),
        [MENU_FILE_REDO]: (editorInstance: IStandaloneCodeEditor, id: string) =>
            this.actionForUndoOrReDo(editorInstance, id),
    };

    constructor() {
        super();
        this.editorService = container.resolve(EditorService);
        this.statusBarService = container.resolve(StatusBarService);
        this.explorerService = container.resolve(ExplorerService);
    }

    public open<T>(tab: IEditorTab<any>, groupId?: number) {
        this.editorService.open<T>(tab, groupId);
    }

    public onClickContextMenu = (
        e: React.MouseEvent,
        item: IMenuItemProps,
        tabItem?: IEditorTab<any>
    ) => {
        const menuId = item?.id;
        const tabId = tabItem?.id!;
        const { current } = this.editorService.getState();
        const groupId = current?.id!;
        switch (menuId) {
            case EDITOR_MENU_CLOSE: {
                this.onCloseTab(tabId, groupId);
                break;
            }
            case EDITOR_MENU_CLOSE_OTHERS: {
                this.onCloseOthers(tabItem!, groupId);
                break;
            }
            case EDITOR_MENU_CLOSE_ALL: {
                this.onCloseAll(groupId);
                break;
            }
            case EDITOR_MENU_CLOSE_TO_RIGHT: {
                this.onCloseToRight(tabItem!, groupId);
                break;
            }
            case EDITOR_MENU_CLOSE_TO_LEFT: {
                this.onCloseToLeft(tabItem!, groupId);
                break;
            }
            default: {
                this.emit(EditorEvent.onActionsClick, menuId, current);
            }
        }
    };

    public onCloseAll = (groupId: number) => {
        this.editorService.closeAll(groupId);
        this.emit(EditorEvent.OnCloseAll, groupId);
    };

    public onCloseTab = (tabId?: string, groupId?: number) => {
        if (tabId && groupId) {
            this.editorService.closeTab(tabId, groupId);
            this.explorerService.forceUpdate();
            this.emit(EditorEvent.OnCloseTab, tabId, groupId);
        }
    };

    public onCloseToRight = (tabItem: IEditorTab, groupId: number) => {
        this.editorService.closeToRight(tabItem, groupId);
        this.emit(EditorEvent.OnCloseToRight, tabItem, groupId);
    };

    public onCloseToLeft = (tabItem: IEditorTab, groupId: number) => {
        this.editorService.closeToLeft(tabItem, groupId);
        this.emit(EditorEvent.OnCloseToLeft, tabItem, groupId);
    };

    public onCloseOthers = (tabItem: IEditorTab, groupId: number) => {
        this.editorService.closeOthers(tabItem, groupId);
        this.emit(EditorEvent.OnCloseOthers, tabItem, groupId);
    };

    public onMoveTab = (updateTabs: IEditorTab<any>[], groupId: number) => {
        this.editorService.updateGroup(groupId, {
            data: updateTabs,
        });
        this.emit(EditorEvent.OnMoveTab, updateTabs, groupId);
    };

    public onSelectTab = (tabId: string, groupId: number) => {
        this.editorService.setActive(groupId, tabId);
        this.emit(EditorEvent.OnSelectTab, tabId, groupId);
    };

    /**
     * Called when open a new group
     */
    public onUpdateEditorIns = (
        editorInstance: MonacoEditor.IStandaloneCodeEditor,
        groupId: number
    ) => {
        if (!editorInstance) return;

        this.initEditorEvents(editorInstance, groupId);
        this.registerActions(editorInstance);
        this.editorService.updateGroup(groupId, {
            editorInstance: editorInstance,
        });
        this.editorService.updateCurrentGroup({ editorInstance });

        const { current } = this.editorService.getState();
        const tab = current?.tab;

        this.openTab(
            editorInstance,
            tab?.id!,
            tab?.data?.value!,
            tab?.data?.language!
        );
    };

    private actionForUndoOrReDo = (
        editorInstance: IStandaloneCodeEditor,
        id: string
    ) => {
        editorInstance!.focus();
        if (!document.execCommand(id)) {
            editorInstance?.getModel()?.[id]();
        }
    };

    // Register actions not included in monaco actions
    private registerActions = (editorInstance: IStandaloneCodeEditor) => {
        menuActionRegistrar.forEach(({ id, label }) => {
            editorInstance?.addAction({
                id,
                label,
                run: () => this._actionAutomaton[id](editorInstance, id),
            });
        });
    };

    public onClickActions = (action: IEditorActionsProps) => {
        const { current } = this.editorService.getState();
        if (!current) return;

        switch (action.id) {
            case EDITOR_MENU_CLOSE_ALL: {
                this.onCloseAll(current.id!);
                break;
            }
            case EDITOR_MENU_SHOW_OPENEDITORS: {
                // TODO
                break;
            }
            case EDITOR_MENU_SPILIT: {
                this.editorService.cloneGroup();
                this.emit(EditorEvent.OnSplitEditorRight);
                break;
            }
            default: {
                this.emit(EditorEvent.onActionsClick, action.id, current);
            }
        }
    };

    public onPaneSizeChange = (newSize) => {
        this.groupSplitPos = newSize;
    };

    private initEditorEvents(
        editorInstance: MonacoEditor.IStandaloneCodeEditor,
        groupId: number
    ) {
        if (!editorInstance) return;

        editorInstance.onDidChangeModelContent((event: any) => {
            const { current } = this.editorService.getState();
            const tab = current?.tab;
            if (!tab) return;

            const newValue = editorInstance.getModel()?.getValue();
            const updatedTab = {
                ...tab,
                data: { ...tab.data, value: newValue },
            };

            this.editorService.updateTab(updatedTab, groupId);
            this.updateStatusBar(editorInstance);

            this.emit(EditorEvent.OnUpdateTab, updatedTab);
        });

        editorInstance.onDidFocusEditorText(() => {
            const group = this.editorService.getGroupById(groupId);
            if (group?.tab!.id) {
                this.editorService.setActive(groupId, group.tab.id);
                this.updateEditorLineColumnInfo(editorInstance);
            }
        });

        editorInstance.onDidChangeCursorSelection(() => {
            this.updateEditorLineColumnInfo(editorInstance);
        });
    }

    /**
     * Called when Editor props changed
     */
    public onChangeEditorProps = (
        prevProps: IMonacoEditorProps,
        props: IMonacoEditorProps
    ) => {
        const { path, options } = props;
        if (prevProps?.path !== path) {
            const { current } = this.editorService.getState();
            const editorInstance = current?.editorInstance;

            this.editorStates.set(
                prevProps.path,
                editorInstance?.saveViewState()
            );
            this.openTab(
                editorInstance,
                path!,
                options?.value!,
                options?.language!
            );
        }
    };

    /**
     * Open a tab via instance.
     * Actually, one tab to one Model, so that
     * - the action to open a exist tab equals to switch the model in instance
     * - the action to open a new tab equals to create a new model in instance
     */
    private openTab(
        editorInstance: MonacoEditor.IStandaloneCodeEditor,
        path: string,
        value: string,
        language: string
    ) {
        let model = MonacoEditor.getModel(Uri.parse(path));
        if (!model) {
            model = MonacoEditor.createModel(value, language, Uri.parse(path));
        }

        // 1. switch model
        editorInstance.setModel(model);
        // 2. Restore view state
        const editorState = this.editorStates.get(path);

        if (editorState) {
            // viewState contains: scroller info, cursor info, contributions info
            editorInstance.restoreViewState(editorState);
        }

        editorInstance?.focus();
    }

    private updateStatusBar(
        editorInstance: MonacoEditor.IStandaloneCodeEditor
    ) {
        if (editorInstance) {
            // TODO
        }
    }

    public updateEditorLineColumnInfo(
        editorInstance: MonacoEditor.IStandaloneCodeEditor
    ) {
        if (editorInstance) {
            const position = editorInstance.getPosition();
            this.statusBarService.update(
                Object.assign(STATUS_EDITOR_INFO, {
                    data: {
                        ln: position?.lineNumber,
                        col: position?.column,
                    },
                })
            );
        }
    }
}
