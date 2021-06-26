import * as React from 'react';
import { localize } from 'mo/i18n/localize';
import { ID_SIDE_BAR } from 'mo/common/id';

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
    name?: ReactNode;
    icon?: string;
    data?: any;
    iconName?: string;
    render?: () => React.ReactNode | JSX.Element;
}
export interface IMenuBar {
    data?: IMenuBarItem[];
}

export const MENU_FILE_UNDO = 'undo';
export const MENU_FILE_REDO = 'redo';
export const MENU_VIEW_MENUBAR = 'workbench.action.showMenuBar';
export const MENU_VIEW_ACTIVITYBAR = 'workbench.action.showActivityBar';
export const MENU_VIEW_STATUSBAR = 'workbench.action.showStatusBar';

export function builtInMenuBarData() {
    return [
        {
            id: 'File',
            name: localize('menu.file', 'File'),
            data: [
                {
                    id: 'New File',
                    name: localize('menu.newFile', 'New File'),
                },
                {
                    id: 'OpenFile',
                    name: localize('menu.open', 'Open'),
                },
            ],
        },
        {
            id: 'Edit',
            name: localize('menu.edit', 'Edit'),
            data: [
                {
                    id: MENU_FILE_UNDO,
                    name: localize('menu.undo', 'Undo'),
                },
                {
                    id: MENU_FILE_REDO,
                    name: localize('menu.redo', 'Redo'),
                },
            ],
        },
        {
            id: 'Selection',
            name: localize('menu.selection', 'Selection'),
            data: [
                {
                    id: 'SelectAll',
                    name: localize('menu.selectAll', 'Select All'),
                },
                {
                    id: 'CopyLineUp',
                    name: localize('menu.copyLineUp', 'Copy Line Up'),
                },
            ],
        },
        {
            id: 'View',
            name: localize('menu.view', 'View'),
            data: [
                {
                    id: 'Command Palette',
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

export const undoRedoMenu = [
    {
        id: MENU_FILE_UNDO,
        label: localize('menu.undo', 'Undo'),
    },
    {
        id: MENU_FILE_REDO,
        label: localize('menu.redo', 'Redo'),
    },
];
export class MenuBarModel implements IMenuBar {
    public data: IMenuBarItem[];

    constructor(data: IMenuBarItem[] = [], hidden = false) {
        this.data = data;
    }
}
