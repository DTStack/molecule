import { BaseService } from 'mo/glue';
import { ContextMenuEvent, ContextMenuModel } from 'mo/models/contextMenu';
import type {
    IMenuItemProps,
    IPosition,
    MenuHandler,
    UniqueId,
    Variant,
} from 'mo/types';
import { searchById } from 'mo/utils';

/**
 * Delegate all contextMenu values
 */
export class ContextMenuService extends BaseService<ContextMenuModel> {
    protected state: ContextMenuModel;
    constructor() {
        super('contextMenu');
        this.state = new ContextMenuModel();
    }

    public get(id: UniqueId) {
        return this.getState().data.find(searchById(id));
    }

    public getAll() {
        return this.getState().data;
    }

    public getScope<T = any>(): T {
        return this.getState().scope;
    }

    public open(data: IMenuItemProps[], pos: IPosition, scope?: any) {
        this.add(data);
        this.updatePosition(pos);
        this.setVisible(true);
        this.setScope(scope);
    }

    public close() {
        this.clear();
        this.setVisible(false);
        this.setScope();
    }

    public setVisible(visible: Variant<boolean>) {
        this.dispatch((draft) => {
            draft.visible = typeof visible === 'function' ? visible(draft.visible) : visible;
        });
    }

    public add(data: IMenuItemProps[]) {
        this.dispatch((draft) => {
            draft.data.push(...data);
        });
    }

    public clear() {
        this.dispatch((draft) => {
            draft.data.length = 0;
        });
    }

    public updatePosition(pos: IPosition) {
        this.dispatch((draft) => {
            draft.position = pos;
        });
    }

    public setScope(scope?: any) {
        this.dispatch((draft) => {
            draft.scope = scope;
        });
    }

    public reset() {
        this.setState(new ContextMenuModel());
    }

    // ===================== Subscriptions =====================
    public onHide(callback: () => void) {
        this.subscribe(ContextMenuEvent.onHide, callback);
    }

    public onClick(callback: MenuHandler) {
        this.subscribe(ContextMenuEvent.onClick, callback);
    }
}
