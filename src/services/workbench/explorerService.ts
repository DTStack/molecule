import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    IPanelItem,
    IExplorer,
    IExplorerModel,
} from 'mo/model/workbench/explorer';
import { ITreeNodeItem, FileTypes, FileType } from 'mo/components/tree';
import { editorService } from 'mo';
import { TreeNodeModel } from 'mo/model';

export interface IIndex {
    id?: number;
    node?: ITreeNodeItem;
    parent?: number;
    prev?: number;
    next?: number;
    [x: string]: any; // default: children: []
}
export interface IIndexs {
    [index: number]: IIndex;
}
export interface ITreeInterface {
    count: number;
    obj: ITreeNodeItem;
    indexes: IIndexs;
    childNodeName: string;
}

export class TreeView implements ITreeInterface {
    count: number;
    obj: ITreeNodeItem;
    indexes: IIndexs;
    childNodeName: string;

    /**
     * 
     * @param obj // tree object
     * @param childNodeName // loop properties
     * @example indexes data structure example:
     * {
            [2]: {
                id: 2,
                node: {},
                parent: 1,
                prev: null,
                next: 3
            },
            ...
        }
     */
    constructor(obj, childNodeName = 'children') {
        this.count = 1; // nodes count
        this.obj = obj || { [childNodeName]: [] };
        this.indexes = {};
        this.childNodeName = childNodeName;
        this.generate(this.obj);
    }

    generate(obj) {
        const indexes = this.indexes;
        const startId = obj.id;
        const self = this;

        const index: IIndex = { id: startId, node: obj };
        indexes[startId + ''] = index;
        this.count++;

        if (obj[this.childNodeName]?.length) {
            walk(obj[this.childNodeName], index);
        }

        function walk(objs, parent) {
            const children: number[] = []; // current children ids
            objs.forEach(function (obj: ITreeNodeItem, i) {
                const index: IIndex = {};
                index.id = obj.id;
                index.node = obj;

                if (parent) index.parent = parent.id;

                indexes[obj.id + ''] = index;
                children.push(obj.id as number);
                self.count++;

                if (obj[self.childNodeName]?.length) {
                    walk(obj[self.childNodeName], index);
                }
            });
            parent[self.childNodeName] = children;

            children.forEach(function (id, i) {
                const index = indexes[id + ''];
                if (i > 0) index.prev = children[i - 1];
                if (i < children.length - 1) index.next = children[i + 1];
            });
        }

        return index;
    }

    getIndex(id) {
        const index = this.indexes[id + ''];
        if (index) return index;
    }

    removeIndex(index) {
        const self = this;
        del(index);

        function del(index) {
            delete self.indexes[index.id + ''];
            if (index[self.childNodeName]?.length) {
                index[self.childNodeName].forEach(function (child) {
                    del(self.getIndex(child));
                });
            }
        }
    }

    get(id: number) {
        const index = this.getIndex(id);
        if (index?.node) return index.node;
        return null;
    }

    remove(id: number) {
        const index = this.getIndex(id);
        const node = this.get(id);
        const parentIndex = this.getIndex(index.parent);
        const parentNode = this.get(index.parent);

        parentNode[this.childNodeName].splice(
            parentNode[this.childNodeName].indexOf(node),
            1
        );
        parentIndex[this.childNodeName].splice(
            parentIndex[this.childNodeName].indexOf(id),
            1
        );
        this.removeIndex(index);
        this.updateChildren(parentIndex[this.childNodeName]);

        return node;
    }

    update(id: number, extra = {}) {
        const index = this.getIndex(id);
        const node = this.get(id);
        const parentIndex = this.getIndex(index.parent);
        const parentNode = this.get(index.parent);
        parentNode[this.childNodeName].splice(
            parentNode[this.childNodeName].indexOf(node),
            1,
            {
                ...node,
                ...extra,
            }
        );
        this.updateChildren(parentIndex[this.childNodeName]);

        return node;
    }

