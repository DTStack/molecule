import { observable } from 'mo/common/observable';
import { container, inject, injectable } from 'tsyringe';

export interface ISidebarPane {
    id: string;
    title?: string;
    render?: () => React.ReactNode;
}

export interface ISidebar {
    current: string;
    panes?: ISidebarPane[];
    render?: () => React.ReactNode;
}

@observable()
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

    public render!: () => React.ReactNode;
}

container.register('SidebarPane', { useValue: [] });
container.register('Selected', { useValue: '' });
