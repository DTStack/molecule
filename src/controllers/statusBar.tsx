import LineInfo from 'mo/client/components/lineInfo';
import { BaseController } from 'mo/glue';
import { StatusBarEvent } from 'mo/models/statusBar';
import type { BuiltinService } from 'mo/services/builtin';
import { ContextMenuService } from 'mo/services/contextMenu';
import type { StatusBarService } from 'mo/services/statusBar';
import type { ContextMenuEventHandler, UniqueId } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface IStatusBarController extends BaseController {
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>, key: UniqueId) => void;
    onContextMenuClick?: ContextMenuEventHandler;
}

@injectable()
export class StatusBarController extends BaseController implements IStatusBarController {
    constructor(
        @inject('statusBar') private statusBar: StatusBarService,
        @inject('builtin') private builtin: BuiltinService,
        @inject('contextMenu') private contextMenu: ContextMenuService
    ) {
        super();
        this.initView();
    }

    private initView() {
        const state = this.builtin.getState();
        const { STATUS_EDITOR_INFO, CONTEXT_MENU_HIDE_STATUS_BAR } = state.modules;
        if (STATUS_EDITOR_INFO) {
            this.statusBar.add({
                ...STATUS_EDITOR_INFO,
                render: LineInfo,
            });
        }

        if (CONTEXT_MENU_HIDE_STATUS_BAR) {
            this.contextMenu.add('statusBar', [CONTEXT_MENU_HIDE_STATUS_BAR]);
        }
    }

    public onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, key: UniqueId) => {
        const item = this.statusBar.get(key);
        this.emit(StatusBarEvent.onClick, e, item);
    };

    public readonly onContextMenuClick: ContextMenuEventHandler = (data) => {
        this.emit(StatusBarEvent.onContextMenu, data);
    };
}
