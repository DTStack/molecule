import { AlignmentLiteral, HTMLElementProps, IconType, IMenuItemProps, UniqueId } from 'mo/types';

/**
 * The activity bar event definition
 */
export enum ActivityBarEvent {
    OnClick = 'activityBar.onClick',
    OnContextMenu = 'activityBar.onContextMenu',
}

export type PartialAlignment = Extract<AlignmentLiteral, 'top' | 'bottom'>;
export interface IActivityBarItem extends HTMLElementProps {
    id: UniqueId;
    name?: string;
    hidden?: boolean;
    icon?: IconType;
    disabled?: boolean;
    alignment?: PartialAlignment;
    contextMenu?: IMenuItemProps[];
    sortIndex?: number;
    render?: (data: IActivityBarItem) => JSX.Element;
}

export interface IActivityBar {
    data: IActivityBarItem[];
    selected: UniqueId;
}

export class ActivityBarModel implements IActivityBar {
    constructor(public data: IActivityBarItem[] = [], public selected: UniqueId = '') {}
}
