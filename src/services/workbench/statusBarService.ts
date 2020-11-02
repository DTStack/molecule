import { IStatusBar, IStatusBarItem, StatusBarModel } from 'mo/model/statusBar';
import { Component } from 'mo/services/react';
import { emit } from 'mo/common/event';
import { container, singleton } from 'tsyringe';

/**
 * The activity bar event definition
 */
export enum StatusBarEvent {
    /**
     * Selected an activity bar
     */
    onClick = 'statusBar.onClick',
    /**
     * Activity bar data changed
     */
    DataChanged = 'statusBar.data',
}

export interface IStatusBarService extends Component<IStatusBar> {
    push(data: IStatusBarItem | IStatusBarItem []): void;
    remove(index: number): void;
}

@singleton()
export class StatusBarService extends Component<IStatusBar> implements IStatusBarService {
    protected state: IStatusBar;

    constructor() {
        super();
        this.state = container.resolve(StatusBarModel);
    }

    @emit(StatusBarEvent.DataChanged)
    public push(data: IStatusBarItem | IStatusBarItem[]) {
        let original = this.state.data;
        if (Array.isArray(data)) {
            original = original.concat(data);
        } else {
            original.push(data);
        }
    }

    public remove(index: number) {
        this.state.data.splice(index, 1);
    }
}
