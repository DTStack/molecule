import { isUndefined } from 'lodash-es';
import { BaseService } from 'mo/glue';
import { EditorEvent, EditorGroupModel, EditorModel } from 'mo/models/editor';
import type { editor } from 'mo/monaco';
import type {
    ContextMenuHandler,
    GroupMenuHandler,
    IEditorOptions,
    IEditorTab,
    IMenuItemProps,
    RequiredId,
    TabGroup,
    UniqueId,
    Variant,
} from 'mo/types';
import { getPrevOrNext, randomId, searchById } from 'mo/utils';
import { injectable } from 'tsyringe';

type EditorContextMenu = ContextMenuHandler<[tabId: UniqueId, groupId: UniqueId]>;

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

    public getGroups<T = any>() {
        return this.getState().groups as EditorGroupModel<T>[];
    }

    public getToolbar(toolbarId: UniqueId) {
        return this.getToolbars().find(searchById(toolbarId));
    }

    public getGroup<T = any>(groupId?: UniqueId) {
        if (isUndefined(groupId)) return;
        return this.getGroups<T>().find(searchById(groupId));
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

    public getTab<T = any>(tabId?: UniqueId, groupId?: UniqueId) {
        if (isUndefined(groupId) || isUndefined(tabId)) return;
        return this.getTabs<T>(groupId).find(searchById(tabId));
    }

    public getCurrentTab<T = any>() {
        return this.getTab<T>(this.getCurrentGroup()?.activeTab, this.getCurrent());
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

            if (Object.hasOwn(tab, 'value')) {
                if (Array.isArray(tab.value)) {
                    // Update diffEditor
                    if (target.diffEditorModel) {
                        if (target.diffEditorModel.original.getValue() !== tab.value[0]) {
                            target.diffEditorModel.original.setValue(tab.value[0] ?? '');
                        }
                        if (target.diffEditorModel.modified.getValue() !== tab.value[1]) {
                            target.diffEditorModel.modified.setValue(tab.value[1] ?? '');
                        }
                    }
                } else {
                    // Update editor
                    if (target.model && target.model.getValue() !== tab.value) {
                        target.model.setValue(tab.value ?? '');
                    }
                }
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

    private _close(tabs: { tabId: UniqueId; groupId: UniqueId }[]) {
        this.dispatch((draft) => {
            const currentChanged = { tabId: this.getCurrentGroup()?.activeTab, groupId: draft.current };
            const closed: IEditorTab<any>[] = [];
            // Remove tabs from state
            tabs.forEach(({ tabId, groupId }) => {
                const groupIdx = draft.groups.findIndex(searchById(groupId));
                const group = draft.groups[groupIdx];
                const idx = group.data.findIndex(searchById(tabId));
                if (idx === -1) return;
                if (group.activeTab === tabId) {
                    group.activeTab = getPrevOrNext(group.data, idx)?.id;
                }
                const [tab] = group.data.splice(idx, 1);
                closed.push(tab);
            });
            // Check if group is empty
            tabs.forEach(({ groupId }) => {
                const idx = draft.groups.findIndex(searchById(groupId));
                if (idx === -1 || draft.groups[idx].data.length) return;
                if (draft.current === groupId) {
                    draft.current = getPrevOrNext(draft.groups, idx)?.id;
                }
                const [group] = draft.groups.splice(idx, 1);
                group.editorInstance?.dispose();
            });
            // Dispose models
            closed.forEach((tab) => {
                // Can't disposed model directly as model maybe shared by different group's tab
                if (!tab.model || draft.groups.find((group) => group.data.find((i) => i.model === tab.model))) return;
                tab.model.dispose();
            });

            // ===================== effects =====================
            this.emit(EditorEvent.onClose, closed);
            const currentActiveTab = draft.groups.find(searchById(draft.current))?.activeTab;
            if (draft.current !== currentChanged.groupId || currentActiveTab !== currentChanged.tabId) {
                this.emit(EditorEvent.onCurrentChange, currentChanged, {
                    tabId: currentActiveTab,
                    groupId: draft.current,
                });
            }
        });
    }

    public closeTab(tabId: UniqueId, groupId: UniqueId) {
        this._close([{ tabId, groupId }]);
    }

    public closeOther(tabId: UniqueId, groupId: UniqueId): void {
        const tabs = this.getTabs(groupId);
        const others = tabs.filter((i) => i.id !== tabId);
        this._close(others.map((tab) => ({ tabId: tab.id, groupId })));
    }

    public closeToRight(tabId: UniqueId, groupId: UniqueId) {
        const tabs = this.getTabs(groupId);
        const right = tabs.slice(tabs.findIndex(searchById(tabId)) + 1);
        this._close(right.map((tab) => ({ tabId: tab.id, groupId })));
    }

    public closeToLeft(tabId: UniqueId, groupId: UniqueId) {
        const tabs = this.getTabs(groupId);
        const left = tabs.slice(0, tabs.findIndex(searchById(tabId)));
        this._close(left.map((tab) => ({ tabId: tab.id, groupId })));
    }

    public closeSaved(groupId: UniqueId) {
        const tabs = this.getTabs(groupId);
        const saved = tabs.filter((i) => !i.modified);
        this._close(saved.map((tab) => ({ tabId: tab.id, groupId })));
    }

    public removeGroup(groupId: UniqueId) {
        const group = this.getGroup(groupId);
        if (!group) return;
        this._close(group.data.map((i) => ({ tabId: i.id, groupId })));
    }

    public closeAll(groupId?: UniqueId) {
        if (isUndefined(groupId)) {
            const groups = this.getGroups();
            this._close(
                groups.reduce<{ tabId: UniqueId; groupId: UniqueId }[]>((acc, cur) => {
                    acc.push(...cur.data.map((i) => ({ tabId: i.id, groupId: cur.id })));
                    return acc;
                }, [])
            );
        } else {
            this.removeGroup(groupId);
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
            // Remove source tab
            const tab = source.data.splice(sourceTabIndex, 1);
            // Insert source tab into target while there is no same tab in target
            const existInTarget = target.data.findIndex(searchById(from.tabId));
            if (existInTarget === -1) {
                target.data.splice(targetTabIndex, 0, tab[0]);
            } else {
                // Adjust the order
                target.data.splice(targetTabIndex, 0, target.data.splice(existInTarget, 1)[0]);
            }
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
        // ===================== effects =====================
        const current = this.getCurrentGroup();
        this.emit(
            EditorEvent.onCurrentChange,
            { tabId: current?.activeTab, groupId: current?.id },
            { tabId: this.getGroup(groupId)?.activeTab, groupId }
        );
        this.dispatch((draft) => {
            draft.current = groupId;
        });
    }

    public setCurrent(tabId: UniqueId, groupId: UniqueId) {
        // ===================== effects =====================
        const current = this.getCurrentGroup();
        this.emit(EditorEvent.onCurrentChange, { tabId: current?.activeTab, groupId: current?.id }, { tabId, groupId });

        this.dispatch((draft) => {
            draft.current = groupId;
            const group = draft.groups.find(searchById(groupId));
            if (!group) return;
            group.activeTab = tabId;
        });
    }

    public updateGroup<T>(group: RequiredId<EditorGroupModel<T>>) {
        // ===================== effects =====================
        if (Object.hasOwn(group, 'activeTab')) {
            const current = this.getCurrentGroup();
            this.emit(
                EditorEvent.onCurrentChange,
                { tabId: current?.activeTab, groupId: current?.id },
                { tabId: group.activeTab, groupId: group.id }
            );
        }
        this.dispatch((draft) => {
            const target = draft.groups.find(searchById(group.id));
            if (!target) return;
            Object.assign(target, group);
        });
    }
    public setLoading(loading: Variant<boolean>): void {
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
            this.addTab(tab, groupId as UniqueId);
            this.setCurrent(tab.id, groupId as UniqueId);
        }

        // ===================== effects =====================
        this.emit(EditorEvent.onOpenTab, tab);
    }

    // ===================== Subscriptions =====================
    public onFocus(callback: (instance: editor.IStandaloneCodeEditor) => void) {
        this.subscribe(EditorEvent.onFocus, callback);
    }

    public onCursorSelection(
        callback: (instance: editor.IStandaloneCodeEditor, ev: editor.ICursorSelectionChangedEvent) => void
    ) {
        this.subscribe(EditorEvent.onCursorSelection, callback);
    }

    public onSelectTab(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.onSelectTab, callback);
    }

    public onContextMenu(callback: EditorContextMenu) {
        this.subscribe(EditorEvent.onContextMenu, callback);
    }

    public onToolbarClick(callback: GroupMenuHandler) {
        this.subscribe(EditorEvent.onToolbarClick, callback);
    }

    public onUpdateTab(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.onUpdateTab, callback);
    }

    public onOpenTab<T>(callback: (tab: IEditorTab<T>) => void): void {
        this.subscribe(EditorEvent.onOpenTab, callback);
    }

    public onChange(
        callback: (item: TabGroup & { value: string | undefined }, ev: editor.IModelContentChangedEvent) => void
    ): void {
        this.subscribe(EditorEvent.onChange, callback);
    }

    public onDragStart(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.onDragStart, callback);
    }

    public onDragEnd(callback: (tabId: UniqueId, groupId: UniqueId) => void) {
        this.subscribe(EditorEvent.onDragEnd, callback);
    }

    public onDragEnter(callback: (from: TabGroup, to: TabGroup) => void) {
        this.subscribe(EditorEvent.onDragEnter, callback);
    }

    public onDragLeave(callback: (from: TabGroup, to: TabGroup) => void) {
        this.subscribe(EditorEvent.onDragLeave, callback);
    }

    public onDragOver(callback: (from: TabGroup, to: TabGroup) => void) {
        this.subscribe(EditorEvent.onDragOver, callback);
    }

    public onDrop(callback: (from: TabGroup, to: TabGroup) => void) {
        this.subscribe(EditorEvent.onDrop, callback);
    }

    public onClose<T = any>(callback: (tabs: IEditorTab<T>[]) => void) {
        this.subscribe(EditorEvent.onClose, callback);
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

    public onContextMenuClick(callback: (item: IMenuItemProps, tabId: UniqueId, groupId: UniqueId) => void): void {
        this.subscribe(EditorEvent.onContextMenuClick, callback);
    }

    public onMount(callback: (groupId: UniqueId, editorInstance: editor.IStandaloneCodeEditor) => void) {
        this.subscribe(EditorEvent.onMount, callback);
    }

    public onModelMount(callback: (tabId: UniqueId, groupId: UniqueId, model: editor.ITextModel) => void) {
        this.subscribe(EditorEvent.onModelMount, callback);
    }

    public onDiffEditorMount(callback: (groupId: UniqueId, diffEditorInstance: editor.IStandaloneDiffEditor) => void) {
        this.subscribe(EditorEvent.onDiffEditorMount, callback);
    }

    public onDiffEditorModelMount(
        callback: (tabId: UniqueId, groupId: UniqueId, model: editor.IDiffEditorModel) => void
    ) {
        this.subscribe(EditorEvent.onDiffEditorModelMount, callback);
    }

    public onCurrentChange(callback: (prev: Partial<TabGroup>, next: Partial<TabGroup>) => void) {
        this.subscribe(EditorEvent.onCurrentChange, callback);
    }
}
