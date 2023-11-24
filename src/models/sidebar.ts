import type { IMenuItemProps, UniqueId } from 'mo/types';

export enum SidebarEvent {
    onToolbarClick = 'sidebar.onToolbarClick',
}

export interface ISidebarPane {
    id: UniqueId;
    title: string;
    toolbar?: IMenuItemProps[];
    render?: () => React.ReactNode;
}

export interface ISidebar {
    current: UniqueId;
    panes: ISidebarPane[];
}

export class SidebarModel implements ISidebar {
    constructor(public panes: ISidebarPane[] = [], public current: UniqueId = '') {}
}
