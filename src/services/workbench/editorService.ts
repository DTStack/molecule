import { Component } from 'mo/react';
import { ITab } from 'mo/components/tabs';
import { emit } from 'mo/common/event';
import { singleton, container } from 'tsyringe';
import { EditorModel, EditorGroupModel, IEditor, IEditorGroup } from 'mo/model/editor';

export enum EditorEvent {
    OpenTab = 'editor.openTab',
    CloseTab = 'editor.close',
}

export interface IEditorService extends Component<IEditor> {
     /**
     * Open a new tab in indicated group instance
     * @param tab Tab data
     * @param groupId group ID
     */
    open<T = any>(tab: ITab<T>, groupId?: number): void;
    close(index: number, callback: () => void): void;
}

@singleton()
export class EditorService extends Component<IEditor> implements IEditorService {
    protected state: IEditor;
    constructor() {
        super();
        this.state = container.resolve(EditorModel);
    }

    @emit(EditorEvent.OpenTab)
    public open<T>(tab: ITab<T>, groupId?: number) {
        let { current, groups } = this.state;
        let group: IEditorGroup | undefined = current;
        if (groupId) {
            group = groups.find((group: IEditorGroup) => group.id === groupId);
        }
        if (group) {
            group.tabs.push(tab);
            group.activeTab = tab;
        } else {
            group = new EditorGroupModel(
                groups.length + 1,
                tab,
                [tab],
            );
            groups.push(group);
            current = group;
        }
    }

    public closeAll() {

    }

    @emit(EditorEvent.CloseTab)
    public onClose() {

    }

    public close(index: number, callback: () => void) {

    }
}
