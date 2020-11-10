/* eslint-disable no-invalid-this */
import 'reflect-metadata';
import { EventBus } from 'mo/common/event';
import { observable } from 'mo/common/observable';
import { container, inject, injectable } from 'tsyringe';

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
    id?: string;
    name?: string;
    data?: any;
    iconName?: string;
    checked?: boolean;
    type?: 'normal' | 'global';
    render?: () => React.ReactNode | JSX.Element;
    onClick?: (event: React.MouseEvent, item: IActivityBarItem) => void;
}

export interface IActivityBar {
    data?: IActivityBarItem[];
    selected?: string;
    onSelect?: (key: string, item?: IActivityBarItem) => void;
    onClick?: (event: React.MouseEvent, item: IActivityBarItem) => void;
    render?: () => React.ReactNode;
}

@observable()
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

    public render!: () => React.ReactNode;

    public readonly onSelect = (
        key: string,
        item?: IActivityBarItem | undefined
    ) => {
        EventBus.emit(ActivityBarEvent.Selected, key, item);
    };

    public readonly onClick = (
        event: React.MouseEvent,
        item: IActivityBarItem
    ) => {
        EventBus.emit(ActivityBarEvent.OnClick, event, item);
    };
}

container.register('ActivityBarData', { useValue: [] });
container.register('ActivityBarSelected', { useValue: '' });
