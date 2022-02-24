import React from 'react';
import 'reflect-metadata';
import type { ITreeNodeItemProps } from 'mo/components/tree';
import type { IMenuItemProps } from 'mo/components/menu';
import type { UniqueId } from 'mo/common/types';

export enum FileTypes {
    File = 'File',
    Folder = 'Folder',
    RootFolder = 'RootFolder',
}

export type FileType = keyof typeof FileTypes;

export enum FolderTreeEvent {
    onSelectFile = 'folderTree.onSelectFile',
    onDelete = 'folderTree.onDelete',
    onRename = 'folderTree.onRename',
    onUpdateFileName = 'folderTree.onUpdateFileName',
    onRightClick = 'folderTree.onRightClick',
    onContextMenuClick = 'folderTree.onContextMenuClick',
    onCreate = 'folderTree.onCreate',
    onLoadData = 'folderTree.onLoadData',
    onDrop = 'folderTree.onDrop',
    onExpandKeys = 'folderTree.onExpandKeys',
}

export interface IFolderInputEvent {
    onFocus: () => void;
    setValue: (value: string) => void;
}

export interface IFolderTreeSubItem {
    data?: IFolderTreeNodeProps[];
    contextMenu?: IMenuItemProps[];
    folderPanelContextMenu?: IMenuItemProps[];
    current?: IFolderTreeNodeProps | null;
    expandKeys?: UniqueId[];
}
export interface IFolderTree {
    folderTree?: IFolderTreeSubItem;
    entry?: React.ReactNode;
    autoSort?: Boolean;
}

export interface IFolderTreeNodeProps extends ITreeNodeItemProps<any> {
    location?: string;
    content?: string;
    fileType?: FileType;
    children?: IFolderTreeNodeProps[];
}

export class TreeNodeModel implements IFolderTreeNodeProps {
    id: UniqueId;
    name?: string;
    location?: string;
    isLeaf?: boolean;
    fileType: FileType = FileTypes.File;
    children?: IFolderTreeNodeProps[];
    icon?: string | JSX.Element;
    isEditable?: boolean;
    content?: string;

    data?: any;

    constructor(props: IFolderTreeNodeProps) {
        const {
            id,
            name = '',
            location = '',
            fileType = FileTypes.File,
            children = [],
            icon = '',
            isEditable = false,
            content = '',
            isLeaf = true,
            data,
        } = props;
        this.fileType = fileType;
        this.isEditable = isEditable;
        this.name = name;
        this.id = id;
        this.location = location;
        this.children = children;
        this.icon = icon;
        this.content = content;
        this.data = data;
        this.isLeaf = isLeaf;
    }
}

export class IFolderTreeModel implements IFolderTree {
    public folderTree: IFolderTreeSubItem;
    public entry: React.ReactNode;
    public autoSort: Boolean;

    constructor(
        folderTree: IFolderTreeSubItem = {
            contextMenu: [],
            current: null,
            folderPanelContextMenu: [],
            data: [],
            expandKeys: [],
        },
        autoSort: Boolean = false,
        entry?: React.ReactNode
    ) {
        this.folderTree = folderTree;
        this.entry = entry;
        this.autoSort = autoSort;
    }
}
