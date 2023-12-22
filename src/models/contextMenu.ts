import { IMenuItemProps, IPosition } from 'mo/types';

export enum ContextMenuEvent {
    onClick = 'contextMenu.onClick',
    onHide = 'contextMenu.onHide',
}

export class ContextMenuModel {
    constructor(
        public data: IMenuItemProps[] = [],
        public visible: boolean = false,
        public position: IPosition = { x: 0, y: 0 },
        public scope: any = undefined
    ) {}
}
