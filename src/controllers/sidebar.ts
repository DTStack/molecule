import { BaseController } from 'mo/glue';
import { SidebarEvent } from 'mo/models/sideBar';
import type { ContextMenuGroupHandler } from 'mo/types';

export interface ISideBarController extends BaseController {
    readonly onToolbarClick: ContextMenuGroupHandler;
}

export class SidebarController extends BaseController implements ISideBarController {
    constructor() {
        super();
    }

    public onToolbarClick: ContextMenuGroupHandler = (item, groupId) => {
        this.emit(SidebarEvent.onToolbarClick, item, groupId);
    };
}
