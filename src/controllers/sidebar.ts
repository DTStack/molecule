import { BaseController } from 'mo/glue';
import { ISidebarPane, SidebarEvent } from 'mo/models/sideBar';
import type { ContextMenuGroupHandler, ContextMenuWithItemHandler } from 'mo/types';

export interface ISideBarController extends BaseController {
    readonly onToolbarClick: ContextMenuGroupHandler;
    readonly onContextMenu: ContextMenuWithItemHandler<[item: ISidebarPane]>;
}

export class SidebarController extends BaseController implements ISideBarController {
    constructor() {
        super();
    }

    public onToolbarClick: ContextMenuGroupHandler = (item, groupId) => {
        this.emit(SidebarEvent.onToolbarClick, item, groupId);
    };

    public onContextMenu: ContextMenuWithItemHandler<[item: ISidebarPane]> = (pos, item) => {
        this.emit(SidebarEvent.onContextMenu, pos, item);
    };
}
