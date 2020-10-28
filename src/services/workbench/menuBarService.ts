import { emit } from 'mo/services/eventService';
import { IMenuBarItem } from 'mo/workbench/menuBar/menuBar';
import { container, injectAll, singleton } from 'tsyringe';

export interface IMenuBarService {
    push: (data: IMenuBarItem | IMenuBarItem []) => void;
    remove: (index: number) => void;
    update: () => void;
}

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

@singleton()
export class MenuBarService implements IMenuBarService {
    private data: IMenuBarItem[];

    constructor(
        @injectAll('MenuBarItem') data: IMenuBarItem[] = []) {
        this.data = data;
    }

    @emit(MenuBarEvent.onClick)
    public onClick(event: React.MouseEvent, item: IMenuBarItem) {
        console.log('onClick:', this.data);
    }

    @emit(MenuBarEvent.DataChanged)
    public push(data: IMenuBarItem | IMenuBarItem[]) {
        if (Array.isArray(data)) {
            this.data = this.data.concat(data);
        } else {
            this.data.push(data);
        }
    }

    public remove(index: number) {
        this.data.splice(index, 1);
    }

    public update() {
        // this.data.
    }
}

container.register('MenuBarItem', { useValue: [] });
