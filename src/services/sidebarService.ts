import { ISidebar, ISidebarPane, SideBarEvent } from 'mo/core/workbench/sidebar';
import { singleton, inject, container } from 'tsyringe';
import { emit } from './eventService';

@singleton()
export class SidebarService implements ISidebar {
    selected: string;
    panes: ISidebarPane[];

    constructor(
        @inject('SidebarPane') panes: ISidebarPane[] = [],
        @inject('Selected') selected: string = '',
    ) {
        this.panes = panes;
        this.selected = selected;
    }

    @emit(SideBarEvent.DataChanged)
    push(data: ISidebarPane | ISidebarPane[] ) {
        if (Array.isArray(data)) {
            this.panes = this.panes.concat(data);
        } else {
            this.panes.push(data);
        }
    }

    onSelect(key: string) {
        this.selected = key;
    }
}
container.register('SidebarPane', { useValue: [] });
