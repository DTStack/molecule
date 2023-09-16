import { BaseController } from 'mo/glue';
import { PanelEvent } from 'mo/models/panel';
import type { BuiltinService } from 'mo/services/builtin';
import type { LayoutService } from 'mo/services/layout';
import type { MenuBarService } from 'mo/services/menuBar';
import type { IMenuItemProps, UniqueId } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface IPanelController extends BaseController {
    onTabChange?(key: UniqueId): void;
    onToolbarClick?(item: IMenuItemProps): void;
    onClose?(key: UniqueId): void;
}

@injectable()
export class PanelController extends BaseController implements IPanelController {
    constructor(
        @inject('builtin') private builtin: BuiltinService,
        @inject('layout') private layout: LayoutService,
        @inject('menuBar') private menuBar: MenuBarService
    ) {
        super();
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
        switch (item.id) {
            case this.builtin.getState().constants.PANEL_TOOLBOX_CLOSE: {
                this.layout.setPanelVisibility(true);
                break;
            }
            case this.builtin.getState().constants.PANEL_TOOLBOX_RESIZE: {
                this.layout.setPanelMaximized((prev) => !prev);
                break;
            }
            default:
                this.emit(PanelEvent.onToolbarClick, item);
                break;
        }
    };
}
