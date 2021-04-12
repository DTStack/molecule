/// <reference types="react" />
import 'reflect-metadata';
import { IMenuItem } from 'mo/components/menu';
/**
 * The activity bar event definition
 */
export declare enum ActivityBarEvent {
    /**
     * Selected an activity bar
     */
    Selected = "activityBar.selected",
    OnClick = "activityBar.onClick",
    /**
     * Activity bar data changed
     */
    DataChanged = "activityBar.data",
    ReRender = "activityBar.reRender"
}
export interface IActivityBarItem {
    id: string;
    name?: string;
    data?: any;
    iconName?: string;
    checked?: boolean;
    type?: 'normal' | 'global';
    contextMenu?: IMenuItem[];
    render?: () => React.ReactNode | JSX.Element;
}
export interface IActivityBar {
    data?: IActivityBarItem[];
    selected?: string;
}
export declare class ActivityBarModel implements IActivityBar {
    data: IActivityBarItem[];
    selected: string;
    constructor(data?: IActivityBarItem[], selected?: string);
}
