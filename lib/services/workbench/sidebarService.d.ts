import { Component } from 'mo/react';
import { ISidebar, ISidebarPane } from 'mo/model/workbench/sidebar';
export interface ISidebarService extends Component<ISidebar> {
    push(data: ISidebarPane): void;
}
export declare class SidebarService extends Component<ISidebar> implements ISidebarService {
    protected state: ISidebar;
    constructor();
    push(data: ISidebarPane): void;
}
