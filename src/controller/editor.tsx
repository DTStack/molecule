import * as React from 'react';
import { EditorEvent, IEditorTab, EDITOR_MENU_CLOSE, EDITOR_MENU_CLOSE_OTHERS, EDITOR_MENU_CLOSE_TO_RIGHT, EDITOR_MENU_CLOSE_TO_LEFT, EDITOR_MENU_CLOSE_ALL } from 'mo/model/workbench/editor';
import { Controller } from 'mo/react/controller';
import { editorService, statusBarService } from 'mo/services';
import { IMenuItem } from 'mo/components/menu';
import { singleton } from 'tsyringe';
import * as monaco from 'monaco-editor';
import { editorLineColumnItem } from './statusBar';

export interface IEditorController {
    groupSplitPos?: string[];
    open?<T = any>(tab: IEditorTab<T>, groupId?: number): void;
    onClickContextMenu?: (
        e: React.MouseEvent,
        item: IMenuItem,
        tabItem?: IEditorTab
    ) => void;
    onCloseAll?: (group: number) => void;
    onCloseTab?: (tabId: string, group: number) => void;
    onCloseToLeft?: (tab: IEditorTab, group: number) => void;
    onCloseToRight?: (tab: IEditorTab, group: number) => void;
    onCloseOthers?: (tab: IEditorTab, group: number) => void;
    onCloseSaved?: (group: number) => void;
    onMoveTab?: <T = any>(updateTabs: IEditorTab<T>[], group: number) => void;
    onSelectTab?: (tabId: string, group: number) => void;
    onSplitEditorRight?: () => void;
    onUpdateEditorIns?: (editorInstance: any, groupId: number) => void;
    onPaneSizeChange?: (newSize: number) => void;
}

type IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;

@singleton()
export class EditorController extends Controller implements IEditorController {
    // Group Pos locate here temporary, we can move it to state or localStorage in future.
    public groupSplitPos: string[] = [];

    constructor() {
        super();
    }

    public open<T>(tab: IEditorTab<any>, groupId?: number) {
        editorService.open<T>(tab, groupId);
        this.updateCurrentValue();
    }

    public onClickContextMenu = (
        e: React.MouseEvent,
        item: IMenuItem,
        tabItem?: IEditorTab<any>
    ) => {
        const menuId = item?.id;
        const tabId = tabItem?.id!;
        const { current } = editorService.getState();
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
        editorService.closeAll(groupId);
        this.emit(EditorEvent.OnCloseAll, groupId);
    };

    public updateCurrentValue = () => {
        const { current } = editorService.getState();
        const newValue = current?.tab?.data?.value;
        current?.editorInstance?.setValue(newValue);
    };

    public onCloseTab = (tabId?: string, groupId?: number) => {
        if (tabId && groupId) {
            editorService.closeTab(tabId, groupId);
            this.updateCurrentValue();
            this.emit(EditorEvent.OnCloseTab, tabId, groupId);
        }
    };

    public onCloseToRight = (tabItem: IEditorTab, groupId: number) => {
        editorService.closeToRight(tabItem, groupId);
        this.updateCurrentValue();
        this.emit(EditorEvent.OnCloseToRight, tabItem, groupId);
    };

    public onCloseToLeft = (tabItem: IEditorTab, groupId: number) => {
        editorService.closeToLeft(tabItem, groupId);
        this.updateCurrentValue();
        this.emit(EditorEvent.OnCloseToLeft, tabItem, groupId);
    };

    public onCloseOthers = (tabItem: IEditorTab, groupId: number) => {
        editorService.closeOthers(tabItem, groupId);
        this.updateCurrentValue();
        this.emit(EditorEvent.OnCloseOthers, tabItem, groupId);
    };

    public onMoveTab = (updateTabs: IEditorTab<any>[], groupId: number) => {
        editorService.updateGroup(groupId, {
            data: updateTabs,
        });
        this.emit(EditorEvent.OnMoveTab, updateTabs, groupId);
    };

    public onSelectTab = (tabId: string, groupId: number) => {
        editorService.setActive(groupId, tabId);
        this.updateCurrentValue();
        this.emit(EditorEvent.OnSelectTab, tabId, groupId);
    };

    public onUpdateEditorIns = (
        editorInstance: monaco.editor.IStandaloneCodeEditor,
        groupId: number
    ) => {
        if (editorInstance) {
            this.initEditorEvents(editorInstance, groupId);
            editorService.updateGroup(groupId, {
                editorInstance: editorInstance,
            });
            editorService.updateCurrentGroup({ editorInstance });
        }
    };

    public onSplitEditorRight = () => {
        editorService.cloneGroup();
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
            const newValue = editorInstance.getValue();
            const { current } = editorService.getState();
            const tab = current?.tab;
            if (!tab) return;
            const notSave = newValue !== tab?.data?.value;
            editorService.updateTab(
                {
                    id: tab.id,
                    data: {
                        ...tab.data,
                        modified: notSave,
                        value: newValue,
                    },
                },
                groupId
            );
            this.updateStatusBar(editorInstance);
        });

        editorInstance.onDidFocusEditorText(() => {
            const group = editorService.getGroupById(groupId);
            if (group?.tab!.id) {
                editorService.setActive(groupId, group.tab.id);
                this.updateEditorLineColumnInfo(editorInstance);
            }
        });

        editorInstance.onDidChangeCursorSelection(() => {
            this.updateEditorLineColumnInfo(editorInstance);
        });
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
            statusBarService.updateItem(
                Object.assign(editorLineColumnItem, {
                    render: () => (
                        <span>
                            Ln {position?.lineNumber}, Col {position?.column}
                        </span>
                    ),
                })
            );
        }
    }
}
