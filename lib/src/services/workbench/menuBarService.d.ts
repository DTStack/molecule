import { IMenuBar, IMenuBarItem } from 'mo/model/workbench/menuBar';
import { Component } from 'mo/react';
export interface IMenuBarService extends Component<IMenuBar> {
    showHide(): void;
    push(data: IMenuBarItem | IMenuBarItem[]): void;
    remove(index: number): void;
    getState(): IMenuBar;
    update(menuId: string, menuItem: IMenuBarItem): void;
}
export declare class MenuBarService extends Component<IMenuBar> implements IMenuBarService {
    protected state: IMenuBar;
    constructor();
    showHide(): void;
    push(item: IMenuBarItem | IMenuBarItem[]): void;
    remove(index: number): void;
    update(menuId: string, menuItem?: {}): void;
    getMenuById(menuId: string, data: any): any;
    updateMenu(menu: any, currentMenuItem: IMenuBarItem, menuItem: IMenuBarItem): void;
}
