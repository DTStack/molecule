import { BaseController } from 'mo/glue';
import { PanelEvent } from 'mo/models/panel';
import type { BuiltinService } from 'mo/services/builtin';
import type { ContextMenuService } from 'mo/services/contextMenu';
import type { LayoutService } from 'mo/services/layout';
import type { LocaleService } from 'mo/services/locale';
import type { ContextMenuEventHandler, IMenuItemProps, UniqueId } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface IPanelController extends BaseController {
    onTabChange?(key: UniqueId): void;
    onToolbarClick?(item: IMenuItemProps): void;
    onClose?(key: UniqueId): void;
    onContextMenuClick?: ContextMenuEventHandler;
}

@injectable()
export class PanelController extends BaseController implements IPanelController {
    constructor(
        @inject('builtin') private builtin: BuiltinService,
        @inject('layout') private layout: LayoutService,
        @inject('locale') private locale: LocaleService,
        @inject('contextMenu') private contextMenu: ContextMenuService
    ) {
        super();
        this.initView();
    }

    private initView() {
        this.contextMenu.add('panel', [
            {
                id: this.builtin.getState().constants.MENU_VIEW_PANEL,
                name: this.locale.localize('menu.hidePanel', `Hidden Panel`),
            },
        ]);
    }

    public readonly onTabChange = (key: UniqueId): void => {
        this.emit(PanelEvent.onTabChange, key);
    };

    public readonly onClose = (key: UniqueId) => {
        if (key) {
            this.emit(PanelEvent.onTabClose, key);
        }
    };

    public readonly onToolbarClick = (item: IMenuItemProps): void => {
        const { constants } = this.builtin.getState();
        switch (item.id) {
            case constants.PANEL_TOOLBOX_CLOSE: {
                this.layout.setPanelVisibility(true);
                break;
            }
            case constants.PANEL_TOOLBOX_RESIZE: {
                this.layout.setPanelMaximized((prev) => !prev);
                break;
            }
            default:
                break;
        }
        this.emit(PanelEvent.onToolbarClick, item);
    };

    public readonly onContextMenuClick = (data: IMenuItemProps) => {
        this.emit(PanelEvent.onTabContextMenu, data);
    };
}
