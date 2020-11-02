import { IMenuBar, IMenuBarItem, MenuBarModel } from 'mo/model/menuBar';
import { Component } from 'mo/services/react';
import { singleton, container } from 'tsyringe';
import { emit } from '../../common/event';

/**
 * The activity bar event definition
 */
export enum MenuBarEvent {
    /**
     * Selected an activity bar
     */
    onClick = 'menuBar.onClick',
    /**
     * Activity bar data changed
     */
    DataChanged = 'menuBar.data',
}

export interface IMenuBarService extends Component<IMenuBar> {
    push(data: IMenuBarItem | IMenuBarItem []): void;
    remove(index: number): void;
    getState(): IMenuBar;
}

@singleton()
export class MenuBarService extends Component<IMenuBar> implements IMenuBarService {
    protected state: IMenuBar;

    constructor() {
        super();
        this.state = container.resolve(MenuBarModel);
    }

    @emit(MenuBarEvent.DataChanged)
    public push(item: IMenuBarItem | IMenuBarItem[]) {
        let original = this.state.data || [];
        if (Array.isArray(item)) {
            original = original.concat(item);
        } else {
            original.push(item);
        }
    }

    public remove(index: number) {
        this.state.data.splice(index, 1);
    }
}
