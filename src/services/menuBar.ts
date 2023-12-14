import { BaseService } from 'mo/glue';
import { MenuBarEvent, MenuBarModel } from 'mo/models/menuBar';
import type { IMenuItemProps, RequiredId, UniqueId } from 'mo/types';
import { toggleNextIcon } from 'mo/utils';
import logger from 'mo/utils/logger';

export interface IMenuBarService extends BaseService<MenuBarModel> {
    toggleChecked(menuId: UniqueId): void;
    /**
     * Set the menus data
     * @param data
     */
    setMenus(data: IMenuItemProps[]): void;
    /**
     * Append a new menu into the specific menu found by `parentId`
     * @param menuItem the new menu
     * @param parentId
     */
    append(menuItem: IMenuItemProps, parentId: UniqueId): void;
    /**
     * Remove the specific menu item
     * @param menuId
     */
    remove(menuId: UniqueId): void;
    /**
     * Get the specific menu item
     * @param menuId
     */
    getMenuById(menuId: UniqueId): IMenuItemProps | undefined;
    /**
     * Update the specific menu item data
     */
    update(menuItem: RequiredId<IMenuItemProps>): void;
    /**
     * Reset menu bar data;
     */
    reset(): void;
    /**
     * listen to the onSelect event in menu
     * @param menuId
     */
    onSelect(callback: (menuId: UniqueId) => void): void;
    onContextMenu(callback: (pos: { x: number; y: number }) => void): void;
}

export class MenuBarService extends BaseService<MenuBarModel> implements IMenuBarService {
    protected state: MenuBarModel;
    private sperator = '-';

    constructor() {
        super('menuBar');
        this.state = new MenuBarModel();
    }

    /**
     * Get the specific menu reference type via menuId
     * @param menuId
     * @returns source is the target menu and path is the collections of indexs that contain the specific menu position
     */
    private getReferenceMenu(menuId: UniqueId) {
        const { data } = this.state;
        const stack: {
            source: IMenuItemProps;
            path: string;
            parent: IMenuItemProps | null;
        }[] = data.map((i, index) => ({ source: i, path: `${index}`, parent: null }));

        let res:
            | { source: IMenuItemProps; path: string; parent: IMenuItemProps | null }
            | undefined;
        while (stack.length) {
            const { source, path, parent } = stack.shift() as (typeof stack)[number];
            if (source.id === menuId) {
                res = { source, path, parent };
            } else {
                stack.push(
                    ...(source.children || []).map((s, index) => ({
                        source: s,
                        path: `${path}${this.sperator}${index}`,
                        parent: source,
                    }))
                );
            }
        }

        return res;
    }

    public toggleChecked(menuId: UniqueId) {
        const { data } = this.state;
        const menuInfo = this.getReferenceMenu(menuId);
        if (!menuInfo) {
            logger.error(`There is no menu found by ${menuId}`);
            return;
        }
        menuInfo.source.icon = toggleNextIcon(menuInfo.source.icon);
        this.setMenus(data);
    }

    public getMenuById(menuId: UniqueId) {
        const res = this.getReferenceMenu(menuId);
        return res?.source;
    }

    public setMenus = (menuData: IMenuItemProps[]) => {
        this.setState({
            data: menuData,
        });
    };

    public append(menuItem: IMenuItemProps, parentId: UniqueId) {
        const { data } = this.state;
        const menuInfo = this.getReferenceMenu(parentId);
        if (!menuInfo) {
            logger.error(`There is no menu found by ${parentId}`);
            return;
        }
        const { source: parentMenu } = menuInfo;
        if (Array.isArray(parentMenu.children)) {
            parentMenu.children.push(menuItem);
        } else {
            parentMenu.children = [menuItem];
        }
        this.setMenus([...data]);
    }

    public remove(menuId: UniqueId) {
        const { data } = this.state;
        const menuInfo = this.getReferenceMenu(menuId);
        if (!menuInfo) {
            logger.error(`There is no menu found by ${menuId}`);
            return;
        }
        const { parent } = menuInfo;
        if (parent) {
            const idx = parent.children?.findIndex((menu) => menu.id === menuId);
            if (typeof idx === 'number' && idx > -1) {
                parent.children?.splice(idx, 1);
                this.setMenus([...data]);
            }
        } else {
            // Root menu doesn't have parent node
            const root = data.filter((i) => i.id !== menuId);
            this.setMenus(root);
        }
    }

    public update(menuItem: RequiredId<IMenuItemProps>) {
        const { data } = this.state;
        const menuInfo = this.getReferenceMenu(menuItem.id);
        if (!menuInfo) {
            logger.error(`There is no menu found by ${menuItem.id}`);
            return;
        }
        const currentMenuItem = menuInfo.source;
        Object.assign(currentMenuItem, menuItem);
        this.setMenus([...data]);
    }

    public reset() {
        this.setState(new MenuBarModel());
    }

    // ===================== Subscriptions =====================
    public onSelect = (callback: (menuId: UniqueId) => void) => {
        this.subscribe(MenuBarEvent.onSelect, callback);
    };

    public onContextMenu(callback: (pos: { x: number; y: number }) => void): void {
        this.subscribe(MenuBarEvent.onContextMenu, callback);
    }
}
