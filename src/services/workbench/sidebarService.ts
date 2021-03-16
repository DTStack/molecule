import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';
import {
    ISidebar,
    ISidebarPane,
    SidebarModel,
} from 'mo/model/workbench/sidebar';

export interface ISideBarService extends Component<ISidebar> {
    showHide(): void;
    push(data: ISidebarPane): void;
}

@singleton()
export class SideBarService
    extends Component<ISidebar>
    implements ISideBarService {
    protected state: ISidebar;

    constructor() {
        super();
        this.state = container.resolve(SidebarModel);
    }

    public push(data: ISidebarPane) {
        const original = this.state.panes;
        original?.push(data);
    }

    public showHide(): void {
        this.setState({
            hidden: !this.state.hidden,
        });
    }
    
}
