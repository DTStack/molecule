import { ITab } from '@/components/tabs';

export interface IEditorInstance<E = any> {
    id: number;
    activeTab: ITab;
    tabs: ITab[];
    breadcrumb: any[];
    actions: any[];
    menu: any[];
    editorInstance?: E | null;
}

export interface IEditor<T = any> {
    current: IEditorInstance | null;
    group: IEditorInstance [];
    open: (tab: ITab<T>, instanceId: number) => void;
    close?: (index: number, callback: () => void) => void;
    closeAll?: () => void;
    onClose?: () => void;
    render?:() => React.ReactElement;
}
