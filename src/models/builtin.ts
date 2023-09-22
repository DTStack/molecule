import type { Localize } from 'mo/types';

export class BuiltinModel {
    public readonly constants = {
        STATUS_EDITOR_INFO_ID: 'MoEditorInfo',
        PANEL_PROBLEMS: 'panel.problems.title',
        STATUS_PROBLEMS: 'statusbar.problems.title',
        SAMPLE_FOLDER_PANEL_ID: 'sidebar.explore.folders',
        EDITOR_PANEL_ID: 'sidebar.explore.openEditor',
        OUTLINE_PANEL_ID: 'sidebar.explore.outline',
        OUTLINE_PANEL_MORE_DESC: 'sidebar.explore.outlineMore',
        EXPLORER_ACTIVITY_ITEM: 'sidebar.explore.title',
        EXPLORER_ACTION_TITLE: 'sidebar.explore.actionDesc',
        EXPLORER_TOGGLE_VERTICAL: 'sidebar.explore.toggleVertical',
        EXPLORER_TOGGLE_SAVE_ALL: 'sidebar.explore.saveAll',
        EXPLORER_TOGGLE_CLOSE_ALL_EDITORS: 'sidebar.explore.closeAllEditors',
        EXPLORER_TOGGLE_SAVE_GROUP: 'sidebar.explore.saveGroup',
        EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS: 'sidebar.explore.closeGroupEditors',
        NEW_FILE_COMMAND_ID: 'explorer.newFile',
        NEW_FOLDER_COMMAND_ID: 'explorer.newFolder',
        COLLAPSE_COMMAND_ID: 'explorer.collapse',
        RENAME_COMMAND_ID: 'explorer.rename',
        REMOVE_COMMAND_ID: 'explorer.remove',
        DELETE_COMMAND_ID: 'explorer.delete',
        OPEN_TO_SIDE_COMMAND_ID: 'explorer.openToSide',
        FIND_IN_WORKSPACE_ID: 'filesExplorer.findInWorkspace',
        DOWNLOAD_COMMAND_ID: 'explorer.download',
        EDITOR_MENU_CLOSE_TO_RIGHT: 'editor.closeToRight',
        EDITOR_MENU_CLOSE_TO_LEFT: 'editor.closeToLeft',
        EDITOR_MENU_CLOSE_ALL: 'editor.closeAll',
        EDITOR_MENU_CLOSE_OTHERS: 'editor.closeOthers',
        EDITOR_MENU_CLOSE_SAVED: 'editor.closeSaved',
        EDITOR_MENU_CLOSE: 'editor.close',
        EDITOR_MENU_SPILIT: 'editor.split',
        SETTING_ID: 'Setting',
        PROBLEM_MODEL_ID: 'MO_PROBLEMS',
        PROBLEM_MODEL_NAME: 'Problems',
        NOTIFICATION_CLEAR_ALL_ID: 'ClearAll',
        NOTIFICATION_HIDE_ID: 'HideNotifications',
        NOTIFICATION_MODEL_ID: 'MO_NOTIFICATION',
        NOTIFICATION_MODEL_NAME: 'Notification',
        STATUS_BAR_HIDE_ID: 'hide',
        SEARCH_CASE_SENSITIVE_COMMAND_ID: 'search.matchCase',
        SEARCH_WHOLE_WORD_COMMAND_ID: 'search.matchWholeWord',
        SEARCH_REGULAR_EXPRESSION_COMMAND_ID: 'search.useRegularExpression',
        SEARCH_PRESERVE_CASE_COMMAND_ID: 'search.preserveCase',
        SEARCH_REPLACE_ALL_COMMAND_ID: 'search.replaceAll',
        SEARCH_ACTIVITY_ITEM: 'sidebar.search.title',
        SEARCH_TOOLBAR_REFRESH: 'search.toolbar.refresh',
        SEARCH_TOOLBAR_CLEAR: 'search.toolbar.clearAll',
        SEARCH_TOOLBAR_COLLAPSE: 'search.toolbar.collapseAll',
        PANEL_TOOLBOX_CLOSE: 'panel.toolbox.closePanel',
        PANEL_TOOLBOX_RESIZE: 'panel.toolbox.maximize',
        PANEL_TOOLBOX_RESTORE_SIZE: 'panel.toolbox.restoreSize',
        PANEL_OUTPUT: 'panel.output.title',
        MENU_APPEARANCE_ID: 'Appearance',
        MENU_FILE_OPEN: 'openFile',
        MENU_QUICK_COMMAND: 'editor.action.quickCommand',
        MENU_VIEW_MENUBAR: 'workbench.action.showMenuBar',
        MENU_VIEW_AUXILIARY: 'workbench.action.showAuxiliary',
        MENU_VIEW_ACTIVITYBAR: 'workbench.action.showActivityBar',
        MENU_VIEW_STATUSBAR: 'workbench.action.showStatusBar',
        MENU_VIEW_PANEL: 'workbench.action.showPanel',
        MENU_VIEW_SIBEBAR: 'workbench.action.sidebar',
        ACTION_QUICK_COMMAND: 'editor.action.quickCommand',
        ACTION_QUICK_SELECT_ALL: 'editor.action.quickSelectAll',
        ACTION_QUICK_COPY_LINE_UP: 'editor.action.copyLinesUpAction',
        ACTION_QUICK_UNDO: 'editor.action.undo',
        ACTION_QUICK_REDO: 'editor.action.redo',
        ACTION_QUICK_CREATE_FILE: 'workbench.action.quickCreateFile',
        ACTION_QUICK_CREATE_FOLDER: 'workbench.action.quickCreateFolder',
        ACTION_QUICK_ACCESS_SETTINGS: 'workbench.action.quickAccessSettings',
        ACTION_SELECT_LOCALE: 'workbench.action.selectLocale',
        ACTIVITY_BAR_GLOBAL_SETTINGS: 'global.menu.settings',
        ACTIVITY_BAR_GLOBAL_ACCOUNT: 'global.menu.account',
        CONTEXT_MENU_MENU: 'menubar',
        CONTEXT_MENU_EXPLORER: 'sidebar.explore.title',
        CONTEXT_MENU_SEARCH: 'sidebar.search.title',
        CONTEXT_MENU_HIDE: 'menu.hideActivityBar',
        MENUBAR_MODE_HORIZONTAL: 'menuBar.mode.horizontal',
        MENUBAR_MODE_VERTICAL: 'menuBar.mode.vertical',
        MENUBAR_MENU_MODE_DIVIDER: 'menuBar.modeDivider',
    } as const;
    readonly #modules = {
        STATUS_EDITOR_INFO: () => ({
            id: this.constants.STATUS_EDITOR_INFO_ID,
            sortIndex: 2,
            data: {
                ln: 0,
                col: 0,
            },
            name: this.localize('statusBar.title', 'Editor Selection'),
            alignment: 'right',
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
                                id: this.constants.MENU_VIEW_SIBEBAR,
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
        activityBarData: () => [
            {
                id: this.constants.ACTIVITY_BAR_GLOBAL_ACCOUNT,
                name: this.localize('menu.account', 'Account'),
                title: this.localize('menu.account', 'Account'),
                icon: 'account',
                alignment: 'bottom',
            },
            {
                id: this.constants.ACTIVITY_BAR_GLOBAL_SETTINGS,
                name: this.localize('menu.settings', 'Settings'),
                title: this.localize('menu.settings', 'Settings'),
                icon: 'settings-gear',
                alignment: 'bottom',
                contextMenu: [
                    {
                        id: this.constants.ACTION_QUICK_COMMAND,
                        name: this.localize('menu.commandPalette', 'Command Palette'),
                    },
                    {
                        id: this.constants.ACTION_QUICK_ACCESS_SETTINGS,
                        name: this.localize('menu.settings', 'Settings'),
                    },
                    // {
                    //     id: this.constants.ACTION_SELECT_THEME,
                    //     name: this.localize('menu.colorTheme', 'Color Theme'),
                    // },
                ],
            },
        ],
        contextMenuData: () => [
            // TODO: the following items should adding by their controller
            // {
            //     id: this.constants.CONTEXT_MENU_MENU,
            //     name: this.localize('menubar', 'Menu'),
            // },
            // {
            //     id: this.constants.CONTEXT_MENU_EXPLORER,
            //     name: this.localize('sidebar.explore.title', 'Explorer'),
            // },
            // {
            //     id: this.constants.CONTEXT_MENU_SEARCH,
            //     name: this.localize('sidebar.search.title', 'Search'),
            // },
            {
                id: this.constants.CONTEXT_MENU_HIDE,
                name: this.localize('menu.hideActivityBar', 'Hide Activity Bar'),
            },
        ],
        EXPLORER_ACTIVITY_ITEM: () => ({
            id: this.constants.EXPLORER_ACTIVITY_ITEM,
            title: this.localize(this.constants.EXPLORER_ACTIVITY_ITEM, 'EXPLORER'),
        }),
        builtInExplorerActivityItem: () => ({
            id: this.constants.EXPLORER_ACTIVITY_ITEM,
            name: this.localize(this.constants.EXPLORER_ACTIVITY_ITEM, 'Explore'),
            icon: 'files',
            title: this.localize(this.constants.EXPLORER_ACTIVITY_ITEM, 'Explore'),
            sortIndex: 1,
            alignment: 'top',
        }),
        FILE_CONTEXT_MENU: () => [
            {
                id: this.constants.OPEN_TO_SIDE_COMMAND_ID,
                name: this.localize('contextmenu.openToTheSide', 'Open to the Side'),
            },
        ],
        BASE_CONTEXT_MENU: () => [
            {
                id: this.constants.NEW_FILE_COMMAND_ID,
                name: this.localize('contextmenu.newFile', 'New File'),
            },
            {
                id: this.constants.NEW_FOLDER_COMMAND_ID,
                name: this.localize('contextmenu.newFolder', 'New Folder'),
            },
        ],
        COMMON_CONTEXT_MENU: () => [
            {
                id: this.constants.RENAME_COMMAND_ID,
                name: this.localize('contextmenu.rename', 'Rename'),
            },
            {
                id: this.constants.DELETE_COMMAND_ID,
                name: this.localize('contextmenu.delete', 'Delete'),
            },
        ],
        FOLDER_PANEL_CONTEXT_MENU: () => [
            {
                id: this.constants.NEW_FOLDER_COMMAND_ID,
                name: this.localize('contextmenu.addFolderToSpace', 'Add Folder to Workspace...'),
            },
            {
                id: this.constants.FIND_IN_WORKSPACE_ID,
                name: this.localize('contextmenu.findInSpace', 'Find in Workspace...'),
            },
            {
                id: this.constants.DOWNLOAD_COMMAND_ID,
                name: this.localize('contextmenu.download', 'Download...'),
            },
        ],
        builtInExplorerFolderPanel: () => ({
            id: this.constants.SAMPLE_FOLDER_PANEL_ID,
            sortIndex: 8,
            name: this.localize('menu.defaultProjectName', 'No Open Folder'),
            config: {
                grow: 2,
            },
        }),
        builtInOutputPanel: () => ({
            id: this.constants.PANEL_OUTPUT,
            name: this.localize(this.constants.PANEL_OUTPUT, 'output'),
            data: '',
            sortIndex: 2,
            closable: false,
        }),
        builtInEditorInitialActions: () => [
            {
                id: this.constants.EDITOR_MENU_SPILIT,
                name: 'Split Editor Right',
                title: this.localize('editor.actions.splitRight', 'Split Editor Right'),
                icon: 'split-horizontal',
                group: 'inline',
            },
            {
                id: this.constants.EDITOR_MENU_CLOSE_ALL,
                name: this.localize(this.constants.EDITOR_MENU_CLOSE_ALL, 'Close All'),
            },
        ],
        builtInExplorerEditorPanel: () => ({
            id: this.constants.EDITOR_PANEL_ID,
            sortIndex: 1,
            name: this.localize(this.constants.EDITOR_PANEL_ID, 'OPEN EDITORS'),
            toolbar: [
                {
                    id: this.constants.EXPLORER_TOGGLE_VERTICAL,
                    title: this.localize(
                        this.constants.EXPLORER_TOGGLE_VERTICAL,
                        'Toggle Vertical'
                    ),
                    icon: 'editor-layout',
                },
                {
                    id: this.constants.EXPLORER_TOGGLE_SAVE_ALL,
                    title: this.localize(this.constants.EXPLORER_TOGGLE_SAVE_ALL, 'Save All'),
                    icon: 'save-all',
                },
                {
                    id: this.constants.EXPLORER_TOGGLE_CLOSE_ALL_EDITORS,
                    title: this.localize(
                        this.constants.EXPLORER_TOGGLE_CLOSE_ALL_EDITORS,
                        'Close All Editors'
                    ),
                    icon: 'close-all',
                },
            ],
            // groupToolbar: [
            //     {
            //         id: this.constants.EXPLORER_TOGGLE_SAVE_GROUP,
            //         title: this.localize(this.constants.EXPLORER_TOGGLE_SAVE_GROUP, 'Save Group'),
            //         icon: 'save-all',
            //     },
            //     {
            //         id: this.constants.EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS,
            //         title: this.localize(
            //             this.constants.EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS,
            //             'Close Group Editors'
            //         ),
            //         icon: 'close-all',
            //     },
            // ],
            config: {
                grow: 0,
            },
        }),
        builtInEditorInitialMenu: () => [
            {
                id: this.constants.EDITOR_MENU_CLOSE,
                name: this.localize(this.constants.EDITOR_MENU_CLOSE, 'Close'),
            },
            {
                id: this.constants.EDITOR_MENU_CLOSE_OTHERS,
                name: this.localize(this.constants.EDITOR_MENU_CLOSE_OTHERS, 'Close Others'),
            },
            {
                id: this.constants.EDITOR_MENU_CLOSE_TO_RIGHT,
                name: this.localize(this.constants.EDITOR_MENU_CLOSE_TO_RIGHT, 'Close To Right'),
            },
            {
                id: this.constants.EDITOR_MENU_CLOSE_TO_LEFT,
                name: this.localize(this.constants.EDITOR_MENU_CLOSE_TO_LEFT, 'Close To Left'),
            },
            {
                id: this.constants.EDITOR_MENU_CLOSE_ALL,
                name: this.localize(this.constants.EDITOR_MENU_CLOSE_ALL, 'Close All'),
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
