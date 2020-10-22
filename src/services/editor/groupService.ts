import { IEditorGroup } from 'mo/core/workbench/editor';
import { ITab } from 'mo/components/tabs';

export class EditorGroupService implements IEditorGroup {
    id: number;
    activeTab: ITab;
    tabs: ITab[];
    breadcrumb: any[];
    actions: any[];
    menu: any[];
    editorInstance: any;

    constructor(
        id: number,
        activeTab: ITab,
        tabs: ITab[],
        breadcrumb: any[] = [],
        actions: any[] = [],
        menu: any[] = [],
        editorInstance?: any,
    ) {
        this.id = id;
        this.tabs = tabs;
        this.menu = menu;
        this.actions = actions;
        this.activeTab = activeTab;
        this.breadcrumb = breadcrumb;
        this.editorInstance = editorInstance;
    }
}
