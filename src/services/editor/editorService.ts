import { ITab } from '@/components/tabs';
import { IEditor, IEditorGroup } from '@/core/editor';

export class EditorService<T = any> implements IEditor<T> {
    public current: IEditorGroup;
    public groups: IEditorGroup[];

    constructor(current: IEditorGroup, groups: IEditorGroup[] = []) {
        this.current = current;
        this.groups = groups;
    }

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

    public onClose() {

    }

    public close(index: number, callback: () => void) {

    }
}
