import React from 'react';
import Explorer from 'mo/client/slots/explorer';
import { BaseController } from 'mo/glue';
import { ExplorerEvent, IExplorerPanelItem } from 'mo/models/explorer';
import { ActivityBarService } from 'mo/services/activityBar';
import type { BuiltinService } from 'mo/services/builtin';
import type { SidebarService } from 'mo/services/sidebar';
import type { ContextMenuWithItemHandler, IMenuItemProps, UniqueId } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface IExplorerController extends BaseController {
    onCollapseChange?: (keys: UniqueId[]) => void;
    onToolbarClick?: (item: IMenuItemProps, panelId: UniqueId) => void;
    onContextMenu: ContextMenuWithItemHandler<[panel: IExplorerPanelItem]>;
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
        const { EXPLORER_ITEM } = this.builtin.getModules();
        if (EXPLORER_ITEM) {
            this.activitybar.add(EXPLORER_ITEM, true);
            this.sidebar.add({
                ...EXPLORER_ITEM,
                render: () => React.createElement(Explorer, { ...this }),
            });
            this.sidebar.setCurrent(EXPLORER_ITEM.id);
        }
    }

    public readonly onCollapseChange = (keys: UniqueId[]) => {
        this.emit(ExplorerEvent.onCollapseChange, keys);
    };

    public readonly onToolbarClick = (item: IMenuItemProps, panelId: UniqueId) => {
        this.emit(ExplorerEvent.onPanelToolbarClick, item, panelId);
    };

    public readonly onContextMenu: ContextMenuWithItemHandler<[panel: IExplorerPanelItem]> = (
        pos,
        panel
    ) => {
        this.emit(ExplorerEvent.onContextMenu, pos, panel);
    };
}
