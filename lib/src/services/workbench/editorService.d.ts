import * as monaco from 'monaco-editor';
import { Component } from 'mo/react';
import { IEditor, IEditorGroup, IEditorTab } from 'mo/model';
export interface IEditorService extends Component<IEditor> {
    /**
     * Open a new tab in indicated group instance
     * @param tab Tab data
     * @param groupId group ID
     */
    open<T = any>(tab: IEditorTab<T>, groupId?: number): void;
    getTabById<T>(tabId: string, group: IEditorGroup): IEditorTab<T> | undefined;
    updateTab(tab: IEditorTab, groupId: number): IEditorTab;
    closeTab(tabId: string, groupId: number): void;
    closeOthers(tab: IEditorTab, groupId: number): void;
    closeToRight(tab: IEditorTab, groupId: number): void;
    closeToLeft(tab: IEditorTab, groupId: number): void;
    closeAll(groupId: number): void;
    getGroupById(groupId: number): IEditorGroup | undefined;
    cloneGroup(groupId?: number): IEditorGroup;
    /**
     * Set active group and tab
     * @param groupId Target group ID
     * @param tabId Target tab ID
     */
    setActive(groupId: number, tabId: string): any;
    updateGroup(groupId: any, groupValues: IEditorGroup): void;
    updateCurrentGroup(currentValues: any): void;
    /**
     * The Instance of Editor
     */
    readonly editorInstance: monaco.editor.IStandaloneCodeEditor;
}
export declare class EditorService extends Component<IEditor> implements IEditorService {
    protected state: IEditor;
    constructor();
    getTabById<T>(tabId: string, group: IEditorGroup): IEditorTab<T> | undefined;
    get editorInstance(): any;
    updateTab(tab: IEditorTab, groupId: number): IEditorTab;
    closeTab(tabId: string, groupId: number): void;
    closeOthers(tab: IEditorTab, groupId: number): void;
    closeToRight(tab: IEditorTab, groupId: number): void;
    closeToLeft(tab: IEditorTab, groupId: number): void;
    getGroupById(groupId: number): IEditorGroup | undefined;
    getGroupIndexById(id: number): number;
    setActive(groupId: number, tabId: string): void;
    updateGroup(groupId: number, groupValues: IEditorGroup): void;
    updateCurrentGroup(currentValues: IEditorGroup): void;
    open<T>(tab: IEditorTab<T>, groupId: number): void;
    closeAll(groupId: number): void;
    cloneGroup(groupId?: number): IEditorGroup;
}
