import * as React from 'react';
import { localize } from 'mo/i18n/localize';
import { ID_SIDE_BAR } from 'mo/common/id';
import {
    ACTION_QUICK_SELECT_ALL,
    ACTION_QUICK_COPY_LINE_UP,
    ACTION_QUICK_UNDO,
    ACTION_QUICK_REDO,
    ACTION_QUICK_CREATE_FILE,
} from 'mo/model/keybinding';
import { ISubMenuProps } from 'mo/components/menu/subMenu';
import { IMenuItemProps } from 'mo/components/menu';
/**
 * The activity bar event definition
 */
export enum MenuBarEvent {
    /**
     * Selected an activity bar
     */
    onSelect = 'menuBar.onSelect',
}

export interface IMenuBarItem {
    id?: string;
    name?: string;
    icon?: string | JSX.Element;
    data?: ISubMenuProps[];
    render?: (data: IMenuItemProps) => React.ReactNode | JSX.Element;
}

export interface IMenuBar {
    data: IMenuBarItem[];
}

export const MENU_FILE_OPEN = 'openFile';

export const MENU_QUICK_COMMAND = 'editor.action.quickCommand';

export const MENU_VIEW_MENUBAR = 'workbench.action.showMenuBar';
export const MENU_VIEW_ACTIVITYBAR = 'workbench.action.showActivityBar';
export const MENU_VIEW_STATUSBAR = 'workbench.action.showStatusBar';
export const MENU_VIEW_PANEL = 'workbench.action.showPanel';

export function builtInMenuBarData() {
    return [
        {
            id: 'File',
            name: localize('menu.file', 'File'),
            data: [
                {
                    id: ACTION_QUICK_CREATE_FILE,
                    name: localize('menu.newFile', 'New File'),
                },
                {
                    id: MENU_FILE_OPEN,
                    name: localize('menu.open', 'Open'),
                },
            ],
        },
        {
            id: 'Edit',
            name: localize('menu.edit', 'Edit'),
            data: [
                {
                    id: ACTION_QUICK_UNDO,
                    name: localize('menu.undo', 'Undo'),
                },
                {
                    id: ACTION_QUICK_REDO,
                    name: localize('menu.redo', 'Redo'),
                },
            ],
        },
        {
            id: 'Selection',
            name: localize('menu.selection', 'Selection'),
            data: [
                {
                    id: ACTION_QUICK_SELECT_ALL,
                    name: localize('menu.selectAll', 'Select All'),
                },
                {
                    id: ACTION_QUICK_COPY_LINE_UP,
                    name: localize('menu.copyLineUp', 'Copy Line Up'),
                },
            ],
        },
        {
            id: 'View',
            name: localize('menu.view', 'View'),
            data: [
                {
                    id: MENU_QUICK_COMMAND,
                    name: localize('menu.commandPalette', 'Command Palette'),
                },
                {
                    id: 'OpenView',
                    name: localize('menu.openView', 'Open View'),
                },
                {
                    id: 'Appearance',
                    name: localize('menu.appearance', 'Appearance'),
                    data: [
                        {
                            icon: 'check',
                            id: MENU_VIEW_MENUBAR,
                            name: localize('menu.showMenuBar', 'Show Menu Bar'),
                        },
                        {
                            icon: 'check',
                            id: ID_SIDE_BAR,
                            name: localize('menu.showSideBar', 'Show Side Bar'),
                        },
                        {
                            icon: 'check',
                            id: MENU_VIEW_STATUSBAR,
                            name: localize(
                                'menu.showStatusBar',
                                'Show Status Bar'
                            ),
                        },
                        {
                            icon: 'check',
                            id: MENU_VIEW_ACTIVITYBAR,
                            name: localize(
                                'menu.showActivityBar',
                                'Show Activity Bar'
                            ),
                        },
                        {
                            icon: 'check',
                            id: MENU_VIEW_PANEL,
                            name: localize('menu.showPanel', 'Show Panel'),
                        },
                    ],
                },
            ],
        },
        {
            id: 'Run',
            name: localize('menu.run', 'Run'),
            data: [
                {
                    id: 'RunTask',
                    name: localize('menu.runTask', 'Run Task'),
                },
            ],
        },
        {
            id: 'Help',
            name: localize('menu.help', 'Help'),
            data: [
                {
                    id: 'About',
                    name: localize('menu.about', 'About'),
                },
            ],
        },
    ];
}

export class MenuBarModel implements IMenuBar {
    public data: IMenuBarItem[];

    constructor(data: IMenuBarItem[] = []) {
        this.data = data;
    }
}
