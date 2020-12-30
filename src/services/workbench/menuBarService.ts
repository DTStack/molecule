import {
    IMenuBar,
    IMenuBarItem,
    MenuBarModel,
} from 'mo/model/workbench/menuBar';
import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';

export interface IMenuBarService extends Component<IMenuBar> {
    push(data: IMenuBarItem | IMenuBarItem[]): void;
    remove(index: number): void;
    getState(): IMenuBar;
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
