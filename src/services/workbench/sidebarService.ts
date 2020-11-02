import { Component } from 'mo/services/react';
import { singleton, container } from 'tsyringe';
import { emit } from '../../common/event';
import { ISidebar, ISidebarPane, SidebarModel } from 'mo/model/sidebar';

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

export interface ISidebarService extends Component<ISidebar> {
    push(data: ISidebarPane | ISidebarPane[] ): void;
}

@singleton()
export class SidebarService extends Component<ISidebar> implements ISidebarService {
    protected state: ISidebar;

    constructor() {
        super();
        this.state = container.resolve(SidebarModel);
    }

    @emit(SideBarEvent.DataChanged)
    public push(data: ISidebarPane | ISidebarPane[] ) {
        let original = this.state.panes;
        if (Array.isArray(data)) {
            // The concat will lost proxy object info
            original = original.concat(data);
        } else {
            original.push(data);
        }
    }
}
