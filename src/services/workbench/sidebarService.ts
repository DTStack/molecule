import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';
import {
    ISidebar,
    ISidebarPane,
    SidebarModel,
} from 'mo/model/workbench/sidebar';

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
    push(data: ISidebarPane): void;
}

@singleton()
export class SidebarService
    extends Component<ISidebar>
    implements ISidebarService {
    protected state: ISidebar;

    constructor() {
        super();
        this.state = container.resolve(SidebarModel);
    }

    public push(data: ISidebarPane) {
        const original = this.state.panes;
        original?.push(data);
    }
}
