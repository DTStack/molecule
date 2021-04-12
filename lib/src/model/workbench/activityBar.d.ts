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
    disabled?: boolean;
    type?: 'normal' | 'global';
    contextMenu?: IMenuItem[];
    className?: string;
    render?: () => React.ReactNode | JSX.Element;
}
export interface IActivityBar {
    data?: IActivityBarItem[];
    selected?: string;
    hidden?: boolean;
}
export declare const CONTEXT_MENU_COMMAND_PALETTE: {
    id: string;
    name: string;
};
export declare const CONTEXT_MENU_SETTINGS: {
    id: string;
    name: string;
};
export declare const CONTEXT_MENU_COLOR_THEME: {
    id: string;
    name: string;
};
export declare const ACTIVITY_BAR_GLOBAL_SETTINGS: IActivityBarItem;
export declare const ACTIVITY_BAR_GLOBAL_ACCOUNT: IActivityBarItem;
export declare const initialActivityBarData: IActivityBarItem[];
export declare class ActivityBarModel implements IActivityBar {
    data: IActivityBarItem[];
    selected: string;
    hidden: boolean;
    constructor(data?: IActivityBarItem[], selected?: string, hidden?: boolean);
}
