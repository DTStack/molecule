import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    IPanelItem,
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

    /**
     *
     * @param treeData tree Data
     * @param id match by ID
     */
    private findParentNodeId(treeData, id) {
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
    }

    /**
     *
     * @param tree tree Data
     * @param id currentNode ID
     */
    private getPrevParentNode(tree, currentNodeId) {
        let prevParentNode = {};
        const parentIds: string[] = this.findParentNodeId(tree, currentNodeId);
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
    }

    /**
     * 生成规则：
     * id不能带 querySelector 非法字符（小数点、_、数字开头..）
     */
    private generateRandomId() {
        return Math.random().toString().split('.')[1];
    }
    /**
     * file item template
     */
    private generateFileTemplate() {
        return {
            id: `${this.generateRandomId()}`,
            name: '',
            modify: true,
        };
    }

    /**
     * match icon by file name extension
     * @param name fileName
     */
    private getFileIconByName(name: string): string {
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
                        ...this.generateFileTemplate(),
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
        const prevParentNode: ITreeNodeItem = this.getPrevParentNode(
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
                                    ? this.getFileIconByName(newName)
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
        const prevParentNode: ITreeNodeItem = this.getPrevParentNode(
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
