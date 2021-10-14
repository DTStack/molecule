import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import cloneDeep from 'lodash/cloneDeep';
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
import { searchById } from 'mo/common/utils';
import { editor as MonacoEditor, Uri } from 'mo/monaco';
import { IMenuItemProps } from 'mo/components';
import { ExplorerService, IExplorerService } from './explorer/explorerService';

export interface IEditorService extends Component<IEditor> {
    /**
     * Open a new tab in a specific group
     * @param tab Tab data
     * @param groupId Group ID
     */
    open<T = any>(tab: IEditorTab<T>, groupId?: number): void;
    /**
     * Get a tab from a specific group via the tab ID
     * @param tabId
     * @param group
     */
    getTabById<T>(
        tabId: string,
        group: IEditorGroup
    ): IEditorTab<T> | undefined;
    /**
     * Update the specific tab, if the groupId provide, then update the tab of specific group
     * @param tab The id is required
     * @param groupId
     */
    updateTab(tab: IEditorTab, groupId?: number): IEditorTab;
    /**
     * Specify the Entry page of Workbench
     */
    setEntry(component: React.ReactNode): void;
    /**
     * Judge the specific tabs whether opened in Editor view
     * @param tabId The tabId is required
     */
    isOpened(tabId: string): boolean;
    /**
     * Close the specific Tab opened in Editor Group view
     * @param tabId The tabId is required
     * @param groupId The groupId is required
     */
    closeTab(tabId: string, groupId: number): void;
    /**
     * Close other opened tabs in Editor Group
     * @param tab The id is required
     * @param groupId The groupId is required
     */
    closeOther(tab: IEditorTab, groupId: number): void;
    /**
     * Close the right opened tabs in Editor Group
     * @param tab The id is required, the start point of close to right
     * @param groupId The groupId is required
     */
    closeToRight(tab: IEditorTab, groupId: number): void;
    /**
     * Close the left opened Tabs in Editor Group
     * @param tab The id is required, the start point of close to left
     * @param groupId The groupId is required
     */
    closeToLeft(tab: IEditorTab, groupId: number): void;
    /**
     * Close the specific group all opened tabs
     * @param groupId The groupId is required
     */
    closeAll(groupId: number): void;
    /**
     * Get the specific group
     * @param groupId The groupId is required
     */
    getGroupById(groupId: number): IEditorGroup | undefined;
    /**
     * Clone a specific group, if the argument `groupId` is undefined,
     * there default clone the current group
     * @param groupId
     */
    cloneGroup(groupId?: number): IEditorGroup;
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
        callback: (updateTabs: IEditorTab<any>[], groupId?: number) => void
    );
    /**
     * Listen to the tab select event
     * @param callback
     */
    onSelectTab(callback: (tabId: string, groupId?: number) => void);
    /**
     * Listen to the all tabs close event
     * @param callback
     */
    onCloseAll(callback: (groupId?: number) => void);
    /**
     * Listen to the tab close event
     * @param callback
     */
    onCloseTab(callback: (tabId: string, groupId?: number) => void);
    /**
     * Listen to the other tabs close event
     * @param callback
     */
    onCloseOther(callback: (tabItem: IEditorTab, groupId?: number) => void);
    /**
     * Listen to the left tabs close event
     * @param callback
     */
    onCloseToLeft(callback: (tabItem: IEditorTab, groupId?: number) => void);
    /**
     * Listen to the right tabs close event
     * @param callback
     */
    onCloseToRight(callback: (tabItem: IEditorTab, groupId?: number) => void);
    /**
     * Listen to the Group Actions click event
     * @param callback
     */
    onActionsClick(
        callback: (menuId: string, currentGroup: IEditorGroup) => void
    ): void;
    /**
     * Set active group and tab
     * @param groupId Target group ID
     * @param tabId Target tab ID
     */
    setActive(groupId: number, tabId: string);
    /**
     * Update the specific group
     * @param groupId
     * @param groupValues
     */
    updateGroup(groupId, groupValues: IEditorGroup): void;
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
    updateActions(actions: IMenuItemProps[], groupId?: number): void;
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
    getGroupIdByTab(tabId: string): number | null;
}
@singleton()
export class EditorService
    extends Component<IEditor>
    implements IEditorService {
    protected state: IEditor;
    protected defaultActions: IEditorActionsProps[] = [];
    protected defaultMenus: IMenuItemProps[] = [];
    protected explorerService: IExplorerService;

    constructor() {
        super();
        this.state = container.resolve(EditorModel);
        this.explorerService = container.resolve(ExplorerService);
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
        return Object.assign({}, this.defaultActions);
    }

    public getDefaultMenus() {
        return Object.assign({}, this.defaultMenus);
    }

    private disposeModel(tabs: IEditorTab | IEditorTab[]) {
        const arr = Array.isArray(tabs) ? tabs : [tabs];
        arr.forEach((tab) => {
            MonacoEditor.getModel(Uri.parse(tab.id!))?.dispose();
        });
    }

    public isOpened(
        tabId: string,
        filterGroups?: IEditorGroup<any, any>[]
    ): boolean {
        const groups = filterGroups || this.state.groups || [];
        return groups.some((group) => this.getTabById(tabId, group));
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

    public updateActions = (actions: IMenuItemProps[], groupId?: number) => {
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
        tabId: string,
        group: IEditorGroup
    ): IEditorTab<T> | undefined {
        return group.data?.find(searchById(tabId));
    }

    public get editorInstance() {
        return this.state.current?.editorInstance;
    }

    public updateTab(tab: IEditorTab, groupId?: number): IEditorTab {
        let updatedTab;
        if (groupId) {
            const group = this.getGroupById(groupId);

            if (group?.data?.length) {
                const tabData = group.data.find(searchById(tab.id));

                if (tabData) {
                    updatedTab = Object.assign(tabData, tab);
                }

                if (group.activeTab === tab.id) {
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
                const tabData = this.getTabById(tab.id!, group);
                if (tabData) {
                    updatedTab = Object.assign(tabData, tab);
                }

                if (group.activeTab === tab.id) {
                    updatedTab = Object.assign(group.tab, tab);
                }
            });

            if (current?.activeTab === tab.id) {
                updatedTab = Object.assign(current!.tab, tab);
            }

            this.setState({
                current,
                groups,
            });
        }
        return updatedTab;
    }

    public closeTab(tabId: string, groupId: number) {
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
                }
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

    public closeOther(tab: IEditorTab, groupId: number): void {
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

    public closeToRight(tab: IEditorTab, groupId: number) {
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

    public closeToLeft(tab: IEditorTab, groupId: number) {
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

    public getGroupById(groupId: number): IEditorGroup | undefined {
        const { groups } = this.state;
        return groups!.find(searchById(groupId));
    }

    public getGroupIndexById(id: number): number {
        const { groups } = this.state;
        return groups!.findIndex(searchById(id));
    }

    public getGroupIdByTab(tabId: string) {
        const { groups = [] } = this.state;
        const isOpened = this.isOpened(tabId, groups);
        if (isOpened) {
            const targetGroup = groups.find((group) =>
                this.getTabById(tabId, group)
            )!;
            return targetGroup.id!;
        } else {
            return null;
        }
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

    public updateCurrentGroup(currentValues: IEditorGroup) {
        const { current } = this.state;
        const nextGroup = Object.assign({}, current, currentValues);
        this.setState({ current: nextGroup });
    }

    /**
     * @param groupId If provided, will open tab in specific group
     */
    public open<T>(tab: IEditorTab<T>, groupId?: number) {
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

    public closeAll(groupId: number) {
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
        }
    }

    public cloneGroup(groupId?: number): IEditorGroup {
        const { current, groups = [] } = this.state;

        const cloneGroup: IEditorGroup = Object.assign(
            {},
            groupId ? this.getGroupById(groupId) : current
        );

        // get an increment id for new group
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

    public onUpdateTab(callback: (tab: IEditorTab) => void) {
        this.subscribe(EditorEvent.OnUpdateTab, callback);
    }

    public onMoveTab(
        callback: (updateTabs: IEditorTab<any>[], groupId?: number) => void
    ) {
        this.subscribe(EditorEvent.OnMoveTab, callback);
    }

    public onSelectTab(callback: (tabId: string, groupId?: number) => void) {
        this.subscribe(EditorEvent.OnSelectTab, callback);
    }

    public onCloseAll(callback: (groupId?: number) => void) {
        this.subscribe(EditorEvent.OnCloseAll, callback);
    }

    public onCloseTab(callback: (tabId: string, groupId?: number) => void) {
        this.subscribe(EditorEvent.OnCloseTab, callback);
    }

    public onCloseOther(
        callback: (tabItem: IEditorTab, groupId?: number) => void
    ) {
        this.subscribe(EditorEvent.OnCloseOther, callback);
    }

    public onCloseToLeft(
        callback: (tabItem: IEditorTab, groupId?: number) => void
    ) {
        this.subscribe(EditorEvent.OnCloseToLeft, callback);
    }

    public onCloseToRight(
        callback: (tabItem: IEditorTab, groupId?: number) => void
    ) {
        this.subscribe(EditorEvent.OnCloseToRight, callback);
    }

    public onActionsClick(
        callback: (menuId: string, currentGroup: IEditorGroup) => void
    ) {
        this.subscribe(EditorEvent.onActionsClick, callback);
    }
}
