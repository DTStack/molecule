import type { HTMLElementProps, IMenuItemProps, RenderFunctionProps, UniqueId } from 'mo/types';

export enum ExplorerEvent {
    onClick = 'explorer.onClick',
    onPanelToolbarClick = 'explorer.onPanelToolbarClick',
    onCollapseChange = 'explorer.onCollapseChange',
    onRemovePanel = 'explorer.onRemovePanel',
    onCollapseAllFolders = 'explorer.onCollapseAllFolders',
}

export interface IExplorerPanelItem extends HTMLElementProps {
    /**
     * It must be unique in the Explorer Panel Data
     */
    id: UniqueId;
    /**
     * @requires true
     * explorer panel's title
     */
    name: string;
    /**
     * specify panel order
     * the bigger the number is ranked previous
     */
    sortIndex?: number;
    toolbar?: IMenuItemProps[];
    /**
     * whether hidden in explorer
     */
    hidden?: boolean;
    render?: RenderFunctionProps<IExplorerPanelItem>;
}
export interface IExplorer {
    data: IExplorerPanelItem[];
    activePanelKeys?: UniqueId[];
}

export class ExplorerModel implements IExplorer {
    constructor(public data: IExplorerPanelItem[] = [], public activePanelKeys?: UniqueId[]) {}
}
