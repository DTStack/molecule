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
     * Remove the specific StatusBar item
     * @param id
     */
    remove(id: string): void;
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
        const { leftItems, rightItems } = this.state;
        let result = this.updateArrayItem(leftItems, item);
        if (result) {
            this.setState({
                leftItems: result,
            });
        } else {
            // Try to update target item in rightItems
            result = this.updateArrayItem(rightItems, item);
            if (result) {
                this.setState({
                    rightItems: result,
                });
            }
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

    public remove(id: string): void {
        const { leftItems, rightItems } = this.state;
        let result = this.removeArrayItem(leftItems, id);
        if (result) {
            this.setState({
                leftItems: result,
            });
        } else {
            result = this.removeArrayItem(rightItems, id);
            if (result) {
                this.setState({
                    rightItems: result,
                });
            }
        }
    }

    /**
     * Update a specific array item, and return the array object
     * @param arr
     * @param target The update target
     * @returns The new updated IStatusBarItem Array object
     */
    private updateArrayItem(
        targetArray: IStatusBarItem[],
        target: IStatusBarItem
    ): IStatusBarItem[] | undefined {
        const index = targetArray.findIndex(searchById(target.id));
        if (index > -1) {
            const nextArray = targetArray.concat();
            nextArray[index] = Object.assign({}, nextArray[index], target);
            return nextArray;
        }
        return undefined;
    }

    private removeArrayItem(
        targetArray: IStatusBarItem[],
        id: string
    ): IStatusBarItem[] | undefined {
        const index = targetArray!.findIndex(searchById(id));
        if (index > -1) {
            const nextArray = targetArray.concat();
            nextArray.splice(index, 1)[0];
            return nextArray;
        }
        return undefined;
    }

    private appendLeftItem(item: IStatusBarItem): void {
        this.setState({
            leftItems: this.appendArrayItem(this.state.leftItems, item),
        });
    }

    private appendRightItem(item: IStatusBarItem): void {
        this.setState({
            rightItems: this.appendArrayItem(this.state.rightItems, item),
        });
    }

    private appendArrayItem(
        targetArray: IStatusBarItem[],
        item: IStatusBarItem
    ): IStatusBarItem[] {
        const nextItems = targetArray.concat();
        nextItems.push(item);
        return nextItems;
    }
}
