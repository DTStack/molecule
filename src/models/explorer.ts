import type {
    HTMLElementProps,
    IMenuItemProps,
    IterableItem,
    Render,
    UniqueId,
} from 'mo/types';

export enum ExplorerEvent {
    onPanelToolbarClick = 'explorer.onPanelToolbarClick',
    onCollapseChange = 'explorer.onCollapseChange',
    onContextMenu = 'explorer.onContextMenu',
}

export interface IExplorerPanelItem
    extends HTMLElementProps,
        Render<IExplorerPanelItem>,
        Omit<IterableItem, 'icon' | 'disabled'> {
    toolbar?: IMenuItemProps[];
}

export class ExplorerModel {
    constructor(public data: IExplorerPanelItem[] = [], public active: UniqueId[] = []) {}
}
