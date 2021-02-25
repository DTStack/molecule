import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { IActionBarItem } from 'mo/components/actionBar';
import { ITreeNodeItem, FileType, FileTypes } from 'mo/components/tree';
import { IMenuItem } from 'mo/components/menu';

export enum ExplorerEvent {
    onClick = 'explorer.onClick',
}
export interface IPanelItem<T = any> extends IActionBarItem {
    renderPanel?: (props) => React.ReactNode | JSX.Element;
    toolbar?: T;
}

export interface IFolderTree {
    data?: ITreeNodeItem[];
    contextMenu?: IMenuItem[];
}
export interface IExplorer {
    data?: IPanelItem[];
    headerToolBar?: IActionBarItem[];
    folderTree?: IFolderTree;
}

const builtInHeaderToolbar: IActionBarItem[] = [
    {
        id: 'explorer-more',
        title: 'View and More Actions...',
        iconName: 'codicon-ellipsis',
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
    public data: IPanelItem[] = [];
    public folderTree: IFolderTree = {
        contextMenu: commonContextMenu,
        data: [],
    };
    public headerToolBar: IActionBarItem[] = builtInHeaderToolbar;
}
