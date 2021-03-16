import {
    IStatusBar,
    IStatusBarItem,
    StatusBarEvent,
    StatusBarModel,
} from 'mo/model/workbench/statusBar';
import { Component } from 'mo/react';
import { container, singleton } from 'tsyringe';

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
    onClick(callback: (e: MouseEvent, item: IStatusBarItem) => void);
}

function searchById(id: string) {
    return (item: IStatusBarItem) => item.id === id;
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

    onClick(callback: (e: MouseEvent, item: IStatusBarItem) => void) {
        this.subscribe(StatusBarEvent.onClick, callback);
    }

    public showHide(): void {
        this.setState({
            hidden: !this.state.hidden,
        });
    }

    private remove(id: string, arr: IStatusBarItem[]): IStatusBarItem {
        const index = arr.findIndex(searchById(id));
        const result = arr.splice(index, 1);
        return result[0];
    }

    removeLeftItem(id: string): IStatusBarItem {
        return this.remove(id, this.state.leftItems!);
    }

    removeRightItem(id: string): IStatusBarItem {
        return this.remove(id, this.state.rightItems!);
    }

    findById(id: string): IStatusBarItem {
        let result;
        const { leftItems, rightItems } = this.state;
        result = leftItems!.find(searchById(id));
        if (!result) {
            result = rightItems!.find(searchById(id));
        }
        return result;
    }

    appendLeftItem(item: IStatusBarItem): void {
        this.state.leftItems!.push(item);
        this.render();
    }

    appendRightItem(item: IStatusBarItem): void {
        this.state.rightItems!.push(item);
        this.render();
    }

    updateItem(item: IStatusBarItem): void {
        const original = this.findById(item.id);
        if (original) {
            Object.assign(original, item);
            this.render();
        }
    }
}
