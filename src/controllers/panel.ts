import { BaseController } from 'mo/glue';
import { IPanelItem, PanelEvent } from 'mo/models/panel';
import type { BuiltinService } from 'mo/services/builtin';
import type { ContextMenuService } from 'mo/services/contextMenu';
import { PanelService } from 'mo/services/panel';
import type { ContextMenuHandler, IMenuItemProps, UniqueId } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface IPanelController extends BaseController {
    onChange?(key: UniqueId): void;
    onToolbarClick?(item: IMenuItemProps): void;
    onClose?(key: UniqueId): void;
    onContextMenu?: ContextMenuHandler<[item?: IPanelItem]>;
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
        const { PANEL_CLOSE, PANEL_MAXIMIZE } = this.builtin.getModules();
        this.panel.addToolbar([PANEL_CLOSE, PANEL_MAXIMIZE].filter(Boolean));
    }

    public readonly onChange = (key: UniqueId): void => {
        this.emit(PanelEvent.onChange, key);
    };

    public readonly onClose = (key: UniqueId) => {
        this.emit(PanelEvent.onClose, key);
    };

    public readonly onToolbarClick = (item: IMenuItemProps): void => {
        this.emit(PanelEvent.onToolbarClick, item);
    };

    public readonly onContextMenu: ContextMenuHandler<[item?: IPanelItem]> = (
        pos,
        item
    ) => {
        this.emit(PanelEvent.onContextMenu, pos, item);
    };
}
