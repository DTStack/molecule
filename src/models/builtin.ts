import type { Localize } from 'mo/types';

export class BuiltinModel {
    public constants = {
        STATUS_EDITOR_INFO_ID: 'MoEditorInfo',
        STATUS_BAR_HIDE_ID: 'hide',
        ACTION_QUICK_CREATE_FILE: 'workbench.action.quickCreateFile',
        ACTION_QUICK_SELECT_ALL: 'editor.action.quickSelectAll',
        ACTION_QUICK_COPY_LINE_UP: 'editor.action.copyLinesUpAction',
        ACTION_QUICK_UNDO: 'editor.action.undo',
        ACTION_QUICK_REDO: 'editor.action.redo',
        MENU_SIBEBAR: 'sidebar',
        MENU_FILE_OPEN: 'openFile',
        MENU_APPEARANCE_ID: 'Appearance',
        MENU_QUICK_COMMAND: 'editor.action.quickCommand',
        MENU_VIEW_MENUBAR: 'workbench.action.showMenuBar',
        MENU_VIEW_AUXILIARY: 'workbench.action.showAuxiliary',
        MENU_VIEW_ACTIVITYBAR: 'workbench.action.showActivityBar',
        MENU_VIEW_STATUSBAR: 'workbench.action.showStatusBar',
        MENU_VIEW_PANEL: 'workbench.action.showPanel',
        ACTION_QUICK_COMMAND: 'editor.action.quickCommand',
    };
    #modules = {
        STATUS_EDITOR_INFO: () => ({
            id: this.constants.STATUS_EDITOR_INFO_ID,
            sortIndex: 2,
            data: {
                ln: 0,
                col: 0,
            },
            name: this.localize('statusBar.title', 'Editor Selection'),
            render: () => this.localize('statusBar.editorStatus.gotoLine', 'Go to Line/Column'),
        }),
        CONTEXT_MENU_HIDE_STATUS_BAR: () => ({
            id: this.constants.STATUS_BAR_HIDE_ID,
            name: this.localize('statusBar.hideStatusBar', 'Hide Status Bar'),
        }),
        builtInMenuBarData: () => [
            {
                id: 'File',
                name: this.localize('menu.file', 'File'),
                children: [
                    {
                        id: this.constants.ACTION_QUICK_CREATE_FILE,
                        name: this.localize('menu.newFile', 'New File'),
                    },
                    {
                        id: this.constants.MENU_FILE_OPEN,
                        name: this.localize('menu.open', 'Open'),
                    },
                ],
            },
            {
                id: 'Edit',
                name: this.localize('menu.edit', 'Edit'),
                children: [
                    {
                        id: this.constants.ACTION_QUICK_UNDO,
                        name: this.localize('menu.undo', 'Undo'),
                    },
                    {
                        id: this.constants.ACTION_QUICK_REDO,
                        name: this.localize('menu.redo', 'Redo'),
                    },
                ],
            },
            {
                id: 'Selection',
                name: this.localize('menu.selection', 'Selection'),
                children: [
                    {
                        id: this.constants.ACTION_QUICK_SELECT_ALL,
                        name: this.localize('menu.selectAll', 'Select All'),
                    },
                    {
                        id: this.constants.ACTION_QUICK_COPY_LINE_UP,
                        name: this.localize('menu.copyLineUp', 'Copy Line Up'),
                    },
                ],
            },
            {
                id: 'View',
                name: this.localize('menu.view', 'View'),
                children: [
                    {
                        id: this.constants.MENU_QUICK_COMMAND,
                        name: this.localize('menu.commandPalette', 'Command Palette'),
                    },
                    {
                        id: 'OpenView',
                        name: this.localize('menu.openView', 'Open View'),
                    },
                    {
                        id: this.constants.MENU_APPEARANCE_ID,
                        name: this.localize('menu.appearance', 'Appearance'),
                        children: [
                            {
                                id: this.constants.MENU_VIEW_MENUBAR,
                                name: this.localize('menu.showMenuBar', 'Show Menu Bar'),
                            },
                            {
                                id: this.constants.MENU_SIBEBAR,
                                name: this.localize('menu.showSideBar', 'Show Side Bar'),
                            },
                            {
                                id: this.constants.MENU_VIEW_AUXILIARY,
                                name: this.localize('menu.showAuxiliaryBar', 'Show Auxiliary Bar'),
                            },
                            {
                                id: this.constants.MENU_VIEW_STATUSBAR,
                                name: this.localize('menu.showStatusBar', 'Show Status Bar'),
                            },
                            {
                                id: this.constants.MENU_VIEW_ACTIVITYBAR,
                                name: this.localize('menu.showActivityBar', 'Show Activity Bar'),
                            },
                            {
                                id: this.constants.MENU_VIEW_PANEL,
                                name: this.localize('menu.showPanel', 'Show Panel'),
                            },
                        ],
                    },
                ],
            },
            {
                id: 'Run',
                name: this.localize('menu.run', 'Run'),
                children: [
                    {
                        id: 'RunTask',
                        name: this.localize('menu.runTask', 'Run Task'),
                    },
                ],
            },
            {
                id: 'Help',
                name: this.localize('menu.help', 'Help'),
                children: [
                    {
                        id: 'About',
                        name: this.localize('menu.about', 'About'),
                    },
                ],
            },
        ],
    };
    constructor(private localize: Localize) {}

    get modules() {
        const modules = this.#modules;
        const proxyObj = Object.keys(modules).reduce<{ [key in keyof typeof modules]: any }>(
            (acc, cur) => ({
                ...acc,
                [cur]: () => {},
            }),
            {} as any
        );
        return new Proxy(proxyObj, {
            get(_, p: keyof typeof modules) {
                if (p in proxyObj) {
                    return modules[p]();
                }
                return null;
            },
        });
    }
}
