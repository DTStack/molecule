import type { IMenuItemProps, IterableItem, Render, UniqueId } from 'mo/types';

export enum SidebarEvent {
    onToolbarClick = 'sidebar.onToolbarClick',
    onContextMenu = 'sidebar.onContextMenu',
}

export interface ISidebarPane extends Render<void>, Omit<IterableItem, 'disabled'> {
    toolbar?: IMenuItemProps[];
}

export class SidebarModel {
    constructor(
        public data: ISidebarPane[] = [],
        public loading: boolean = false,
        public current?: UniqueId
    ) {}
}
