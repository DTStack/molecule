import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import React from 'react';

import {
    EditorEvent,
    IEditorTab,
    IEditorActionsProps,
} from 'mo/model/workbench/editor';
import { Controller } from 'mo/react/controller';
import { IMenuItemProps } from 'mo/components/menu';
import { IMonacoEditorProps } from 'mo/components/monaco';
import { editor as MonacoEditor, Uri } from 'mo/monaco';

import {
    BuiltinService,
    EditorService,
    IBuiltinService,
    IEditorService,
    ILayoutService,
    IStatusBarService,
    LayoutService,
    StatusBarService,
} from 'mo/services';
import type { UniqueId } from 'mo/common/types';

export interface IEditorController extends Partial<Controller> {
    open?<T = any>(tab: IEditorTab<T>, groupId?: UniqueId): void;
    onClickContextMenu?: (
        e: React.MouseEvent,
        item: IMenuItemProps,
        tabItem?: IEditorTab
    ) => void;
    onCloseAll?: (group: UniqueId) => void;
    onCloseTab?: (tabId: UniqueId, group: UniqueId) => void;
    onCloseToLeft?: (tab: IEditorTab, group: UniqueId) => void;
    onCloseToRight?: (tab: IEditorTab, group: UniqueId) => void;
    onCloseOther?: (tab: IEditorTab, group: UniqueId) => void;
    onCloseSaved?: (group: UniqueId) => void;
    onChangeEditorProps?: (
        preProps: IMonacoEditorProps,
        nextProps: IMonacoEditorProps
    ) => void;
    onMoveTab?: <T = any>(updateTabs: IEditorTab<T>[], group: UniqueId) => void;
    onSelectTab?: (tabId: UniqueId, group: UniqueId) => void;
    onClickActions: (action: IEditorActionsProps) => void;
    onUpdateEditorIns?: (editorInstance: any, groupId: UniqueId) => void;
    onPaneSizeChange?: (newSize: number[]) => void;
    initEditorEvents?: (
        editorInstance: MonacoEditor.IStandaloneCodeEditor,
        groupId: UniqueId
    ) => void;
    getViewState?: (id: UniqueId) => MonacoEditor.ICodeEditorViewState;
}
@singleton()
export class EditorController extends Controller implements IEditorController {
    private editorStates = new Map();
    private readonly editorService: IEditorService;
    private readonly statusBarService: IStatusBarService;
    private readonly builtinService: IBuiltinService;
    private readonly layoutService: ILayoutService;

    constructor() {
        super();
        this.editorService = container.resolve(EditorService);
        this.layoutService = container.resolve(LayoutService);
        this.statusBarService = container.resolve(StatusBarService);
        this.builtinService = container.resolve(BuiltinService);
    }

    public initView() {
        const {
            builtInEditorInitialActions,
            builtInEditorInitialMenu,
            BuiltInEditorOptions,
        } = this.builtinService.getModules();

        const defaultActions = this.editorService.getDefaultActions();
        if (!defaultActions.length) {
            const builtinActions = builtInEditorInitialActions || [];
            this.editorService.setDefaultActions(builtinActions);
        }

        const defaultMenus = this.editorService.getDefaultMenus();
        if (!defaultMenus.length) {
            const builtinMenus = builtInEditorInitialMenu || [];
            this.editorService.setDefaultMenus(builtinMenus);
        }

        this.editorService.setState({
            editorOptions: BuiltInEditorOptions || {},
        });
    }

