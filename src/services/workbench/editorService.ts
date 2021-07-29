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
    getEditorInitialActions,
    IEditorActionsProps,
} from 'mo/model';
import { searchById } from '../helper';
import { editor as MonacoEditor, Uri } from 'mo/monaco';
import { IMenuItemProps } from 'mo/components';
import { ACTION_QUICK_COPY_LINE_UP } from 'mo/model/keybinding';

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
    /**
     *
     * @param groupId If not provided, molecule will update in all group
     */
    updateTab(tab: IEditorTab, groupId?: number): IEditorTab;
    /**
     * Specify a entry page for editor
     */
    setEntry(component: React.ReactNode): void;
    /**
     * Returns whether a specific tab exists
     */
    isOpened(tabId: string): boolean;
    closeTab(tabId: string, groupId: number): void;
    closeOthers(tab: IEditorTab, groupId: number): void;
    closeToRight(tab: IEditorTab, groupId: number): void;
    closeToLeft(tab: IEditorTab, groupId: number): void;
    closeAll(groupId: number): void;
    getGroupById(groupId: number): IEditorGroup | undefined;
    cloneGroup(groupId?: number): IEditorGroup;
    /**
     * Listen to the Editor Tab changed event.
     * @param tab the changed tab
     */
    onUpdateTab(callback: (tab: IEditorTab) => void): void;
    onMoveTab(
        callback: (updateTabs: IEditorTab<any>[], groupId?: number) => void
    );
    onSelectTab(callback: (tabId: string, groupId?: number) => void);
    onCloseAll(callback: (groupId?: number) => void);
    onCloseTab(callback: (tabId: string, groupId?: number) => void);
    onCloseOthers(callback: (tabItem: IEditorTab, groupId?: number) => void);
    onCloseToLeft(callback: (tabItem: IEditorTab, groupId?: number) => void);
    onCloseToRight(callback: (tabItem: IEditorTab, groupId?: number) => void);
    onActionsClick(
        callback: (menuId: string, currentGroup: IEditorGroup) => void
    ): void;
    /**
     * Set active group and tab
     * @param groupId Target group ID
     * @param tabId Target tab ID
     */
    setActive(groupId: number, tabId: string);
    updateGroup(groupId, groupValues: IEditorGroup): void;
    /**
     * Set default actions when create a new group
     */
    setDefaultActions(actions: IEditorActionsProps[]): void;
    /**
     * Update actions in specific group
     */
    updateActions(actions: IMenuItemProps[], groupId?: number): void;
    updateCurrentGroup(currentValues): void;
    /**
     * Functional expansion
     */
    selectAll(): void;
    quickCopyLineUp(): void;
    /**
     * The Instance of Editor
     */
    readonly editorInstance: MonacoEditor.IStandaloneCodeEditor;
}
@singleton()
export class EditorService
    extends Component<IEditor>
    implements IEditorService {
    protected state: IEditor;
    protected defaultActions: IEditorActionsProps[];
    constructor() {
        super();
        this.state = container.resolve(EditorModel);
        this.defaultActions = getEditorInitialActions();
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

    public selectAll = () => {
        this.editorInstance!.focus();
        this.editorInstance.setSelection(
            this.editorInstance!.getModel()!.getFullModelRange()
        );
    };

    public quickCopyLineUp = () => {
        this.editorInstance?.getAction(ACTION_QUICK_COPY_LINE_UP).run();
    };

    public updateTab(tab: IEditorTab, groupId?: number): IEditorTab {
        if (groupId) {
            const group = this.getGroupById(groupId);

            if (group?.data?.length) {
                const tabData = group.data.find(searchById(tab.id));

                if (tabData) {
                    Object.assign(tabData, tab);
                }

                if (group.activeTab === tab.id) {
                    Object.assign(group.tab, tab);
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
                    Object.assign(tabData, tab);
                }

                if (group.activeTab === tab.id) {
                    Object.assign(group.tab, tab);
                }
            });

            if (current?.activeTab === tab.id) {
                Object.assign(current!.tab, tab);
            }

            this.setState({
                current,
                groups,
            });
        }
        return tab;
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
            }
        );
    }

    public closeOthers(tab: IEditorTab, groupId: number) {
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
    }

    public getGroupById(groupId: number): IEditorGroup | undefined {
        const { groups } = this.state;
        return groups!.find(searchById(groupId));
    }

    public getGroupIndexById(id: number): number {
        const { groups } = this.state;
        return groups!.findIndex(searchById(id));
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
                [tab],
                this.defaultActions
            );
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

    public onCloseOthers(
        callback: (tabItem: IEditorTab, groupId?: number) => void
    ) {
        this.subscribe(EditorEvent.OnCloseOthers, callback);
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
