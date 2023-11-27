import type {
    AlignmentLiteral,
    HTMLElementProps,
    IItemProps,
    IMenuItemProps,
    RenderProps,
    UniqueId,
} from 'mo/types';

/**
 * The activity bar event definition
 */
export enum ActivityBarEvent {
    OnClick = 'activityBar.onClick',
    OnContextMenu = 'activityBar.onContextMenu',
}

export type PartialAlignment = Extract<AlignmentLiteral, 'top' | 'bottom'>;
export interface IActivityBarItem
    extends HTMLElementProps,
        IItemProps,
        RenderProps<IActivityBarItem> {
    disabled?: boolean;
    alignment?: PartialAlignment;
    contextMenu?: IMenuItemProps[];
}

export interface IActivityBar {
    data: IActivityBarItem[];
    selected: UniqueId;
}

export class ActivityBarModel implements IActivityBar {
    constructor(public data: IActivityBarItem[] = [], public selected: UniqueId = '') {}
}
