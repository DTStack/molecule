import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { IActionBarItem } from 'mo/components/actionBar';
import { ITreeNodeItem } from 'mo/components/tree';
import { IMenuItem } from 'mo/components/menu';

/**
 *
 * @param treeData tree Data
 * @param id match by ID
 */
export const findParentNodeId = (treeData, id) => {
    const parentIds: Array<string> = [];
    let isContinue = true;
    const traverse = function (treeData, id) {
        treeData.forEach((item: ITreeNodeItem) => {
            if (!isContinue) return;
            if (item.id) parentIds.push(item.id);
            if (item.id == id) {
                isContinue = false;
            } else if (item.children) {
                traverse(item.children, id);
            } else {
                parentIds.pop();
            }
        });
        if (isContinue) parentIds.pop();
    };
    traverse(treeData, id);
    return parentIds;
};

/**
 *
 * @param tree tree Data
 * @param id currentNode ID
 */
export const getPrevParentNode = (tree, currentNodeId) => {
    let prevParentNode = {};
    const parentIds: string[] = findParentNodeId(tree, currentNodeId);
    const prevPatentNodeId = parentIds.slice(-2)[0]; // prevParentNode Id
    const loop = (data: any) => {
        for (const item of data) {
            if (item.id === prevPatentNodeId) {
                prevParentNode = item;
            }
            if (item.children) {
                loop(item.children);
            }
        }
        return prevParentNode;
    };
    loop(tree);
    return prevParentNode;
};

/**
 * 生成规则：
 * id不能带 querySelector 非法字符（小数点、_、数字开头..）
 */
export const generateRandomId = () => {
    return Math.random().toString().split('.')[1];
};
/**
 * file item template
 */
export const generateFileTemplate = () => {
    return {
        id: `${generateRandomId()}`,
        name: '',
        modify: true,
    };
};

/**
 * match icon by file name extension
 * @param name fileName
 */
export const getFileIconByName = (name: string): string => {
    const fileExtension = name && name.split('.')?.[1];
    let icon = 'symbol-file';
    switch (fileExtension) {
        case 'txt': {
            icon = 'symbol-file';
            break;
        }
        case 'js': {
            icon = 'file-binary';
            break;
        }
        case 'html': {
            icon = 'file-code';
            break;
        }
        case 'zip': {
            icon = 'file-zip';
            break;
        }
        default:
            icon;
    }
    return icon;
};

export enum ExplorerEvent {}
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
