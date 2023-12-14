import { BaseController } from 'mo/glue';
import { ContextMenuEvent } from 'mo/models/contextMenu';
import { ContextMenuService } from 'mo/services/contextMenu';
import type { ContextMenuEventHandler } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface IContextMenuController extends BaseController {
    readonly onHide?: () => void;
    readonly onClick?: ContextMenuEventHandler;
}

@injectable()
export class ContextMenuController extends BaseController implements IContextMenuController {
    constructor(@inject('contextMenu') private contextMenu: ContextMenuService) {
        super();
    }

    public onClick?: ContextMenuEventHandler = (item) => {
        if (typeof item.symbolic !== 'undefined') {
            const symbolic = this.contextMenu.get(item.symbolic);
            if (symbolic) {
                this.emit(ContextMenuEvent.onClick, symbolic);
                return;
            }
        }
        this.emit(ContextMenuEvent.onClick, item);
    };

    public onHide?: () => void = () => {
        this.emit(ContextMenuEvent.onHide);
    };
}
