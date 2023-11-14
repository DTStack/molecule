import { cloneDeepWith } from 'lodash-es';
import { BaseService } from 'mo/glue';
import {
    EditorEvent,
    EditorGroupModel,
    EditorModel,
    IEditorOptions,
    type IEditorTab,
} from 'mo/models/editor';
import type {
    ContextMenuEditorHandler,
    ContextMenuGroupHandler,
    IDragProps,
    IMenuItemProps,
    RequiredId,
    UniqueId,
} from 'mo/types';
import { randomId, searchById, sortByIndex } from 'mo/utils';
import type { editor } from 'monaco-editor';
import { inject, injectable } from 'tsyringe';

import { BuiltinService } from './builtin';

export interface IEditorService extends BaseService<EditorModel> {
    /**
     * Open a new tab in a specific group
     * @param tab Tab data
     * @param groupId Group ID
     */
    open(tab: IEditorTab<any>, groupId?: UniqueId): void;
    /**
     * Get a tab from a specific group via the tab ID
     * @param tabId
     * @param groupId
     */
    getTabById<T>(tabId: UniqueId, groupId: UniqueId): IEditorTab<T> | undefined;
    /**
     * Update the specific tab, if the groupId provide, then update the tab of specific group
     * @param tab The id is required
     * @param groupId
     */
    updateTab(tab: IEditorTab<any>, groupId: UniqueId): void;
    getCurrent<T>(): IEditorTab<T> | undefined;
    /**
     * Specify the Entry page of Workbench
     */
    setEntry(component: JSX.Element): void;
    /**
     * Close the specific Tab opened in Editor Group view
     * @param tabId The tabId is required
     * @param groupId The groupId is required
     */
    closeTab(tabId: UniqueId, groupId: UniqueId): void;
    /**
     * Close other opened tabs in Editor Group
     * @param tabId The id is required
     * @param groupId The groupId is required
     */
    closeOther(tabId: UniqueId, groupId: UniqueId): void;
    /**
     * Close the right opened tabs in Editor Group
     * @param tab The id is required, the start point of close to right
     * @param groupId The groupId is required
     */
    closeToRight(tabId: UniqueId, groupId: UniqueId): void;
    /**
     * Close the left opened Tabs in Editor Group
     * @param tab The id is required, the start point of close to left
     * @param groupId The groupId is required
     */
    closeToLeft(tabId: UniqueId, groupId: UniqueId): void;
    /**
     * Close the specific group all opened tabs
     * @param groupId The groupId is required
     */
    closeAll(groupId: UniqueId): void;
    /**
     * move tabs in Editor Group
     * @param params from to info type
     */
    moveTab(params: IDragProps): void;
    /**
     * Get the specific group
     * @param groupId The groupId is required
     */
    getGroupById<T>(groupId: UniqueId): EditorGroupModel<T> | undefined;
    cloneTab(tabId: UniqueId, groupId: UniqueId): void;
    /**
     * Listen to the tab select event
     * @param callback
     */
    onSelectTab(callback: (tabId: UniqueId, groupId: UniqueId) => void): void;
    /**
     * Set active group and tab
     * @param tabId Target tab ID
     * @param groupId Target group ID
     */
    setActive(tabId: UniqueId, groupId: UniqueId): void;
    addActions(actions: IMenuItemProps[]): void;
    /**
     * Update actions in specific group
     */
    updateAction(action: RequiredId<IMenuItemProps>): void;
    /**
     * Update the editor options
     * @param options
     */
    updateEditorOptions(options: IEditorOptions): void;
    onFocus(callback: (instance: editor.IStandaloneCodeEditor) => void): void;
    onCursorSelection(
        callback: (
            instance: editor.IStandaloneCodeEditor,
            ev: editor.ICursorSelectionChangedEvent
        ) => void
    ): void;
    onContextMenu(callback: ContextMenuEditorHandler): void;
    onToolbarClick(callback: ContextMenuGroupHandler): void;
    /**
     * Listen to the Editor tab changed event
     * @param callback
     */
    onUpdateTab<T>(callback: (tab: IEditorTab<T>, groupId: UniqueId) => void): void;
    /**
     * Listen to the tab opening event
     * @param callback
     */
    onOpenTab<T>(callback: (tab: IEditorTab<T>) => void): void;
    /**
     * Listen to the tab move event
     * @param callback
     */
    onMoveTab(callback: (params: IDragProps) => void): void;
    /**
     * Listen to the tab close event
     * @param callback
     */
    onCloseTab(callback: (tabId: UniqueId, groupId?: UniqueId) => void): void;
    /**
     * Listen to the all tabs close event
     * @param callback
     */
    onCloseAll(callback: (groupId?: UniqueId) => void): void;
    /**
     * Listen to the other tabs close event
     * @param callback
     */
    onCloseOther(callback: (tabId?: UniqueId, groupId?: UniqueId) => void): void;
    /**
     * Listen to the left tabs close event
     * @param callback
     */
    onCloseToLeft(callback: (tabId?: UniqueId, groupId?: UniqueId) => void): void;
    /**
     * Listen to the right tabs close event
     * @param callback
     */
    onCloseToRight(callback: (tabId?: UniqueId, groupId?: UniqueId) => void): void;
    /**
     * Listen to the editor split right event
     * @param callback
     */
    onSplitEditorRight(callback: (activeTabId: UniqueId, groupId: UniqueId) => void): void;
    /**
     * Listen to the tabs Editor values change
     */
    onChangeTab(callback: (value: string | undefined, ev: editor.IModelContentChangedEvent, extraProps: { tabId: UniqueId; groupId: UniqueId }) => void): void;
}

