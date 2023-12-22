import type { IItemProps, IMenuItemProps, RenderProps, UniqueId } from 'mo/types';

export enum SidebarEvent {
    onToolbarClick = 'sidebar.onToolbarClick',
    onContextMenu = 'sidebar.onContextMenu',
}

export interface ISidebarPane extends RenderProps<void>, IItemProps {
    toolbar?: IMenuItemProps[];
}

export class SidebarModel {
    constructor(
        public data: ISidebarPane[] = [],
        public loading: boolean = false,
        public current?: UniqueId
    ) {}
}
