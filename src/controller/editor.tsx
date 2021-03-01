import * as React from 'react';
import { EditorEvent, IEditorTab } from 'mo/model/workbench/editor';
import { Controller } from 'mo/react/controller';
import { editorService, statusBarService } from 'mo/services';
import { singleton } from 'tsyringe';
import * as monaco from 'monaco-editor';
import { editorLineColumnItem } from './statusBar';

export interface IEditorController {
    groupSplitPos?: string[];
    open?<T = any>(tab: IEditorTab<T>, groupId?: number): void;
    onCloseAll?: (group: number) => void;
    onCloseTab?: (tabKey: string, group: number) => void;
    onMoveTab?: <T = any>(updateTabs: IEditorTab<T>[], group: number) => void;
    onSelectTab?: (tabKey: string, group: number) => void;
    onSplitEditorRight?: () => void;
    onUpdateEditorIns?: (editorInstance: any, groupId: number) => void;
    onPaneSizeChange?: (newSize: number) => void;
    onTabContextMenu?: (e: React.MouseEvent, tab: IEditorTab) => void;
}

type IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;

@singleton()
export class EditorController extends Controller implements IEditorController {
    // Group Pos locate here temporary, we can move it to state or localStorage in future.
    public groupSplitPos: string[] = [];

    constructor() {
        super();
    }

    public open<T>(tab: IEditorTab<any>, groupId: number){
        editorService.open<T>(tab, groupId)
        this.updateCurrentValue()
    }

    public onCloseAll = (groupId: number) => {
        editorService.closeAll(groupId);
        this.emit(EditorEvent.OnCloseAll, groupId);
    };

    public updateCurrentValue = () => {
        const { current } = editorService.getState()
        const newValue = current?.tab?.data?.value
        if (newValue) current?.editorInstance.setValue(newValue)
    }
    public onCloseTab = (tabKey?: string, groupId?: number) => {
        if (tabKey && groupId) {
            editorService.closeTab(tabKey, groupId);
            this.updateCurrentValue()
            this.emit(EditorEvent.OnCloseTab, tabKey, groupId);
        }
    };

    public onMoveTab = (updateTabs: IEditorTab<any>[], groupId: number) => {
        editorService.updateGroup(groupId, {
            data: updateTabs,
        });
        this.emit(EditorEvent.OnMoveTab, updateTabs, groupId);
    };

    public onSelectTab = (tabKey: string, groupId: number) => {
        editorService.setActive(groupId, tabKey);
        this.updateCurrentValue()
        this.emit(EditorEvent.OnSelectTab, tabKey, groupId);
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
        }
    };

    public onSplitEditorRight = () => {
        editorService.cloneGroup();
        this.emit(EditorEvent.OnSplitEditorRight);
    };

    public onPaneSizeChange = (newSize) => {
        this.groupSplitPos = newSize;
    };

    public onTabContextMenu = (e: React.MouseEvent, tab: IEditorTab) => {
        console.log('onTabContextMenu', e, tab);
    };

    private initEditorEvents(
        editorInstance: IStandaloneCodeEditor,
        groupId: number
    ) {
        if (!editorInstance) return
        
        editorInstance.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {
            const { current } = editorService.getState();
            const tab = current?.tab;
            editorService.updateTab({
                id: tab?.id,
                modified: false
            }, groupId)
        })

        editorInstance.onDidChangeModelContent((event: any) => {
            const newValue = editorInstance.getValue();
            const { current } = editorService.getState();
            const tab = current?.tab
            if (!tab) return
            const notSave = newValue !== tab?.data?.value
            editorService.updateTab(
                {
                    id: tab.id,
                    data: {
                        ...tab.data,
                        value: newValue,
                    },
                    modified: notSave,
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
