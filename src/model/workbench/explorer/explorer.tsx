import React from 'react';
import { IActionBarItemProps } from 'mo/components/actionBar';
import {
    COLLAPSE_FOLDER_COMMAND_ID,
    NEW_FILE_COMMAND_ID,
    NEW_FOLDER_COMMAND_ID,
} from './folderTree';
import { localize } from 'mo/i18n/localize';

export enum ExplorerEvent {
    onClick = 'explorer.onClick',
    onPanelToolbarClick = 'explorer.onPanelToolbarClick',
    onCollapseChange = 'explorer.onCollapseChange',
    onRemovePanel = 'explorer.onRemovePanel',
}

export type RenderFunctionProps = (props) => React.ReactNode;
export interface IExplorerPanelItem {
    /**
     * It must be unique in the Explorer Panel Data
     */
    id: string;
    /**
     * @requires true
     * explorer panel's title
     */
    name: string;
    /**
     * specify panel order
     * the bigger the number is ranked previous
     */
    sortIndex?: number;
    className?: string;
    toolbar?: IActionBarItemProps[];
    renderPanel?: RenderFunctionProps;
    /**
     * whether hidden in explorer
     */
    hidden?: boolean;

    [key: string]: any;
}
export interface IExplorer {
    data: IExplorerPanelItem[];
    headerToolBar: IActionBarItemProps;
}

export const SAMPLE_FOLDER_PANEL_ID = 'sidebar.explore.folders';
export const EDITOR_PANEL_ID = 'sidebar.explore.openEditor';
export const OUTLINE_PANEL_ID = 'sidebar.explore.outline';
export const OUTLINE_PANEL_MORE_DESC = 'sidebar.explore.outlineMore';
export const EXPLORER_ACTIVITY_ITEM = 'sidebar.explore.title';

export const EXPLORER_ACTION_TITLE = 'sidebar.explore.actionDesc';
export const EXPLORER_TOGGLE_VERTICAL = 'sidebar.explore.toggleVertical';
export const EXPLORER_TOGGLE_SAVE_ALL = 'sidebar.explore.saveALL';
export const EXPLORER_TOGGLE_CLOSE_ALL_EDITORS =
    'sidebar.explore.closeAllEditors';
export const EXPLORER_TOGGLE_SAVE_GROUP = 'sidebar.explore.saveGroup';
export const EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS =
    'sidebar.explore.closeGroupEditors';

export function builtInExplorerActivityItem() {
    return {
        id: EXPLORER_ACTIVITY_ITEM,
        name: localize(EXPLORER_ACTIVITY_ITEM, 'Explore'),
        icon: 'files',
        title: localize(EXPLORER_ACTIVITY_ITEM, 'Explore'),
    };
}

export function builtInExplorerHeaderToolbar() {
    return {
        id: EXPLORER_ACTION_TITLE,
        title: localize(EXPLORER_ACTION_TITLE, 'View and More Actions...'),
        icon: 'ellipsis',
        contextMenu: [],
    };
}

export function builtInExplorerEditorPanel() {
    return {
        id: EDITOR_PANEL_ID,
        sortIndex: 9,
        name: localize(EDITOR_PANEL_ID, 'OPEN EDITORS'),
        toolbar: [
            {
                id: EXPLORER_TOGGLE_VERTICAL,
                title: localize(EXPLORER_TOGGLE_VERTICAL, 'Toggle Vertical'),
                icon: 'editor-layout',
            },
            {
                id: EXPLORER_TOGGLE_SAVE_ALL,
                title: localize(EXPLORER_TOGGLE_SAVE_ALL, 'Save All'),
                icon: 'save-all',
            },
            {
                id: EXPLORER_TOGGLE_CLOSE_ALL_EDITORS,
                title: localize(
                    EXPLORER_TOGGLE_CLOSE_ALL_EDITORS,
                    'Close All Editors'
                ),
                icon: 'close-all',
            },
        ],
        groupToolbar: [
            {
                id: EXPLORER_TOGGLE_SAVE_GROUP,
                title: localize(EXPLORER_TOGGLE_SAVE_GROUP, 'Save Group'),
                icon: 'save-all',
            },
            {
                id: EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS,
                title: localize(
                    EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS,
                    'Close Group Editors'
                ),
                icon: 'close-all',
            },
        ],
        config: {
            grow: 0,
        },
    };
}

export function builtInExplorerOutlinePanel() {
    return {
        id: OUTLINE_PANEL_ID,
        name: 'OUTLINE',
        toolbar: [
            {
                id: 'outline-collapse',
                title: localize('toolbar.collapseAll', 'Collapse All'),
                icon: 'collapse-all',
            },
            {
                id: OUTLINE_PANEL_MORE_DESC,
                title: localize(OUTLINE_PANEL_MORE_DESC, 'More Actions...'),
                icon: 'ellipsis',
            },
        ],
    };
}

export function builtInExplorerFolderPanel() {
    return {
        id: SAMPLE_FOLDER_PANEL_ID,
        sortIndex: 8,
        name: localize('menu.defaultProjectName', 'No Open Folder'),
        toolbar: [
            {
                id: NEW_FILE_COMMAND_ID,
                title: localize('menu.newFile', 'New File'),
                icon: 'new-file',
            },
            {
                id: NEW_FOLDER_COMMAND_ID,
                title: localize('menu.newFolder', 'New Folder'),
                icon: 'new-folder',
            },
            {
                id: 'refresh',
                title: localize('sidebar.explore.refresh', 'Refresh Explorer'),
                icon: 'refresh',
            },
            {
                id: COLLAPSE_FOLDER_COMMAND_ID,
                title: localize(
                    COLLAPSE_FOLDER_COMMAND_ID,
                    'Collapse Folders in Explorer'
                ),
                icon: 'collapse-all',
            },
        ],
        config: {
            grow: 2,
        },
    };
}

export class IExplorerModel implements IExplorer {
    public data: IExplorerPanelItem[];
    public headerToolBar: IActionBarItemProps;

    constructor(
        data: IExplorerPanelItem[] = [],
        headerToolBar: IActionBarItemProps = builtInExplorerHeaderToolbar()
    ) {
        this.data = data;
        this.headerToolBar = headerToolBar;
    }
}
