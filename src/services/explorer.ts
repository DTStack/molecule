import { BaseService } from 'mo/glue';
import { ExplorerEvent, ExplorerModel, IExplorerPanelItem } from 'mo/models/explorer';
import { Arraylize, ContextMenuHandler, IMenuItemProps, Predict, RequiredId, UniqueId } from 'mo/types';
import { arraylize, searchById } from 'mo/utils';

export class ExplorerService extends BaseService<ExplorerModel> {
    protected state: ExplorerModel;
    constructor() {
        super('explorer');
        this.state = new ExplorerModel();
    }

    public get(id: UniqueId) {
        return this.getAll().find(searchById(id));
    }

    public getAll() {
        return this.getState().data;
    }

    public getActive() {
        return this.getState().active;
    }

    public setActive(active: UniqueId[]) {
        this.dispatch((draft) => {
            draft.active = active;
        });
    }

    public toggleActive(panelId: UniqueId) {
        this.dispatch((draft) => {
            const idx = draft.active.findIndex((id) => id === panelId);
            if (idx === -1) draft.active.push(panelId);
            else draft.active.splice(idx, 1);
        });
    }

    public update(id: UniqueId, predict: Predict<IExplorerPanelItem>): void;
    public update(data: RequiredId<IExplorerPanelItem>): void;
    public update(item: UniqueId | RequiredId<IExplorerPanelItem>, predict?: Predict<IExplorerPanelItem>) {
        if (typeof item === 'object') {
            this.dispatch((draft) => {
                const target = draft.data.find(searchById(item.id));
                if (!target) return;
                Object.assign(target, item);
            });
        } else {
            this.dispatch((draft) => {
                const target = draft.data.find(searchById(item));
                if (!target) return;
                Object.assign(target, predict?.(target));
            });
        }
    }

    public add(data: Arraylize<IExplorerPanelItem>) {
        this.dispatch((draft) => {
            draft.data.push(...arraylize(data));
        });
    }

    public addToolbar(id: UniqueId, toolbars: Arraylize<IMenuItemProps>) {
        this.dispatch((draft) => {
            const idx = draft.data.findIndex(searchById(id));
            if (idx === -1) return;
            draft.data[idx].toolbar ??= [];
            draft.data[idx].toolbar?.push(...arraylize(toolbars));
        });
    }

    public remove(id: UniqueId) {
        this.dispatch((draft) => {
            const idx = draft.data.findIndex(searchById(id));
            if (idx === -1) return;
            draft.data.splice(idx, 1);
        });
    }

    public removeToolbar(id: UniqueId, toolbarIds: UniqueId[]): void;
    public removeToolbar(id: UniqueId, predict: Predict<IMenuItemProps, boolean>): void;
    public removeToolbar(id: UniqueId, itemOrFunc: UniqueId[] | Predict<IMenuItemProps, boolean>): void {
        this.dispatch((draft) => {
            const idx = draft.data.findIndex(searchById(id));
            if (idx === -1) return;
            if (typeof itemOrFunc === 'function') {
                draft.data[idx].toolbar = draft.data[idx].toolbar?.filter(itemOrFunc);
            } else {
                draft.data[idx].toolbar = draft.data[idx].toolbar?.filter((item) => !itemOrFunc.includes(item.id));
            }
        });
    }

    public togglePanel(id: UniqueId, hidden?: boolean) {
        this.update(id, (prev) => ({
            hidden: typeof hidden === 'boolean' ? hidden : !prev.hidden,
        }));
    }

    public reset() {
        this.setState(new ExplorerModel());
    }

    // ===================== Subscriptions =====================
    public onPanelToolbarClick(callback: (toolbar: IMenuItemProps, panelId: UniqueId) => void) {
        this.subscribe(ExplorerEvent.onPanelToolbarClick, callback);
    }

    public onCollapseChange(callback: (keys: UniqueId[]) => void) {
        this.subscribe(ExplorerEvent.onCollapseChange, callback);
    }

    public onContextMenu(callback: ContextMenuHandler<[panel: IExplorerPanelItem]>): void {
        this.subscribe(ExplorerEvent.onContextMenu, callback);
    }
}
