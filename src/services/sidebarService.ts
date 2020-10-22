import { ISidebar, ISidebarPane } from 'mo/core/workbench/sidebar';
import { singleton } from 'tsyringe';

@singleton()
export class SidebarService implements ISidebar {
    selected: string;
    panes: ISidebarPane[];

    constructor(panes: ISidebarPane[] = [], selected: string = '') {
        this.panes = panes;
        this.selected = selected;
    }

    onSelect(key: string) {
        this.selected = key;
    }
}
