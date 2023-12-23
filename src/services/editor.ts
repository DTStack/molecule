import { isUndefined } from 'lodash-es';
import { BaseService } from 'mo/glue';
import { EditorEvent, EditorGroupModel, EditorModel } from 'mo/models/editor';
import type {
    ContextMenuGroupHandler,
    ContextMenuWithItemHandler,
    FunctionalOrSingle,
    IEditorOptions,
    IEditorTab,
    IMenuItemProps,
    RequiredId,
    TabGroup,
    UniqueId,
} from 'mo/types';
import { getPrevOrNext, randomId, searchById } from 'mo/utils';
import type { editor } from 'monaco-editor';
import { injectable } from 'tsyringe';

type EditorContextMenu = ContextMenuWithItemHandler<[tabId: UniqueId, groupId: UniqueId]>;

@injectable()
export class EditorService extends BaseService<EditorModel> {
    protected state: EditorModel;

    constructor() {
        super('editor');
        this.state = new EditorModel();
    }

    public getToolbars() {
        return this.getState().toolbar;
    }

    public getCurrent() {
        return this.getState().current;
    }

    public getGroups() {
        return this.getState().groups;
    }

    public getToolbar(toolbarId: UniqueId) {
        return this.getToolbars().find(searchById(toolbarId)) || [];
    }

    public getGroup<T = any>(groupId?: UniqueId) {
        if (isUndefined(groupId)) return;
        return this.getGroups().find(searchById(groupId)) as EditorGroupModel<T>;
    }

    public getCurrentGroup<T = any>() {
        return this.getGroup<T>(this.getCurrent());
    }

    public getTabs<T = any>(groupId?: UniqueId) {
        return this.getGroup<T>(groupId)?.data || [];
    }

    public getCurrentTabs<T = any>() {
        return this.getTabs<T>(this.getCurrent());
    }

    public getTab(tabId?: UniqueId, groupId?: UniqueId) {
        if (isUndefined(groupId) || isUndefined(tabId)) return;
        return this.getTabs(groupId).find(searchById(tabId));
    }

    public getCurrentTab() {
        return this.getTab(this.getCurrentGroup()?.activeTab, this.getCurrent());
    }

    public getOptions() {
        return this.getState().options;
    }

    public updateOptions(options: IEditorOptions): void {
        this.dispatch((draft) => {
            Object.assign(draft.options, options);
        });
    }

    public setOptions(options: IEditorOptions) {
        this.dispatch((draft) => {
            draft.options = options;
        });
    }

    public setEntry(component: React.ReactNode) {
        this.dispatch((draft) => {
            draft.entry = component;
        });
    }

    public updateTab(tab: RequiredId<IEditorTab<any>>, groupId: UniqueId) {
        this.dispatch((draft) => {
            const target = draft.groups.find(searchById(groupId))?.data.find(searchById(tab.id));
            if (!target) return;
            Object.assign(target, tab);

            if (
                Object.hasOwn(tab, 'value') &&
                target.model &&
                target.model.getValue() !== tab.value
            ) {
                target.model.setValue(tab.value ?? '');
            }

            // ===================== effects =====================
            this.emit(EditorEvent.onUpdateTab, tab.id, groupId);
        });
    }

    public saveTabs(tabsId: UniqueId[], groupId: UniqueId) {
        tabsId.forEach((id) => {
            this.updateTab({ id, modified: false }, groupId);
        });
    }

    public addToolbars(toolbars: IMenuItemProps[]) {
        this.dispatch((draft) => {
            draft.toolbar.push(...toolbars);
        });
    }

    public updateToolbar(toolbar: RequiredId<IMenuItemProps>) {
        this.dispatch((draft) => {
            const target = draft.toolbar.find(searchById(toolbar.id));
            if (!target) return;
            Object.assign(target, toolbar);
        });
    }

    private countTab(tabId: UniqueId) {
        return this.getGroups().reduce((acc, cur) => {
            return acc + cur.data.filter((i) => i.id === tabId).length;
        }, 0);
    }

