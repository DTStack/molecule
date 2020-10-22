import { MenuBarEvent, IMenuBar, IMenuBarItem } from 'mo/core/workbench/menuBar';
import { emit } from 'mo/services/eventService';
import { singleton } from 'tsyringe';

@singleton()
export class MenuBarService implements IMenuBar {
    data: IMenuBarItem[];

    constructor(data: IMenuBarItem[] = []) {
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
