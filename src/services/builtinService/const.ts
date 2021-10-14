import { localize } from 'mo/i18n/localize';
import type { IActionBarItemProps, IMenuItemProps } from 'mo/components';
import type {
    IActivityBarItem,
    IEditorActionsProps,
    IEditorOptions,
    IExplorerPanelItem,
} from 'mo/model';

export const constants = {
    PANEL_PROBLEMS: 'panel.problems.title',
    STATUS_PROBLEMS: 'statusbar.problems.title',
    SAMPLE_FOLDER_PANEL_ID: 'sidebar.explore.folders',
    EDITOR_PANEL_ID: 'sidebar.explore.openEditor',
    OUTLINE_PANEL_ID: 'sidebar.explore.outline',
    OUTLINE_PANEL_MORE_DESC: 'sidebar.explore.outlineMore',
    EXPLORER_ACTIVITY_ITEM: 'sidebar.explore.title',
    EXPLORER_ACTION_TITLE: 'sidebar.explore.actionDesc',
    EXPLORER_TOGGLE_VERTICAL: 'sidebar.explore.toggleVertical',
    EXPLORER_TOGGLE_SAVE_ALL: 'sidebar.explore.saveALL',
    EXPLORER_TOGGLE_CLOSE_ALL_EDITORS: 'sidebar.explore.closeAllEditors',
    EXPLORER_TOGGLE_SAVE_GROUP: 'sidebar.explore.saveGroup',
    EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS: 'sidebar.explore.closeGroupEditors',
    NEW_FILE_COMMAND_ID: 'explorer.newFile',
    NEW_FOLDER_COMMAND_ID: 'explorer.newFolder',
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
    EDITOR_MENU_SHOW_OPENEDITORS: 'editor.showOpenEditors',
    EDITOR_MENU_SPILIT: 'editor.split',
};

export const modules = {
    builtInExplorerActivityItem: {
        id: constants.EXPLORER_ACTIVITY_ITEM,
        name: localize(constants.EXPLORER_ACTIVITY_ITEM, 'Explore'),
        icon: 'files',
        title: localize(constants.EXPLORER_ACTIVITY_ITEM, 'Explore'),
    } as IActivityBarItem,

    builtInExplorerFolderPanel: {
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
                title: localize('sidebar.explore.refresh', 'Refresh Explorer'),
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
    } as IExplorerPanelItem,

    builtInExplorerHeaderToolbar: {
        id: constants.EXPLORER_ACTION_TITLE,
        title: localize(
            constants.EXPLORER_ACTION_TITLE,
            'View and More Actions...'
        ),
        icon: 'ellipsis',
        contextMenu: [],
    } as IActionBarItemProps,

    builtInExplorerEditorPanel: {
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
                title: localize(constants.EXPLORER_TOGGLE_SAVE_ALL, 'Save All'),
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
    } as IExplorerPanelItem,

    builtInExplorerOutlinePanel: {
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
    } as IExplorerPanelItem,

    BuiltInEditorOptions: {
        renderWhitespace: 'none',
        tabSize: 4,
        fontSize: 12,
    } as IEditorOptions,

    builtInEditorInitialActions: [
        {
            id: constants.EDITOR_MENU_SPILIT,
            name: 'Split Editor Right',
            title: localize('editor.actions.splitRight', 'Split Editor Right'),
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

    builtInEditorInitialMenu: [
        {
            id: constants.EDITOR_MENU_CLOSE,
            name: localize(constants.EDITOR_MENU_CLOSE, 'Close'),
        },
        {
            id: constants.EDITOR_MENU_CLOSE_OTHERS,
            name: localize(constants.EDITOR_MENU_CLOSE_OTHERS, 'Close Others'),
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
};