@injectable()
export class EditorService extends BaseService<EditorModel> implements IEditorService {
    protected state: EditorModel;
    // protected defaultActions: IEditorActionsProps[] = [];
    // protected defaultMenus: IMenuItemProps[] = [];
    // protected explorerService: IExplorerService;
    // protected layoutService: ILayoutService;

    constructor(@inject('builtin') private builtin: BuiltinService) {
        super('editor');
        // this.state = container.resolve(EditorModel);
        // this.explorerService = container.resolve(ExplorerService);
        // this.layoutService = container.resolve(LayoutService);
        this.state = new EditorModel();
    }

    public getGroupById(groupId: UniqueId) {
        return this.getState().groups.find(searchById(groupId));
    }

    public getCurrent<T>(): IEditorTab<T> | undefined {
        const { current, groups } = this.getState();
        if (!current) return undefined;
        const group = groups.find(searchById(current));
        if (!group?.activeTab) return undefined;
        return group.data.find(searchById(group.activeTab));
    }

    public getAction(actionId: UniqueId) {
        return this.getState().toolbar.find(searchById(actionId));
    }

    public updateEditorOptions(options: IEditorOptions): void {
        this.setState({
            editorOptions: { ...this.state.editorOptions, ...options },
        });
    }

    public setEntry(component: React.ReactNode) {
        this.setState({
            entry: component,
        });
    }

    public addActions = (actions: IMenuItemProps[]) => {
        this.setState((prev) => ({
            ...prev,
            toolbar: [...prev.toolbar, ...actions].sort(sortByIndex),
        }));
    };

    public updateAction = (action: RequiredId<IMenuItemProps>) => {
        const current = this.getAction(action.id);
        if (!current) return;
        Object.assign(current, action);
        this.setState((prev) => ({ ...prev }));
    };

    public getTabById(tabId: UniqueId, groupId: UniqueId) {
        const group = this.getGroupById(groupId);
        if (group) {
            return group.data?.find(searchById(tabId));
        }
        return undefined;
    }

    public updateTab(tab: IEditorTab<any>, groupId: UniqueId) {
        const exist = this.getTabById(tab.id, groupId);
        const { groups } = this.getState();
        if (!exist) return;
        this.setState({
            current: groupId,
            groups: groups.map((group) => {
                if (group.id !== groupId) return group;
                const { data = [] } = group;
                return {
                    ...group,
                    data: data?.map?.((tabItem) => {
                        if (tabItem.id !== tab.id) return tabItem;
                        return {
                            ...tabItem,
                            ...tab,
                            modified: tabItem.value !== tab.value,
                        };
                    }),
                };
            }),
        });
        if (exist.model && exist.model.getValue() !== tab.value) {
            exist.model.setValue(tab.value ?? '');
        }
        // ===================== effects =====================
        this.emit(EditorEvent.OnUpdateTab, exist);
    }

    private disposeModels(tabs: IEditorTab<any>[]) {
        const { groups } = this.getState();
        const disposing = tabs.filter((tab) => {
            if (!tab.model) return false;
            const count = groups.reduce((acc, cur) => {
                if (cur.data.find((i) => i.model === tab.model)) {
                    return acc + 1;
                }
                return acc;
            }, 0);
            return count === 1;
        });
        disposing.forEach((tab) => {
            tab.model?.dispose();
        });
    }

