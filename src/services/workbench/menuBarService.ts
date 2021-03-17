import { cloneDeep } from 'loadsh';

import {
    IMenuBar,
    IMenuBarItem,
    MenuBarModel,
} from 'mo/model/workbench/menuBar';
import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';

export interface IMenuBarService extends Component<IMenuBar> {
    showHide(): void;
    push(data: IMenuBarItem | IMenuBarItem[]): void;
    remove(index: number): void;
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

    public push(item: IMenuBarItem | IMenuBarItem[]) {
        let original = this.state.data || [];
        if (Array.isArray(item)) {
            original = original.concat(item);
        } else {
            original.push(item);
        }
    }

    public remove(index: number) {
        this.state.data!.splice(index, 1);
    }

    public update(menuId: string, menuItem = {}) {
        const { data } = this.state;
        const currentMenuItem = this.getMenuById(menuId, data);
        const deepData = cloneDeep(data);
        for (let menu of deepData) {
            this.updateMenu(menu, currentMenuItem!, menuItem);
        }
        this.setState({ data: deepData });
    }

    public getMenuById(menuId: string, data) {
        const queue = [...data];
        while (queue.length) {
            const menu = queue.shift();
            if (menu.id === menuId) return menu;
            queue.push(...(menu.data || []));
        }
    }

    public updateMenu(
        menu,
        currentMenuItem: IMenuBarItem,
        menuItem: IMenuBarItem
    ) {
        if (menu?.id === currentMenuItem?.id) {
            for (let key in menuItem) {
                if (menuItem.hasOwnProperty(key)) {
                    delete menu[key];
                    menu[key] = menuItem[key];
                }
            }
        } else {
            if (menu?.data?.length) {
                for (let item of menu?.data) {
                    this.updateMenu(item, currentMenuItem, menuItem);
                }
            }
        }
    }
}
