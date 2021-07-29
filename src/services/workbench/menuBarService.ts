import 'reflect-metadata';
import { cloneDeep } from 'lodash';

import {
    IMenuBar,
    IMenuBarItem,
    MenuBarModel,
} from 'mo/model/workbench/menuBar';
import { MenuBarEvent } from 'mo/model/workbench/menuBar';
import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';

export interface IMenuBarService extends Component<IMenuBar> {
    /**
     * Initialize the MenuBar state
     * @param data
     */
    initMenus(data: IMenuBarItem[]): void;
    /**
     * Add a new menu item
     * @param menuItem menu item data
     * @param parentId parent menu item id
     */
    add(menuItem: IMenuBarItem, parentId: string): void;
    /**
     * Select the execution of the menu
     * @param callback
     */
    onSelect(callback: (menuId: string) => void): void;
    /**
     * Remove the specific menu item
     * @param menuId
     */
    remove(menuId: string): void;
    /**
     * Get the specific menu item
     * @param menuId
     */
    getMenuById(menuId: string): IMenuBarItem;
    /**
     * Update the specific menu item data
     * @param menuId
     * @param menuItem
     */
    update(menuId: string, menuItem: IMenuBarItem): void;
}
@singleton()
export class MenuBarService
    extends Component<IMenuBar>
    implements IMenuBarService {
    protected state: IMenuBar;

    constructor() {
        super();
        this.state = container.resolve(MenuBarModel);
    }

    public initMenus = (menuData: IMenuBarItem[]) => {
        this.setState({
            data: menuData,
        });
    };

    public onSelect = (callback: (menuId: string) => void) => {
        this.subscribe(MenuBarEvent.onSelect, callback);
    };

    public add(menuItem: IMenuBarItem, parentId: string) {
        const { data } = this.state;
        const parentMenu = this.getMenuById(parentId);
        if (!parentMenu) return;
        const deepData = cloneDeep(data);
        for (const menu of deepData) {
            this.addMenu(menu, menuItem, parentId!);
        }
        this.setState({ data: deepData });
    }

    public addMenu(
        menu: IMenuBarItem,
        menuItem: IMenuBarItem,
        parentId: string
    ): void {
        if (menu?.id === parentId) {
            const parentMenu = menu.data || [];
            parentMenu.push(menuItem);
        } else {
            if (menu?.data?.length) {
                for (const item of menu?.data) {
                    this.addMenu(item, menuItem, parentId);
                }
            }
        }
    }

    public remove(menuId: string): void {
        const { data } = this.state;
        const currentMenuItem = this.getMenuById(menuId);
        if (!currentMenuItem) return;
        const deepData = cloneDeep(data);
        for (const menu of deepData) {
            this.removeMenu(deepData, menu, menuId);
        }
        this.setState({ data: deepData });
    }

    public removeMenu(
        data: IMenuBarItem[],
        menu: IMenuBarItem,
        currentMenuId: string
    ): void {
        if (menu?.id === currentMenuId) {
            const menuItem = data.find((menu) => menu.id === currentMenuId);
            const idx = data.indexOf(menuItem!);
            idx >= 0 && data.splice(idx, 1);
        } else {
            if (menu?.data?.length) {
                for (const item of menu?.data) {
                    this.removeMenu(menu?.data, item, currentMenuId);
                }
            }
        }
    }

    public update(menuId: string, menuItem: IMenuBarItem = {}): void {
        const { data } = this.state;
        const currentMenuItem = this.getMenuById(menuId);
        const deepData = cloneDeep(data);
        for (const menu of deepData) {
            this.updateMenu(menu, currentMenuItem!, menuItem);
        }
        this.setState({ data: deepData });
    }

    public getMenuById(menuId: string): any {
        const { data } = this.state;
        const queue = cloneDeep(data);
        while (queue.length) {
            const menu = queue.shift();
            if (menu?.id === menuId) return menu;
            queue.push(...(menu?.data || []));
        }
    }

    public updateMenu(
        menu: IMenuBarItem,
        currentMenuItem: IMenuBarItem,
        menuItem: IMenuBarItem
    ) {
        if (menu?.id === currentMenuItem?.id) {
            for (const key in menuItem) {
                if (menuItem.hasOwnProperty(key)) {
                    delete menu[key];
                    menu[key] = menuItem[key];
                }
            }
        } else {
            if (menu?.data?.length) {
                for (const item of menu?.data) {
                    this.updateMenu(item, currentMenuItem, menuItem);
                }
            }
        }
    }
}
