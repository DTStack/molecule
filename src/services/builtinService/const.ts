import { localize } from 'mo/i18n/localize';
import type { IActionBarItemProps, IMenuItemProps } from 'mo/components';
import type {
    IActivityBarItem,
    IActivityMenuItemProps,
    IEditorActionsProps,
    IEditorOptions,
    IEditorTab,
    IExplorerPanelItem,
    IOutput,
    IPanelItem,
    IStatusBarItem,
} from 'mo/model';
import { ID_SIDE_BAR } from 'mo/common/id';

export const constants = {
    ACTION_QUICK_ACCESS_SETTINGS: 'workbench.action.quickAccessSettings',
    ACTION_QUICK_COMMAND: 'editor.action.quickCommand',
    ACTION_QUICK_COPY_LINE_UP: 'editor.action.copyLinesUpAction',
    ACTION_QUICK_CREATE_FILE: 'workbench.action.quickCreateFile',
    ACTION_QUICK_CREATE_FOLDER: 'workbench.action.quickCreateFolder',
    ACTION_QUICK_REDO: 'editor.action.redo',
    ACTION_QUICK_SELECT_ALL: 'editor.action.quickSelectAll',
    ACTION_QUICK_UNDO: 'editor.action.undo',
    ACTION_SELECT_LOCALE: 'workbench.action.selectLocale',
    ACTION_SELECT_THEME: 'workbench.action.selectTheme',
    ACTIVITY_BAR_GLOBAL_ACCOUNT: 'global.menu.account',
    ACTIVITY_BAR_GLOBAL_SETTINGS: 'global.menu.settings',
    CONTEXT_MENU_EXPLORER: 'sidebar.explore.title',
    CONTEXT_MENU_HIDE: 'menu.hideActivityBar',
    CONTEXT_MENU_MENU: 'menubar',
    CONTEXT_MENU_SEARCH: 'sidebar.search.title',
    DELETE_COMMAND_ID: 'explorer.delete',
    DOWNLOAD_COMMAND_ID: 'explorer.download',
    EDITOR_MENU_CLOSE_ALL: 'editor.closeAll',
    EDITOR_MENU_CLOSE_OTHERS: 'editor.closeOthers',
    EDITOR_MENU_CLOSE_SAVED: 'editor.closeSaved',
    EDITOR_MENU_CLOSE_TO_LEFT: 'editor.closeToLeft',
    EDITOR_MENU_CLOSE_TO_RIGHT: 'editor.closeToRight',
    EDITOR_MENU_CLOSE: 'editor.close',
    EDITOR_MENU_SHOW_OPENEDITORS: 'editor.showOpenEditors',
    EDITOR_MENU_SPILIT: 'editor.split',
    EDITOR_PANEL_ID: 'sidebar.explore.openEditor',
    EDITOR_LINE_INFO: 'editor.gotoLine',
    EXPLORER_ACTION_TITLE: 'sidebar.explore.actionDesc',
    EXPLORER_ACTIVITY_ITEM: 'sidebar.explore.title',
    EXPLORER_TOGGLE_CLOSE_ALL_EDITORS: 'sidebar.explore.closeAllEditors',
    EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS: 'sidebar.explore.closeGroupEditors',
    EXPLORER_TOGGLE_SAVE_ALL: 'sidebar.explore.saveALL',
    EXPLORER_TOGGLE_SAVE_GROUP: 'sidebar.explore.saveGroup',
    EXPLORER_TOGGLE_VERTICAL: 'sidebar.explore.toggleVertical',
    FIND_IN_WORKSPACE_ID: 'filesExplorer.findInWorkspace',
    MENU_FILE_OPEN: 'openFile',
    MENU_QUICK_COMMAND: 'editor.action.quickCommand',
    MENU_VIEW_ACTIVITYBAR: 'workbench.action.showActivityBar',
    MENU_VIEW_MENUBAR: 'workbench.action.showMenuBar',
    MENU_VIEW_PANEL: 'workbench.action.showPanel',
    MENU_VIEW_STATUSBAR: 'workbench.action.showStatusBar',
    MENUBAR_MENU_MODE_DIVIDER: 'menuBar.modeDivider',
    MENUBAR_MODE_HORIZONTAL: 'menuBar.mode.horizontal',
    MENUBAR_MODE_VERTICAL: 'menuBar.mode.vertical',
    NEW_FILE_COMMAND_ID: 'explorer.newFile',
    NEW_FOLDER_COMMAND_ID: 'explorer.newFolder',
    NOTIFICATION_CLEAR_ALL_ID: 'notification.clearAll',
    NOTIFICATION_HIDE_ID: 'notification.hideAll',
    NOTIFICATION_MODEL_ID: 'MO_NOTIFICATION',
    NOTIFICATION_MODEL_NAME: 'notification.title',
    OPEN_TO_SIDE_COMMAND_ID: 'explorer.openToSide',
    OUTLINE_PANEL_ID: 'sidebar.explore.outline',
    OUTLINE_PANEL_MORE_DESC: 'sidebar.explore.outlineMore',
    PANEL_OUTPUT: 'panel.output.title',
    PANEL_PROBLEMS: 'panel.problems.title',
    PANEL_TOOLBOX_CLOSE: 'panel.toolbox.closePanel',
    PANEL_TOOLBOX_RESIZE: 'panel.toolbox.maximize',
    PANEL_TOOLBOX_RESTORE_SIZE: 'panel.toolbox.restoreSize',
    PROBLEM_MODEL_ID: 'MO_PROBLEMS',
    PROBLEM_MODEL_NAME: 'panel.problems.title',
    REMOVE_COMMAND_ID: 'explorer.remove',
    RENAME_COMMAND_ID: 'explorer.rename',
    SAMPLE_FOLDER_PANEL_ID: 'sidebar.explore.folders',
    SEARCH_ACTIVITY_ITEM: 'sidebar.search.title',
    SEARCH_CASE_SENSITIVE_COMMAND_ID: 'search.matchCase',
    SEARCH_PRESERVE_CASE_COMMAND_ID: 'search.preserveCase',
    SEARCH_REGULAR_EXPRESSION_COMMAND_ID: 'search.useRegularExpression',
    SEARCH_REPLACE_ALL_COMMAND_ID: 'search.replaceAll',
    SEARCH_TOOLBAR_CLEAR: 'search.toolbar.clearAll',
    SEARCH_TOOLBAR_COLLAPSE: 'search.toolbar.collapseAll',
    SEARCH_TOOLBAR_REFRESH: 'search.toolbar.refresh',
    SEARCH_WHOLE_WORD_COMMAND_ID: 'search.matchWholeWord',
    SETTING_ID: 'Setting',
    STATUS_BAR_HIDE_ID: 'statusbar.hide',
    STATUS_PROBLEMS: 'statusbar.problems.title',
};

