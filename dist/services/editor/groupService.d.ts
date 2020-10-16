import { IEditorGroup } from '@/core/editor';
import { ITab } from '@/components/tabs';
export declare class EditorGroupService<E = any> implements IEditorGroup {
    id: number;
    activeTab: ITab;
    tabs: ITab[];
    breadcrumb: any[];
    actions: any[];
    menu: any[];
    editorInstance: E;
    constructor(id: number, activeTab: ITab, tabs: ITab[], breadcrumb: any[], actions: any[], menu: any[], editorInstance: E);
}
