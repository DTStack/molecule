import * as React from 'react';
import { BaseProvider } from './base';
import { sidebarService } from 'mo/main';
import { cloneInstance } from 'mo/common/utils';
import { ISidebar, SideBarEvent } from 'mo/core/workbench/sidebar';

const initialState = cloneInstance(sidebarService);
export const SidebarCtx = React.createContext<ISidebar>(initialState);

export class SidebarProvider extends BaseProvider<any, ISidebar> {
    state: ISidebar;
    constructor(props) {
        super(props);
        this.register([SideBarEvent.DataChanged]);
        this.state = initialState;
    }

    public render() {
        return (
            <SidebarCtx.Provider
                value={this.state}>
                { this.props.children }
            </SidebarCtx.Provider>
        );
    }
}
