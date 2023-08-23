import { BaseController } from 'mo/glue';
import {
    ActivityBarEvent,
    IActivityBarContextMenu,
    type IActivityBarItem,
} from 'mo/models/activityBar';
import type { ActivityBarService } from 'mo/services/activityBar';
import type { BuiltinService } from 'mo/services/builtin';
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
        @inject('builtin') public builtin: BuiltinService,
        @inject('activityBar') public activityBar: ActivityBarService
    ) {
        super();
        this.initView();
    }

    private initView() {
        const { activityBarData, contextMenuData } = this.builtin.getState().modules;
        if (activityBarData) {
            this.activityBar.add(activityBarData);
            const next: IActivityBarContextMenu[] = (activityBarData as IActivityBarItem[]).map(
                (i) => ({
                    id: i.id,
                    name: i.name,
                    icon: 'check',
                    type: 'global',
                })
            );
            this.activityBar.addContextMenu(next);
        }
        if (contextMenuData) {
            this.activityBar.addContextMenu(contextMenuData);
        }
    }

    public readonly onClick = (item: IActivityBarItem) => {
        this.emit(ActivityBarEvent.OnClick, item);
    };

    public readonly onContextMenuClick = (item: IMenuItemProps) => {
        this.emit(ActivityBarEvent.OnContextMenu, item);
    };
}
