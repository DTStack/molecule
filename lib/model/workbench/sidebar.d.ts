/// <reference types="react" />
export interface ISidebarPane {
    id: string;
    title?: string;
    render?: () => React.ReactNode;
}
/**
 * The Sidebar event definition
 */
export declare enum SideBarEvent {
    /**
     * Selected an sidebar bar
     */
    onClick = "sidebar.onClick"
}
export interface ISidebar {
    current: string;
    panes?: ISidebarPane[];
}
export declare class SidebarModel implements ISidebar {
    current: string;
    panes: ISidebarPane[];
    constructor(panes?: ISidebarPane[], selected?: string);
}
