export interface ISidebarPane {
    id: string;
    title?: string;
    render?: () => React.ReactNode;
}

/**
 * The Sidebar event definition
 */
export enum SideBarEvent {
    /**
     * Selected an sidebar bar
     */
    onClick = 'sidebar.onClick',
}
export interface ISidebar {
    current?: string;
    panes?: ISidebarPane[];
    hidden?: boolean;
}

export class SidebarModel implements ISidebar {
    public current: string;
    public panes: ISidebarPane[];
    public hidden = false;

    constructor(
        panes: ISidebarPane[] = [],
        selected: string = '',
        hidden = false
    ) {
        this.panes = panes;
        this.current = selected;
        this.hidden = hidden;
    }
}
