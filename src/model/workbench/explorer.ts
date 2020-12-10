/* eslint-disable no-invalid-this */
import 'reflect-metadata';
import { observable } from 'mo/common/observable';
import { container, inject, injectable } from 'tsyringe';
import { IActionBarItem } from 'mo/components/actionbar';
import { ITreeNodeItem } from 'mo/components/tree';

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
 * @param id prevParentNode ID
 */
export const getPrevParentNode = (tree, id) => {
    let prevParentNode = {};
    const loop = (data: any) => {
        for (const item of data) {
            if (item.id === id) {
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

export interface IExpolorer {
    data?: IPanelItem[];
    treeData?: ITreeNodeItem[];
}
@observable()
@injectable()
export class IExpolorerModel implements IExpolorer {
    public data: IPanelItem[];
    public treeData: ITreeNodeItem[];
    constructor(
        @inject('ExplorerData') data: IPanelItem[] = [],
        @inject('TreeData') treeData: ITreeNodeItem[] = []
    ) {
        this.data = data;
        this.treeData = treeData;
    }

    public render!: () => React.ReactNode;
}

container.register('ExplorerData', { useValue: [] });
container.register('TreeData', { useValue: [] });
