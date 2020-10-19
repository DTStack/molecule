import { ITab } from 'mo/components/tabs';
import { EditorEvent, IEditor, IEditorGroup } from 'mo/core/editor';
import { emitter } from 'mo/common/eventEmitter';

export class EditorService<T = any> implements IEditor<T> {
    public current: IEditorGroup;
    public groups: IEditorGroup[];

    constructor(current: IEditorGroup, groups: IEditorGroup[] = []) {
        this.current = current;
        this.groups = groups;
    }

    @emitter(EditorEvent.OpenTab)
    public open(tab: ITab<T>, groupId?: number) {
        let group: IEditorGroup | undefined = this.current;
        if (groupId) {
            group = this.groups.find((group: IEditorGroup) => group.id === groupId);
        }
        if (group) {
            group.tabs.push(tab);
            group.activeTab = tab;
        }
    }

    public closeAll() {

    }

    @emitter(EditorEvent.CloseTab)
    public onClose() {

    }

    public close(index: number, callback: () => void) {

    }
}
