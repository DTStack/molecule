import { BaseController } from 'mo/glue';
import { ActivityBarEvent } from 'mo/models/activityBar';
import { MenuBarEvent } from 'mo/models/menuBar';
import type { ActivityBarService } from 'mo/services/activityBar';
import type { BuiltinService } from 'mo/services/builtin';
import type {
    ContextMenuHandler,
    IActivityBarItem,
    MenuHandler,
} from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface IActivityBarController extends BaseController {
    /**
     * Called when activity bar item is clicked
     */
    onClick?: (item: IActivityBarItem) => void;
    onContextMenu?: ContextMenuHandler<[item?: IActivityBarItem]>;
    onMenuClick?: MenuHandler;
    onContextMenuClick?: MenuHandler;
}

@injectable()
export class ActivityBarController extends BaseController implements IActivityBarController {
    constructor(
        @inject('builtin') private builtin: BuiltinService,
        @inject('activityBar') private activityBar: ActivityBarService
    ) {
        super();
        this.initView();
    }

    private initView() {
        const { ACTIVITYBAR_ITEMS } = this.builtin.getModules();
        if (ACTIVITYBAR_ITEMS) {
            this.activityBar.add(ACTIVITYBAR_ITEMS);
        }
    }

    public readonly onClick = (item: IActivityBarItem) => {
        this.emit(ActivityBarEvent.onClick, item);
    };

    public readonly onContextMenu: ContextMenuHandler<[item?: IActivityBarItem]> = (
        pos,
        item
    ) => {
        this.emit(ActivityBarEvent.onContextMenu, pos, item);
    };

    public readonly onMenuClick: MenuHandler = (item) => {
        this.emit(MenuBarEvent.onSelect, item.id);
    };

    public readonly onContextMenuClick: MenuHandler = (item) => {
        this.emit(ActivityBarEvent.onContextMenuClick, item);
    };
}
