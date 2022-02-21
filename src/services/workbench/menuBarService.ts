import 'reflect-metadata';
import { cloneDeep } from 'lodash';
import type { UniqueId } from 'mo/common/types';
import {
    IMenuBar,
    IMenuBarItem,
    MenuBarModel,
} from 'mo/model/workbench/menuBar';
import { MenuBarEvent } from 'mo/model/workbench/menuBar';
import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';
import logger from 'mo/common/logger';

export interface IMenuBarService extends Component<IMenuBar> {
    /**
     * Set the menus data
     * @param data
     */
    setMenus(data: IMenuBarItem[]): void;
    /**
     * Append a new menu into the specific menu found by `parentId`
     * @param menuItem the new menu
     * @param parentId
     */
    append(menuItem: IMenuBarItem, parentId: UniqueId): void;
    /**
     * Remove the specific menu item
     * @param menuId
     */
    remove(menuId: UniqueId): void;
    /**
     * Get the specific menu item
     * @param menuId
     */
    getMenuById(menuId: UniqueId): IMenuBarItem | undefined;
    /**
     * Update the specific menu item data
     * @param menuId
     * @param menuItem
     */
    update(menuId: UniqueId, menuItem: IMenuBarItem): void;
    /**
     * Reset menu bar data;
     */
    reset(): void;
    /**
     * listen to the onSelect event in menu
     * @param menuId
     */
    onSelect(callback: (menuId: UniqueId) => void): void;
}
@singleton()
export class MenuBarService
    extends Component<IMenuBar>
    implements IMenuBarService
{
    protected state: IMenuBar;
    private sperator = '-';

    constructor() {
        super();
        this.state = container.resolve(MenuBarModel);
    }

    /**
     * Get the specific menu reference type via menuId
     * @param menuId
     * @returns source is the target menu and path is the collections of indexs that contain the specific menu position
     */
    private getReferenceMenu(menuId: UniqueId) {
        const { data } = this.state;
        const stack: {
            source: IMenuBarItem;
            path: string;
        }[] = data.map((i, index) => ({ source: i, path: `${index}` }));

        let res: { source: IMenuBarItem; path: string } | undefined;
        while (stack.length) {
            const { source, path } = stack.shift()!;
            if (source.id === menuId) {
                res = { source, path };
            } else {
                stack.push(
                    ...(source.data || []).map((s, index) => ({
                        source: s,
                        path: `${path}${this.sperator}${index}`,
                    }))
                );
            }
        }

        return res;
    }

    public getMenuById(menuId: UniqueId) {
        const res = this.getReferenceMenu(menuId);
        return res ? cloneDeep(res.source) : res;
    }

    public setMenus = (menuData: IMenuBarItem[]) => {
        this.setState({
            data: cloneDeep(menuData),
        });
    };

    public append(menuItem: IMenuBarItem, parentId: UniqueId) {
        const { data } = this.state;
        const menuInfo = this.getReferenceMenu(parentId);
        if (!menuInfo) {
            logger.error(`There is no menu found by ${parentId}`);
            return;
        }
        const { source: parentMenu } = menuInfo;
        if (Array.isArray(parentMenu.data)) {
            parentMenu.data.push(menuItem);
        } else {
            parentMenu.data = [menuItem];
        }
        const deepData = cloneDeep(data);
        this.setState({ data: deepData });
    }

    public remove(menuId: UniqueId): void {
        const { data } = this.state;
        const menuInfo = this.getReferenceMenu(menuId);
        if (!menuInfo) {
            logger.error(`There is no menu found by ${menuId}`);
            return;
        }
        const { path: paths } = menuInfo;
        const path = paths.split(this.sperator);
        // Remove the last one which is the position of the menu going to be removed
        path.length = path.length - 1;

        const parentMenu = path.reduce(
            (pre, cur) => {
                const { data } = pre;
                return data[cur];
            },
            { data }
        );
        const idx = parentMenu.data.findIndex((menu) => menu.id === menuId);
        parentMenu.data.splice(idx, 1);
        this.setState({
            data: cloneDeep(data),
        });
    }

    public update(menuId: UniqueId, menuItem: IMenuBarItem = {}): void {
        const { data } = this.state;
        const menuInfo = this.getReferenceMenu(menuId);
        if (!menuInfo) {
            logger.error(`There is no menu found by ${menuId}`);
            return;
        }
        const currentMenuItem = menuInfo.source;
        Object.assign(currentMenuItem, menuItem);
        const deepData = cloneDeep(data);
        this.setState({ data: deepData });
    }

    public reset() {
        this.setState({
            data: [],
        });
    }

    public onSelect = (callback: (menuId: UniqueId) => void) => {
        this.subscribe(MenuBarEvent.onSelect, callback);
    };
}
