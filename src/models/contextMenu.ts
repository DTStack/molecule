import { IMenuItemProps, UniqueId } from 'mo/types';

interface IContextMenu {
    data: Map<UniqueId, IMenuItemProps[]>;
}

export class ContextMenuModel implements IContextMenu {
    constructor(public data: Map<UniqueId, IMenuItemProps[]> = new Map()) {}
}
