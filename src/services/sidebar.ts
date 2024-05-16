import { isUndefined } from 'lodash-es';
import { BaseService } from 'mo/glue';
import { type ISidebarPane, SidebarEvent, SidebarModel } from 'mo/models/sidebar';
import type {
    Arraylize,
    ContextMenuHandler,
    GroupMenuHandler,
    IMenuItemProps,
    Predict,
    RequiredId,
    UniqueId,
    Variant,
} from 'mo/types';
import { arraylize, getPrevOrNext, searchById } from 'mo/utils';

export class SidebarService extends BaseService<SidebarModel> {
    protected state: SidebarModel;

    constructor() {
        super('sidebar');
        this.state = new SidebarModel();
    }

    public get(id?: UniqueId) {
        if (isUndefined(id)) return;
        return this.getAll().find(searchById(id));
    }

    public getAll() {
        return this.getState().data;
    }

    public getCurrent() {
        return this.getState().current;
    }

    public getCurrentPane() {
        return this.get(this.getCurrent());
    }

    public getToolbar(paneId: UniqueId, toolbarId: UniqueId) {
        return this.get(paneId)?.toolbar?.find(searchById(toolbarId));
    }

    public add(data: Arraylize<ISidebarPane>) {
        this.dispatch((draft) => {
            draft.data.push(...arraylize(data));
        });
    }

    public addToolbar(paneId: UniqueId, toolbars: Arraylize<IMenuItemProps>) {
        this.dispatch((draft) => {
            const target = draft.data.find(searchById(paneId));
            if (!target) return;
            target.toolbar ??= [];
            target.toolbar.push(...arraylize(toolbars));
        });
    }

    public update(id: UniqueId, predict: Predict<ISidebarPane>): void;
    public update(data: RequiredId<ISidebarPane>): void;
    public update(item: UniqueId | RequiredId<ISidebarPane>, predict?: Predict<ISidebarPane>) {
        this.dispatch((draft) => {
            const target = draft.data.find(searchById(typeof item === 'object' ? item.id : item));
            if (!target) return;
            Object.assign(target, typeof item === 'object' ? item : predict?.(target));
        });
    }

    public updateToolbar(paneId: UniqueId, id: UniqueId, predict: Predict<IMenuItemProps>): void;
    public updateToolbar(paneId: UniqueId, data: RequiredId<IMenuItemProps>): void;
    public updateToolbar(
        paneId: UniqueId,
        item: UniqueId | RequiredId<IMenuItemProps>,
        predict?: Predict<IMenuItemProps>
    ) {
        this.dispatch((draft) => {
            const target = draft.data.find(searchById(paneId));
            const targetToolbar = target?.toolbar?.find(searchById(typeof item === 'object' ? item.id : item));
            if (!targetToolbar) return;
            Object.assign(targetToolbar, typeof item === 'object' ? item : predict?.(targetToolbar));
        });
    }

    public replaceToolbar(paneId: UniqueId, replacedId: UniqueId, toolbar: IMenuItemProps) {
        this.dispatch((draft) => {
            const target = draft.data.find(searchById(paneId));
            const targetToolbar = target?.toolbar?.find(searchById(replacedId));
            if (!targetToolbar) return;
            Object.assign(targetToolbar, toolbar);
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

    public setCurrent(id?: UniqueId) {
        this.dispatch((draft) => {
            draft.current = id;
        });
    }

    public setLoading(loading: Variant<boolean>): void {
        this.dispatch((draft) => {
            draft.loading = typeof loading === 'function' ? loading(draft.loading) : loading;
        });
    }

    public reset() {
        this.setState(new SidebarModel());
    }

    // ===================== Subscriptions =====================
    public onToolbarClick = (callback: GroupMenuHandler) => {
        this.subscribe(SidebarEvent.onToolbarClick, callback);
    };

    public onContextMenu(callback: ContextMenuHandler<[item: ISidebarPane]>): void {
        this.subscribe(SidebarEvent.onContextMenu, callback);
    }
}
