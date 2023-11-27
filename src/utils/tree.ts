import { FileTypes, type TreeModel, type UniqueId } from 'mo/types';

interface TreeModelNode<T extends TreeModel<T>> {
    node: T;
    parent?: T;
}

/**
 * Traverse tree-like structures in javascript.
 * Since it not manipulates data, re-new dataModel each time data structure changed
 */
export class TreeHelper<T extends TreeModel<any>> {
    private map = new Map<UniqueId, TreeModelNode<T>>();

    constructor(data: T | T[]) {
        this.generate(Array.isArray(data) ? data : [data]);
    }

    private generate(arr: T[]) {
        const stack: TreeModelNode<T>[] = arr.map((i) => ({ node: i }));
        while (stack.length) {
            const item = stack.pop()!;
            if (!this.map.has(item.node.id)) {
                this.map.set(item.node.id, item);
            }
            if (Array.isArray(item.node.children)) {
                stack.push(...item.node.children.map((i) => ({ node: i, parent: item.node })));
            }
        }
    }

    public getNode(key: UniqueId) {
        return this.map.get(key)?.node;
    }

    public getParent(key: UniqueId) {
        return this.map.get(key)?.parent;
    }
}

export class TreeNodeModel<T> {
    constructor(
        /**
         * The unique id in tree node
         * @aware Please be aware of that id should be global unique on one tree
         */
        public id: UniqueId,
        /**
         * The name of this tree node
         */
        public name: string,
        /**
         * The type of this tree node
         */
        public fileType: FileTypes,
        /**
         * The children of this tree node
         */
        public children?: TreeNodeModel<T>[],
        /**
         * The icon of this tree node, which is rendered in front of the name
         */
        public icon?: string | JSX.Element,
        /**
         * The status of disabled
         */
        public disabled?: boolean,
        /**
         * Store the custom data
         */
        public data?: T
    ) {}
}

interface IRemoveNodeParams {
    /** tree data */
    tree: TreeNodeModel<any>[];
    /** source node item */
    source: TreeNodeModel<any>;
};

/**
 * Delete source node recursively
 * @param param0 tree
 * @param param1 source
 */
export function loopTreeRemoveNode({ tree, source }: IRemoveNodeParams) {
    let stop = false;
    let idx = 0;
    do {
        const item = tree[idx] || {};
        if (item?.id === source.id) {
            stop = true;
            tree.splice(idx, 1);
        } else {
            if (item?.children && item?.children?.length) {
                loopTreeRemoveNode({ tree: item?.children || [], source });
            }
        }
        idx += 1;
        if (idx + 1 > tree?.length) {
            stop = true;
        }
    } while (!stop);
};

/**
 * Add source node recursively
 * @param param0 tree
 * @param param1 source
 * @param param2 target
 */
export function loopTreeAddNode({ tree, source, target }: IRemoveNodeParams & { target: TreeNodeModel<any> }) {
    let stop = false;
    let idx = 0;
    do {
        const item = tree[idx] || {};
        if (item?.id === target.id) {
            stop = true;
            if ([FileTypes.Folder, FileTypes.RootFolder].includes(target.fileType) && idx !==0) {
                tree[idx].children?.push(source);
            } else {
                tree?.splice?.(idx, 0, source);
            }
        } else {
            if (item?.children && item?.children?.length) {
                loopTreeAddNode({ tree: item?.children || [], source, target });
            }
        }
        idx += 1;
        if (idx + 1 > tree?.length) {
            stop = true;
        }
    } while (!stop);
};
