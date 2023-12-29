import { BaseService } from 'mo/glue';
import { ActivityBarEvent, ActivityBarModel } from 'mo/models/activityBar';
import type {
    Arraylize,
    ContextMenuHandler,
    IActivityBarItem,
    MenuHandler,
    Predict,
    RequiredId,
    UniqueId,
} from 'mo/types';
import { arraylize, searchById } from 'mo/utils';

export class ActivityBarService extends BaseService<ActivityBarModel> {
    protected state: ActivityBarModel;

    constructor() {
        super('activityBar');
        this.state = new ActivityBarModel();
    }

    public setCurrent(id?: UniqueId) {
        this.dispatch((draft) => {
            draft.current = id;
        });
    }

    public get<T extends IActivityBarItem>(id: UniqueId) {
        return this.getState().data.find(searchById(id)) as T | undefined;
    }

    public getCurrent() {
        return this.getState().current;
    }

    public add(data: Arraylize<IActivityBarItem>, isActive = false) {
        if (!Array.isArray(data) && isActive) {
            this.setCurrent(data.id);
        }
        this.dispatch((draft) => {
            const arrayData = arraylize(data);
            draft.data.push(...arrayData);
        });
    }

    public update<T extends IActivityBarItem>(data: RequiredId<T>): void;
    public update<T extends IActivityBarItem>(id: UniqueId, predict: Predict<T>): void;
    public update<T extends IActivityBarItem>(
        item: RequiredId<T> | UniqueId,
        predict?: Predict<T>
    ) {
        const isUpdateData = typeof item === 'object';
        this.dispatch((draft) => {
            const target = draft.data.find(searchById(isUpdateData ? item.id : item));
            if (target) {
                Object.assign(target, isUpdateData ? item : predict?.(target as T) || {});
            }
        });
    }

    public remove(id: Arraylize<UniqueId>) {
        this.dispatch((draft) => {
            arraylize(id).forEach((item) => {
                const idx = draft.data.findIndex(searchById(item));
                draft.data.splice(idx, 1);
            });
        });
    }

    public toggleBar(id: UniqueId, hidden?: boolean) {
        this.dispatch((draft) => {
            const target = draft.data.find(searchById(id));
            if (target) {
                target.hidden = typeof hidden === 'boolean' ? hidden : !target.hidden;
            }
        });
    }

    public reset() {
        this.setState(new ActivityBarModel());
    }

    // ===================== Subscriptions =====================
    public onClick(callback: (item: IActivityBarItem) => void) {
        this.subscribe(ActivityBarEvent.onClick, callback);
    }

    public onContextMenu(callback: ContextMenuHandler<[item?: IActivityBarItem]>) {
        this.subscribe(ActivityBarEvent.onContextMenu, callback);
    }

    public onContextMenuClick(callback: MenuHandler) {
        this.subscribe(ActivityBarEvent.onContextMenuClick, callback);
    }
}
