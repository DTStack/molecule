import { Component } from 'mo/react';

import { ITab } from 'mo/components/tabs';
import { emit } from 'mo/common/event';
import { singleton, container } from 'tsyringe';
import {
    EditorEvent,
    EditorModel,
    EditorGroupModel,
    IEditor,
    IEditorGroup,
} from 'mo/model';

export interface IEditorService extends Component<IEditor> {
    /**
     * Open a new tab in indicated group instance
     * @param tab Tab data
     * @param groupId group ID
     */
    open<T = any>(tab: ITab, groupId?: number): void;
    close(index: string, callback: () => void): void;
    onMoveTab(callback: (tabs: ITab[]) => void);
    onSelectTab(callback: (tabKey: string) => void);
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
    onSelectTab(callback: (tabKey: string) => void) {
        this.subscribe(EditorEvent.OnSelectTab, (args) => {
            callback?.(args?.[0]);
        });
    }

    @emit(EditorEvent.OpenTab)
    public open<T>(tab: ITab, groupId?: number) {
        let { current, groups } = this.state;
        let group: IEditorGroup | undefined = current;
        if (groupId) {
            group = groups.find((group: IEditorGroup) => group.id === groupId);
        }
        if (group) {
            group.tabs.push(tab);
            group.activeTab = tab;
        } else {
            group = new EditorGroupModel(groups.length + 1, tab, [tab]);
            groups.push(group);
            current = group;
        }
    }
    public onMoveTab(callback: (data) => void) {
        this.subscribe(EditorEvent.OnMoveTab, (args) => {
            let { groups } = this.state;
            let group;
            if (!args?.[1]) return;
            const groupId = args?.[1];
            group = groups?.find((group: IEditorGroup) => group.id === groupId);
            group.tabs = args?.[0];
            callback?.(args?.[0]);
        });
    }
    public closeAll() {}

    @emit(EditorEvent.CloseTab)
    public onClose() {}

    public close(index: string, callback: () => void) {}
}
