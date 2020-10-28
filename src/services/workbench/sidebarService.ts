import { ISidebarPane } from 'mo/workbench/sidebar/sidebar';
import { singleton, inject, container } from 'tsyringe';
import { emit } from '../eventService';

/**
 * The Sidebar event definition
 */
export enum SideBarEvent {
    /**
     * Selected an sidebar bar
     */
    onClick = 'sidebar.onClick',
    /**
     * Sidebar bar data changed
     */
    DataChanged = 'sidebar.data',
}

export interface ISidebarService {
    push: (data: ISidebarPane | ISidebarPane[] ) => void;
}

@singleton()
export class SidebarService implements ISidebarService {
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
    public push(data: ISidebarPane | ISidebarPane[] ) {
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
container.register('Selected', { useValue: '' });
