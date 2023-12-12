import type { IItemProps, IMenuItemProps, RenderProps, UniqueId } from 'mo/types';

export interface IPanelItem<T = any> extends IItemProps, RenderProps<IPanelItem<T>> {
    /**
     * Mark the tab status to be closable,
     * Default is true
     */
    closable?: boolean;
    data?: T;
    toolbar?: IMenuItemProps[];
}

export enum PanelEvent {
    onTabChange = 'panel.onTabChange',
    onToolbarClick = 'panel.onToolbarClick',
    onTabClose = 'panel.onTabClose',
    onTabContextMenu = 'panel.onContextMenu',
}

export interface IPanel {
    current?: UniqueId;
    data?: IPanelItem[];
    // Global toolbar
    toolbar?: IMenuItemProps[];
}

export class PanelModel implements IPanel {
    constructor(
        public current: UniqueId | undefined = undefined,
        public data: IPanelItem[] = [],
        public toolbars: IMenuItemProps[] = []
    ) {}
}
