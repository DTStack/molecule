import { observable } from 'mo/common/observable';
import { container, inject, injectable } from 'tsyringe';

export interface ISidebarPane {
    id?: string;
    name?: string;
    render?: () => React.ReactElement | undefined;
}

export interface ISidebar {
    selected: string;
    panes: ISidebarPane[];
    render?: () => React.ReactNode;
}

@observable()
@injectable()
export class SidebarModel implements ISidebar {
    public selected: string;
    public panes: ISidebarPane[];

    constructor(
        @inject('SidebarPane') panes: ISidebarPane[] = [],
        @inject('Selected') selected: string = ''
    ) {
        this.panes = panes;
        this.selected = selected;
    }

    public render!: () => React.ReactNode;
}

container.register('SidebarPane', { useValue: [] });
container.register('Selected', { useValue: '' });
