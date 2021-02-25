import { EditorEvent } from 'mo/model/workbench/editor';
import { singleton, container } from 'tsyringe';

import { Component } from 'mo/react';
import {
    EditorModel,
    EditorGroupModel,
    IEditor,
    IEditorGroup,
    IEditorTab,
} from 'mo/model';
import { searchById } from '../helper';
export interface IEditorService extends Component<IEditor> {
    /**
     * Open a new tab in indicated group instance
     * @param tab Tab data
     * @param groupId group ID
     */
    open<T = any>(tab: IEditorTab<T>, groupId?: number): void;
    getTabById<T>(
        tabId: string,
        group: IEditorGroup
    ): IEditorTab<T> | undefined;
    updateTab(tab: IEditorTab, groupId: number): IEditorTab;
    closeTab(tabId: string, groupId: number): void;
    closeAll(groupId: number): void;
    getGroupById(id: number): IEditorGroup | undefined;
    cloneGroup(groupId?: number): IEditorGroup;
    /**
     * Set active group and tab
     * @param groupId Target group ID
     * @param tabId Target tab ID
     */
    setActive(groupId: number, tabId: string);
    updateGroup(groupId, groupValues: IEditorGroup): void;
    onCloseTab(callback: (tabKey?: string) => void);
    onMoveTab(callback: (tabs: IEditorTab[]) => void);
    onSelectTab(callback: (tabKey?: string) => void);
    onCloseAll(callback: (groupId?: number) => void);
}
@singleton()
export class EditorService
    extends Component<IEditor>
    implements IEditorService {
    protected state: IEditor;
    constructor() {
        super();
        this.state = container.resolve(EditorModel);
    }

    public getTabById<T>(
        tabId: string,
        group: IEditorGroup
    ): IEditorTab<T> | undefined {
        return group.data?.find(searchById(tabId));
    }

    public updateTab(tab: IEditorTab, groupId: number): IEditorTab {
        const { groups = [] } = this.state;
        const index = this.getGroupIndexById(groupId);
        if (index > -1) {
            const group = groups[index];
            if (group.data && group.data.length > 0) {
                const tabIndex = group.data!.findIndex(searchById(tab.id));
                if (tabIndex > -1) {
                    const tabData = group.data![tabIndex];
                    group.data![tabIndex] = Object.assign({}, tabData, tab);
                }
            }
        }
        return tab;
    }

    public closeTab(tabId: string, groupId: number) {
        const { groups = [] } = this.state;
        const nextGroups = [...groups];
        const index = this.getGroupIndexById(groupId);
        if (index > -1) {
            const nextGroup = nextGroups[index];
            const tabIndex = nextGroup.data!.findIndex(searchById(tabId));
            if (nextGroup.data!.length === 1 && tabIndex === 0) {
                nextGroups.splice(index, 1);
            } else if (tabIndex > -1) {
                nextGroup.data!.splice(tabIndex, 1);
            }
            this.setState({
                groups: nextGroups,
            });
        }
    }

    public getGroupById(id: number): IEditorGroup | undefined {
        const { groups } = this.state
        return groups!.find((group) => group.id === id);
    }

    public getGroupIndexById(id: number): number {
        const { groups } = this.state
        return groups!.findIndex((group) => group.id === id);
    }

    public setActive(groupId: number, tabId: string) {
        const { groups = [] } = this.state;
        const groupIndex = this.getGroupIndexById(groupId)
        if (groupIndex > -1) {
            const nextGroups = [...groups];
            const group = nextGroups[groupIndex];
            const tab = this.getTabById(tabId, group);
            if (tab) {
                const nextGroup = { ...group };
                nextGroup.tab = { ...tab };
                nextGroup.activeTab = tabId;
                nextGroups[groupIndex] = nextGroup;
                this.setState({
                    current: nextGroup,
                    groups: nextGroups,
                });
            }
        }
    }

    public updateGroup(groupId: number, groupValues: IEditorGroup) {
        const { groups = [] } = this.state;
        const groupIndex = this.getGroupIndexById(groupId);
        if (groupIndex > -1) {
            const group = Object.assign({}, groups[groupIndex], groupValues);
            groups[groupIndex] = group;
            this.render();
        }
    }

    public open<T>(tab: IEditorTab<any>, groupId: number) {
        const { current, groups = [] } = this.state;
        let group: IEditorGroup | null | undefined = current;
        if (groupId) {
            group = this.getGroupById(groupId);
        }
        if (group) {
            const { id: tabId, data: { value } } = tab
            const isExist = group?.data!.find((tab: IEditorTab) => tab.id === tabId);
            const groupIndex = this.getGroupIndexById(group.id!)
            if (isExist && tabId === group?.activeTab) return
            const currentGroup = groups[groupIndex]
            if (!isExist) group.data!.push(tab)
            group.tab = tab
            group.activeTab = tabId
            groups[groupIndex] = {...currentGroup, tab}
            currentGroup?.editorInstance.setValue(value!)
        } else {
            group = new EditorGroupModel(groups.length + 1, tab, [tab]);
            groups.push(group);
        }

        this.setState({
            current: group,
            groups: [...groups],
        });
    }

    public closeAll(groupId: number) {
        const { current, groups = [] } = this.state;
        const groupIndex = this.getGroupIndexById(groupId)
        if (groupIndex > -1) {
            const nextGroups = [...groups];
            let nextCurrentGroup = current;
            nextGroups.splice(groupIndex, 1);
            if (current && current.id === groupId) {
                nextCurrentGroup = groups[groupIndex - 1];
            }
            this.setState({
                groups: nextGroups,
                current: nextCurrentGroup,
            });
        }
    }

    public cloneGroup(groupId?: number): IEditorGroup {
        const { current, groups = [] } = this.state;
        const cloneGroup: IEditorGroup = Object.assign(
            {},
            groupId ? this.getGroupById(groupId) : current
        );
        const ids: number[] = groups.map((g) => g.id || 0);
        const id = ids.length > 0 ? Math.max(...ids) + 1 : 1;
        const initialTab: IEditorTab = { ...cloneGroup.tab };
        cloneGroup.data = [initialTab];
        cloneGroup.tab = initialTab;
        cloneGroup.activeTab = initialTab.id;
        cloneGroup.id = id;
        this.setState({
            current: cloneGroup,
            groups: [...groups, cloneGroup],
        });
        return cloneGroup;
    }

    public onMoveTab(
        callback: (updateTabs: IEditorTab<any>[]) => void
    ) {
        this.subscribe(EditorEvent.OnMoveTab, (tabs: IEditorTab<any>[], groupId?:number) => {
            callback?.(tabs)
        });
    }

    public onSelectTab(
        callback: (tabKey: string) => void
    ) {
        this.subscribe(EditorEvent.OnSelectTab, (tabKey: string, groupId: number) => {
            callback?.(tabKey)
        });
    }

    public onCloseTab(
        callback: (tabKey: string) => void
    ) {
        this.subscribe(EditorEvent.OnCloseTab, (tabKey: string, groupId: number) => {
            callback?.(tabKey)
        })
    }

    public onCloseAll(
        callback: (groupId?: number) => void
    ) {
        this.subscribe(EditorEvent.OnCloseAll, (groupId: number) => {
            callback?.(groupId)
        })
    }

}
