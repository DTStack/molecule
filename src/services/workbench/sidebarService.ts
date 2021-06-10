import 'reflect-metadata';
import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';
import {
    ISidebar,
    ISidebarPane,
    SidebarModel,
} from 'mo/model/workbench/sidebar';

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
