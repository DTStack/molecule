import { immerable } from 'immer';
import { FileTypeLiteral, type TreeModel, type UniqueId } from 'mo/types';

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
    [immerable] = true;
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
        public fileType: FileTypeLiteral,
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
