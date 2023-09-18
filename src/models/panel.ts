import type { IItemProps, IMenuItemProps, UniqueId } from 'mo/types';

export interface IPanelItem<T = any> extends IItemProps {
    /**
     * Mark the tab status to be closable,
     * Default is true
     */
    closable?: boolean;
    data?: T;
    toolbar?: IMenuItemProps[];
    render?: (item: IPanelItem<T>) => React.ReactNode;
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
}

export class PanelModel implements IPanel {
    constructor(public current: UniqueId | undefined = undefined, public data: IPanelItem[] = []) {}
}
