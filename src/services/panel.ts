import { BaseService } from 'mo/glue';
import { IPanelItem, PanelEvent, PanelModel } from 'mo/models/panel';
import type {
    Arraylize,
    ContextMenuHandler,
    IMenuItemProps,
    Predict,
    RequiredId,
    UniqueId,
} from 'mo/types';
import { arraylize, getPrevOrNext, searchById } from 'mo/utils';

export class PanelService extends BaseService<PanelModel> {
    protected state: PanelModel;

    constructor() {
        super('panel');
        this.state = new PanelModel();
    }

    public get(id: UniqueId) {
        return this.getAll().find(searchById(id));
    }

    public getAll() {
        return this.getState().data;
    }

    public getToolbar(id: UniqueId) {
        return this.getState().toolbar.find(searchById(id));
    }

    public getPanelToolbar(panelId: UniqueId, toolbarId: UniqueId) {
        return this.get(panelId)?.toolbar?.find(searchById(toolbarId));
    }

    public add(data: Arraylize<IPanelItem>) {
        this.dispatch((draft) => {
            draft.data.push(...arraylize(data));
        });
    }

    public update(id: UniqueId, predict: Predict<IPanelItem>): void;
    public update(data: RequiredId<IPanelItem>): void;
    public update(item: UniqueId | RequiredId<IPanelItem>, predict?: Predict<IPanelItem>) {
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
            if (draft.current === id) {
                draft.current = getPrevOrNext(draft.data, idx)?.id;
            }
            draft.data.splice(idx, 1);
        });
    }

    public setCurrent(id?: UniqueId): void {
        this.dispatch((draft) => {
            draft.current = id;
        });
    }

    public open(data: IPanelItem<any>): void {
        const panel = this.get(data.id);
        if (panel) {
            this.setCurrent(panel.id);
        } else {
            this.add(data);
            this.setCurrent(data.id);
        }
    }

    public addToolbar(toolbar: Arraylize<IMenuItemProps>): void {
        this.dispatch((draft) => {
            draft.toolbar.push(...arraylize(toolbar));
        });
    }

    public updateToolbar(id: UniqueId, predict: Predict<IMenuItemProps>): void;
    public updateToolbar(data: RequiredId<IMenuItemProps>): void;
    public updateToolbar(
        item: UniqueId | RequiredId<IMenuItemProps>,
        predict?: Predict<IMenuItemProps>
    ): void {
        this.dispatch((draft) => {
            const target = draft.toolbar.find(
                searchById(typeof item === 'object' ? item.id : item)
            );
            if (!target) return;
            Object.assign(target, typeof item === 'object' ? item : predict?.(target));
        });
    }

    public toggle(id: UniqueId): void {
        this.update(id, (prev) => ({ hidden: !prev.hidden }));
    }

    public reset(): void {
        this.setState(new PanelModel());
    }

    // ===================== Subscriptions =====================
    public onChange(callback: (key: UniqueId) => void) {
        this.subscribe(PanelEvent.onChange, callback);
    }

    public onToolbarClick(callback: (item: IMenuItemProps) => void) {
        this.subscribe(PanelEvent.onToolbarClick, callback);
    }

    public onClose(callback: (key: UniqueId) => void) {
        this.subscribe(PanelEvent.onClose, callback);
    }

    public onContextMenu(callback: ContextMenuHandler<[item?: IPanelItem]>): void {
        this.subscribe(PanelEvent.onContextMenu, callback);
    }
}
