import 'reflect-metadata';
import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';
import {
    ISidebar,
    ISidebarPane,
    SidebarModel,
} from 'mo/model/workbench/sidebar';

export interface ISidebarService extends Component<ISidebar> {
    /**
     * Add a new Sidebar pane
     * @param pane
     * @param isActive Whether to activate the current pane
     */
    add(pane: ISidebarPane, isActive?: boolean): void;
    /**
     * Set the specific pane as active
     * @param id
     */
    setActive(id?: string): void;
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

    public add(data: ISidebarPane, isActive = false) {
        const oldPanes = this.state.panes?.concat() || [];
        oldPanes.push(data);
        if (isActive) {
            this.setState({
                current: data.id,
            });
        }
        this.setState({
            panes: oldPanes,
        });
    }

    public setActive(id?: string) {
        this.setState({
            current: id,
        });
    }
}
