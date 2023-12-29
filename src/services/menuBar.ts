import { isUndefined } from 'lodash-es';
import { BaseService } from 'mo/glue';
import { MenuBarEvent, MenuBarModel } from 'mo/models/menuBar';
import type { IMenuItemProps, PositionHandler, Predict, RequiredId, UniqueId } from 'mo/types';
import { searchById, toggleNextIcon } from 'mo/utils';
import { TreeHelper } from 'mo/utils/tree';
export class MenuBarService extends BaseService<MenuBarModel> {
    protected state: MenuBarModel;

    constructor() {
        super('menuBar');
        this.state = new MenuBarModel();
    }

    public get(id: UniqueId) {
        const treeHelper = new TreeHelper(this.getState().data);
        return treeHelper.getNode(id);
    }

    public update(id: UniqueId, predict: Predict<IMenuItemProps>): void;
    public update(data: RequiredId<IMenuItemProps>): void;
    public update(item: UniqueId | RequiredId<IMenuItemProps>, predict?: Predict<IMenuItemProps>) {
        this.dispatch((draft) => {
            const treeHelper = new TreeHelper(draft.data);
            const node = treeHelper.getNode(typeof item === 'object' ? item.id : item);
            if (!node) return;
            Object.assign(node, typeof item === 'object' ? item : predict?.(node));
        });
    }

    public toggleChecked(id: UniqueId) {
        this.update(id, (node) => ({ icon: toggleNextIcon(node.icon) }));
    }

    public setMenus = (menuData: IMenuItemProps[]) => {
        this.dispatch((draft) => {
            draft.data = menuData;
        });
    };

    public add(data: IMenuItemProps, parentId: UniqueId) {
        this.dispatch((draft) => {
            const treeHelper = new TreeHelper(draft.data);
            const parent = treeHelper.getNode(parentId);
            if (!parent) return;
            parent.children ??= [];
            parent.children.push(data);
        });
    }

    public remove(id: UniqueId) {
        this.dispatch((draft) => {
            const treeHelper = new TreeHelper(draft.data);
            const parent = treeHelper.getParent(id);
            if (!parent) return;
            const idx = parent.children?.findIndex(searchById(id));
            if (idx === -1 || isUndefined(idx)) return;
            parent.children?.splice(idx, 1);
        });
    }

    public reset() {
        this.setState(new MenuBarModel());
    }

    // ===================== Subscriptions =====================
    public onSelect = (callback: (menuId: UniqueId) => void) => {
        this.subscribe(MenuBarEvent.onSelect, callback);
    };

    public onContextMenu(callback: PositionHandler): void {
        this.subscribe(MenuBarEvent.onContextMenu, callback);
    }
}
