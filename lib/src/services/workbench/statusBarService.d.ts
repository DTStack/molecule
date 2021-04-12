import { IStatusBar, IStatusBarItem } from 'mo/model/workbench/statusBar';
import { Component } from 'mo/react';
export interface IStatusBarService extends Component<IStatusBar> {
    showHide(): void;
    appendLeftItem(item: IStatusBarItem): void;
    appendRightItem(item: IStatusBarItem): void;
    updateItem(item: IStatusBarItem): void;
    findById(id: string): IStatusBarItem | null;
    /**
     * Remove the left item of StatusBar,
     * return the removed item.
     * @param id
     */
    removeLeftItem(id: string): IStatusBarItem;
    /**
     * Remove the right item of StatusBar,
     * return the removed item.
     * @param id
     */
    removeRightItem(id: string): IStatusBarItem;
    /**
     * Listen to the statusbar onclick event
     * @param callback
     */
    onClick(callback: (e: MouseEvent, item: IStatusBarItem) => void): any;
}
export declare class StatusBarService extends Component<IStatusBar> implements IStatusBarService {
    protected state: IStatusBar;
    constructor();
    onClick(callback: (e: MouseEvent, item: IStatusBarItem) => void): void;
    showHide(): void;
    private remove;
    removeLeftItem(id: string): IStatusBarItem;
    removeRightItem(id: string): IStatusBarItem;
    findById(id: string): IStatusBarItem;
    appendLeftItem(item: IStatusBarItem): void;
    appendRightItem(item: IStatusBarItem): void;
    updateItem(item: IStatusBarItem): void;
}
