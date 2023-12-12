import { BaseController } from 'mo/glue';
import { ActivityBarEvent, type IActivityBarItem } from 'mo/models/activityBar';
import { MenuBarEvent } from 'mo/models/menuBar';
import type { ActivityBarService } from 'mo/services/activityBar';
import type { BuiltinService } from 'mo/services/builtin';
import type { ContextMenuService } from 'mo/services/contextMenu';
import type { ContextMenuEventHandler } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface IActivityBarController extends BaseController {
    /**
     * Called when activity bar item is clicked
     */
    onClick?: (item: IActivityBarItem) => void;
    onContextMenuClick?: ContextMenuEventHandler;
    onMenuClick?: ContextMenuEventHandler;
}

@injectable()
export class ActivityBarController extends BaseController implements IActivityBarController {
    constructor(
        @inject('builtin') private builtin: BuiltinService,
        @inject('activityBar') private activityBar: ActivityBarService,
        @inject('contextMenu') private contextMenu: ContextMenuService
    ) {
        super();
        this.initView();
    }

    private initView() {
        const { ACTIVITYBAR_ITEMS, ACTIVITYBAR_CONTEXTMENU } = this.builtin.getModules();
        if (ACTIVITYBAR_ITEMS) {
            this.activityBar.add(ACTIVITYBAR_ITEMS);
            if (ACTIVITYBAR_CONTEXTMENU) {
                this.contextMenu.add(
                    this.builtin.getConstants().CONTEXTMENU_ITEM_ACTIVITYBAR,
                    ACTIVITYBAR_CONTEXTMENU
                );
            }
        }
    }

    public readonly onClick = (item: IActivityBarItem) => {
        this.emit(ActivityBarEvent.OnClick, item);
    };

    public readonly onContextMenuClick: ContextMenuEventHandler = (item) => {
        this.emit(ActivityBarEvent.OnContextMenu, item);
    };

    public readonly onMenuClick: ContextMenuEventHandler = (item) => {
        this.emit(MenuBarEvent.onSelect, item.id);
    };
}
