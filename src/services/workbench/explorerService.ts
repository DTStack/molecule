import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    IExpolorerModel,
    IExpolorer,
    IPanelItem,
    getFileIconByName,
    generateFileTemplate,
    getPrevParentNode,
} from 'mo/model/workbench/explorer';
import { ITreeNodeItem, FileType, FileTypes } from 'mo/components/tree';
export interface IExplorerService extends Component<IExpolorer> {
    push(data: IPanelItem): void;
    newFileItem(
        fileData: ITreeNodeItem,
        type: FileType,
        callback?: Function
    ): void;
    updateFile(fileData: ITreeNodeItem, newName: string, index: number): void;
    reName(fileData: ITreeNodeItem, callback: Function): void;
    deleteFile(fileData: ITreeNodeItem): void;
    onDropTree(treeData: ITreeNodeItem[]): void;
}

@singleton()
export class ExplorerService
    extends Component<IExpolorer>
    implements IExplorerService {
    protected state: IExpolorer;
    constructor() {
        super();
        this.state = container.resolve(IExpolorerModel);
    }
    // collapse
    public push(data: IPanelItem) {
        const original = this.state.data;
        original?.push(data);
    }

    public reset() {
        this.updateState({
            data: [],
        });
    }

    public remove(index: number) {
        if (this.state.data) {
            const data = this.state.data;
            data.splice(index, 1);
        }
    }

    /**
     *
     * @param fileData treeNode ite
     * @param type new type
     */
    public newFileItem(
        fileData: ITreeNodeItem,
        type: FileType,
        callback: Function
    ) {
        const original = this.state.treeData;
        const loop = (data: ITreeNodeItem[]) => {
            for (const item of data) {
                if (item.id === fileData.id) {
                    if (!item.children) item.children = [];
                    item.children.push({
                        ...generateFileTemplate(),
                        type,
                    });
                }
                if (item.children) {
                    loop(item.children);
                }
            }
        };
        loop(original as any);

        /**
         *  TODO: generate root fileFolder
         * + 支持工作空间/多目录结构
         * + 支持本地文件导入
         */
        if (type === FileTypes.FOLDER) {
            if (!original?.length) {
                original?.push(fileData);
            }
        }
        if (callback) callback();
    }

    /**
     * new file / new folder / Rename 最终都走这步
     */
    public updateFile(fileData: ITreeNodeItem, newName: string, index: number) {
        const original = this.state.treeData;
        const prevParentNode: ITreeNodeItem = getPrevParentNode(
            original,
            fileData.id
        );
        const update = (tree) => {
            const rootNode = tree[0];
            if (rootNode.id === fileData.id) {
                if (newName) {
                    rootNode.name = newName;
                    rootNode.modify = false;
                }
                return tree;
            }
            const loopById = (file, id) => {
                for (const item of file) {
                    if (item.id === id) {
                        const newItem = {
                            ...item,
                            name: newName,
                            modify: false,
                            icon:
                                fileData.type === FileTypes.FILE
                                    ? getFileIconByName(newName)
                                    : '',
                        };
                        if (!prevParentNode.children)
                            prevParentNode.children = [];
                        if (newName) {
                            prevParentNode.children.splice(index, 1, newItem);
                        } else {
                            prevParentNode.children.splice(index, 1);
                        }
                    }
                    if (item.children) {
                        loopById(item.children, id);
                    }
                }
            };
            loopById(tree[0]?.children, fileData.id);
        };
        update(original);
    }

    public reName(fileData: ITreeNodeItem, callback: Function) {
        const original = this.state.treeData;
        const updateName = (tree, id) => {
            const rootNode = tree[0];
            if (rootNode.id === id) {
                rootNode.modify = true;
                return tree;
            }
            const traverseModfyCol = (file, id) => {
                for (const item of file) {
                    if (item.id === id) {
                        item.modify = true;
                        return;
                    }
                    if (item.children) {
                        traverseModfyCol(item.children, id);
                    }
                }
            };
            traverseModfyCol(tree[0]?.children, id);
            return tree;
        };
        updateName(original, fileData.id);
        if (callback) callback();
    }

    public deleteFile(fileData: ITreeNodeItem) {
        const original = this.state.treeData;
        const prevParentNode: ITreeNodeItem = getPrevParentNode(
            original,
            fileData.id
        );
        const curIndex = (prevParentNode.children || []).findIndex(
            (item) => item.id === fileData.id
        );
        const deleteItem = (tree, id) => {
            const rootNode = tree[0];
            if (rootNode.id === id) {
                return tree;
            }
            const loopNode = (file, id) => {
                for (const item of file) {
                    if (item.id === id) {
                        prevParentNode.children?.splice(curIndex, 1);
                        return;
                    }
                    if (item.children) {
                        loopNode(item.children, id);
                    }
                }
            };
            loopNode(tree[0]?.children, id);
            return tree;
        };
        deleteItem(original, fileData.id);
    }

    public onDropTree = (treeData: ITreeNodeItem[]) => {
        this.updateState({
            treeData,
        });
    };
}