    public open<T>(tab: IEditorTab<any>, groupId?: UniqueId) {
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

        const {
            EDITOR_MENU_CLOSE,
            EDITOR_MENU_CLOSE_OTHERS,
            EDITOR_MENU_CLOSE_ALL,
            EDITOR_MENU_CLOSE_TO_RIGHT,
            EDITOR_MENU_CLOSE_TO_LEFT,
        } = this.builtinService.getConstants();

        switch (menuId) {
            case EDITOR_MENU_CLOSE: {
                this.onCloseTab(tabId, groupId);
                break;
            }
            case EDITOR_MENU_CLOSE_OTHERS: {
                this.onCloseOther(tabItem!, groupId);
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

    public onCloseAll = (groupId: UniqueId) => {
        this.emit(EditorEvent.OnCloseAll, groupId);
    };

    public onCloseTab = (tabId?: UniqueId, groupId?: UniqueId) => {
        if (tabId && groupId) {
            this.emit(EditorEvent.OnCloseTab, tabId, groupId);
        }
    };

    public onCloseToRight = (tabItem: IEditorTab, groupId: UniqueId) => {
        this.emit(EditorEvent.OnCloseToRight, tabItem, groupId);
    };

    public onCloseToLeft = (tabItem: IEditorTab, groupId: UniqueId) => {
        this.emit(EditorEvent.OnCloseToLeft, tabItem, groupId);
    };

    public onCloseOther = (tabItem: IEditorTab, groupId: UniqueId) => {
        this.emit(EditorEvent.OnCloseOther, tabItem, groupId);
    };

    public onMoveTab = (updateTabs: IEditorTab<any>[], groupId: UniqueId) => {
        this.editorService.updateGroup(groupId, {
            data: updateTabs,
        });
        this.emit(EditorEvent.OnMoveTab, updateTabs, groupId);
    };

    public onSelectTab = (tabId: UniqueId, groupId: UniqueId) => {
        this.editorService.setActive(groupId, tabId);
        this.emit(EditorEvent.OnSelectTab, tabId, groupId);
    };

    /**
     * Called when open a new group
     */
    public onUpdateEditorIns = (
        editorInstance: MonacoEditor.IStandaloneCodeEditor,
        groupId: UniqueId
    ) => {
        if (!editorInstance) return;

        this.initEditorEvents(editorInstance, groupId);
        this.editorService.updateGroup(groupId, {
            editorInstance: editorInstance,
        });
        this.editorService.updateCurrentGroup({ editorInstance });

        const { current } = this.editorService.getState();
        const tab = current?.tab;

        this.openTab(
            editorInstance,
            tab!.id!.toString(),
            tab?.data?.value!,
            tab?.data?.language!
        );
    };

    public onClickActions = (action: IEditorActionsProps) => {
        const { current } = this.editorService.getState();
        if (!current) return;

        const {
            EDITOR_MENU_CLOSE_ALL,
            EDITOR_MENU_SHOW_OPENEDITORS,
            EDITOR_MENU_SPILIT,
        } = this.builtinService.getConstants();

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
                const { groupSplitPos } = this.layoutService.getState();
                this.layoutService.setGroupSplitSize(
                    new Array(groupSplitPos.length + 1).fill('auto')
                );
                this.emit(EditorEvent.OnSplitEditorRight);
                break;
            }
            default: {
                this.emit(EditorEvent.onActionsClick, action.id, current);
            }
        }
    };

    public onPaneSizeChange = (newSize: number[]) => {
        this.layoutService.setGroupSplitSize(newSize);
    };

    public initEditorEvents(
        editorInstance: MonacoEditor.IStandaloneCodeEditor,
        groupId: UniqueId
    ) {
        if (!editorInstance) return;

        editorInstance.onDidChangeModelContent((event: any) => {
            const { current } = this.editorService.getState();
            const tab = current?.tab;
            if (!tab) return;

            const currentEditorUri = current.editorInstance?.getModel()?.uri;
            const updateEditorUri = editorInstance?.getModel()?.uri;
            if (currentEditorUri?.path !== updateEditorUri?.path) return;

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

        editorInstance.onDidBlurEditorText(() => {
            const { current } = this.editorService.getState();
            const tab = current?.tab;
            if (tab?.id) {
                const viewState = editorInstance?.saveViewState();
                this.editorStates.set(tab.id?.toString(), viewState);
            }
        });
    }

    public getViewState = (id: UniqueId) => {
        return this.editorStates.get(id);
    };

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

            const { STATUS_EDITOR_INFO } = this.builtinService.getModules();
            if (STATUS_EDITOR_INFO) {
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
}
