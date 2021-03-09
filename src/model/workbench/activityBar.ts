import 'reflect-metadata';
import { container, inject, injectable } from 'tsyringe';
import { IMenuItem } from 'mo/components/menu';

/**
 * The activity bar event definition
 */
export enum ActivityBarEvent {
    /**
     * Selected an activity bar
     */
    Selected = 'activityBar.selected',
    OnClick = 'activityBar.onClick',
    /**
     * Activity bar data changed
     */
    DataChanged = 'activityBar.data',
    ReRender = 'activityBar.reRender',
}

export interface IActivityBarItem {
    id: string;
    name?: string;
    data?: any;
    iconName?: string;
    checked?: boolean;
    type?: 'normal' | 'global';
    contextMenu?: IMenuItem[];
    className?: string;
    render?: () => React.ReactNode | JSX.Element;
}

export interface IActivityBar {
    data?: IActivityBarItem[];
    selected?: string;
}
@injectable()
export class ActivityBarModel implements IActivityBar {
    public data: IActivityBarItem[];
    public selected: string;

    constructor(
        @inject('ActivityBarData') data: IActivityBarItem[] = [],
        @inject('ActivityBarSelected') selected: string = ''
    ) {
        this.data = data;
        this.selected = selected;
    }
}

container.register('ActivityBarData', { useValue: [] });
container.register('ActivityBarSelected', { useValue: '' });
