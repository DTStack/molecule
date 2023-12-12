import { BaseController } from 'mo/glue';
import { PanelEvent } from 'mo/models/panel';
import type { BuiltinService } from 'mo/services/builtin';
import type { ContextMenuService } from 'mo/services/contextMenu';
import { PanelService } from 'mo/services/panel';
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
        @inject('contextMenu') private contextMenu: ContextMenuService,
        @inject('panel') private panel: PanelService
    ) {
        super();
        this.initView();
    }

    private initView() {
        const { CONTEXTMENU_ITEM_HIDE, PANEL_CLOSE, PANEL_MAXIMIZE } = this.builtin.getModules();
        this.panel.addToolbar([PANEL_CLOSE, PANEL_MAXIMIZE].filter(Boolean));
        this.contextMenu.add(this.builtin.getConstants().CONTEXTMENU_ITEM_PANEL, [
            CONTEXTMENU_ITEM_HIDE,
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
        this.emit(PanelEvent.onToolbarClick, item);
    };

    public readonly onContextMenuClick = (data: IMenuItemProps) => {
        this.emit(PanelEvent.onTabContextMenu, data);
    };
}
