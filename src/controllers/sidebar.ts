import { BaseController } from 'mo/glue';
import { ISidebarPane, SidebarEvent } from 'mo/models/sidebar';
import type { ContextMenuHandler,GroupMenuHandler } from 'mo/types';

export interface ISideBarController extends BaseController {
    readonly onToolbarClick: GroupMenuHandler;
    readonly onContextMenu: ContextMenuHandler<[item: ISidebarPane]>;
}

export class SidebarController extends BaseController implements ISideBarController {
    constructor() {
        super();
    }

    public onToolbarClick: GroupMenuHandler = (item, groupId) => {
        this.emit(SidebarEvent.onToolbarClick, item, groupId);
    };

    public onContextMenu: ContextMenuHandler<[item: ISidebarPane]> = (pos, item) => {
        this.emit(SidebarEvent.onContextMenu, pos, item);
    };
}
