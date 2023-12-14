import { IMenuItemProps, IPosition } from 'mo/types';

export enum ContextMenuEvent {
    onClick = 'contextMenu.onClick',
    onHide = 'contextMenu.onHide',
}

interface IContextMenu {
    data: IMenuItemProps[];
    visible: boolean;
    position: IPosition;
    scope: any;
}

export class ContextMenuModel implements IContextMenu {
    constructor(
        public data: IMenuItemProps[] = [],
        public visible: boolean = false,
        public position: IPosition = { x: 0, y: 0 },
        public scope: any = undefined
    ) {}
}
