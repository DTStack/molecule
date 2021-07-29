import 'reflect-metadata';
import {
    IStatusBar,
    IStatusBarItem,
    StatusBarEvent,
    StatusBarModel,
} from 'mo/model/workbench/statusBar';
import { Component } from 'mo/react';
import { container, singleton } from 'tsyringe';
import { searchById } from '../helper';
export interface IStatusBarService extends Component<IStatusBar> {
    /**
     * Add a new StatusBar item
     * @param item
     * @param float position the item to left or right
     */
    add(item: IStatusBarItem, float: 'left' | 'right');
    /**
     * Remove the specific StatusBar item, return the removed item if success,
     * or return the undefined
     * @param id
     */
    remove(id: string): IStatusBarItem | undefined;
    /**
     * Update the specific StatusBar item
     * @param item the id field is required
     */
    update(item: IStatusBarItem): void;
    /**
     * Get the specific StatusBar item
     * @param id
     */
    getStatusBarItem(id: string): IStatusBarItem | null;
    /**
     * Listen to the StatusBar click event
     * @param callback
     */
    onClick(callback: (e: MouseEvent, item: IStatusBarItem) => void);
}

@singleton()
export class StatusBarService
    extends Component<IStatusBar>
    implements IStatusBarService {
    protected state: IStatusBar;

    constructor() {
        super();
        this.state = container.resolve(StatusBarModel);
    }

    public add(item: IStatusBarItem<any>, float: 'left' | 'right') {
        if (float === 'right') {
            this.appendRightItem(item);
        } else {
            this.appendLeftItem(item);
        }
    }

    public update(item: IStatusBarItem): void {
        const original = this.getStatusBarItem(item.id);
        if (original) {
            Object.assign(original, item);
            this.render();
        }
    }

    public getStatusBarItem(id: string): IStatusBarItem {
        let result;
        const { leftItems, rightItems } = this.state;
        result = leftItems!.find(searchById(id));
        if (!result) {
            result = rightItems!.find(searchById(id));
        }
        return result;
    }

    public onClick(callback: (e: MouseEvent, item: IStatusBarItem) => void) {
        this.subscribe(StatusBarEvent.onClick, callback);
    }

    public remove(id: string): IStatusBarItem | undefined {
        const { leftItems, rightItems } = this.state;
        let result = this.removeArrayItem(id, leftItems);
        if (!result) result = this.removeArrayItem(id, rightItems);
        this.render();
        return result ? result[0] : result;
    }

    private removeArrayItem(
        id: string,
        arr: IStatusBarItem[]
    ): IStatusBarItem | undefined {
        const index = arr!.findIndex(searchById(id));
        if (index > -1) {
            return arr.splice(index, 1)[0];
        }
        return undefined;
    }

    private appendLeftItem(item: IStatusBarItem): void {
        this.state.leftItems!.push(item);
        this.render();
    }

    private appendRightItem(item: IStatusBarItem): void {
        this.state.rightItems!.push(item);
        this.render();
    }
}
