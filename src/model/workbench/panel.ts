import { container, inject, injectable } from 'tsyringe';

export interface IPanelItem {
    id: string;
    title?: string;
    render?: () => React.ReactNode;
}

export enum PanelEvent {
    onClick = 'panel.onClick',
}

export interface IPanel {
    current: string;
    panes?: IPanelItem[];
}

@injectable()
export class PanelModel implements IPanel {
    public current: string;
    public panes: IPanelItem[];

    constructor(
        @inject('PanelItems') panes: IPanelItem[] = [],
        @inject('CurrentPanel') current: string = ''
    ) {
        this.panes = panes;
        this.current = current;
    }
}

container.register('PanelItems', { useValue: [] });
container.register('CurrentPanel', { useValue: '' });
