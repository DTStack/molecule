import { singleton, container } from 'tsyringe';

import { Component } from 'mo/react';
import {
    EditorModel,
    EditorGroupModel,
    IEditor,
    IEditorGroup,
    IEditorTab,
} from 'mo/model';
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
    getGroupById(id: number): IEditorGroup | undefined;
    closeAll(groupId: number): void;
    closeTab(tabId: string, groupId: number): void;
    cloneGroup(groupId?: number): IEditorGroup;
    /**
     * Update current group and tab
     * @param groupId Target group ID
     * @param tabId Target tab ID
     */
    updateCurrent(groupId: number, tabId: string);
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
        return group.data?.find((tab) => tab.id === tabId);
    }

    public getGroupById(id: number): IEditorGroup | undefined {
        return this.state.groups!.find((group) => group.id === id);
    }

    public getGroupIndexById(id: number): number {
        return this.state.groups!.findIndex((group) => group.id === id);
    }

    public updateCurrent(groupId: number, tabId: string) {
        const group = this.getGroupById(groupId);
        if (group) {
            const tab = this.getTabById(tabId, group);
            if (tab) {
                const nextGroup = { ...group };
                nextGroup.tab = { ...tab };
                nextGroup.activeTab = tabId;
                this.setState({
                    current: nextGroup,
                });
            }
        }
    }

    public updateGroup(groupId: number, groupValues: IEditorGroup) {
        const { groups = [] } = this.state;
        const index = this.getGroupIndexById(groupId);
        if (index > 0) {
            const group = Object.assign({}, groups[index], groupValues);
            groups[index] = group;
            this.render();
        }
    }

    public open<T>(tab: IEditorTab<T>, groupId?: number) {
        const { current, groups = [] } = this.state;
        let group: IEditorGroup | null | undefined = current;
        if (groupId) {
            group = this.getGroupById(groupId);
        }
        if (group) {
            group.data!.push(tab);
            group.current = tab;
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
        const groupIndex = groups.findIndex((group) => group.id === groupId);
        if (groupIndex > 0) {
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

    public closeTab(tabId: string, groupId: number) {
        const { groups = [] } = this.state;
        const nextGroups = [...groups];
        const index = this.getGroupIndexById(groupId);
        if (index > 0) {
            const nextGroup = nextGroups[index];
            const tabIndex = nextGroup.data!.findIndex(
                (tab) => tabId === tab.id
            );
            if (tabIndex > 0) {
                nextGroup.data!.splice(tabIndex, 1);
                this.setState({
                    groups: nextGroups,
                });
            }
        }
    }

    public cloneGroup(groupId?: number): IEditorGroup {
        const { current, groups = [] } = this.state;
        const cloneGroup = Object.assign(
            {},
            groupId ? this.getGroupById(groupId) : current
        );
        cloneGroup.data = [{ ...cloneGroup.current }];
        this.setState({
            current: cloneGroup,
            groups: [...groups, cloneGroup],
        });
        return cloneGroup;
    }
}
