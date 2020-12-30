import { container, injectable, inject } from 'tsyringe';

/**
 * The activity bar event definition
 */
export enum MenuBarEvent {
    /**
     * Selected an activity bar
     */
    onClick = 'menuBar.onClick',
}

export interface IMenuBarItem {
    id?: string;
    name?: string;
    data?: any;
    iconName?: string;
    render?: () => React.ReactNode | JSX.Element;
}
export interface IMenuBar {
    data: IMenuBarItem[];
}

@injectable()
export class MenuBarModel implements IMenuBar {
    public data: IMenuBarItem[];

    constructor(@inject('MenuBarData') data: IMenuBarItem[] = []) {
        this.data = data;
    }
}

container.register('MenuBarData', { useValue: [] });