    updateChildren(children: IIndex) {
        const self = this;
        children.forEach(function (id, i) {
            const index = self.getIndex(id);
            index.prev = index.next = null;
            if (i > 0) index.prev = children[i - 1];
            if (i < children.length - 1) index.next = children[i + 1];
        });
    }

    insert(obj: ITreeNodeItem, parentId: number, i: number) {
        const parentIndex = this.getIndex(parentId);
        const parentNode = this.get(parentId);

        const index = this.generate(obj);
        index.parent = parentId;

        parentNode[this.childNodeName] = parentNode[this.childNodeName] || [];
        parentIndex[this.childNodeName] = parentIndex[this.childNodeName] || [];

        parentNode[this.childNodeName].splice(i, 0, obj);
        parentIndex[this.childNodeName].splice(i, 0, index.id);

        this.updateChildren(parentIndex[this.childNodeName]);
        if (parentIndex.parent) {
            this.updateChildren(
                this.getIndex(parentIndex.parent)[this.childNodeName]
            );
        }

        return index;
    }

    insertBefore(obj: ITreeNodeItem, destId: number) {
        const destIndex = this.getIndex(destId);
        const parentId = destIndex.parent;
        const i = this.getIndex(parentId)[this.childNodeName].indexOf(destId);
        return this.insert(obj, parentId, i);
    }

    insertAfter(obj: ITreeNodeItem, destId: number) {
        const destIndex = this.getIndex(destId);
        const parentId = destIndex.parent;
        const i = this.getIndex(parentId)[this.childNodeName].indexOf(destId);
        return this.insert(obj, parentId, i + 1);
    }

    prepend(obj: ITreeNodeItem, destId: number) {
        return this.insert(obj, destId, 0);
    }

    append(obj: ITreeNodeItem, destId: number) {
        const destIndex = this.getIndex(destId);
        destIndex[this.childNodeName] = destIndex[this.childNodeName] || [];
        return this.insert(obj, destId, destIndex[this.childNodeName].length);
    }
}

export interface IExplorerService extends Component<IExplorer> {
    addPanel(panel: IPanelItem | IPanelItem[]): void;
    reset(): void;
    remove(index: number): void;

    getRootFolderByRootId(id: number): ITreeNodeItem | undefined;
    addRootFolder(folder?: ITreeNodeItem | ITreeNodeItem[]): void;
    removeRootFolder(id: number): void;
    updateFile(file: ITreeNodeItem, callback?: Function): void;
    newFile(id?: number, callback?: Function): void;
    newFolder(id: number, callback?: Function): void;
    rename(id: number, callback?: Function): void;
    delete(id: number, callback?: Function): void;
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