    public closeTab(tabId: UniqueId, groupId: UniqueId) {
        const group = this.getGroupById(groupId);
        const tab = this.getTabById(tabId, groupId);
        if (!group || !tab) return;
        if (group.data.length === 1 && group.data[0].id === tab.id) {
            // Closing the ONLY tab will dispose the group too
            this.disposeModels(group.data);
            this.setState((prev) => {
                const index = prev.groups.indexOf(group);
                const nextActiveGroup = prev.groups[index + 1] ?? prev.groups[index - 1];
                const next = prev.current === group.id ? nextActiveGroup?.id : prev.current;
                return {
                    ...prev,
                    groups: prev.groups.filter((i) => i !== group),
                    current: next,
                };
            });
            // TODO: reset the editor group
        } else {
            group.data = group.data.filter((i) => i !== tab);
            if (group.activeTab === tabId) {
                const index = group.data.indexOf(tab);
                group.activeTab = group.data[index + 1].id ?? group.data[index - 1].id;
            }
            this.disposeModels([tab]);
            this.setState((prev) => ({ ...prev }));
        }
    }

    public closeOther(tabId: UniqueId, groupId: UniqueId): void {
        const group = this.getGroupById(groupId);
        const tab = this.getTabById(tabId, groupId);
        if (!group || !tab) return;
        const closedTab = group.data.filter((i) => i !== tab);
        this.disposeModels(closedTab);
        group.data = [tab];
        group.activeTab = tabId;
        this.setState((prev) => ({ ...prev }));
    }

    public closeToRight(tabId: UniqueId, groupId: UniqueId) {
        const group = this.getGroupById(groupId);
        const tab = this.getTabById(tabId, groupId);
        if (!group || !tab) return;
        const index = group.data.indexOf(tab);
        const removedTabs = group.data.slice(index + 1);
        group.data = group.data.slice(0, index + 1);
        if (group.activeTab && removedTabs.find(searchById(group.activeTab))) {
            group.activeTab = tabId;
        }
        this.disposeModels(removedTabs);
        this.setState((prev) => ({ ...prev }));
    }

    public closeToLeft(tabId: UniqueId, groupId: UniqueId) {
        const group = this.getGroupById(groupId);
        const tab = this.getTabById(tabId, groupId);
        if (!group || !tab) return;
        const index = group.data.indexOf(tab);
        const removedTabs = group.data.slice(0, index);
        group.data = group.data.slice(index);
        if (group.activeTab && removedTabs.find(searchById(group.activeTab))) {
            group.activeTab = tabId;
        }
        this.disposeModels(removedTabs);
        this.setState((prev) => ({ ...prev }));
    }

    public closeAll(groupId: UniqueId) {
        const group = this.getGroupById(groupId);
        if (!group) return;
        this.disposeModels(group.data);
        this.setState((prev) => {
            const index = prev.groups.indexOf(group);
            const nextActiveGroup = prev.groups[index + 1] ?? prev.groups[index - 1];
            const next = prev.current === group.id ? nextActiveGroup?.id : prev.current;
            return {
                ...prev,
                groups: prev.groups.filter((i) => i !== group),
                current: next,
            };
        });
        // TODO: reset the editor group
    }

    public moveTab(params: IDragProps): void {
        const { from, to } = params;
        const { groups = [] } = this.state;
        const newGroups = groups.map((group) => {
            if (![from.groupId, to.groupId].includes(group.id)) return group;
            const tab = this.getTabById(from.tabId, from.groupId);
            if (!tab) return group;
            if (to.groupId === group.id) {
                const hoverIndex = group?.data?.findIndex?.(({ id }) => id === to?.tabId) || 0;
                const cloneTabs = group?.data?.filter?.(({ id }) => id !== from.tabId) || [];
                const updateTabs = [...cloneTabs];
                updateTabs.splice(hoverIndex, 0, tab);
                return {
                    ...group,
                    data: updateTabs,
                    activeTab: from.tabId,
                };
            }
            if (from.groupId === group.id) {
                const dragIndex = group?.data?.findIndex?.(({ id }) => id === from?.tabId);
                const nextIndex = dragIndex <= 0 ? 1 : dragIndex - 1;
                const nextActiveTabId = group?.data?.[nextIndex]?.id;
                return {
                    ...group,
                    data: group.data?.filter((tab) => tab.id !== from.tabId),
                    activeTab: nextActiveTabId,
                };
            }
            return group;
        });
        this.setState({
            groups: newGroups?.filter(({ data }) => data?.length),
            current: to.groupId,
        });
    }

    public getGroupIndexById(id: UniqueId): number {
        const { groups } = this.state;
        return groups!.findIndex(searchById(id));
    }

    // public getGroupIdByTab(tabId: UniqueId) {
    //     const { groups = [] } = this.state;
    //     const isOpened = this.isOpened(tabId, groups);
    //     if (isOpened) {
    //         const targetGroup = groups.find((group) => this.getTabById(tabId, group.id!))!;
    //         return targetGroup.id!;
    //     } else {
    //         return null;
    //     }
    // }

    public setActive(tabId: UniqueId, groupId: UniqueId) {
        const group = this.getGroupById(groupId);

        if (group) {
            group.activeTab = tabId;
            this.setState((prev) => ({
                ...prev,
                current: groupId,
                groups: [...prev.groups],
            }));
        }
    }

