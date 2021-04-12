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
    current?: string;
    panes?: ISidebarPane[];
    hidden?: boolean;
}
export declare class SidebarModel implements ISidebar {
    current: string;
    panes: ISidebarPane[];
    hidden: boolean;
    constructor(panes?: ISidebarPane[], selected?: string, hidden?: boolean);
}
