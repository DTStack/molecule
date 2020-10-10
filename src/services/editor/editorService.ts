import { ITab } from '@/components/tabs';
import { IEditor, IEditorInstance } from '@/core/editor';

export class EditorService<T = any> implements IEditor<T> {
    public current: IEditorInstance;
    public group: IEditorInstance[];

    constructor(current: IEditorInstance, group: IEditorInstance[] = []) {
        this.current = current;
        this.group = group;
    }

    public open(tab: ITab<T>, instanceId: number) {
        // const editorInstance = this.group.find((item: IEditorInstance) => {
        //     return item.id === instanceId;
        // });
        const editorInstance = this.current;
        if (editorInstance) {
            editorInstance.tabs.push(tab);
            editorInstance.activeTab = tab;
        }
    }

    public closeAll() {

    }

    public onClose() {

    }

    public close(index: number, callback: () => void) {

    }
}
