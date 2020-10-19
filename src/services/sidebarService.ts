import { ISidebar, ISidebarPane } from 'mo/core/sidebar';

export class SidebarBarService implements ISidebar {
    selected: string;
    panes: ISidebarPane[];

    constructor(panes: ISidebarPane[] = [], selected: string = '') {
        this.panes = panes;
        this.selected = selected;
    }

    onSelect(key: string) {
        this.selected = key;
    }

    // getSelected() {
    //     return this.selected;
    // }

    // getPanes() {
    //     return this.panes;
    // }
}
