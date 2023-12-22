import type { HTMLElementProps, IItemProps, IMenuItemProps, RenderProps, UniqueId } from 'mo/types';

export enum ExplorerEvent {
    onPanelToolbarClick = 'explorer.onPanelToolbarClick',
    onCollapseChange = 'explorer.onCollapseChange',
    onContextMenu = 'explorer.onContextMenu',
}

export interface IExplorerPanelItem
    extends HTMLElementProps,
        RenderProps<IExplorerPanelItem>,
        Omit<IItemProps, 'icon'> {
    toolbar?: IMenuItemProps[];
}

export class ExplorerModel {
    constructor(public data: IExplorerPanelItem[] = [], public active: UniqueId[] = []) {}
}
