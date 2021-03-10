import * as React from 'react';
import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { ITreeNodeItem, FileType, FileTypes } from 'mo/components/tree';
import { IMenuItem } from 'mo/components/menu';
import { IActivityBarItem } from './activityBar';

export enum ExplorerEvent {
    onClick = 'explorer.onClick',
}
export interface IPanelItem<T = any> extends IActivityBarItem {
    renderPanel?: (props) => React.ReactNode | JSX.Element;
    toolbar?: T;
}

export interface IFolderInputEvent {
    onFocus: () => void;
    setValue: (value: string) => void;
}

export interface IFolderTree {
    data?: ITreeNodeItem[];
    contextMenu?: IMenuItem[];
    folderPanelContextMenu?: IMenuItem[];
    current?: ITreeNodeItem | null;
}
export interface IExplorer {
    data?: IPanelItem[];
    headerToolBar?: IActivityBarItem[];
    folderTree?: IFolderTree;
}

const builtInHeaderToolbar: IActivityBarItem[] = [
    {
        id: 'explorer-more',
        name: 'View and More Actions...',
        iconName: 'codicon-ellipsis',
        type: 'global',
        contextMenu: [
            {
                id: 'OpenEditors',
                name: 'Open Editors',
                icon: 'check',
            },
            {
                id: 'Folders',
                name: 'Folders',
                icon: 'check',
            },
            {
                id: 'Outline',
                name: 'Outline',
                icon: 'check',
            },
        ],
    },
];

const commonContextMenu = [
    {
        id: 'rename',
        name: 'Rename',
    },
    {
        id: 'delete',
        name: 'Delete',
    },
];

// Sample folder panel area ContextMenu
const folderPanelContextMenu = [
    {
        id: 'addRootFolder',
        name: 'Add Folder to Workspace...',
    },
    {
        id: 'find',
        name: 'Find in Workspace...',
    },
    {
        id: 'download',
        name: 'Download...',
    },
];
// Dedault Panel
export const EDITOR_PANEL = {
    id: 'OpenEditors',
    name: 'OPEN EDITORS',
    toolbar: [
        {
            id: 'toggle',
            title: 'Toggle Vertical',
            disabled: true,
            iconName: 'codicon-editor-layout',
        },
        {
            id: 'save',
            title: 'Save All',
            disabled: true,
            iconName: 'codicon-save-all',
        },
        {
            id: 'close',
            title: 'Close All Editors',
            iconName: 'codicon-close-all',
        },
    ],
    renderPanel: () => {
        return <span>editors</span>;
    },
};

export const OUTLINE_PANEL = {
    id: 'Outline',
    name: 'OUTLINE',
    toolbar: [
        {
            id: 'outline-collapse',
            title: 'Collapse All',
            iconName: 'codicon-collapse-all',
        },
        {
            id: 'outline-more',
            title: 'More Actions...',
            iconName: 'codicon-ellipsis',
        },
    ],
};
export const DEFAULT_PANELS = [EDITOR_PANEL, OUTLINE_PANEL];

export class TreeNodeModel implements ITreeNodeItem {
    id?: number;
    name?: string;
    location?: string;
    fileType?: FileType;
    children?: ITreeNodeItem[];
    icon?: string | React.ReactNode;
    modify?: boolean;

    constructor(props: ITreeNodeItem = {}) {
        const {
            id,
            name = '',
            location = '',
            fileType = FileTypes.file as FileType,
            children = [],
            icon = '',
            modify = false,
        } = props;
        (this.fileType = fileType),
            (this.modify = modify),
            (this.name = name),
            (this.id = id || Math.random() * 10 + 1),
            (this.location = location),
            (this.children = children),
            (this.icon = icon);
    }
}

@injectable()
export class IExplorerModel implements IExplorer {
    public data: IPanelItem[] = DEFAULT_PANELS;
    public folderTree: IFolderTree = {
        contextMenu: commonContextMenu,
        current: null,
        folderPanelContextMenu: folderPanelContextMenu,
        data: [],
    };
    public headerToolBar: IActivityBarItem[] = builtInHeaderToolbar;
}
