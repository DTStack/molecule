import * as React from 'react';

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

export interface ISidebarPane {
    id?: string;
    name?: string;
    render: () => React.ReactElement | undefined;
}

export interface ISidebar {
    selected: string;
    panes: ISidebarPane[];
    render?: () => React.ReactElement;
}
