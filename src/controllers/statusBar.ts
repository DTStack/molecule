import React from 'react';
import LineInfo from 'mo/client/components/lineInfo';
import { BaseController } from 'mo/glue';
import { IStatusBarItem, StatusBarEvent } from 'mo/models/statusBar';
import type { BuiltinService } from 'mo/services/builtin';
import type { StatusBarService } from 'mo/services/statusBar';
import type { ContextMenuHandler, UniqueId } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface IStatusBarController extends BaseController {
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>, key: UniqueId) => void;
    onContextMenu?: ContextMenuHandler<[item?: IStatusBarItem]>;
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
        const { STATUSBAR_LINE_INFO } = this.builtin.getModules();
        if (STATUSBAR_LINE_INFO) {
            this.statusBar.add({
                ...STATUSBAR_LINE_INFO,
                render: (panel) => React.createElement(LineInfo, { data: panel.data }),
            });
        }
    }

    public onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, key: UniqueId) => {
        const item = this.statusBar.get(key);
        this.emit(StatusBarEvent.onClick, e, item);
    };

    public readonly onContextMenu: ContextMenuHandler<[item?: IStatusBarItem]> = (
        pos,
        item
    ) => {
        this.emit(StatusBarEvent.onContextMenu, pos, item);
    };
}
