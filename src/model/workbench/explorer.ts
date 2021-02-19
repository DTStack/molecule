import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { IActionBarItem } from 'mo/components/actionBar';
import { ITreeNodeItem } from 'mo/components/tree';
import { IMenuItem } from 'mo/components/menu';

export enum ExplorerEvent { }
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

const folderContextMenu = [
    {
        id: 'newFile',
        name: 'New File',
    },
    {
        id: 'newFolder',
        name: 'New Folder',
    },
].concat(commonContextMenu);

const fileContextMenu = [
    {
        id: 'openToSide',
        name: 'Open to the side',
    },
].concat(commonContextMenu);

@injectable()
export class IExplorerModel implements IExplorer {
    public data: IPanelItem[] = [];
    public folderTree: IFolderTree = {
        contextMenu: folderContextMenu.concat(fileContextMenu),
    };
    public headerToolBar: IActionBarItem[] = builtInHeaderToolbar;
}
