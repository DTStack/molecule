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
    showHide(): void;
    add(menuItem: IMenuBarItem, parentId: string): void;
    remove(menuId: string): void;
    getState(): IMenuBar;
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

    public showHide(): void {
        this.setState({
            hidden: !this.state.hidden,
        });
    }

    public add(menuItem: IMenuBarItem, parentId: string) {
        const { data } = this.state;
        const parentMenu = this.getMenuById(parentId, data!);
        const deepData = cloneDeep(data);
        for (const menu of deepData) {
            this.appendMenu(menu, menuItem, parentMenu!);
        }
        this.setState({ data: deepData });
    }

    public appendMenu(
        menu: IMenuBarItem,
        menuItem: IMenuBarItem,
        parentMenu: IMenuBarItem
    ): void {
        const parentMenuId = parentMenu?.id;
        if (menu?.id === parentMenuId) {
            const parentMenu = menu.data || [];
            parentMenu.push(menuItem);
        } else {
            if (menu?.data?.length) {
                for (const item of menu?.data) {
                    this.appendMenu(item, menuItem, parentMenu);
                }
            }
        }
    }

    public remove(menuId: string): void {
        const { data } = this.state;
        const currentMenuItem = this.getMenuById(menuId, data!);
        const deepData = cloneDeep(data);
        for (const menu of deepData) {
            this.removeMenu(deepData, menu, currentMenuItem!);
        }
        this.setState({ data: deepData });
    }

    public removeMenu(
        data: IMenuBarItem[],
        menu: IMenuBarItem,
        currentMenuItem: IMenuBarItem
    ): void {
        const currentMenuId = currentMenuItem?.id;
        if (menu?.id === currentMenuId) {
            const menuItem = data.find((menu) => menu.id === currentMenuId);
            const idx = data.indexOf(menuItem!);
            idx >= 0 && data.splice(idx, 1);
        } else {
            if (menu?.data?.length) {
                for (const item of menu?.data) {
                    this.removeMenu(menu?.data, item, currentMenuItem);
                }
            }
        }
    }

    public update(menuId: string, menuItem: IMenuBarItem = {}): void {
        const { data } = this.state;
        const currentMenuItem = this.getMenuById(menuId, data!);
        const deepData = cloneDeep(data);
        for (const menu of deepData) {
            this.updateMenu(menu, currentMenuItem!, menuItem);
        }
        this.setState({ data: deepData });
    }

    public getMenuById(menuId: string, data: IMenuBarItem[]) {
        const queue = [...data];
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
