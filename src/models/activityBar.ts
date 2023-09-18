import type {
    AlignmentLiteral,
    HTMLElementProps,
    IItemProps,
    IMenuItemProps,
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
export interface IActivityBarItem extends HTMLElementProps, IItemProps {
    disabled?: boolean;
    alignment?: PartialAlignment;
    contextMenu?: IMenuItemProps[];
    render?: (data: IActivityBarItem) => JSX.Element;
}

export interface IActivityBar {
    data: IActivityBarItem[];
    selected: UniqueId;
}

export class ActivityBarModel implements IActivityBar {
    constructor(public data: IActivityBarItem[] = [], public selected: UniqueId = '') {}
}
