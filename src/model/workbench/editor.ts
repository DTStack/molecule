import 'reflect-metadata';
import { EventBus } from 'mo/common/event';
import { observable } from 'mo/common/observable';
import { ITab } from 'mo/components/tabs';
import { container, inject, injectable } from 'tsyringe';

export enum EditorEvent {
    CloseTab = 'editor.close',
    OnMoveTab = 'editor.moveTab',
    OpenTab = 'editor.openTab',
    OnSelectTab = 'editor.selectTab',
}
export interface IEditor {
    current: IEditorGroup | undefined;
    groups: IEditorGroup[];
    closeAll?: () => void;
    onClose?: () => void;
    render?: () => React.ReactNode;
    onMoveTab?: (tabs: ITab[], group?: number) => void;
    onSelectTab?: (tabKey: number) => void;
}

export interface IEditorGroup<E = any> {
    id: number;
    activeTab: ITab;
    tabs: ITab[];
    breadcrumb: any[];
    actions: any[];
    menu: any[];
    editorInstance?: E | null;
}

export class EditorGroupModel implements IEditorGroup {
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
        editorInstance?: any
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

@observable()
@injectable()
export class EditorModel implements IEditor {
    public current: IEditorGroup | undefined;
    public groups!: IEditorGroup[];

    constructor(
        @inject('CurrentEditorGroup') current?: IEditorGroup,
        @inject('EditorGroup') groups: IEditorGroup[] = []
    ) {
        this.current = current;
        this.groups = groups;
    }
    closeAll?: (() => void) | undefined;
    onClose?: (() => void) | undefined;

    public render!: () => React.ReactNode;

    public readonly onselectTab = (tabKey: number) => {
        EventBus.emit(EditorEvent.OnSelectTab, tabKey);
    };
    public readonly onMoveTab = (updateTabs: ITab[], groupId?: number) => {
        EventBus.emit(EditorEvent.OnMoveTab, updateTabs, groupId);
    };
}

container.register('CurrentEditorGroup', { useValue: '' });
container.register('EditorGroup', { useValue: [] });
