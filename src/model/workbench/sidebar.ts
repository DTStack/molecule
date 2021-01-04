import { container, inject, injectable } from 'tsyringe';

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
    current: string;
    panes?: ISidebarPane[];
}

@injectable()
export class SidebarModel implements ISidebar {
    public current: string;
    public panes: ISidebarPane[];

    constructor(
        @inject('SidebarPane') panes: ISidebarPane[] = [],
        @inject('Selected') selected: string = ''
    ) {
        this.panes = panes;
        this.current = selected;
    }
}

container.register('SidebarPane', { useValue: [] });
container.register('Selected', { useValue: '' });