    public updateGroup(groupId: UniqueId, groupValues: Partial<Omit<EditorGroupModel, 'id'>>) {
        const { groups = [] } = this.state;
        const nextGroups = [...groups];
        const groupIndex = this.getGroupIndexById(groupId);

        if (groupIndex > -1) {
            const nextGroup = Object.assign({}, nextGroups[groupIndex], groupValues);
            nextGroups[groupIndex] = nextGroup;

            this.setState({
                groups: nextGroups,
            });
        }
    }

    // public updateCurrentGroup(currentValues: Partial<IEditorGroup>) {
    //     const { current } = this.state;
    //     const nextGroup = Object.assign({}, current, currentValues);
    //     this.setState({ current: nextGroup });
    // }

    private createGroup(tab: IEditorTab<any>) {
        return new EditorGroupModel(randomId(), [tab], tab.id);
    }

    /**
     * @param groupId If provided, will open tab in specific group
     */
    public open(tab: IEditorTab<any>, groupId?: UniqueId) {
        const group = groupId ? this.getGroupById(groupId) : undefined;

        if (group) {
            // insert tab into group
            const exist = !!this.getTabById(tab.id, group.id);
            // if insert tab is current active tab, do nothing
            if (exist && tab.id === group.activeTab) return;

            if (exist) {
                // if insert tab is already exist, active it
                group.activeTab = tab.id;
                this.setState((prev) => ({
                    ...prev,
                    current: groupId,
                    groups: [...prev.groups],
                }));
            } else {
                // if insert tab is not exist, insert it
                group.data.push(tab);
                group.activeTab = tab.id;
                this.setState((prev) => ({
                    ...prev,
                    current: groupId,
                    groups: [...prev.groups],
                }));
            }
        } else {
            // if group isn't exist, open a new group
            const newGroup = this.createGroup(tab);
            this.setState((prev) => ({
                ...prev,
                current: newGroup.id,
                groups: [...prev.groups, newGroup],
            }));
        }

        // ===================== effects =====================
        this.emit(EditorEvent.OpenTab, tab);
    }

    public cloneTab(tabId: UniqueId, groupId: UniqueId): void {
        const tab = this.getTabById(tabId, groupId);
        if (!tab) return;
        const newGroup = this.createGroup(
            cloneDeepWith(tab, (value) => {
                // FIXME: NOT clone ITextModel
                if (value && typeof value === 'object' && 'uri' in value) {
                    return value;
                }
            })
        );
        this.setState((prev) => ({
            ...prev,
            groups: [...prev.groups, newGroup],
            current: newGroup.id,
        }));
    }

    // ===================== Subscriptions =====================
    public onFocus(callback: (instance: editor.IStandaloneCodeEditor) => void) {
        this.subscribe(EditorEvent.onFocus, callback);
    }

    public onCursorSelection(
        callback: (
            instance: editor.IStandaloneCodeEditor,
            ev: editor.ICursorSelectionChangedEvent
        ) => void
    ) {
        this.subscribe(EditorEvent.onCursorSelection, callback);
    }

    public onSelectTab(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.OnSelectTab, callback);
    }

    public onContextMenu(callback: ContextMenuEditorHandler) {
        this.subscribe(EditorEvent.onContextMenu, callback);
    }

    public onToolbarClick(callback: ContextMenuGroupHandler) {
        this.subscribe(EditorEvent.onToolbarClick, callback);
    }

    public onUpdateTab<T>(callback: (tab: IEditorTab<T>, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.OnUpdateTab, callback);
    }

    public onOpenTab<T>(callback: (tab: IEditorTab<T>) => void): void {
        this.subscribe(EditorEvent.OpenTab, callback);
    }

    public onChangeTab(callback: (value: string, ev: editor.IModelContentChangedEvent, extraProps: { tabId: UniqueId; groupId: UniqueId; }) => void): void {
        this.subscribe(EditorEvent.OnChangeTab, callback);
    }

    public onMoveTab(callback: (params: IDragProps) => void) {
        this.subscribe(EditorEvent.OnMoveTab, callback);
    }

    public onCloseAll(callback: (groupId?: UniqueId) => void) {
        this.subscribe(EditorEvent.OnCloseAll, callback);
    }

    public onCloseTab(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.OnCloseTab, callback);
    }

    public onCloseOther(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.OnCloseOther, callback);
    }

    public onCloseToLeft(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.OnCloseToLeft, callback);
    }

    public onCloseToRight(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.OnCloseToRight, callback);
    }

    public onSplitEditorRight(callback: (activeTabId: UniqueId, groupId: UniqueId) => void): void {
        this.subscribe(EditorEvent.OnSplitEditorRight, callback);
    }

}
