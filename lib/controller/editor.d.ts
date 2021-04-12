import * as React from 'react';
import { IEditorTab } from 'mo/model/workbench/editor';
import { Controller } from 'mo/react/controller';
import * as monaco from 'monaco-editor';
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
declare type IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
export declare class EditorController extends Controller implements IEditorController {
    groupSplitPos: string[];
    constructor();
    open<T>(tab: IEditorTab<any>, groupId: number): void;
    onCloseAll: (groupId: number) => void;
    updateCurrentValue: () => void;
    onCloseTab: (tabKey?: string | undefined, groupId?: number | undefined) => void;
    onMoveTab: (updateTabs: IEditorTab<any>[], groupId: number) => void;
    onSelectTab: (tabKey: string, groupId: number) => void;
    onUpdateEditorIns: (editorInstance: monaco.editor.IStandaloneCodeEditor, groupId: number) => void;
    onSplitEditorRight: () => void;
    onPaneSizeChange: (newSize: any) => void;
    onTabContextMenu: (e: React.MouseEvent, tab: IEditorTab) => void;
    private initEditorEvents;
    private updateStatusBar;
    updateEditorLineColumnInfo(editorInstance: IStandaloneCodeEditor): void;
}
export {};
