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
} from 'mo/model/workbench/editor';
import { undoRedoMenu } from 'mo/model/workbench/menuBar';
import { Controller } from 'mo/react/controller';

import { IMenuItemProps } from 'mo/components/menu';
import { STATUS_EDITOR_INFO } from 'mo/model/workbench/statusBar';
import { IMonacoEditorProps } from 'mo/components/monaco';
import { editor as monacoEditor, Uri } from 'mo/monaco';

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
    onSplitEditorRight?: () => void;
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
        }
    };

    public onCloseAll = (groupId: number) => {
        this.editorService.closeAll(groupId);
        this.emit(EditorEvent.OnCloseAll, groupId);
    };

    public updateCurrentValue = () => {
        const { current } = this.editorService.getState();
        if (current) {
            const model = current?.editorInstance?.getModel();
            const newValue = model.getValue();
            current?.editorInstance?.executeEdits('update-value', [
                {
                    range: model.getFullModelRange(),
                    text: newValue,
                    forceMoveMarkers: true,
                },
            ]);
            current?.editorInstance?.focus();
        }
    };

    public onCloseTab = (tabId?: string, groupId?: number) => {
        if (tabId && groupId) {
            this.editorService.closeTab(tabId, groupId);
            this.explorerService.forceUpdate();
            this.updateCurrentValue();
            this.emit(EditorEvent.OnCloseTab, tabId, groupId);
        }
    };

    public onCloseToRight = (tabItem: IEditorTab, groupId: number) => {
        this.editorService.closeToRight(tabItem, groupId);
        this.updateCurrentValue();
        this.emit(EditorEvent.OnCloseToRight, tabItem, groupId);
    };

    public onCloseToLeft = (tabItem: IEditorTab, groupId: number) => {
        this.editorService.closeToLeft(tabItem, groupId);
        this.updateCurrentValue();
        this.emit(EditorEvent.OnCloseToLeft, tabItem, groupId);
    };

    public onCloseOthers = (tabItem: IEditorTab, groupId: number) => {
        this.editorService.closeOthers(tabItem, groupId);
        this.updateCurrentValue();
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
        this.updateCurrentValue();
        this.emit(EditorEvent.OnSelectTab, tabId, groupId);
    };

    public onUpdateEditorIns = (
        editorInstance: IStandaloneCodeEditor,
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
        this.openFile(
            editorInstance,
            tab?.id!,
            tab?.data?.value!,
            tab?.data?.language!
        );
    };

    // TODO: Remove the below action register ?, because of the monaco Editor have integrated the undo/redo action
    private registerActions = (editorInstance) => {
        undoRedoMenu.forEach(({ id, label }) => {
            editorInstance?.addAction({
                id,
                label,
                run: () => {
                    editorInstance!.focus();
                    if (!document.execCommand(id)) {
                        editorInstance?.getModel()?.[id]();
                    }
                },
            });
        });
    };

    public onSplitEditorRight = () => {
        this.editorService.cloneGroup();
        this.emit(EditorEvent.OnSplitEditorRight);
    };

    public onPaneSizeChange = (newSize) => {
        this.groupSplitPos = newSize;
    };

    private initEditorEvents(
        editorInstance: IStandaloneCodeEditor,
        groupId: number
    ) {
        if (!editorInstance) return;

        editorInstance.onDidChangeModelContent((event: any) => {
            const newValue = editorInstance.getModel()?.getValue();
            const { current } = this.editorService.getState();
            const tab = current?.tab;
            if (!tab) return;
            const updatedTab = { ...tab, data: { value: newValue } };
            this.editorService.updateTab(updatedTab, groupId);
            this.emit(EditorEvent.OnUpdateTab, updatedTab);
            this.updateStatusBar(editorInstance);
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
            this.openFile(
                editorInstance,
                path!,
                options?.value!,
                options?.language!
            );
        }
    };

    private openFile(
        editorInstance: IStandaloneCodeEditor,
        path: string,
        value: string,
        language: string
    ) {
        this.initializeFile(path, value, language);
        const model = monacoEditor.getModel(Uri.parse(path));
        editorInstance.setModel(model!);
        // Restore the editor state for the file
        const editorState = this.editorStates.get(path);
        if (editorState) {
            editorInstance.restoreViewState(editorState);
        }
        editorInstance?.focus();
    }

    private initializeFile(path: string, value: string, language: string) {
        let model = monacoEditor.getModel(Uri.parse(path));
        const { current } = this.editorService.getState();
        if (model) {
            current?.editorInstance?.executeEdits('update-value', [
                {
                    range: model.getFullModelRange(),
                    text: value,
                    forceMoveMarkers: true,
                },
            ]);
        } else {
            model = monacoEditor.createModel(value, language, Uri.parse(path));
        }
    }

    private updateStatusBar(editorInstance: IStandaloneCodeEditor) {
        if (editorInstance) {
            const model:
                | monaco.editor.ITextModel
                | null
                | undefined = editorInstance?.getModel();
            const decorations = model?.getAllDecorations();
            console.log('decorations:', decorations);
        }
    }

    public updateEditorLineColumnInfo(editorInstance: IStandaloneCodeEditor) {
        if (editorInstance) {
            const position = editorInstance.getPosition();
            this.statusBarService.updateItem(
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
