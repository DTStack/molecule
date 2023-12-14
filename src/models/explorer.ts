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
export interface IExplorer {
    data: IExplorerPanelItem[];
    activePanelKeys?: UniqueId[];
}

export class ExplorerModel implements IExplorer {
    constructor(public data: IExplorerPanelItem[] = [], public activePanelKeys: UniqueId[] = []) {}
}