    /* ============================Panel============================ */
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
        const { data } = this.state;
        const next = [...data!];
        if (index > -1) {
            next.splice(index, 1);
        }
        this.setState({
            data: next,
        });
    }

    /* ============================Tree============================ */

    private getFileIconByExtensionName(
        name: string,
        fileType: FileType
    ): string {
        if (fileType === FileTypes.folder) return '';
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

    private getCurrentRootFolderAndIndex(id: number) {
        const currentRootFolder: ITreeNodeItem = this.getRootFolderById(id);
        const index = this.getRootFolderIndexByRootId(
            (currentRootFolder as any).id
        ) as number;
        return {
            index,
            currentRootFolder,
        };
    }

    public getRootFolderIndexByRootId(id: number): number | undefined {
        return this.state.folderTree?.data!.findIndex(
            (folder) => folder.id === id
        );
    }

    public getRootFolderByRootId(id: number): ITreeNodeItem | undefined {
        return this.state.folderTree?.data!.find((folder) => folder.id === id);
    }

    public getRootFolderById(id: number): ITreeNodeItem {
        let rootNode = {};
        this.state.folderTree?.data?.forEach((folder) => {
            const treeInstance = new TreeView(folder);
            if (treeInstance.get(id)) {
                rootNode = folder;
            }
        });
        return rootNode;
    }

    public addRootFolder(folder: ITreeNodeItem | ITreeNodeItem[]) {
        const { folderTree } = this.state;
        let next = [...folderTree?.data!];
        if (Array.isArray(folder)) {
            next = next?.concat(folder);
        } else {
            next?.push(folder);
        }
        this.setState({
            folderTree: { ...folderTree, data: next },
        });
    }

    public removeRootFolder(id: number) {
        const { folderTree } = this.state;
        const next = [...folderTree?.data!];
        const index = this.getRootFolderIndexByRootId(id) as number;
        if (index > -1) {
            next.splice(index, 1);
        }
        this.setState({
            folderTree: { ...folderTree, data: next },
        });
    }

    public updateFile(file, callback) {
        const { folderTree } = this.state;
        const { id, name, fileType } = file;
        const cloneData: ITreeNodeItem[] = folderTree?.data || [];
        const { currentRootFolder, index } = this.getCurrentRootFolderAndIndex(
            id
        );
        const tree = new TreeView(currentRootFolder);
        if (name) {
            tree.update(id, {
                ...file,
                icon: this.getFileIconByExtensionName(name, fileType),
                modify: false,
            });
        } else {
            tree.remove(id);
        }
        if (index > -1) cloneData[index] = tree.obj;
        this.setState({
            folderTree: { ...folderTree, data: cloneData },
        });
        if (callback) callback();
    }

    public rename(id: number, callback?: Function) {
        const { folderTree } = this.state;
        const cloneData: ITreeNodeItem[] = folderTree?.data || [];
        const { currentRootFolder, index } = this.getCurrentRootFolderAndIndex(
            id
        );
        const tree = new TreeView(currentRootFolder);
        tree.update(id, {
            modify: true,
        });
        if (index > -1) cloneData[index] = tree.obj;
        this.setState({
            folderTree: { ...folderTree, data: cloneData },
        });
        if (callback) callback();
    }

    public delete(id: number, callback?: Function) {
        const { folderTree } = this.state;
        const cloneData: ITreeNodeItem[] = folderTree?.data || [];
        const { currentRootFolder, index } = this.getCurrentRootFolderAndIndex(
            id
        );
        const tree = new TreeView(currentRootFolder);
        tree.remove(id);
        if (index > -1) cloneData[index] = tree.obj;
        this.setState({
            folderTree: { ...folderTree, data: cloneData },
        });
        if (callback) callback();
    }

    public newFile(parentId: number, callback?: Function) {
        const { folderTree } = this.state;
        const cloneData: ITreeNodeItem[] = folderTree?.data || [];
        const { currentRootFolder, index } = this.getCurrentRootFolderAndIndex(
            parentId
        );
        const tree = new TreeView(currentRootFolder);
        if (!parentId) {
            const tabData = {
                id: `${Math.random() * 10 + 1}`,
                name: `Untitled`,
                modified: false,
            };
            editorService.open(tabData);
        }
        tree.append(
            new TreeNodeModel({
                modify: true,
            }),
            parentId
        );
        if (index > -1) cloneData[index] = tree.obj;
        this.setState({
            folderTree: { ...folderTree, data: cloneData },
        });
        if (callback) callback();
    }

    public newFolder(parentId, callback: Function) {
        const { folderTree } = this.state;
        const cloneData: ITreeNodeItem[] = folderTree?.data || [];
        const { currentRootFolder, index } = this.getCurrentRootFolderAndIndex(
            parentId
        );
        const tree = new TreeView(currentRootFolder);
        tree.append(
            new TreeNodeModel({
                fileType: FileTypes.folder as FileType,
                modify: true,
            }),
            parentId
        );
        if (index > -1) cloneData[index] = tree.obj;
        this.setState({
            folderTree: { ...folderTree, data: cloneData },
        });
        if (callback) callback();
    }

    public onDropTree = (treeData: ITreeNodeItem[]) => {
        this.setState({
            folderTree: Object.assign(this.state.folderTree?.data, {
                data: treeData,
            }),
        });
    };
}
