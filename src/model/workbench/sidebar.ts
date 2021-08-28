export interface ISidebarPane {
    id: string;
    title?: string;
    render?: () => React.ReactNode;
}

export interface ISidebar {
    current: string;
    panes: ISidebarPane[];
}

export class SidebarModel implements ISidebar {
    public current: string;
    public panes: ISidebarPane[];

    constructor(panes: ISidebarPane[] = [], selected: string = '') {
        this.panes = panes;
        this.current = selected;
    }
}
