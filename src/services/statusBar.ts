import { BaseService } from 'mo/glue';
import { type IStatusBarItem, StatusBarEvent, StatusBarModel } from 'mo/models/statusBar';
import type {
    Arraylize,
    ContextMenuHandler,
    Predict,
    RequiredId,
    UniqueId,
} from 'mo/types';
import { arraylize, searchById } from 'mo/utils';

export class StatusBarService extends BaseService<StatusBarModel> {
    protected state: StatusBarModel;

    constructor() {
        super('statusBar');
        this.state = new StatusBarModel();
    }

    public get(id: UniqueId) {
        return this.getAll().find(searchById(id));
    }

    public getAll() {
        return this.getState().data;
    }

    public add(item: Arraylize<IStatusBarItem>) {
        this.dispatch((draft) => {
            draft.data.push(...arraylize(item));
        });
    }

    public update(id: UniqueId, predict: Predict<IStatusBarItem>): void;
    public update(data: RequiredId<IStatusBarItem>): void;
    public update(item: UniqueId | RequiredId<IStatusBarItem>, predict?: Predict<IStatusBarItem>) {
        this.dispatch((draft) => {
            const target = draft.data.find(searchById(typeof item === 'object' ? item.id : item));
            if (!target) return;
            Object.assign(target, typeof item === 'object' ? item : predict?.(target));
        });
    }

    public remove(id: UniqueId) {
        this.dispatch((draft) => {
            const idx = draft.data.findIndex(searchById(id));
            if (idx === -1) return;
            draft.data.splice(idx, 1);
        });
    }

    public toggle(id: UniqueId): void {
        this.update(id, (prev) => ({ hidden: !prev.hidden }));
    }

    public reset() {
        this.setState(new StatusBarModel());
    }

    // ===================== Subscriptions =====================
    public onClick(callback: (e: MouseEvent, item: IStatusBarItem) => void) {
        this.subscribe(StatusBarEvent.onClick, callback);
    }

    public onContextMenu(callback: ContextMenuHandler<[item?: IStatusBarItem]>) {
        this.subscribe(StatusBarEvent.onContextMenu, callback);
    }
}
