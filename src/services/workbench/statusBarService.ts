import { emit } from 'mo/services/eventService';
import { IMenuBarItem } from 'mo/workbench/menuBar/menuBar';
import { IStatusBarItems } from 'mo/workbench/statusBar';
import { container, injectAll, singleton } from 'tsyringe';

export interface IStatusBarService {
    push: (data: IMenuBarItem | IMenuBarItem []) => void;
    remove: (index: number) => void;
}

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

@singleton()
export class StatusBarService implements IStatusBarService {
    private data: IStatusBarItems[];

    constructor(
        @injectAll('StatusBarItems') data: IStatusBarItems[] = []) {
        this.data = data;
    }

    @emit(StatusBarEvent.onClick)
    public onClick(event: React.MouseEvent, item: IStatusBarItems) {
        console.log('onClick:', this.data);
    }

    @emit(StatusBarEvent.DataChanged)
    public push(data: IStatusBarItems | IStatusBarItems[]) {
        if (Array.isArray(data)) {
            this.data = this.data.concat(data);
        } else {
            this.data.push(data);
        }
    }

    public remove(index: number) {
        this.data.splice(index, 1);
    }
}

container.register('StatusBarItems', { useValue: [] });
