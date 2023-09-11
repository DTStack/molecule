import type { IMenuItemProps, ITabProps, UniqueId } from 'mo/types';

export interface IPanelItem<T = any> extends ITabProps<T> {
    /**
     * The sort of panel item
     */
    sortIndex?: number;
    toolbar?: IMenuItemProps[];
}

export enum PanelEvent {
    onTabChange = 'panel.onTabChange',
    onToolbarClick = 'panel.onToolbarClick',
    onTabClose = 'panel.onTabClose',
}

export interface IPanel {
    current?: UniqueId;
    data?: IPanelItem[];
}

export class PanelModel implements IPanel {
    constructor(public current: UniqueId | undefined = undefined, public data: IPanelItem[] = []) {}
}
