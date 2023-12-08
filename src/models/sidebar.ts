import type { IMenuItemProps, RenderProps, UniqueId } from 'mo/types';

export enum SidebarEvent {
    onToolbarClick = 'sidebar.onToolbarClick',
}

export interface ISidebarPane extends RenderProps<void> {
    id: UniqueId;
    title: string;
    toolbar?: IMenuItemProps[];
}

export interface ISidebar {
    current: UniqueId;
    panes: ISidebarPane[];
    loading: boolean;
}

export class SidebarModel implements ISidebar {
    constructor(
        public panes: ISidebarPane[] = [],
        public current: UniqueId = '',
        public loading: boolean = false
    ) {}
}