    private disposeModels(tabs: IEditorTab<any>[], groups: EditorGroupModel[]) {
        // Can't disposed model directly as model maybe shared by different group's tab
        if (!groups.length) {
            tabs.forEach((tab) => tab.model?.dispose());
        } else {
            tabs.forEach((tab) => {
                if (this.countTab(tab.id) === 1) tab.model?.dispose();
            });
        }
    }

    public closeTab(tabId: UniqueId, groupId: UniqueId) {
        this.dispatch((draft) => {
            const groupIdx = draft.groups.findIndex(searchById(groupId));
            const group = draft.groups[groupIdx];
            const idx = group.data.findIndex(searchById(tabId));
            if (idx === -1) return;
            const tab = group.data.splice(idx, 1);
            this.disposeModels(tab, draft.groups);
            if (group.activeTab === tab[0].id) {
                group.activeTab = getPrevOrNext(group.data, idx)?.id;
            }

            if (group.data.length === 0) {
                draft.groups.splice(groupIdx, 1);
                if (draft.current === group.id) {
                    draft.current = getPrevOrNext(draft.groups, groupIdx)?.id;
                }
            }
        });
    }

    public closeOther(tabId: UniqueId, groupId: UniqueId): void {
        const tabs = this.getTabs(groupId);
        const others = tabs.filter((i) => i.id !== tabId);
        others.forEach((tab) => {
            this.closeTab(tab.id, groupId);
        });
    }

    public closeToRight(tabId: UniqueId, groupId: UniqueId) {
        const tabs = this.getTabs(groupId);
        const right = tabs.slice(tabs.findIndex(searchById(tabId)) + 1);
        right.forEach((tab) => {
            this.closeTab(tab.id, groupId);
        });
    }

    public closeToLeft(tabId: UniqueId, groupId: UniqueId) {
        const tabs = this.getTabs(groupId);
        const left = tabs.slice(0, tabs.findIndex(searchById(tabId)));
        left.forEach((tab) => {
            this.closeTab(tab.id, groupId);
        });
    }

    public closeSaved(groupId: UniqueId) {
        const tabs = this.getTabs(groupId);
        const saved = tabs.filter((i) => !i.modified);
        saved.forEach((tab) => {
            this.closeTab(tab.id, groupId);
        });
    }

    public closeAll(groupId?: UniqueId) {
        if (isUndefined(groupId)) {
            const groups = this.getGroups();
            groups.forEach((group) => {
                this.disposeModels(group.data, groups);
            });
            this.dispatch((draft) => {
                draft.groups.length = 0;
                draft.current = undefined;
            });
        } else {
            const tabs = this.getTabs(groupId);
            tabs.forEach((tab) => {
                this.closeTab(tab.id, groupId!);
            });
        }
    }

    public moveTab(from: TabGroup, to: TabGroup): void {
        this.dispatch((draft) => {
            const source = draft.groups.find(searchById(from.groupId));
            const target = draft.groups.find(searchById(to.groupId));
            if (!source || !target) return;
            const sourceTabIndex = source.data.findIndex(searchById(from.tabId));
            const targetTabIndex = target.data.findIndex(searchById(to.tabId));
            if (sourceTabIndex === -1 || targetTabIndex === -1) return;
            // Move active tab to another group should active next tab
            if (from.groupId !== to.groupId && source.activeTab === from.tabId) {
                source.activeTab = getPrevOrNext(source.data, sourceTabIndex)?.id;
            }
            // insert the tab into target group
            const tab = source.data.splice(sourceTabIndex, 1);
            target.data.splice(targetTabIndex, 0, tab[0]);
            // active current tab
            target.activeTab = from.tabId;
            // Remove empty group
            if (!source.data.length) {
                const idx = draft.groups.findIndex(searchById(from.groupId));
                draft.groups.splice(idx, 1);
            }
        });
    }

    public setCurrentGroup(groupId: UniqueId) {
        this.dispatch((draft) => {
            draft.current = groupId;
        });
    }

