import * as React from 'react';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { NEW_FILE_COMMAND_ID, NEW_FOLDER_COMMAND_ID } from './folderTree';
import { localize } from 'mo/i18n/localize';

export enum ExplorerEvent {
    onClick = 'explorer.onClick',
    onCollapseChange = 'explorer.onCollapseChange',
}
export interface IExplorerPanelItem<T = any> extends IActionBarItemProps {
    renderPanel?: (props) => React.ReactNode | JSX.Element;
    toolbar?: T;
}
export interface IExplorer {
    data?: IExplorerPanelItem[];
    headerToolBar?: IActionBarItemProps;
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

export function builtInExplorerActivityItem() {
    return {
        id: EXPLORER_ACTIVITY_ITEM,
        name: localize(EXPLORER_ACTIVITY_ITEM, 'Explore'),
        iconName: 'codicon-files',
    };
}

export function builtInExplorerHeaderToolbar() {
    const openEditorLabel = localize(EDITOR_PANEL_ID, 'Open Editors');
    const foldersLabel = localize(SAMPLE_FOLDER_PANEL_ID, 'Folders');
    const outlineLabel = localize(OUTLINE_PANEL_ID, 'Outline');

    return {
        id: EXPLORER_ACTION_TITLE,
        title: localize(EXPLORER_ACTION_TITLE, 'View and More Actions...'),
        iconName: 'codicon-ellipsis',
        contextMenu: [
            {
                id: EDITOR_PANEL_ID,
                title: openEditorLabel,
                name: openEditorLabel,
                icon: 'check',
            },
            {
                id: SAMPLE_FOLDER_PANEL_ID,
                title: foldersLabel,
                name: foldersLabel,
                disabled: true,
                icon: 'check',
            },
            {
                id: OUTLINE_PANEL_ID,
                title: outlineLabel,
                name: outlineLabel,
                icon: 'check',
            },
        ],
    };
}

export function builtInExplorerEditorPanel() {
    return {
        id: EDITOR_PANEL_ID,
        name: localize(EDITOR_PANEL_ID, 'OPEN EDITORS'),
        toolbar: [
            {
                id: EXPLORER_TOGGLE_VERTICAL,
                title: localize(EXPLORER_TOGGLE_VERTICAL, 'Toggle Vertical'),
                disabled: true,
                iconName: 'codicon-editor-layout',
            },
            {
                id: EXPLORER_TOGGLE_SAVE_ALL,
                title: localize(EXPLORER_TOGGLE_SAVE_ALL, 'Save All'),
                disabled: true,
                iconName: 'codicon-save-all',
            },
            {
                id: EXPLORER_TOGGLE_CLOSE_ALL_EDITORS,
                title: localize(
                    EXPLORER_TOGGLE_CLOSE_ALL_EDITORS,
                    'Close All Editors'
                ),
                iconName: 'codicon-close-all',
            },
        ],
        renderPanel: () => {
            return <span>editors</span>;
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
                iconName: 'codicon-collapse-all',
            },
            {
                id: OUTLINE_PANEL_MORE_DESC,
                title: localize(OUTLINE_PANEL_MORE_DESC, 'More Actions...'),
                iconName: 'codicon-ellipsis',
            },
        ],
    };
}

export function builtInExplorerFolderPanel() {
    return {
        id: SAMPLE_FOLDER_PANEL_ID,
        name: 'Sample Folder',
        className: 'samplefolder',
        toolbar: [
            {
                id: NEW_FILE_COMMAND_ID,
                title: localize('menu.newFile', 'New File'),
                iconName: 'codicon-new-file',
            },
            {
                id: NEW_FOLDER_COMMAND_ID,
                title: localize('menu.newFolder', 'New Folder'),
                iconName: 'codicon-new-folder',
            },
            {
                id: 'refresh',
                title: localize('sidebar.explore.refresh', 'Refresh Explorer'),
                iconName: 'codicon-refresh',
            },
            {
                id: 'collapse',
                title: localize(
                    'sidebar.explore.collapseFolders',
                    'Collapse Folders in Explorer'
                ),
                iconName: 'codicon-collapse-all',
            },
        ],
    };
}

export function builtInExplorerPanel() {
    return [
        builtInExplorerEditorPanel(),
        builtInExplorerOutlinePanel(),
        builtInExplorerFolderPanel(),
    ];
}

export class IExplorerModel implements IExplorer {
    public data: IExplorerPanelItem[];
    public headerToolBar: IActionBarItemProps;

    constructor(
        data: IExplorerPanelItem[] = [],
        headerToolBar: IActionBarItemProps = {}
    ) {
        this.data = data;
        this.headerToolBar = headerToolBar;
    }
}
