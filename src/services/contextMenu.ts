import { BaseService } from 'mo/glue';
import { ContextMenuEvent, ContextMenuModel } from 'mo/models/contextMenu';
import {
    ContextMenuEventHandler,
    FunctionalOrSingle,
    IMenuItemProps,
    IPosition,
    UniqueId,
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

    public getScope<T = any>(): T {
        return this.getState().scope;
    }

    public open(data: IMenuItemProps[], pos: IPosition, scope?: any) {
        this.setContextMenu((prev) => [...prev, ...data]);
        this.updatePosition(pos);
        this.setVisible(true);
        this.setScope(scope);
    }

    public close() {
        this.setContextMenu([]);
        this.setVisible(false);
    }

    public setVisible(visible: FunctionalOrSingle<boolean>) {
        this.setState((prev) => ({
            ...prev,
            visible: typeof visible === 'function' ? visible(prev.visible) : visible,
        }));
    }

    public setContextMenu(data: FunctionalOrSingle<IMenuItemProps[]>) {
        this.setState((prev) => ({
            ...prev,
            data: typeof data === 'function' ? data(prev.data) : data,
        }));
    }

    public updatePosition(pos: IPosition) {
        this.setState({
            position: pos,
        });
    }

    public setScope(scope: any) {
        this.setState({
            scope,
        });
    }

    public reset() {
        this.setState(new ContextMenuModel());
    }

    // ===================== Subscriptions =====================
    public onHide(callback: () => void) {
        this.subscribe(ContextMenuEvent.onHide, callback);
    }

    public onClick(callback: ContextMenuEventHandler) {
        this.subscribe(ContextMenuEvent.onClick, callback);
    }
}
