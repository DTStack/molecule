import { group } from 'console';
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
    setActive(groupId: number, tabId: string);
    updateGroup(groupId, groupValues: IEditorGroup): void;
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
                    this.render();
                }
            }
        }
        return tab;
    }

    public closeTab(tabId: string, groupId: number) {
        const { groups = [] } = this.state;
        const nextGroups = [...groups];
        const groupIndex = this.getGroupIndexById(groupId);
        if (groupIndex <= -1) return;
        const nextGroup = nextGroups[groupIndex];
        const tabIndex = nextGroup.data!.findIndex(searchById(tabId));
        const activeTab = tabId === nextGroup.activeTab;
        if (nextGroup.data!.length === 1 && tabIndex === 0) {
            const activeGroup =
                nextGroups[groupIndex + 1] || nextGroups[groupIndex - 1];
            nextGroups.splice(groupIndex, 1);
            this.setState({
                groups: nextGroups,
                current: nextGroups?.length === 0 ? undefined : activeGroup,
            });
            return;
        }
        if (tabIndex === -1) return;
        if (activeTab) {
            const nextTab =
                nextGroup.data![tabIndex + 1] || nextGroup.data![tabIndex - 1];
            nextGroup.tab = { ...nextTab };
            nextGroup.activeTab = nextTab?.id;
        }
        nextGroup.data!.splice(tabIndex, 1);
        nextGroups[groupIndex] = nextGroup;
        this.setState({
            current: nextGroup,
            groups: nextGroups,
        });
    }

    public closeOthers(tab: IEditorTab, groupId: number) {
        const { groups = [] } = this.state;
        const nextGroups = [...groups];
        const groupIndex = this.getGroupIndexById(groupId);
        const tabId = tab.id
        if (groupIndex <= -1) return;
        const nextGroup = nextGroups[groupIndex];
        const updateTabs = nextGroup.data!.filter(tab => tab.id === tabId);
        this.updateGroup(groupId, {
            data: updateTabs
        })
        this.setActive(groupId, tabId!)
    }

    public closeToRight (tab: IEditorTab, groupId: number) {
        const { groups = [] } = this.state;
        const nextGroups = [...groups];
        const groupIndex = this.getGroupIndexById(groupId);
        const tabId = tab.id
        if (groupIndex <= -1) return;
        const nextGroup = nextGroups[groupIndex];
        const nextTabData = nextGroup.data;
        const tabIndex = nextTabData!.findIndex(searchById(tabId));
        if (tabIndex <= -1) return
        const updateTabs = nextTabData?.slice(0, tabIndex + 1 )
        this.updateGroup(groupId, {
            data: updateTabs
        })
        this.setActive(groupId, tabId!)
    }

    
    public closeToLeft (tab: IEditorTab, groupId: number) {
        const { groups = [] } = this.state;
        const nextGroups = [...groups];
        const groupIndex = this.getGroupIndexById(groupId);
        const tabId = tab.id
        if (groupIndex <= -1) return;
        const nextGroup = nextGroups[groupIndex];
        const nextTabData = nextGroup.data;
        const tabIndex = nextTabData!.findIndex(searchById(tabId));
        if (tabIndex <= -1) return
        const updateTabs = nextTabData?.slice(tabIndex, nextTabData.length)
        this.updateGroup(groupId, {
            data: updateTabs
        })
        this.setActive(groupId, tabId!)
    }

    public getGroupById(groupId: number): IEditorGroup | undefined {
        const { groups } = this.state;
        return groups!.find((group) => group.id === groupId);
    }

    public getGroupIndexById(id: number): number {
        const { groups } = this.state;
        return groups!.findIndex((group) => group.id === id);
    }

    public setActive(groupId: number, tabId: string) {
        const { groups = [] } = this.state;
        const groupIndex = this.getGroupIndexById(groupId);
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
        const nextGroups = [...groups]
        const groupIndex = this.getGroupIndexById(groupId);
        if (groupIndex > -1) {
            const nextGroup = Object.assign({}, nextGroups[groupIndex], groupValues);
            nextGroups[groupIndex] = nextGroup; 
            this.setState({
                current: nextGroup,
                groups: nextGroups,
            });
        }
    }

    public open<T>(tab: IEditorTab<T>, groupId: number) {
        const { current, groups = [] } = this.state;
        let group: IEditorGroup | null | undefined = current;
        if (groupId) {
            group = this.getGroupById(groupId);
        }
        if (group) {
            const { id: tabId } = tab;
            const isExist = group?.data!.find(
                (tab: IEditorTab) => tab.id === tabId
            );
            const groupIndex = this.getGroupIndexById(group.id!);
            if (isExist && tabId === group?.activeTab) return;
            const currentGroup = groups[groupIndex];
            if (!isExist) group.data!.push(tab);
            group.tab = tab;
            group.activeTab = tabId;
            groups[groupIndex] = { ...currentGroup, tab, activeTab: tabId };
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
        const groupIndex = this.getGroupIndexById(groupId);
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
}
