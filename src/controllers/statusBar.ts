import React from 'react';
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
        const { STATUSBAR_LINE_INFO, STATUSBAR_CONTEXTMENU } = this.builtin.getModules();
        if (STATUSBAR_LINE_INFO) {
            this.statusBar.add({
                ...STATUSBAR_LINE_INFO,
                render: (panel) => React.createElement(LineInfo, { data: panel.data }),
            });
        }
        if (STATUSBAR_CONTEXTMENU) {
            this.contextMenu.add(this.builtin.getConstants().CONTEXTMENU_ITEM_STATUS_BAR, [
                STATUSBAR_CONTEXTMENU,
            ]);
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
