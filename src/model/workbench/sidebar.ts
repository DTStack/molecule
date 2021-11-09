import type { UniqueId } from 'mo/common/types';

export interface ISidebarPane {
    id: UniqueId;
    title?: string;
    render?: () => React.ReactNode;
}

export interface ISidebar {
    current: UniqueId;
    panes: ISidebarPane[];
}

export class SidebarModel implements ISidebar {
    public current: UniqueId;
    public panes: ISidebarPane[];

    constructor(panes: ISidebarPane[] = [], selected: UniqueId = '') {
        this.panes = panes;
        this.current = selected;
    }
}
