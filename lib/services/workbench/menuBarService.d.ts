import { IMenuBar, IMenuBarItem } from 'mo/model/workbench/menuBar';
import { Component } from 'mo/react';
export interface IMenuBarService extends Component<IMenuBar> {
    push(data: IMenuBarItem | IMenuBarItem[]): void;
    remove(index: number): void;
    getState(): IMenuBar;
}
export declare class MenuBarService extends Component<IMenuBar> implements IMenuBarService {
    protected state: IMenuBar;
    constructor();
    push(item: IMenuBarItem | IMenuBarItem[]): void;
    remove(index: number): void;
}
