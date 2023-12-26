import type { IMenuItemProps, IterableItem, Render, UniqueId } from 'mo/types';

export enum PanelEvent {
    onChange = 'panel.onChange',
    onToolbarClick = 'panel.onToolbarClick',
    onClose = 'panel.onClose',
    onContextMenu = 'panel.onContextMenu',
}

export interface IPanelItem<T = any> extends IterableItem, Render<IPanelItem<T>> {
    /**
     * Mark the tab status to be closable,
     * Default is true
     */
    closable?: boolean;
    data?: T;
    toolbar?: IMenuItemProps[];
}

export class PanelModel {
    constructor(
        public data: IPanelItem[] = [],
        public toolbar: IMenuItemProps[] = [],
        public current?: UniqueId
    ) {}
}
