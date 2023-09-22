import { BaseService } from 'mo/glue';
import { type IStatusBarItem, StatusBarEvent, StatusBarModel } from 'mo/models/statusBar';
import type { ContextMenuEventHandler, RequiredId, UniqueId } from 'mo/types';
import { searchById, sortByIndex } from 'mo/utils';
import logger from 'mo/utils/logger';

export interface IStatusBarService extends BaseService<StatusBarModel> {
    /**
     * Add a new StatusBar item
     * @param item
     */
    add(item: IStatusBarItem): void;
    /**
     * Remove the specific StatusBar item
     * @param id
     */
    remove(id: UniqueId): void;
    /**
     * Update the specific StatusBar item
     * @param item the id field is required
     */
    update(item: RequiredId<IStatusBarItem>): void;
    /**
     * Get the specific StatusBar item
     * @param id
     */
    get(id: UniqueId): IStatusBarItem | undefined;
    /**
     * Reset the contextMenu data and the StatusBar data
     */
    reset(): void;
    /**
     * Listen to the StatusBar click event
     * @param callback
     */
    onClick(callback: (e: MouseEvent, item: IStatusBarItem) => void): void;
    /**
     * Listen to the StatusBar contextMenu event
     */
    onContextMenu: (callback: ContextMenuEventHandler) => void;
}

export class StatusBarService extends BaseService<StatusBarModel> implements IStatusBarService {
    protected state: StatusBarModel;

    constructor() {
        super('statusBar');
        this.state = new StatusBarModel();
    }

    public add(item: IStatusBarItem) {
        const target = this.get(item.id);
        if (target) {
            logger.error(
                `There is already a status whose id is ${item.id}, if you want to update it, please use the update method`
            );
            return;
        }
        this.setState((prev) => ({
            ...prev,
            data: [...prev.data, item].sort(sortByIndex),
        }));
    }

    public update(item: RequiredId<IStatusBarItem>): void {
        const target = this.get(item.id);

        if (!target) {
            logger.error(`There is no status found whose id is ${item.id}`);
            return;
        }

        Object.assign(target, item);
        this.setState((prev) => ({ ...prev, data: [...prev.data].sort(sortByIndex) }));
    }

    public get(id: UniqueId) {
        return this.getState().data.find(searchById(id));
    }

    public remove(id: UniqueId) {
        const target = this.get(id);
        if (!target) {
            logger.error(`There is no status item found whose id is ${id}`);
            return;
        }
        this.setState((prev) => ({
            ...prev,
            data: prev.data.filter((i) => i !== target),
        }));
    }

    public reset() {
        this.setState(new StatusBarModel());
    }

    // ===================== Subscriptions =====================
    public onClick(callback: (e: MouseEvent, item: IStatusBarItem) => void) {
        this.subscribe(StatusBarEvent.onClick, callback);
    }

    public onContextMenu(callback: ContextMenuEventHandler) {
        this.subscribe(StatusBarEvent.onContextMenu, callback);
    }
}
