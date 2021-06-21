import 'reflect-metadata';
import { cloneDeep } from 'lodash';

import {
    IMenuBar,
    IMenuBarItem,
    MenuBarModel,
} from 'mo/model/workbench/menuBar';
import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';

export interface IMenuBarService extends Component<IMenuBar> {
    initMenu(data: IMenuBarItem[]): void;
    addRootMenu(menu: IMenuBarItem | IMenuBarItem[]): void;
    add(menuItem: IMenuBarItem, parentId: string): void;
    remove(menuId: string): void;
    getState(): IMenuBar;
    getMenuById(menuId: string): IMenuBarItem;
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

    public initMenu = (menuData: IMenuBarItem[]) => {
        this.setState({
            data: menuData,
        });
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

    public addRootMenu(menu: IMenuBarItem | IMenuBarItem[]): void {
        const { data } = this.state;
        let next = cloneDeep(data);
        if (Array.isArray(menu)) {
            next = next?.concat(menu);
        } else {
            next?.push(menu);
        }
        this.setState({
            data: next,
        });
    }
}
