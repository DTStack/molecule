import { HTMLElementProps, IconType, IMenuItemProps, TreeModel, UniqueId } from 'mo/types';

/**
 * The activity bar event definition
 */
export enum ActivityBarEvent {
    OnClick = 'activityBar.onClick',
    OnContextMenu = 'activityBar.onContextMenu',
}

export enum ActivityType {
    normal = 'normal',
    global = 'global',
}

type ActivityTypeLiteral = keyof typeof ActivityType;

export interface IActivityBarContextMenu
    extends Omit<IMenuItemProps, 'type'>,
        TreeModel<IMenuItemProps> {
    type: ActivityTypeLiteral;
}

export interface IActivityBarItem extends HTMLElementProps {
    id: UniqueId;
    name?: string;
    hidden?: boolean;
    icon?: IconType;
    disabled?: boolean;
    type?: ActivityTypeLiteral;
    contextMenu?: IMenuItemProps[];
    sortIndex?: number;
    render?: (data: IActivityBarItem) => JSX.Element;
}

export interface IActivityBar {
    data: IActivityBarItem[];
    /**
     * Global context menu
     */
    contextMenu: IActivityBarContextMenu[];
    selected: UniqueId;
}

export class ActivityBarModel implements IActivityBar {
    constructor(
        public data: IActivityBarItem[] = [],
        public contextMenu: IActivityBarContextMenu[] = [],
        public selected: UniqueId = ''
    ) {}
}