    public setCurrent(tabId: UniqueId, groupId: UniqueId) {
        this.dispatch((draft) => {
            draft.current = groupId;
            const group = draft.groups.find(searchById(groupId));
            if (!group) return;
            group.activeTab = tabId;
        });
    }

    public updateGroup<T>(group: RequiredId<EditorGroupModel<T>>) {
        this.dispatch((draft) => {
            const target = draft.groups.find(searchById(group.id));
            if (!target) return;
            Object.assign(target, group);
        });
    }
    public setLoading(loading: FunctionalOrSingle<boolean>): void {
        this.dispatch((draft) => {
            draft.loading = typeof loading === 'function' ? loading(draft.loading) : loading;
        });
    }

    private createGroup(tab: IEditorTab<any>) {
        return { ...new EditorGroupModel(`EDITOR_GROUP_${randomId()}`, [tab], tab.id) };
    }

    public addGroup(tab: IEditorTab<any>) {
        this.dispatch((draft) => {
            draft.groups.push(this.createGroup(tab));
        });
    }

    public addTab(tab: IEditorTab<any>, groupId: UniqueId) {
        this.dispatch((draft) => {
            const group = draft.groups.find(searchById(groupId));
            if (!group) return;
            group.data.push(tab);
        });
    }

    /**
     * @param groupId If provided, will open tab in specific group
     */
    public open(tab: IEditorTab<any>, groupId?: UniqueId) {
        // If not found the group, create a new group
        if (!this.getGroup(groupId)) {
            this.addGroup(tab);
            const last = this.getGroups().at(-1);
            if (last) {
                this.setCurrentGroup(last.id);
            }
        } else {
            this.addTab(tab, groupId!);
            this.setCurrent(tab.id, groupId!);
        }

        // ===================== effects =====================
        this.emit(EditorEvent.OpenTab, tab);
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
        this.subscribe(EditorEvent.onSelectTab, callback);
    }

    public onContextMenu(callback: EditorContextMenu) {
        this.subscribe(EditorEvent.onContextMenu, callback);
    }

    public onToolbarClick(callback: ContextMenuGroupHandler) {
        this.subscribe(EditorEvent.onToolbarClick, callback);
    }

    public onUpdateTab(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.onUpdateTab, callback);
    }

    public onOpenTab<T>(callback: (tab: IEditorTab<T>) => void): void {
        this.subscribe(EditorEvent.OpenTab, callback);
    }

    public onChangeTab(
        callback: (
            value: string,
            ev: editor.IModelContentChangedEvent,
            extraProps: { tabId: UniqueId; groupId: UniqueId }
        ) => void
    ): void {
        this.subscribe(EditorEvent.onChangeTab, callback);
    }

    public onDragStart(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.onDragStart, callback);
    }

    public onDragOver(
        callback: (
            from: { tabId: UniqueId; groupId: UniqueId },
            to: { tabId: UniqueId; groupId: UniqueId }
        ) => void
    ) {
        this.subscribe(EditorEvent.onDragOver, callback);
    }

    public onDragEnd(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.onDragEnd, callback);
    }

    public onDrop(
        callback: (
            from: { tabId: UniqueId; groupId: UniqueId },
            to: { tabId: UniqueId; groupId: UniqueId }
        ) => void
    ) {
        this.subscribe(EditorEvent.onDrop, callback);
    }

    public onCloseAll(callback: (groupId?: UniqueId) => void) {
        this.subscribe(EditorEvent.onCloseAll, callback);
    }

    public onCloseTab(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.onCloseTab, callback);
    }

    public onCloseOther(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.onCloseOther, callback);
    }

    public onCloseToLeft(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.onCloseToLeft, callback);
    }

    public onCloseToRight(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.onCloseToRight, callback);
    }

    public onSplitEditorRight(callback: (activeTabId: UniqueId, groupId: UniqueId) => void): void {
        this.subscribe(EditorEvent.onSplitEditorRight, callback);
    }

    public onContextMenuClick(
        callback: (item: IMenuItemProps, tabId: UniqueId, groupId: UniqueId) => void
    ): void {
        this.subscribe(EditorEvent.onContextMenuClick, callback);
    }
}
