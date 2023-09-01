import { BaseService } from 'mo/glue';
import { ContextMenuModel } from 'mo/models/contextMenu';
import { IMenuItemProps, UniqueId } from 'mo/types';

/**
 * Delegate all contextMenu values
 */
export class ContextMenuService extends BaseService<ContextMenuModel> {
    protected state: ContextMenuModel;
    constructor() {
        super();
        this.state = new ContextMenuModel();
    }

    /**
     * Add contextMenu for specific item
     */
    public add(key: UniqueId, value: IMenuItemProps[]) {
        this.setState((prev) => ({
            ...prev,
            data: new Map([...prev.data, [key, value]]),
        }));
    }

    /**
     * Remove contextMenu
     */
    public remove(key: UniqueId) {
        this.setState((prev) => {
            const next = new Map(prev.data);
            next.delete(key);
            return {
                ...prev,
                data: next,
            };
        });
    }

    /**
     * Get an item's contextMenu
     */
    public get(key: UniqueId) {
        return this.getState().data.get(key);
    }

    /**
     *
     * @param key
     * @param value
     */
    public update(key: UniqueId, value: IMenuItemProps[]) {
        this.setState((prev) => ({
            ...prev,
            data: new Map([...prev.data, [key, value]]),
        }));
    }
}
