import { IMenuItemProps } from 'mo/components/menu';

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
    disabled?: boolean;
    type?: 'normal' | 'global';
    contextMenu?: IMenuItemProps[];
    className?: string;
    render?: () => React.ReactNode | JSX.Element;
}

export interface IActivityBar {
    data?: IActivityBarItem[];
    contextMenu?: IMenuItemProps[];
    selected?: string;
    hidden?: boolean;
}

export const CONTEXT_MENU_MENU = {
    id: 'Menu',
    name: 'Menu',
    icon: 'check',
};
export const CONTEXT_MENU_EXPLORER = {
    id: 'active-explorer',
    name: 'Explorer',
    icon: 'check',
};
export const CONTEXT_MENU_SEARCH = {
    id: 'search',
    name: 'Search',
    icon: 'check',
};
export const CONTEXT_MENU_HIDE = {
    id: 'hide',
    name: 'Hide Activity Bar',
};
export const DEFAULT_CONTEXT_MENU = [
    CONTEXT_MENU_MENU,
    CONTEXT_MENU_EXPLORER,
    CONTEXT_MENU_SEARCH,
    CONTEXT_MENU_HIDE,
];

export const CONTEXT_MENU_COMMAND_PALETTE = {
    id: 'CommandPalette',
    name: 'Command Palette...',
};

export const CONTEXT_MENU_SETTINGS = {
    id: 'Settings',
    name: 'Settings',
};

export const CONTEXT_MENU_COLOR_THEME = {
    id: 'ColorTheme',
    name: 'Color Theme',
};

export const ACTIVITY_BAR_GLOBAL_SETTINGS: IActivityBarItem = {
    id: 'global-settings',
    name: 'Settings',
    iconName: 'codicon-settings-gear',
    type: 'global',
    contextMenu: [
        CONTEXT_MENU_COMMAND_PALETTE,
        CONTEXT_MENU_SETTINGS,
        CONTEXT_MENU_COLOR_THEME,
    ],
};

export const ACTIVITY_BAR_GLOBAL_ACCOUNT: IActivityBarItem = {
    id: 'global-Account',
    name: 'Account',
    iconName: 'codicon-account',
    type: 'global',
};

export const initialActivityBarData: IActivityBarItem[] = [
    ACTIVITY_BAR_GLOBAL_ACCOUNT,
    ACTIVITY_BAR_GLOBAL_SETTINGS,
];

export class ActivityBarModel implements IActivityBar {
    public data: IActivityBarItem[];
    public contextMenu: IMenuItemProps[];
    public selected: string;
    public hidden = false;
    constructor(
        data: IActivityBarItem[] = initialActivityBarData,
        contextMenu: IMenuItemProps[] = DEFAULT_CONTEXT_MENU,
        selected: string = '',
        hidden = false
    ) {
        this.data = data;
        this.contextMenu = contextMenu;
        this.selected = selected;
        this.hidden = hidden;
    }
}
