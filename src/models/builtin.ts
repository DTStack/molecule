import type { IActivityBarItem, IMenuItemProps, Localize } from 'mo/types';

import { IExplorerPanelItem } from './explorer';
import { IStatusBarItem } from './statusBar';

/**
 * Unique ID Name Rule:
 * - Use `.` to separate words, and less than 3 parts
 * - First work should be one of the modules
 * - Second work should be one of the following words:
 *    - item
 *    - toolbar
 *    - contextMenu
 */
export class BuiltinModel {
    public readonly constants = {
        EDITORTREE_ITEM_GROUP: 'editorTree.item.group',
        STATUSBAR_ITEM_LINE_INFO: 'statusBar.item.lineInfo',
        STATUSBAR_ITEM_SELECTION: 'statusBar.item.selection',
        EXPLORER_ITEM_WORKSPACE: 'explorer.item.workspace',
        EXPLORER_ITEM_OPEN_EDITOR: 'explorer.item.openEditor',
        EXPLORER_ITEM_OUTLINE: 'explorer.item.outline',
        SIDEBAR_ITEM_EXPLORER: 'sidebar.item.explorer',
        SIDEBAR_TOOLBAR_ELLIPSIS: 'sidebar.toolbar.ellipsis',
        EXPLORER_TOOLBAR_SAVE_ALL: 'explorer.toolbar.saveAll',
        EXPLORER_TOOLBAR_CLOSE_ALL: 'explorer.toolbar.closeAll',
        EXPLORER_TOOLBAR_SAVE_GROUP: 'explorer.toolbar.saveGroup',
        EXPLORER_TOOLBAR_CLOSE_GROUP: 'explorer.toolbar.closeGroup',
        EXPLORER_CONTEXTMENU_CREATE_FILE: 'explorer.contextMenu.createFile',
        EXPLORER_CONTEXTMENU_CREATE_FOLDER: 'explorer.contextMenu.createFolder',
        EXPLORER_CONTEXTMENU_ADD_TO_WORKSPACE: 'explorer.contextMenu.addToWorkspace',
        EXPLORER_TOOLBAR_COLLAPSE: 'explorer.toolbar.collapse',
        EXPLORER_TOOLBAR_REFRESH: 'explorer.toolbar.refresh',
        EXPLORER_CONTEXTMENU_RENAME: 'explorer.contextMenu.rename',
        EXPLORER_CONTEXTMENU_DELETE: 'explorer.contextMenu.delete',
        EXPLORER_CONTEXTMENU_OPEN_TO_SIDE: 'explorer.contextMenu.openToSide',
        EXPLORER_CONTEXTMENU_FIND_IN_WORKSPACE: 'explorer.contextMenu.findInWorkspace',
        EXPLORER_CONTEXTMENU_DOWNLOAD: 'explorer.contextMenu.download',
        EDITOR_CONTEXTMENU_CLOSE_TO_RIGHT: 'editor.contextMenu.closeToRight',
        EDITOR_CONTEXTMENU_CLOSE_TO_LEFT: 'editor.contextMenu.closeToLeft',
        EDITOR_CONTEXTMENU_CLOSE_ALL: 'editor.contextMenu.closeAll',
        EDITOR_CONTEXTMENU_CLOSE_OTHERS: 'editor.contextMenu.closeOthers',
        EDITOR_CONTEXTMENU_CLOSE_SAVED: 'editor.contextMenu.closeSaved',
        EDITOR_CONTEXTMENU_CLOSE: 'editor.contextMenu.close',
        EDITOR_TOOLBAR_SPLIT: 'editor.toolbar.split',
        EDITOR_ITEM_SETTING: 'editor.item.setting',
        NOTIFICATION_TOOLBAR_CLEAR_ALL: 'notification.toolbar.clearAll',
        NOTIFICATION_TOOLBAR_CLEAR: 'notification.toolbar.clear',
        NOTIFICATION_TOOLBAR_HIDE: 'notification.toolbar.hide',
        STATUSBAR_ITEM_NOTIFICATION: 'statusBar.item.notification',
        STATUSBAR_CONTEXTMENU_HIDE: 'statusBar.contextMenu.hide',
        PANEL_CONTEXTMENU_HIDE: 'panel.contextMenu.hide',
        SIDEBAR_ITEM_SEARCH: 'sidebar.item.search',
        SEARCH_ITEM_NOT_FOUND: 'search.item.notFound',
        SEARCH_ITEM_RESULT_TIP: 'search.item.resultTip',
        SEARCH_TOOLBAR_REFRESH: 'search.toolbar.refresh',
        SEARCH_TOOLBAR_CLEAR_ALL: 'search.toolbar.clearAll',
        SEARCH_TOOLBAR_VIEW_AS_LIST: 'search.toolbar.viewAsList',
        SEARCH_TOOLBAR_VIEW_AS_TREE: 'search.toolbar.viewAsTree',
        SEARCH_TOOLBAR_COLLAPSE_EXPAND: 'search.toolbar.collapseExpand',
        // TODO
        SEARCH_TOOLBAR_COLLAPSE: 'search.toolbar.collapse',
        SEARCH_TOOLBAR_EXPAND: 'search.toolbar.expand',
        PANEL_TOOLBAR_CLOSE: 'panel.toolbar.close',
        PANEL_TOOLBAR_MAXIMIZE: 'panel.toolbar.maximize',
        PANEL_TOOLBAR_RESTORE: 'panel.toolbar.restore',
        PANEL_ITEM_OUTPUT: 'panel.item.output',
        MENUBAR_ITEM_APPEARANCE: 'menuBar.item.appearance',
        MENUBAR_ITEM_OPEN: 'menuBar.item.open',
        MENUBAR_ITEM_COMMAND_PALETTE: 'menuBar.item.commandPalette',
        MENUBAR_ITEM_MENU: 'menuBar.item.menuBar',
        MENUBAR_ITEM_AUXILIARY: 'menuBar.item.auxiliary',
        MENUBAR_ITEM_ACTIVITYBAR: 'menuBar.item.activityBar',
        MENUBAR_ITEM_STATUSBAR: 'menuBar.item.statusBar',
        MENUBAR_ITEM_PANEL: 'menuBar.item.panel',
        MENUBAR_ITEM_SIDEBAR: 'menuBar.item.sidebar',
        MENUBAR_ITEM_UNDO: 'menuBar.item.undo',
        MENUBAR_ITEM_REDO: 'menuBar.item.redo',
        MENUBAR_ITEM_CREATE_FILE: 'menuBar.item.createFile',
        MENUBAR_ITEM_CREATE_FOLDER: 'menuBar.item.createFolder',
        MENUBAR_ITEM_FILE: 'menuBar.item.file',
        MENUBAR_ITEM_EDIT: 'menuBar.item.edit',
        MENUBAR_ITEM_SELECTION: 'menuBar.item.selection',
        MENUBAR_ITEM_VIEW: 'menuBar.item.view',
        MENUBAR_ITEM_OPEN_VIEW: 'menuBar.item.openView',
        MENUBAR_ITEM_RUN: 'menuBar.item.run',
        MENUBAR_ITEM_RUN_TASK: 'menuBar.item.runTask',
        MENUBAR_ITEM_HELP: 'menuBar.item.help',
        MENUBAR_ITEM_ABOUT: 'menuBar.item.about',
        MENUBAR_CONTEXTMENU_HIDE: 'menuBar.contextMenu.hide',
        ACTIVITYBAR_ITEM_SETTING: 'activityBar.item.setting',
        ACTIVITYBAR_ITEM_ACCOUNT: 'activityBar.item.account',
        ACTIVITYBAR_CONTEXTMENU_HIDE: 'activityBar.contextMenu.hide',
        CONTEXTMENU_ITEM_ACTIVITYBAR: 'contextMenu.item.activityBar',
        CONTEXTMENU_ITEM_EXPLORER: 'contextMenu.item.explorer',
        CONTEXTMENU_ITEM_SIDEBAR: 'contextMenu.item.sidebar',
        CONTEXTMENU_ITEM_EDITOR: 'contextMenu.item.editor',
        CONTEXTMENU_ITEM_EDITOR_TREE: 'contextMenu.item.editorTree',
        CONTEXTMENU_ITEM_PANEL: 'contextMenu.item.panel',
        CONTEXTMENU_ITEM_STATUS_BAR: 'contextMenu.item.statusBar',
        CONTEXTMENU_ITEM_FOLDERTREE: 'contextMenu.item.folderTree',
        NOTIFICATION_ITEM_EMPTY: 'notification.item.empty',
        NOTIFICATION_ITEM_INTERNATIONAL: 'notification.item.international',
        NOTIFICATION_ITEM_INTERNATIONAL_DESCRIPTION: 'notification.item.internationalDescription',
        NOTIFICATION_ITEM_INTERNATIONAL_BUTTON: 'notification.item.internationalButton',
        EDITORTREE_TOOLBAR_SAVE_GROUP: 'editorTree.toolbar.saveGroup',
        EDITORTREE_TOOLBAR_CLOSE_GROUP: 'editorTree.toolbar.closeGroup',
        FOLDERTREE_ITEM_EMPTY: 'folderTree.item.empty',
        FOLDERTREE_ITEM_ADD_ROOT_FOLDER: 'folderTree.item.addRootFolder',
        AUXILIARYBAR_ITEM_TOOL:'auxiliaryBar.item.tab',
    } as const;
    public readonly modules = {
        STATUSBAR_LINE_INFO: () =>
            <IStatusBarItem>{
                id: this.constants.STATUSBAR_ITEM_LINE_INFO,
                sortIndex: 2,
                data: {
                    ln: 0,
                    col: 0,
                },
                name: this.localize(this.constants.STATUSBAR_ITEM_LINE_INFO, 'Editor Selection'),
                alignment: 'right',
            },
        STATUSBAR_CONTEXTMENU: () =>
            <IMenuItemProps[]>[
                {
                    id: this.constants.STATUSBAR_CONTEXTMENU_HIDE,
                    name: this.localize(this.constants.STATUSBAR_CONTEXTMENU_HIDE, 'Hide Status Bar'),
                },
            ],
        MENUBAR_ITEMS: () =>
            <IMenuItemProps[]>[
                {
                    id: this.constants.MENUBAR_ITEM_FILE,
                    name: this.localize(this.constants.MENUBAR_ITEM_FILE, 'File'),
                    children: [
                        {
                            id: this.constants.MENUBAR_ITEM_CREATE_FILE,
                            name: this.localize(this.constants.MENUBAR_ITEM_CREATE_FILE, 'New File'),
                        },
                        {
                            id: this.constants.MENUBAR_ITEM_OPEN,
                            name: this.localize(this.constants.MENUBAR_ITEM_OPEN, 'Open'),
                        },
                    ],
                },
                {
                    id: this.constants.MENUBAR_ITEM_EDIT,
                    name: this.localize(this.constants.MENUBAR_ITEM_EDIT, 'Edit'),
                    children: [
                        {
                            id: this.constants.MENUBAR_ITEM_UNDO,
                            name: this.localize(this.constants.MENUBAR_ITEM_UNDO, 'Undo'),
                        },
                        {
                            id: this.constants.MENUBAR_ITEM_REDO,
                            name: this.localize(this.constants.MENUBAR_ITEM_REDO, 'Redo'),
                        },
                    ],
                },
                {
                    id: this.constants.MENUBAR_ITEM_SELECTION,
                    name: this.localize(this.constants.MENUBAR_ITEM_SELECTION, 'Selection'),
                    children: [],
                },
                {
                    id: this.constants.MENUBAR_ITEM_VIEW,
                    name: this.localize(this.constants.MENUBAR_ITEM_VIEW, 'View'),
                    children: [
                        {
                            id: this.constants.MENUBAR_ITEM_COMMAND_PALETTE,
                            name: this.localize(this.constants.MENUBAR_ITEM_COMMAND_PALETTE, 'Command Palette'),
                        },
                        {
                            id: this.constants.MENUBAR_ITEM_OPEN_VIEW,
                            name: this.localize(this.constants.MENUBAR_ITEM_OPEN_VIEW, 'Open View'),
                        },
                        {
                            id: this.constants.MENUBAR_ITEM_APPEARANCE,
                            name: this.localize(this.constants.MENUBAR_ITEM_APPEARANCE, 'Appearance'),
                            children: [
                                {
                                    id: this.constants.MENUBAR_ITEM_MENU,
                                    name: this.localize(this.constants.MENUBAR_ITEM_MENU, 'Show Menu Bar'),
                                },
                                {
                                    id: this.constants.MENUBAR_ITEM_SIDEBAR,
                                    name: this.localize(this.constants.MENUBAR_ITEM_SIDEBAR, 'Show Side Bar'),
                                },
                                {
                                    id: this.constants.MENUBAR_ITEM_AUXILIARY,
                                    name: this.localize(this.constants.MENUBAR_ITEM_AUXILIARY, 'Show Auxiliary Bar'),
                                },
                                {
                                    id: this.constants.MENUBAR_ITEM_STATUSBAR,
                                    name: this.localize(this.constants.MENUBAR_ITEM_STATUSBAR, 'Show Status Bar'),
                                },
                                {
                                    id: this.constants.MENUBAR_ITEM_ACTIVITYBAR,
                                    name: this.localize(this.constants.MENUBAR_ITEM_ACTIVITYBAR, 'Show Activity Bar'),
                                },
                                {
                                    id: this.constants.MENUBAR_ITEM_PANEL,
                                    name: this.localize(this.constants.MENUBAR_ITEM_PANEL, 'Show Panel'),
                                },
                            ],
                        },
                    ],
                },
                {
                    id: this.constants.MENUBAR_ITEM_RUN,
                    name: this.localize(this.constants.MENUBAR_ITEM_RUN, 'Run'),
                    children: [
                        {
                            id: this.constants.MENUBAR_ITEM_RUN_TASK,
                            name: this.localize(this.constants.MENUBAR_ITEM_RUN_TASK, 'Run Task'),
                        },
                    ],
                },
                {
                    id: this.constants.MENUBAR_ITEM_HELP,
                    name: this.localize(this.constants.MENUBAR_ITEM_HELP, 'Help'),
                    children: [
                        {
                            id: this.constants.MENUBAR_ITEM_ABOUT,
                            name: this.localize(this.constants.MENUBAR_ITEM_ABOUT, 'About'),
                        },
                    ],
                },
            ],
        ACTIVITYBAR_ITEMS: () =>
            <IActivityBarItem[]>[
                {
                    id: this.constants.ACTIVITYBAR_ITEM_ACCOUNT,
                    name: this.localize(this.constants.ACTIVITYBAR_ITEM_ACCOUNT, 'Account'),
                    icon: 'account',
                    alignment: 'bottom',
                },
                {
                    id: this.constants.ACTIVITYBAR_ITEM_SETTING,
                    name: this.localize(this.constants.ACTIVITYBAR_ITEM_SETTING, 'Settings'),
                    icon: 'settings-gear',
                    alignment: 'bottom',
                },
            ],
        ACTIVITYBAR_CONTEXTMENU: () =>
            <IMenuItemProps[]>[
                {
                    id: this.constants.ACTIVITYBAR_CONTEXTMENU_HIDE,
                    name: this.localize(this.constants.ACTIVITYBAR_CONTEXTMENU_HIDE, 'Hide Activity Bar'),
                },
            ],
        EXPLORER_ITEM: () =>
            <IActivityBarItem>{
                id: this.constants.SIDEBAR_ITEM_EXPLORER,
                name: this.localize(this.constants.SIDEBAR_ITEM_EXPLORER, 'Explore'),
                icon: 'files',
                sortIndex: 1,
                alignment: 'top',
            },
        SEARCH: () =>
            <IActivityBarItem>{
                id: this.constants.SIDEBAR_ITEM_SEARCH,
                name: this.localize(this.constants.SIDEBAR_ITEM_SEARCH, 'Search'),
                icon: 'search',
                sortIndex: 2,
                alignment: 'top',
            },
        SEARCH_TOOLBAR: () =>
            <IMenuItemProps[]>[
                {
                    id: this.constants.SEARCH_TOOLBAR_REFRESH,
                    icon: 'refresh',
                    name: this.localize(this.constants.SEARCH_TOOLBAR_REFRESH, 'Refresh'),
                    group: 'inline',
                    sortIndex: 5,
                },
                {
                    id: this.constants.SEARCH_TOOLBAR_CLEAR_ALL,
                    icon: 'clear-all',
                    name: this.localize(this.constants.SEARCH_TOOLBAR_CLEAR_ALL, 'Clear Search Results'),
                    group: 'inline',
                    sortIndex: 6,
                },
            ],
        SEARCH_TOOLBAR_COLLAPSE: () =>
            <IMenuItemProps>{
                id: this.constants.SEARCH_TOOLBAR_COLLAPSE_EXPAND,
                icon: 'collapse-all',
                name: this.localize(this.constants.SEARCH_TOOLBAR_COLLAPSE, 'Collapse All'),
                group: 'inline',
                sortIndex: 8,
            },
        SEARCH_TOOLBAR_EXPAND: () =>
            <IMenuItemProps>{
                id: this.constants.SEARCH_TOOLBAR_COLLAPSE_EXPAND,
                icon: 'expand-all',
                name: this.localize(this.constants.SEARCH_TOOLBAR_EXPAND, 'Expand All'),
                group: 'inline',
                sortIndex: 8,
            },
        SEARCH_TOOLBAR_VIEW_AS_LIST: () =>
            <IMenuItemProps>{
                id: this.constants.SEARCH_TOOLBAR_VIEW_AS_LIST,
                icon: 'list-flat',
                name: this.localize(this.constants.SEARCH_TOOLBAR_VIEW_AS_LIST, 'View as List'),
                group: 'inline',
                sortIndex: 7,
            },
        SEARCH_TOOLBAR_VIEW_AS_TREE: () =>
            <IMenuItemProps>{
                id: this.constants.SEARCH_TOOLBAR_VIEW_AS_TREE,
                icon: 'list-tree',
                name: this.localize(this.constants.SEARCH_TOOLBAR_VIEW_AS_TREE, 'View as Tree'),
                group: 'inline',
                sortIndex: 7,
            },
        CONTEXTMENU_FOLDER: () => [
            {
                id: this.constants.EXPLORER_CONTEXTMENU_CREATE_FILE,
                name: this.localize(this.constants.EXPLORER_CONTEXTMENU_CREATE_FILE, 'New File'),
            },
            {
                id: this.constants.EXPLORER_CONTEXTMENU_CREATE_FOLDER,
                name: this.localize(this.constants.EXPLORER_CONTEXTMENU_CREATE_FOLDER, 'New Folder'),
            },
            {
                id: this.constants.EXPLORER_CONTEXTMENU_RENAME,
                name: this.localize(this.constants.EXPLORER_CONTEXTMENU_RENAME, 'Rename'),
            },
            {
                id: this.constants.EXPLORER_CONTEXTMENU_DELETE,
                name: this.localize(this.constants.EXPLORER_CONTEXTMENU_DELETE, 'Delete'),
            },
        ],
        CONTEXTMENU_FILE: () => [
            {
                id: this.constants.EXPLORER_CONTEXTMENU_OPEN_TO_SIDE,
                name: this.localize(this.constants.EXPLORER_CONTEXTMENU_OPEN_TO_SIDE, 'Open to the Side'),
            },
            {
                id: this.constants.EXPLORER_CONTEXTMENU_RENAME,
                name: this.localize(this.constants.EXPLORER_CONTEXTMENU_RENAME, 'Rename'),
            },
            {
                id: this.constants.EXPLORER_CONTEXTMENU_DELETE,
                name: this.localize(this.constants.EXPLORER_CONTEXTMENU_DELETE, 'Delete'),
            },
        ],
        CONTEXTMENU_FOLDER_PANEL: () => [
            {
                id: this.constants.EXPLORER_CONTEXTMENU_ADD_TO_WORKSPACE,
                name: this.localize(this.constants.EXPLORER_CONTEXTMENU_ADD_TO_WORKSPACE, 'Add Folder to Workspace...'),
            },
            {
                id: this.constants.EXPLORER_CONTEXTMENU_FIND_IN_WORKSPACE,
                name: this.localize(this.constants.EXPLORER_CONTEXTMENU_FIND_IN_WORKSPACE, 'Find in Workspace...'),
            },
            {
                id: this.constants.EXPLORER_CONTEXTMENU_DOWNLOAD,
                name: this.localize(this.constants.EXPLORER_CONTEXTMENU_DOWNLOAD, 'Download...'),
            },
        ],
        FOLDER_TREE: () =>
            <IExplorerPanelItem>{
                id: this.constants.EXPLORER_ITEM_WORKSPACE,
                sortIndex: 8,
                name: this.localize(this.constants.EXPLORER_ITEM_WORKSPACE, 'No Open Folder'),
                config: {
                    grow: 2,
                },
                toolbar: [
                    {
                        id: this.constants.EXPLORER_CONTEXTMENU_CREATE_FILE,
                        name: this.localize(this.constants.EXPLORER_CONTEXTMENU_CREATE_FILE, 'New File'),
                        group: 'inline',
                        icon: 'new-file',
                    },
                    {
                        id: this.constants.EXPLORER_CONTEXTMENU_CREATE_FOLDER,
                        name: this.localize(this.constants.EXPLORER_CONTEXTMENU_CREATE_FOLDER, 'New Folder'),
                        group: 'inline',
                        icon: 'new-folder',
                    },
                    {
                        id: this.constants.EXPLORER_TOOLBAR_REFRESH,
                        name: this.localize(this.constants.EXPLORER_TOOLBAR_REFRESH, 'Refresh'),
                        group: 'inline',
                        icon: 'refresh',
                    },
                    {
                        id: this.constants.EXPLORER_TOOLBAR_COLLAPSE,
                        name: this.localize(this.constants.EXPLORER_TOOLBAR_COLLAPSE, 'Collapse all'),
                        group: 'inline',
                        icon: 'collapse-all',
                    },
                ],
            },
        OUTPUT: () => ({
            id: this.constants.PANEL_ITEM_OUTPUT,
            name: this.localize(this.constants.PANEL_ITEM_OUTPUT, 'output'),
            data: '',
            sortIndex: 2,
            closable: false,
        }),
        EDITOR_TOOLBAR: () =>
            <IMenuItemProps[]>[
                {
                    id: this.constants.EDITOR_TOOLBAR_SPLIT,
                    name: this.localize(this.constants.EDITOR_TOOLBAR_SPLIT, 'Split Editor Right'),
                    icon: 'split-horizontal',
                    group: 'inline',
                    sortIndex: 99,
                },
                {
                    id: this.constants.EDITOR_CONTEXTMENU_CLOSE_ALL,
                    name: this.localize(this.constants.EDITOR_CONTEXTMENU_CLOSE_ALL, 'Close All'),
                },
            ],
        EDITOR_TREE: () =>
            <IExplorerPanelItem>{
                id: this.constants.EXPLORER_ITEM_OPEN_EDITOR,
                sortIndex: 1,
                name: this.localize(this.constants.EXPLORER_ITEM_OPEN_EDITOR, 'OPEN EDITORS'),
                toolbar: [
                    {
                        id: this.constants.EXPLORER_TOOLBAR_SAVE_ALL,
                        name: this.localize(this.constants.EXPLORER_TOOLBAR_SAVE_ALL, 'Save All'),
                        icon: 'save-all',
                        group: 'inline',
                    },
                    {
                        id: this.constants.EXPLORER_TOOLBAR_CLOSE_ALL,
                        name: this.localize(this.constants.EXPLORER_TOOLBAR_CLOSE_ALL, 'Close All Editors'),
                        icon: 'close-all',
                        group: 'inline',
                    },
                ],
                config: {
                    grow: 0,
                },
            },
        EDITOR_CONTEXTMENU: () =>
            <IMenuItemProps[]>[
                {
                    id: this.constants.EDITOR_CONTEXTMENU_CLOSE,
                    name: this.localize(this.constants.EDITOR_CONTEXTMENU_CLOSE, 'Close'),
                },
                {
                    id: this.constants.EDITOR_CONTEXTMENU_CLOSE_OTHERS,
                    name: this.localize(this.constants.EDITOR_CONTEXTMENU_CLOSE_OTHERS, 'Close Others'),
                },
                {
                    id: this.constants.EDITOR_CONTEXTMENU_CLOSE_TO_RIGHT,
                    name: this.localize(this.constants.EDITOR_CONTEXTMENU_CLOSE_TO_RIGHT, 'Close To Right'),
                },
                {
                    id: this.constants.EDITOR_CONTEXTMENU_CLOSE_TO_LEFT,
                    name: this.localize(this.constants.EDITOR_CONTEXTMENU_CLOSE_TO_LEFT, 'Close To Left'),
                },
                {
                    id: this.constants.EDITOR_CONTEXTMENU_CLOSE_ALL,
                    name: this.localize(this.constants.EDITOR_CONTEXTMENU_CLOSE_ALL, 'Close All'),
                },
            ],
        NOTIFICATION: () =>
            <IStatusBarItem>{
                id: this.constants.STATUSBAR_ITEM_NOTIFICATION,
                name: this.localize(this.constants.STATUSBAR_ITEM_NOTIFICATION, 'Notification'),
                sortIndex: 1,
                alignment: 'right',
            },
        NOTIFICATION_CLEAR_ALL: () =>
            <IMenuItemProps>{
                id: this.constants.NOTIFICATION_TOOLBAR_CLEAR_ALL,
                title: this.localize(this.constants.NOTIFICATION_TOOLBAR_CLEAR_ALL, 'Clear All Notifications'),
                icon: 'clear-all',
                group: 'inline',
            },
        NOTIFICATION_HIDE: () =>
            <IMenuItemProps>{
                id: this.constants.NOTIFICATION_TOOLBAR_HIDE,
                title: this.localize(this.constants.NOTIFICATION_TOOLBAR_HIDE, 'Hide Notifications'),
                icon: 'chevron-down',
                group: 'inline',
            },
        EDITOR_TREE_CONTEXTMENU: () =>
            <IMenuItemProps[]>[
                {
                    id: this.constants.EDITOR_CONTEXTMENU_CLOSE_SAVED,
                    name: this.localize(this.constants.EDITOR_CONTEXTMENU_CLOSE_SAVED, 'Close Saved'),
                },
                {
                    id: this.constants.EDITOR_CONTEXTMENU_CLOSE_ALL,
                    name: this.localize(this.constants.EDITOR_CONTEXTMENU_CLOSE_ALL, 'Close All'),
                },
            ],
        PANEL_CONTEXTMENU: () =>
            <IMenuItemProps[]>[
                {
                    id: this.constants.PANEL_CONTEXTMENU_HIDE,
                    name: this.localize(this.constants.PANEL_CONTEXTMENU_HIDE, `Hidden Panel`),
                },
            ],
        PANEL_CLOSE: () =>
            <IMenuItemProps>{
                id: this.constants.PANEL_TOOLBAR_CLOSE,
                title: this.localize(this.constants.PANEL_TOOLBAR_CLOSE, 'Close Panel'),
                icon: 'close',
                group: 'inline',
                sortIndex: 1,
            },
        PANEL_RESTORE: () =>
            <IMenuItemProps>{
                id: this.constants.PANEL_TOOLBAR_MAXIMIZE,
                title: this.localize(this.constants.PANEL_TOOLBAR_RESTORE, 'Restore Panel Size'),
                icon: 'chevron-down',
                group: 'inline',
            },
        PANEL_MAXIMIZE: () =>
            <IMenuItemProps>{
                id: this.constants.PANEL_TOOLBAR_MAXIMIZE,
                title: this.localize(this.constants.PANEL_TOOLBAR_MAXIMIZE, 'Maximize Panel Size'),
                icon: 'chevron-up',
                group: 'inline',
            },
        EDITORTREE_TOOLBAR: () =>
            <IMenuItemProps[]>[
                {
                    id: this.constants.EDITORTREE_TOOLBAR_SAVE_GROUP,
                    name: this.localize(this.constants.EDITORTREE_TOOLBAR_SAVE_GROUP, 'Save Group'),
                    group: 'inline',
                    icon: 'save-all',
                },
                {
                    id: this.constants.EDITORTREE_TOOLBAR_CLOSE_GROUP,
                    name: this.localize(this.constants.EDITORTREE_TOOLBAR_CLOSE_GROUP, 'Close Group Editors'),
                    group: 'inline',
                    icon: 'close-all',
                },
            ],
        MENUBAR_CONTEXTMENU: () =>
            <IMenuItemProps[]>[
                {
                    id: this.constants.MENUBAR_CONTEXTMENU_HIDE,
                    name: this.localize(this.constants.MENUBAR_CONTEXTMENU_HIDE, 'Hide Menu Bar'),
                },
            ],
        AUXILIARYBAR_ITEM_TOOL : () =>(
            {
                id: this.constants.AUXILIARYBAR_ITEM_TOOL,
                name: this.localize(this.constants.AUXILIARYBAR_ITEM_TOOL,"auxiliaryBar tab"),
            }),
    };
    public disabled: string[] = [];
    constructor(private localize: Localize) {}
}
