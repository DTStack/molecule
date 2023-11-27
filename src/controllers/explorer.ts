import React from 'react';
import Explorer from 'mo/client/slots/explorer';
import { BaseController } from 'mo/glue';
import { ExplorerEvent } from 'mo/models/explorer';
import { ActivityBarService } from 'mo/services/activityBar';
import type { BuiltinService } from 'mo/services/builtin';
import type { SidebarService } from 'mo/services/sidebar';
import type { IMenuItemProps, UniqueId } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface IExplorerController extends BaseController {
    onCollapseChange?: (keys: UniqueId[]) => void;
    onToolbarClick?: (item: IMenuItemProps, panelId: UniqueId) => void;
}

@injectable()
export class ExplorerController extends BaseController implements IExplorerController {
    constructor(
        @inject('builtin') private builtin: BuiltinService,
        @inject('sidebar') private sidebar: SidebarService,
        @inject('activityBar') private activitybar: ActivityBarService
    ) {
        super();
        this.initView();
    }

    private initView() {
        const { EXPLORER_ACTIVITY_ITEM, builtInExplorerActivityItem } =
            this.builtin.getState().modules;
        this.activitybar.add(builtInExplorerActivityItem, true);
        this.sidebar.add(
            {
                ...EXPLORER_ACTIVITY_ITEM,
                render: () => React.createElement(Explorer, { ...this }),
            },
            true
        );
    }

    public readonly onCollapseChange = (keys: UniqueId[]) => {
        this.emit(ExplorerEvent.onCollapseChange, keys);
    };

    public readonly onToolbarClick = (item: IMenuItemProps, panelId: UniqueId) => {
        this.emit(ExplorerEvent.onPanelToolbarClick, item, panelId);
    };
}
