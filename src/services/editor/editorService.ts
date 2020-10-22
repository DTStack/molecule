import { ITab } from 'mo/components/tabs';
import { EditorEvent, IEditor, IEditorGroup } from 'mo/core/workbench/editor';
import { emit } from 'mo/services/eventService';
import { EditorGroupService } from './groupService';

export class EditorService<T = any> implements IEditor<T> {
    public current: IEditorGroup | undefined;
    public groups!: IEditorGroup[];

    constructor(current?: IEditorGroup, groups: IEditorGroup[] = []) {
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
            group = new EditorGroupService(
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
