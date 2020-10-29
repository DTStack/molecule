import { ITab } from 'mo/components/tabs';
import { EditorGroup } from 'mo/model/editorGroup';
import { emit } from 'mo/services/eventService';
import { IEditorGroup } from 'mo/workbench/editor/editor';
import { singleton, inject, container } from 'tsyringe';

export enum EditorEvent {
    OpenTab = 'editor.openTab',
    CloseTab = 'editor.close',
}

export interface IEditorService<T = any> {
     /**
     * Open a new tab in indicated group instance
     * @param tab Tab data
     * @param groupId group ID
     */
    open: (tab: ITab<T>, groupId?: number) => void;
    close?: (index: number, callback: () => void) => void;
}

@singleton()
export class EditorService<T = any> implements IEditorService<T> {
    private current: IEditorGroup | undefined;
    private groups!: IEditorGroup[];

    constructor(
        @inject('CurrentEditorGroup') current?: IEditorGroup,
            @inject('EditorGroup') groups: IEditorGroup[] = [],
    ) {
        this.current = current;
        this.groups = groups;
    }

    @emit(EditorEvent.OpenTab)
    public open(tab: ITab<T>, groupId?: number) {
        let group: IEditorGroup | undefined = this.current;
        if (groupId) {
            group = this.groups.find((group: IEditorGroup) => group.id === groupId);
        }
        if (group) {
            group.tabs.push(tab);
            group.activeTab = tab;
        } else {
            group = new EditorGroup(
                this.groups.length + 1,
                tab,
                [tab],
            );
            this.current = group;
            this.groups.push(group);
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

container.register('CurrentEditorGroup', { useValue: '' });
container.register('EditorGroup', { useValue: [] });
