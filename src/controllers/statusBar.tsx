import LineInfo from 'mo/client/components/lineInfo';
import { BaseController } from 'mo/glue';
import { StatusBarEvent } from 'mo/models/statusBar';
import type { BuiltinService } from 'mo/services/builtin';
import type { StatusBarService } from 'mo/services/statusBar';
import type { UniqueId } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface IStatusBarController extends BaseController {
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>, key: UniqueId) => void;
    onContextMenuClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>, key: UniqueId) => void;
}

@injectable()
export class StatusBarController extends BaseController implements IStatusBarController {
    constructor(
        @inject('statusBar') private statusBar: StatusBarService,
        @inject('builtin') private builtin: BuiltinService
    ) {
        super();
        this.initView();
    }

    private initView() {
        const state = this.builtin.getState();
        const { STATUS_EDITOR_INFO, CONTEXT_MENU_HIDE_STATUS_BAR } = state.modules;
        if (STATUS_EDITOR_INFO) {
            this.statusBar.add(
                {
                    ...STATUS_EDITOR_INFO,
                    render: LineInfo,
                },
                'right'
            );
        }

        if (CONTEXT_MENU_HIDE_STATUS_BAR) {
            this.statusBar.setState((prev) => ({
                ...prev,
                contextMenu: [...(prev.contextMenu || []), CONTEXT_MENU_HIDE_STATUS_BAR],
            }));
        }
    }

    public onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, key: UniqueId) => {
        const item =
            this.statusBar.getStatusBarItem(key, 'left') ||
            this.statusBar.getStatusBarItem(key, 'right');
        this.emit(StatusBarEvent.onClick, e, item);
    };

    public readonly onContextMenuClick = (e: React.MouseEvent, key: UniqueId) => {
        const item =
            this.statusBar.getStatusBarItem(key, 'left') ||
            this.statusBar.getStatusBarItem(key, 'right');
        this.emit(StatusBarEvent.onContextMenu, e, item);
    };
}
