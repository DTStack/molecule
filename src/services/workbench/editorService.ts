import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import { cloneDeep, isString } from 'lodash';
import { Component } from 'mo/react';
import {
    EditorModel,
    EditorGroupModel,
    IEditor,
    IEditorGroup,
    IEditorTab,
    EditorEvent,
    IEditorActionsProps,
    IEditorOptions,
} from 'mo/model';
import { randomId, searchById } from 'mo/common/utils';
import { editor as MonacoEditor, Uri } from 'mo/monaco';
import { IMenuItemProps } from 'mo/components';
import { ExplorerService, IExplorerService } from './explorer/explorerService';
import type { UniqueId } from 'mo/common/types';
import { ILayoutService, LayoutService } from './layoutService';

export interface IEditorService extends Component<IEditor> {
    /**
     * Open a new tab in a specific group
     * @param tab Tab data
     * @param groupId Group ID
     */
    open<T = any>(tab: IEditorTab<T>, groupId?: UniqueId): void;
    /**
     * Get a tab from a specific group via the tab ID
     * @param tabId
     * @param groupId
     */
    getTabById<T>(
        tabId: UniqueId,
        groupId: UniqueId
    ): IEditorTab<T> | undefined;
    /**
     * Update the specific tab, if the groupId provide, then update the tab of specific group
     * @param tab The id is required
     * @param groupId
     */
    updateTab(tab: IEditorTab, groupId?: UniqueId): IEditorTab;
    /**
     * Updates the editor content for a specific group
     * @param group The editorInstance is required
     * @param value
     */
    setGroupEditorValue(group: IEditorGroup, value: string): void;
    /**
     * Specify the Entry page of Workbench
     */
    setEntry(component: JSX.Element): void;
    /**
     * Judge the specific tabs whether opened in Editor view
     * @param tabId The tabId is required
     */
    isOpened(tabId: UniqueId): boolean;
    /**
     * Close the specific Tab opened in Editor Group view
     * @param tabId The tabId is required
     * @param groupId The groupId is required
     */
    closeTab(tabId: UniqueId, groupId: UniqueId): void;
    /**
     * Close other opened tabs in Editor Group
     * @param tab The id is required
     * @param groupId The groupId is required
     */
    closeOther(tab: IEditorTab, groupId: UniqueId): void;
    /**
     * Close the right opened tabs in Editor Group
     * @param tab The id is required, the start point of close to right
     * @param groupId The groupId is required
     */
    closeToRight(tab: IEditorTab, groupId: UniqueId): void;
    /**
     * Close the left opened Tabs in Editor Group
     * @param tab The id is required, the start point of close to left
     * @param groupId The groupId is required
     */
    closeToLeft(tab: IEditorTab, groupId: UniqueId): void;
    /**
     * Close the specific group all opened tabs
     * @param groupId The groupId is required
     */
    closeAll(groupId: UniqueId): void;
    /**
     * Get the specific group
     * @param groupId The groupId is required
     */
    getGroupById(groupId: UniqueId): IEditorGroup | undefined;
    /**
     * Clone a specific group, if the argument `groupId` is undefined,
     * there default clone the current group
     * @param groupId
     */
    cloneGroup(groupId?: UniqueId): IEditorGroup;
    /**
     * Listen to the Editor tab changed event
     * @param callback
     */
    onUpdateTab(callback: (tab: IEditorTab) => void): void;
    /**
     * Listen to the tab opening event
     * @param callback
     */
    onOpenTab(callback: (tab: IEditorTab) => void): void;
    /**
     * Listen to the tab move event
     * @param callback
     */
    onMoveTab(
        callback: (updateTabs: IEditorTab<any>[], groupId?: UniqueId) => void
    );
    /**
     * Listen to the tab select event
     * @param callback
     */
    onSelectTab(callback: (tabId: UniqueId, groupId?: UniqueId) => void);
    /**
     * Listen to the all tabs close event
     * @param callback
     */
    onCloseAll(callback: (groupId?: UniqueId) => void);
    /**
     * Listen to the tab close event
     * @param callback
     */
    onCloseTab(callback: (tabId: UniqueId, groupId?: UniqueId) => void);
    /**
     * Listen to the other tabs close event
     * @param callback
     */
    onCloseOther(callback: (tabItem: IEditorTab, groupId?: UniqueId) => void);
    /**
     * Listen to the left tabs close event
     * @param callback
     */
    onCloseToLeft(callback: (tabItem: IEditorTab, groupId?: UniqueId) => void);
    /**
     * Listen to the right tabs close event
     * @param callback
     */
    onCloseToRight(callback: (tabItem: IEditorTab, groupId?: UniqueId) => void);
    /**
     * Listen to the Group Actions click event
     * @param callback
     */
    onActionsClick(
        callback: (menuId: UniqueId, currentGroup: IEditorGroup) => void
    ): void;
    /**
     * Set active group and tab
     * @param groupId Target group ID
     * @param tabId Target tab ID
     */
    setActive(groupId: UniqueId, tabId: UniqueId);
    /**
     * Update the specific group
     * @param groupId
     * @param groupValues
     */
    updateGroup(groupId: UniqueId, groupValues: Omit<IEditorGroup, 'id'>): void;
    /**
     * Set default actions when create a new group
     * @param actions
     */
    setDefaultActions(actions: IEditorActionsProps[]): void;
    /**
     * Set default menus when create a new group
     * @param menus
     */
    setDefaultMenus(menus: IMenuItemProps[]): void;
    /**
     * Update actions in specific group
     * @param actions
     * @param groupId
     */
    updateActions(actions: IMenuItemProps[], groupId?: UniqueId): void;
    /**
     * Update the current group
     * @param currentValues
     */
    updateCurrentGroup(currentValues): void;
    /**
     * Get the default group actions
     */
    getDefaultActions(): IEditorActionsProps[];
    /**
     * Get the default group menus
     */
    getDefaultMenus(): IMenuItemProps[];
    /**
     * Update the editor options
     * @param options
     */
    updateEditorOptions(options: IEditorOptions): void;
    /**
     * The instance of MonacoEditor
     */
    readonly editorInstance: MonacoEditor.IStandaloneCodeEditor;
    /**
     * Get the group's id which contains the tab
     * @param tabId
     */
    getGroupIdByTab(tabId: UniqueId): UniqueId | null;
}
@singleton()
export class EditorService
    extends Component<IEditor>
    implements IEditorService
{
    protected state: IEditor;
    protected defaultActions: IEditorActionsProps[] = [];
    protected defaultMenus: IMenuItemProps[] = [];
    protected explorerService: IExplorerService;
    protected layoutService: ILayoutService;

    constructor() {
        super();
        this.state = container.resolve(EditorModel);
        this.explorerService = container.resolve(ExplorerService);
        this.layoutService = container.resolve(LayoutService);
    }

    public updateEditorOptions(options: IEditorOptions): void {
        const editorOptions = Object.assign(
            {},
            this.state.editorOptions,
            options
        );
        this.setState({
            editorOptions,
        });
        this.editorInstance?.updateOptions(editorOptions);
    }

    public getDefaultActions() {
        return cloneDeep(this.defaultActions);
    }

    public getDefaultMenus() {
        return cloneDeep(this.defaultMenus);
    }

    private disposeModel(tabs: IEditorTab | IEditorTab[]) {
        const arr = Array.isArray(tabs) ? tabs : [tabs];
        arr.forEach((tab) => {
            MonacoEditor.getModel(Uri.parse(tab.id!.toString()))?.dispose();
        });
    }

    public isOpened(
        tabId: UniqueId,
        filterGroups?: IEditorGroup<any, any>[]
    ): boolean {
        const groups = filterGroups || this.state.groups || [];
        return groups.some((group) => this.getTabById(tabId, group.id!));
    }

    public setDefaultActions(actions: IEditorActionsProps[]): void {
        this.defaultActions = actions;
    }

    public setDefaultMenus(menus: IMenuItemProps[]): void {
        this.defaultMenus = menus;
    }

    public setEntry(component: React.ReactNode) {
        this.setState({
            entry: component,
        });
    }

    public updateActions = (actions: IMenuItemProps[], groupId?: UniqueId) => {
        const { current, groups: rawGroups } = this.getState();
        if (!current) return;

        const groups = rawGroups?.concat() || [];
        const targetGroup = groups.find(searchById(groupId || current.id));

        if (targetGroup) {
            const newActions = targetGroup.actions?.concat() || [];
            newActions.forEach((action) => {
                const target = actions.find((item) => item.id === action.id);
                if (target) {
                    Object.assign(action, target);
                }
            });
            targetGroup.actions = newActions;

            this.setState({
                current: targetGroup.id === current.id ? targetGroup : current,
                groups,
            });
        }
    };

    public getTabById<T>(
        tabId: UniqueId,
        groupId: UniqueId
    ): IEditorTab<T> | undefined {
        const group = this.getGroupById(groupId);
        if (group) {
            return group.data?.find(searchById(tabId));
        }
        return undefined;
    }

    public get editorInstance() {
        return this.state.current?.editorInstance;
    }

    public updateTab(tab: IEditorTab, groupId?: UniqueId): IEditorTab {
        let updatedTab;
        const editorValue = tab?.data?.value;
        if (groupId) {
            const group = this.getGroupById(groupId);

            if (group?.data?.length) {
                const tabData = group.data.find(searchById(tab.id));

                if (tabData) {
                    updatedTab = Object.assign(tabData, tab);
                }
                if (group.activeTab === tab.id) {
                    isString(editorValue) &&
                        !tabData?.renderPane &&
                        this.setGroupEditorValue(group, editorValue);
                    updatedTab = Object.assign(group.tab, tab);
                }
                this.updateGroup(groupId, group);

                if (groupId === this.state.current?.id) {
                    this.updateCurrentGroup(group);
                }
            }
        } else {
            const { groups = [], current } = this.state;
            groups.forEach((group) => {
                const tabData = this.getTabById(tab.id!, group.id!);
                if (tabData) {
                    updatedTab = Object.assign(tabData, tab);
                }

                if (group.activeTab === tab.id) {
                    isString(editorValue) &&
                        !tabData?.renderPane &&
                        this.setGroupEditorValue(group, editorValue);
                    updatedTab = Object.assign(group.tab, tab);
                }
            });

            if (current?.activeTab === tab.id) {
                updatedTab = Object.assign(current!.tab, tab);
            }

            this.setState({
                current: current ? { ...current } : current,
                groups: [...groups],
            });
        }

        return updatedTab;
    }

    public setGroupEditorValue(group: IEditorGroup, value: string) {
        const model = group.editorInstance?.getModel();
        if (!model) return;

        const currentValue = model?.getValue();
        if (currentValue !== value) {
            model?.setValue(value);
        }
    }

    public closeTab(tabId: UniqueId, groupId: UniqueId) {
        const groupIndex = this.getGroupIndexById(groupId);
        if (groupIndex === -1) return;

        const { groups = [] } = this.state;
        const nextGroups = [...groups];
        const nextGroup = nextGroups[groupIndex];
        const tabIndex = nextGroup.data!.findIndex(searchById(tabId));

        const tab = cloneDeep(nextGroup.data![tabIndex]);
        if (tabIndex === -1) return;

        if (nextGroup.data!.length === 1 && tabIndex === 0) {
            // the tab which is closing is the only one tab in current group,
            // so delete group and choose last or former group as current one
            const activeGroup =
                nextGroups[groupIndex + 1] || nextGroups[groupIndex - 1];

            nextGroups.splice(groupIndex, 1);

            this.setState(
                {
                    groups: nextGroups,
                    current: nextGroups?.length === 0 ? undefined : activeGroup,
                },
                () => {
                    const isOpened = this.isOpened(tabId);
                    // the model of closed tab should be disposed after closing
                    !isOpened && this.disposeModel(tab);
                    this.explorerService.forceUpdate();
                }
            );
            // reset the editor group
            this.layoutService.setGroupSplitSize(
                nextGroups.length
                    ? new Array(nextGroups.length + 1).fill('auto')
                    : []
            );
            return;
        }

        if (tabId === nextGroup.activeTab) {
            // the tab which is closing is the active one,
            // then choose last or former tab as current one
            const nextTab =
                nextGroup.data![tabIndex + 1] || nextGroup.data![tabIndex - 1];
            nextGroup.tab = { ...nextTab };
            nextGroup.activeTab = nextTab?.id;
        }

        nextGroup.data!.splice(tabIndex, 1);
        nextGroups[groupIndex] = nextGroup;

        this.setState(
            {
                current: nextGroup,
                groups: nextGroups,
            },
            () => {
                const isOpened = this.isOpened(tabId);
                !isOpened && this.disposeModel(tab);
                this.explorerService.forceUpdate();
            }
        );
    }

    public closeOther(tab: IEditorTab, groupId: UniqueId): void {
        const groupIndex = this.getGroupIndexById(groupId);
        if (groupIndex <= -1) return;

        const { groups = [] } = this.state;
        const nextGroups = [...groups];
        const tabId = tab.id;
        const nextGroup = nextGroups[groupIndex];
        const nextTabData = nextGroup.data!;

        const updateTabs = nextTabData!.filter(searchById(tabId));
        // tab data is unlikely to be large enough to affect exec time, so we filter twice for maintainability
        const removedTabs = cloneDeep(
            nextTabData!.filter(
                (item) =>
                    item.id !== tabId &&
                    !this.isOpened(
                        item.id!,
                        nextGroups.filter((g) => g.id !== groupId)
                    )
            )
        );

        this.updateGroup(groupId, {
            data: updateTabs,
        });
        this.setActive(groupId, tabId!);

        this.disposeModel(removedTabs);
        this.explorerService.forceUpdate();
    }

    public closeToRight(tab: IEditorTab, groupId: UniqueId) {
        const groupIndex = this.getGroupIndexById(groupId);
        if (groupIndex <= -1) return;

        const { groups = [] } = this.state;
        const nextGroups = [...groups];
        const tabId = tab.id;
        const nextGroup = nextGroups[groupIndex];
        const nextTabData = nextGroup.data;

        const tabIndex = nextTabData!.findIndex(searchById(tabId));
        if (tabIndex <= -1) return;

        const updateTabs = nextTabData?.slice(0, tabIndex + 1);
        const removedTabs = cloneDeep(
            nextTabData?.slice(tabIndex + 1).filter(
                (item) =>
                    !this.isOpened(
                        item.id!,
                        nextGroups.filter((g) => g.id !== groupId)
                    )
            )
        );

        this.updateGroup(groupId, {
            data: updateTabs,
        });
        this.setActive(groupId, tabId!);
        this.disposeModel(removedTabs || []);
        this.explorerService.forceUpdate();
    }

    public closeToLeft(tab: IEditorTab, groupId: UniqueId) {
        const groupIndex = this.getGroupIndexById(groupId);
        if (groupIndex <= -1) return;

        const { groups = [] } = this.state;
        const nextGroups = [...groups];
        const tabId = tab.id;
        const nextGroup = nextGroups[groupIndex];
        const nextTabData = nextGroup.data;

        const tabIndex = nextTabData!.findIndex(searchById(tabId));
        if (tabIndex <= -1) return;

        const updateTabs = nextTabData?.slice(tabIndex, nextTabData.length);
        const removedTabs = cloneDeep(
            nextTabData?.slice(0, tabIndex).filter(
                (item) =>
                    !this.isOpened(
                        item.id!,
                        nextGroups.filter((g) => g.id !== groupId)
                    )
            )
        );

        this.updateGroup(groupId, {
            data: updateTabs,
        });
        this.setActive(groupId, tabId!);
        this.disposeModel(removedTabs || []);
        this.explorerService.forceUpdate();
    }

    public getGroupById(groupId: UniqueId): IEditorGroup | undefined {
        const { groups } = this.state;
        return groups!.find(searchById(groupId));
    }

    public getGroupIndexById(id: UniqueId): number {
        const { groups } = this.state;
        return groups!.findIndex(searchById(id));
    }

    public getGroupIdByTab(tabId: UniqueId) {
        const { groups = [] } = this.state;
        const isOpened = this.isOpened(tabId, groups);
        if (isOpened) {
            const targetGroup = groups.find((group) =>
                this.getTabById(tabId, group.id!)
            )!;
            return targetGroup.id!;
        } else {
            return null;
        }
    }

    public setActive(groupId: UniqueId, tabId: UniqueId) {
        const { groups = [] } = this.state;
        const groupIndex = this.getGroupIndexById(groupId);

        if (groupIndex > -1) {
            const nextGroups = [...groups];
            const group = nextGroups[groupIndex];
            const tab = this.getTabById(tabId, group.id!);

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

    public updateGroup(
        groupId: UniqueId,
        groupValues: Omit<IEditorGroup, 'id'>
    ) {
        const { groups = [] } = this.state;
        const nextGroups = [...groups];
        const groupIndex = this.getGroupIndexById(groupId);

        if (groupIndex > -1) {
            const nextGroup = Object.assign(
                {},
                nextGroups[groupIndex],
                groupValues
            );
            nextGroups[groupIndex] = nextGroup;

            this.setState({
                groups: nextGroups,
            });
        }
    }

    public updateCurrentGroup(currentValues: Partial<IEditorGroup>) {
        const { current } = this.state;
        const nextGroup = Object.assign({}, current, currentValues);
        this.setState({ current: nextGroup });
    }

    /**
     * @param groupId If provided, will open tab in specific group
     */
    public open<T>(tab: IEditorTab<T>, groupId?: UniqueId) {
        const { current, groups = [] } = this.state;
        let group = current;

        if (groupId) {
            // find specific group
            group = this.getGroupById(groupId);
        }

        if (group) {
            // insert tab into group
            const { id: tabId } = tab;
            const isExist = group?.data!.find(searchById(tabId));
            if (isExist && tabId === group?.activeTab) return;

            const groupIndex = this.getGroupIndexById(group.id!);
            const currentGroup = groups[groupIndex];
            if (!isExist) {
                group.data!.push(tab);
            }

            group.tab = tab;
            group.activeTab = tabId;
            groups[groupIndex] = { ...currentGroup, tab, activeTab: tabId };
        } else {
            // if group isn't exist, open a new group
            group = new EditorGroupModel(
                groups.length + 1,
                tab,
                tab.id,
                [tab],
                this.defaultActions,
                this.defaultMenus
            );
            groups.push(group);
        }

        this.emit(EditorEvent.OpenTab, tab);

        this.setState({
            current: group,
            groups: [...groups],
        });
        this.explorerService.forceUpdate();
    }

    public onOpenTab(callback: (tab: IEditorTab) => void): void {
        this.subscribe(EditorEvent.OpenTab, callback);
    }

    public closeAll(groupId: UniqueId) {
        const { current, groups = [] } = this.state;
        const groupIndex = this.getGroupIndexById(groupId);

        if (groupIndex > -1) {
            const nextGroups = [...groups];
            let nextCurrentGroup = current;

            const removedGroup = nextGroups.splice(groupIndex, 1);

            const removed = cloneDeep(
                removedGroup[0].data?.filter(
                    (item) => !this.isOpened(item.id!, nextGroups)
                ) || []
            );

            if (current && current.id === groupId) {
                nextCurrentGroup =
                    groups[groupIndex + 1] || groups[groupIndex - 1];
            }

            this.setState(
                {
                    groups: nextGroups,
                    current: nextCurrentGroup,
                },
                () => {
                    // dispose all models in specific group
                    this.disposeModel(removed);
                    this.explorerService.forceUpdate();
                }
            );
            // reset editor group
            this.layoutService.setGroupSplitSize(
                nextGroups.length
                    ? new Array(nextGroups.length + 1).fill('auto')
                    : []
            );
        }
    }

    public cloneGroup(groupId?: UniqueId): IEditorGroup {
        const { current, groups = [] } = this.state;

        const cloneGroup: IEditorGroup = Object.assign(
            {},
            groupId ? this.getGroupById(groupId) : current
        );

        // get an random id for new group
        const id = randomId();

        const initialTab = Object.assign({}, cloneGroup.tab);
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

    public onUpdateTab(callback: (tab: IEditorTab) => void) {
        this.subscribe(EditorEvent.OnUpdateTab, callback);
    }

    public onMoveTab(
        callback: (updateTabs: IEditorTab<any>[], groupId?: UniqueId) => void
    ) {
        this.subscribe(EditorEvent.OnMoveTab, callback);
    }

    public onSelectTab(
        callback: (tabId: UniqueId, groupId?: UniqueId) => void
    ) {
        this.subscribe(EditorEvent.OnSelectTab, callback);
    }

    public onCloseAll(callback: (groupId?: UniqueId) => void) {
        this.subscribe(EditorEvent.OnCloseAll, callback);
    }

    public onCloseTab(callback: (tabId: UniqueId, groupId?: UniqueId) => void) {
        this.subscribe(EditorEvent.OnCloseTab, callback);
    }

    public onCloseOther(
        callback: (tabItem: IEditorTab, groupId?: UniqueId) => void
    ) {
        this.subscribe(EditorEvent.OnCloseOther, callback);
    }

    public onCloseToLeft(
        callback: (tabItem: IEditorTab, groupId?: UniqueId) => void
    ) {
        this.subscribe(EditorEvent.OnCloseToLeft, callback);
    }

    public onCloseToRight(
        callback: (tabItem: IEditorTab, groupId?: UniqueId) => void
    ) {
        this.subscribe(EditorEvent.OnCloseToRight, callback);
    }

    public onActionsClick(
        callback: (menuId: UniqueId, currentGroup: IEditorGroup) => void
    ) {
        this.subscribe(EditorEvent.onActionsClick, callback);
    }
}