export const modules = {
    builtInExplorerActivityItem: () =>
        ({
            id: constants.EXPLORER_ACTIVITY_ITEM,
            name: localize(constants.EXPLORER_ACTIVITY_ITEM, 'Explore'),
            icon: 'files',
            title: localize(constants.EXPLORER_ACTIVITY_ITEM, 'Explore'),
            sortIndex: 1,
        } as IActivityBarItem),

    builtInExplorerFolderPanel: () =>
        ({
            id: constants.SAMPLE_FOLDER_PANEL_ID,
            sortIndex: 8,
            name: localize('menu.defaultProjectName', 'No Open Folder'),
            toolbar: [
                {
                    id: constants.NEW_FILE_COMMAND_ID,
                    title: localize('menu.newFile', 'New File'),
                    icon: 'new-file',
                },
                {
                    id: constants.NEW_FOLDER_COMMAND_ID,
                    title: localize('menu.newFolder', 'New Folder'),
                    icon: 'new-folder',
                },
                {
                    id: 'refresh',
                    title: localize(
                        'sidebar.explore.refresh',
                        'Refresh Explorer'
                    ),
                    icon: 'refresh',
                },
                {
                    id: 'collapse',
                    title: localize(
                        'sidebar.explore.collapseFolders',
                        'Collapse Folders in Explorer'
                    ),
                    icon: 'collapse-all',
                },
            ],
            config: {
                grow: 2,
            },
        } as IExplorerPanelItem),

    builtInExplorerHeaderToolbar: () =>
        ({
            id: constants.EXPLORER_ACTION_TITLE,
            title: localize(
                constants.EXPLORER_ACTION_TITLE,
                'View and More Actions...'
            ),
            icon: 'ellipsis',
            contextMenu: [],
        } as IActionBarItemProps),

    builtInExplorerEditorPanel: () =>
        ({
            id: constants.EDITOR_PANEL_ID,
            sortIndex: 9,
            name: localize(constants.EDITOR_PANEL_ID, 'OPEN EDITORS'),
            toolbar: [
                {
                    id: constants.EXPLORER_TOGGLE_VERTICAL,
                    title: localize(
                        constants.EXPLORER_TOGGLE_VERTICAL,
                        'Toggle Vertical'
                    ),
                    icon: 'editor-layout',
                },
                {
                    id: constants.EXPLORER_TOGGLE_SAVE_ALL,
                    title: localize(
                        constants.EXPLORER_TOGGLE_SAVE_ALL,
                        'Save All'
                    ),
                    icon: 'save-all',
                },
                {
                    id: constants.EXPLORER_TOGGLE_CLOSE_ALL_EDITORS,
                    title: localize(
                        constants.EXPLORER_TOGGLE_CLOSE_ALL_EDITORS,
                        'Close All Editors'
                    ),
                    icon: 'close-all',
                },
            ],
            groupToolbar: [
                {
                    id: constants.EXPLORER_TOGGLE_SAVE_GROUP,
                    title: localize(
                        constants.EXPLORER_TOGGLE_SAVE_GROUP,
                        'Save Group'
                    ),
                    icon: 'save-all',
                },
                {
                    id: constants.EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS,
                    title: localize(
                        constants.EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS,
                        'Close Group Editors'
                    ),
                    icon: 'close-all',
                },
            ],
            config: {
                grow: 0,
            },
        } as IExplorerPanelItem),

    builtInExplorerOutlinePanel: () =>
        ({
            id: 'outline',
            name: localize('sidebar.explore.outline', 'OUTLINE'),
            toolbar: [
                {
                    id: 'outline-collapse',
                    title: localize('toolbar.collapseAll', 'Collapse All'),
                    icon: 'collapse-all',
                },
                {
                    id: 'outline-more',
                    title: localize(
                        'sidebar.explore.outlineMore',
                        'More Actions...'
                    ),
                    icon: 'ellipsis',
                },
            ],
        } as IExplorerPanelItem),

    BuiltInEditorOptions: () =>
        ({
            renderWhitespace: 'none',
            tabSize: 4,
            fontSize: 12,
        } as IEditorOptions),

    builtInEditorInitialActions: () =>
        [
            {
                id: constants.EDITOR_MENU_SPILIT,
                name: 'Split Editor Right',
                title: localize(
                    'editor.actions.splitRight',
                    'Split Editor Right'
                ),
                icon: 'split-horizontal',
                place: 'outer',
            },
            {
                id: constants.EDITOR_MENU_SHOW_OPENEDITORS,
                name: 'Show Opened Editors',
            },
            {
                id: constants.EDITOR_MENU_CLOSE_ALL,
                name: localize(constants.EDITOR_MENU_CLOSE_ALL, 'Close All'),
            },
        ] as IEditorActionsProps[],

    builtInEditorInitialMenu: () =>
        [
            {
                id: constants.EDITOR_MENU_CLOSE,
                name: localize(constants.EDITOR_MENU_CLOSE, 'Close'),
            },
            {
                id: constants.EDITOR_MENU_CLOSE_OTHERS,
                name: localize(
                    constants.EDITOR_MENU_CLOSE_OTHERS,
                    'Close Others'
                ),
            },
            {
                id: constants.EDITOR_MENU_CLOSE_TO_RIGHT,
                name: localize(
                    constants.EDITOR_MENU_CLOSE_TO_RIGHT,
                    'Close To Right'
                ),
            },
            {
                id: constants.EDITOR_MENU_CLOSE_TO_LEFT,
                name: localize(
                    constants.EDITOR_MENU_CLOSE_TO_LEFT,
                    'Close To Left'
                ),
            },
            {
                id: constants.EDITOR_MENU_CLOSE_ALL,
                name: localize(constants.EDITOR_MENU_CLOSE_ALL, 'Close All'),
            },
        ] as IMenuItemProps[],

    builtInEditorTreeHeaderContextMenu: () =>
        [
            {
                id: constants.EDITOR_MENU_CLOSE_SAVED,
                name: localize(
                    constants.EDITOR_MENU_CLOSE_SAVED,
                    'Close Saved'
                ),
            },
            {
                id: constants.EDITOR_MENU_CLOSE_ALL,
                name: localize(constants.EDITOR_MENU_CLOSE_ALL, 'Close All'),
            },
        ] as IMenuItemProps[],

    builtInEditorTreeContextMenu: () =>
        [
            {
                id: constants.EDITOR_MENU_CLOSE,
                name: localize(constants.EDITOR_MENU_CLOSE, 'Close'),
            },
            {
                id: constants.EDITOR_MENU_CLOSE_OTHERS,
                name: localize(
                    constants.EDITOR_MENU_CLOSE_OTHERS,
                    'Close Others'
                ),
            },
            {
                id: constants.EDITOR_MENU_CLOSE_SAVED,
                name: localize(
                    constants.EDITOR_MENU_CLOSE_SAVED,
                    'Close Saved'
                ),
            },
            {
                id: constants.EDITOR_MENU_CLOSE_ALL,
                name: localize(constants.EDITOR_MENU_CLOSE_ALL, 'Close All'),
            },
        ] as IMenuItemProps[],

    BuiltInSettingsTab: () =>
        ({
            id: constants.SETTING_ID,
            name: 'settings.json',
            data: {
                language: 'json',
                value: '',
            },
        } as IEditorTab<{ language: string; value: string }>),

    builtInStatusProblems: () =>
        ({
            id: constants.STATUS_PROBLEMS,
            sortIndex: 1,
            data: {
                warnings: 0,
                errors: 0,
                infos: 0,
            },
            name: localize(constants.STATUS_PROBLEMS, 'problems'),
        } as IStatusBarItem),

    builtInPanelProblems: () =>
        ({
            id: constants.PANEL_PROBLEMS,
            name: localize(constants.PANEL_PROBLEMS, 'problems'),
            data: null,
            sortIndex: 1,
            closable: false,
        } as IPanelItem),

    NOTIFICATION_CLEAR_ALL: () =>
        ({
            id: constants.NOTIFICATION_CLEAR_ALL_ID,
            title: localize(
                constants.NOTIFICATION_CLEAR_ALL_ID,
                'Clear All Notifications'
            ),
            icon: 'clear-all',
        } as IActionBarItemProps),

    NOTIFICATION_HIDE: () =>
        ({
            id: constants.NOTIFICATION_HIDE_ID,
            title: localize(
                constants.NOTIFICATION_HIDE_ID,
                'Hide Notifications'
            ),
            icon: 'chevron-down',
        } as IActionBarItemProps),

    builtInNotification: () =>
        ({
            id: constants.NOTIFICATION_MODEL_ID,
            name: localize(constants.NOTIFICATION_MODEL_NAME, 'Notifications'),
            sortIndex: 1,
        } as IStatusBarItem),

    STATUS_EDITOR_INFO: () => ({
        id: constants.EDITOR_LINE_INFO,
        sortIndex: 2,
        data: {
            ln: 0,
            col: 0,
        },
        name: localize(constants.EDITOR_LINE_INFO, 'Go to Line/Column...'),
    }),

    CONTEXT_MENU_HIDE_STATUS_BAR: () =>
        ({
            id: constants.STATUS_BAR_HIDE_ID,
            name: localize(constants.STATUS_BAR_HIDE_ID, 'Hide Status Bar'), //'Hide Status Bar',
        } as IMenuItemProps),

    builtInSearchActivityItem: () =>
        ({
            id: constants.SEARCH_ACTIVITY_ITEM,
            name: localize(constants.SEARCH_ACTIVITY_ITEM, 'Search'),
            title: localize(constants.SEARCH_ACTIVITY_ITEM, 'Search'),
            sortIndex: 2,
            icon: 'search',
        } as IActivityBarItem),

    builtInHeaderToolbar: () =>
        [
            {
                id: constants.SEARCH_TOOLBAR_REFRESH,
                title: localize(constants.SEARCH_TOOLBAR_REFRESH, 'Refresh'),
                disabled: true,
                icon: 'refresh',
            },
            {
                id: constants.SEARCH_TOOLBAR_CLEAR,
                disabled: true,
                title: localize(constants.SEARCH_TOOLBAR_CLEAR, 'Clear all'),
                icon: 'clear-all',
            },
            {
                id: constants.SEARCH_TOOLBAR_COLLAPSE,
                title: localize(
                    constants.SEARCH_TOOLBAR_COLLAPSE,
                    'Collapse all'
                ),
                disabled: true,
                icon: 'collapse-all',
            },
        ] as IActionBarItemProps[],

    builtInSearchAddons: () =>
        [
            {
                id: constants.SEARCH_CASE_SENSITIVE_COMMAND_ID,
                title: localize(
                    constants.SEARCH_CASE_SENSITIVE_COMMAND_ID,
                    'Match Case'
                ),
                disabled: false,
                checked: false,
                icon: 'case-sensitive',
            },
            {
                id: constants.SEARCH_WHOLE_WORD_COMMAND_ID,
                title: localize(
                    constants.SEARCH_WHOLE_WORD_COMMAND_ID,
                    'Match Whole Word'
                ),
                disabled: false,
                checked: false,
                icon: 'whole-word',
            },
            {
                id: constants.SEARCH_REGULAR_EXPRESSION_COMMAND_ID,
                disabled: false,
                checked: false,
                title: localize(
                    constants.SEARCH_REGULAR_EXPRESSION_COMMAND_ID,
                    'Use Regular Expression'
                ),
                icon: 'regex',
            },
        ] as IActionBarItemProps[],

    builtInReplaceAddons: () =>
        [
            {
                id: constants.SEARCH_PRESERVE_CASE_COMMAND_ID,
                title: localize(
                    constants.SEARCH_PRESERVE_CASE_COMMAND_ID,
                    'Preserve Case'
                ),
                disabled: false,
                checked: false,
                icon: 'preserve-case',
            },
            {
                id: constants.SEARCH_REPLACE_ALL_COMMAND_ID,
                title: localize(
                    constants.SEARCH_REPLACE_ALL_COMMAND_ID,
                    'Replace All'
                ),
                disabled: false,
                checked: false,
                icon: 'replace-all',
            },
        ] as IActionBarItemProps[],

    builtInOutputPanel: () =>
        ({
            id: constants.PANEL_OUTPUT,
            name: localize(constants.PANEL_OUTPUT, 'output'),
            data: '',
            sortIndex: 2,
            closable: false,
        } as IOutput),

    builtInPanelToolboxResize: () =>
        ({
            id: constants.PANEL_TOOLBOX_RESIZE,
            title: localize(
                constants.PANEL_TOOLBOX_RESIZE,
                'Maximize Panel Size'
            ),
            icon: 'chevron-up',
        } as IActionBarItemProps),

    builtInPanelToolboxReStore: () =>
        ({
            id: constants.PANEL_TOOLBOX_RESIZE,
            title: localize(
                constants.PANEL_TOOLBOX_RESTORE_SIZE,
                'Restore Panel Siz'
            ),
            icon: 'chevron-down',
        } as IActionBarItemProps),

    builtInPanelToolbox: () =>
        ({
            id: constants.PANEL_TOOLBOX_CLOSE,
            title: localize(constants.PANEL_TOOLBOX_CLOSE, 'Close Panel'),
            icon: 'close',
        } as IActionBarItemProps),

    builtInMenuBarData: () =>
        [
            {
                id: 'File',
                name: localize('menu.file', 'File'),
                data: [
                    {
                        id: constants.ACTION_QUICK_CREATE_FILE,
                        name: localize('menu.newFile', 'New File'),
                    },
                    {
                        id: constants.MENU_FILE_OPEN,
                        name: localize('menu.open', 'Open'),
                    },
                ],
            },
            {
                id: 'Edit',
                name: localize('menu.edit', 'Edit'),
                data: [
                    {
                        id: constants.ACTION_QUICK_UNDO,
                        name: localize('menu.undo', 'Undo'),
                    },
                    {
                        id: constants.ACTION_QUICK_REDO,
                        name: localize('menu.redo', 'Redo'),
                    },
                ],
            },
            {
                id: 'Selection',
                name: localize('menu.selection', 'Selection'),
                data: [
                    {
                        id: constants.ACTION_QUICK_SELECT_ALL,
                        name: localize('menu.selectAll', 'Select All'),
                    },
                    {
                        id: constants.ACTION_QUICK_COPY_LINE_UP,
                        name: localize('menu.copyLineUp', 'Copy Line Up'),
                    },
                ],
            },
            {
                id: 'View',
                name: localize('menu.view', 'View'),
                data: [
                    {
                        id: constants.MENU_QUICK_COMMAND,
                        name: localize(
                            'menu.commandPalette',
                            'Command Palette'
                        ),
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
                                id: constants.MENU_VIEW_MENUBAR,
                                name: localize(
                                    'menu.showMenuBar',
                                    'Show Menu Bar'
                                ),
                            },
                            {
                                icon: 'check',
                                id: ID_SIDE_BAR,
                                name: localize(
                                    'menu.showSideBar',
                                    'Show Side Bar'
                                ),
                            },
                            {
                                icon: 'check',
                                id: constants.MENU_VIEW_STATUSBAR,
                                name: localize(
                                    'menu.showStatusBar',
                                    'Show Status Bar'
                                ),
                            },
                            {
                                icon: 'check',
                                id: constants.MENU_VIEW_ACTIVITYBAR,
                                name: localize(
                                    'menu.showActivityBar',
                                    'Show Activity Bar'
                                ),
                            },
                            {
                                icon: 'check',
                                id: constants.MENU_VIEW_PANEL,
                                name: localize('menu.showPanel', 'Show Panel'),
                            },
                            {
                                id: constants.MENUBAR_MENU_MODE_DIVIDER,
                                type: 'divider',
                            },
                            {
                                id: constants.MENUBAR_MODE_HORIZONTAL,
                                name: localize(
                                    'menu.menuBarHorizontal',
                                    'Menu Bar Horizontal Mode'
                                ),
                            },
                            {
                                id: constants.MENUBAR_MODE_VERTICAL,
                                name: localize(
                                    'menu.menuBarVertical',
                                    'Menu Bar Vertical Mode'
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
        ] as IMenuItemProps[],

    quickAcessViewAction: () => ({
        id: constants.ACTION_QUICK_COMMAND,
    }),

    quickSelectColorThemeAction: () => ({
        id: constants.ACTION_SELECT_THEME,
    }),

    quickAccessSettingsAction: () => ({
        id: constants.ACTION_QUICK_ACCESS_SETTINGS,
    }),

    quickSelectLocaleAction: () => ({
        id: constants.ACTION_SELECT_LOCALE,
    }),

    quickTogglePanelAction: () => ({
        id: constants.MENU_VIEW_PANEL,
    }),

    quickSelectAllAction: () => ({
        id: constants.ACTION_QUICK_SELECT_ALL,
    }),

    quickCopyLineUpAction: () => ({
        id: constants.ACTION_QUICK_COPY_LINE_UP,
    }),

    quickUndoAction: () => ({
        id: constants.ACTION_QUICK_UNDO,
    }),

    quickRedoAction: () => ({
        id: constants.ACTION_QUICK_REDO,
    }),

    quickCreateFileAction: () => ({
        id: constants.ACTION_QUICK_CREATE_FILE,
    }),

    COMMON_CONTEXT_MENU: () =>
        [
            {
                id: constants.RENAME_COMMAND_ID,
                name: localize('contextmenu.rename', 'Rename'),
            },
            {
                id: constants.DELETE_COMMAND_ID,
                name: localize('contextmenu.delete', 'Delete'),
            },
        ] as IMenuItemProps[],

    BASE_CONTEXT_MENU: () =>
        [
            {
                id: constants.NEW_FILE_COMMAND_ID,
                name: localize('contextmenu.newFile', 'New File'),
            },
            {
                id: constants.NEW_FOLDER_COMMAND_ID,
                name: localize('contextmenu.newFolder', 'New Folder'),
            },
        ] as IMenuItemProps[],

    ROOT_FOLDER_CONTEXT_MENU: () =>
        [
            {
                id: constants.REMOVE_COMMAND_ID,
                name: localize('contextmenu.removeFolder', 'Remove Folder'),
            },
        ] as IMenuItemProps[],

    FILE_CONTEXT_MENU: () =>
        [
            {
                id: constants.OPEN_TO_SIDE_COMMAND_ID,
                name: localize('contextmenu.openToTheSide', 'Open to the Side'),
            },
        ] as IMenuItemProps[],

    FOLDER_PANEL_CONTEXT_MENU: () =>
        [
            {
                id: constants.NEW_FOLDER_COMMAND_ID,
                name: localize(
                    'contextmenu.addFolderToSpace',
                    'Add Folder to Workspace...'
                ),
            },
            {
                id: constants.FIND_IN_WORKSPACE_ID,
                name: localize(
                    'contextmenu.findInSpace',
                    'Find in Workspace...'
                ),
            },
            {
                id: constants.DOWNLOAD_COMMAND_ID,
                name: localize('contextmenu.download', 'Download...'),
            },
        ] as IMenuItemProps[],

    activityBarData: () =>
        [
            {
                id: constants.ACTIVITY_BAR_GLOBAL_ACCOUNT,
                name: localize('menu.account', 'Account'),
                title: localize('menu.account', 'Account'),
                icon: 'account',
                type: 'global',
            },
            {
                id: constants.ACTIVITY_BAR_GLOBAL_SETTINGS,
                name: localize('menu.settings', 'Settings'),
                title: localize('menu.settings', 'Settings'),
                icon: 'settings-gear',
                type: 'global',
                contextMenu: [
                    {
                        id: constants.ACTION_QUICK_COMMAND,
                        name: localize(
                            'menu.commandPalette',
                            'Command Palette'
                        ),
                    },
                    {
                        id: constants.ACTION_QUICK_ACCESS_SETTINGS,
                        name: localize('menu.settings', 'Settings'),
                    },
                    {
                        id: constants.ACTION_SELECT_THEME,
                        name: localize('menu.colorTheme', 'Color Theme'),
                    },
                ],
            },
        ] as IActivityBarItem[],

    contextMenuData: () =>
        [
            {
                id: constants.CONTEXT_MENU_MENU,
                name: localize('menubar', 'Menu'),
                icon: 'check',
            },
            {
                id: constants.CONTEXT_MENU_EXPLORER,
                name: localize('sidebar.explore.title', 'Explorer'),
                icon: 'check',
            },
            {
                id: constants.CONTEXT_MENU_SEARCH,
                name: localize('sidebar.search.title', 'Search'),
                icon: 'check',
            },
            {
                id: constants.CONTEXT_MENU_HIDE,
                name: localize('menu.hideActivityBar', 'Hide Activity Bar'),
            },
        ] as IActivityMenuItemProps[],
};
