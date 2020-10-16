import { ITab } from '@/components/tabs';
import { IEditor, IEditorGroup } from '@/core/editor';
export declare class EditorService<T = any> implements IEditor<T> {
    current: IEditorGroup;
    groups: IEditorGroup[];
    constructor(current: IEditorGroup, groups?: IEditorGroup[]);
    open(tab: ITab<T>, groupId?: number): void;
    closeAll(): void;
    onClose(): void;
    close(index: number, callback: () => void): void;
}
