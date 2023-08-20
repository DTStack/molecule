import type { TreeModel, UniqueId } from 'mo/types';

interface TreeModelNode<T extends TreeModel<T>> {
    node: T;
    parent?: T;
}

/**
 * Traverse tree-like structures in javascript.
 * Since it not manipulates data, re-new dataModel each time data structure changed
 */
export class TreeHelper<T extends TreeModel<T>> {
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
}
