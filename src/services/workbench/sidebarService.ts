import 'reflect-metadata';
import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';
import {
    ISidebar,
    ISidebarPane,
    SidebarModel,
} from 'mo/model/workbench/sidebar';

export interface ISidebarService extends Component<ISidebar> {
    addPane(data: ISidebarPane, isActive?: boolean): void;
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

    public addPane(data: ISidebarPane, isActive = false) {
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
