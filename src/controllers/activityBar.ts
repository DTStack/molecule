import { BaseController } from 'mo/glue';
import { ActivityBarEvent, type IActivityBarItem } from 'mo/models/activityBar';
import type { ActivityBarService } from 'mo/services/activityBar';
import type { BuiltinService } from 'mo/services/builtin';
import { ContextMenuService } from 'mo/services/contextMenu';
import type { IMenuItemProps } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface IActivityBarController extends BaseController {
    /**
     * Called when activity bar item is clicked
     */
    onClick?: (item: IActivityBarItem) => void;
    onContextMenuClick?: (item: IMenuItemProps) => void;
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
        const { activityBarData, contextMenuData } = this.builtin.getState().modules;
        if (activityBarData) {
            this.activityBar.add(activityBarData);
        }
        if (contextMenuData) {
            this.contextMenu.add('activityBar', contextMenuData);
        }
    }

    public readonly onClick = (item: IActivityBarItem) => {
        this.emit(ActivityBarEvent.OnClick, item);
    };

    public readonly onContextMenuClick = (item: IMenuItemProps) => {
        this.emit(ActivityBarEvent.OnContextMenu, item);
    };
}
