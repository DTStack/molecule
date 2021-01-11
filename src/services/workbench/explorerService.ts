import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    IPanelItem,
    getFileIconByName,
    generateFileTemplate,
    getPrevParentNode,
    IExplorer,
    IExplorerModel,
} from 'mo/model/workbench/explorer';
import { ITreeNodeItem, FileType, FileTypes } from 'mo/components/tree';
export interface IExplorerService extends Component<IExplorer> {
    addPanel(panel: IPanelItem | IPanelItem[]): void;
    createFile(
        fileData: ITreeNodeItem,
        fileType: FileType,
        callback?: Function
    ): void;
    updateFile(fileData: ITreeNodeItem, newName: string, index: number): void;
    rename(fileData: ITreeNodeItem, callback: Function): void;
    deleteFile(fileData: ITreeNodeItem): void;
    onDropTree(treeData: ITreeNodeItem[]): void;
}

@singleton()
export class ExplorerService
    extends Component<IExplorer>
    implements IExplorerService {
    protected state: IExplorer;
    constructor() {
        super();
        this.state = container.resolve(IExplorerModel);
    }

    public addPanel(data: IPanelItem | IPanelItem[]) {
        let next = [...this.state.data!];
        if (Array.isArray(data)) {
            next = next?.concat(data);
        } else {
            next?.push(data);
        }
        this.setState({
            data: next,
        });
    }

    public reset() {
        this.setState({
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
     * @param fileType new fileType
     */
    public createFile(
        fileData: ITreeNodeItem,
        fileType: FileType,
        callback: Function
    ) {
        const original = this.state.folderTree?.data;
        const loop = (data: ITreeNodeItem[]) => {
            for (const item of data) {
                if (item.id === fileData.id) {
                    if (!item.children) item.children = [];
                    item.children.push({
                        ...generateFileTemplate(),
                        fileType,
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
        if (fileType === FileTypes.FOLDER) {
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
        const original = this.state.folderTree?.data;
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
                                fileData.fileType === FileTypes.FILE
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

    public rename(fileData: ITreeNodeItem, callback: Function) {
        const original = this.state.folderTree?.data;
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
        const original = this.state.folderTree?.data;
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
        this.setState({
            folderTree: Object.assign(this.state.folderTree?.data, {
                data: treeData,
            }),
        });
    };
}
