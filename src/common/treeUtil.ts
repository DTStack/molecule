import cloneDeep from 'lodash/cloneDeep';
import type { UniqueId } from 'mo/common/types';
import logger from './logger';

interface IWithIdProps {
    id: UniqueId;

    children?: any[];
}

interface ITreeInterface<T> {
    /**
     * The count of tree node
     */
    count: number;
    /**
     * The Raw tree data
     */
    obj: T;
    /**
     * Returns the tree informations about the node found by id,
     * Contains
     * - the parent's id
     * - the previous node's id
     * - the next node's id
     * - and the collection of children's id
     * @param id
     */
    getHashMap(id: UniqueId): IMapNode<T> | null;
    /**
     * Returns the node found in tree by id
     * @param id
     */
    getNode(id: UniqueId): T | null;
    /**
     * Remove the node found in tree by id
     * @param id
     */
    removeNode(id: UniqueId): T | null;
    /**
     * Update the node found in tree by id
     * @param id
     * @param extra
     */
    updateNode(id: UniqueId, extra: T): T | null;
    /**
     * Insert an object whose parent node is found by parentId and position is i into the tree
     * @param obj
     * @param parentId
     * @param i
     */
    insertNode(obj: T, parentId: UniqueId, i: number): IMapNode<T> | null;
    /**
     * Insert an object before the destiny node whose id is `destId`
     * @param obj
     * @param destId
     */
    insertBefore(obj: T, destId: UniqueId): IMapNode<T> | null;
    /**
     * Insert an object after the destiny node whose id is `destId`
     * @param obj
     * @param destId
     */
    insertAfter(obj: T, destId: UniqueId): IMapNode<T> | null;
    /**
     * Prepend an object into tree
     * @param obj
     * @param destId
     */
    prepend(obj: T, destId: UniqueId): IMapNode<T> | null;
    /**
     * Append an object into tree
     * @param obj
     * @param destId
     */
    append(obj: T, destId: UniqueId): IMapNode<T> | null;
}

interface IMapNode<T> {
    id: string;
    node: T;
    parent?: string;
    children?: string[];
    prev?: string;
    next?: string;
}

/**
 * A tool for flating tree node.
 *
 * It's convenient to get the relationship between tree nodes.
 *
 * How to get the parent node by current node id
 * @example
 * ```ts
 * const tree = new TreeViewUtil(treeData); // Initialize the tree utils
 * const currentHash = tree.getHashMap(currentNodeId); // Get the current hashmap by current node's id
 * const parentNodeId = currentHash.parent; // This is the parent node's id
 * const parentNode = tree.getNode(parentNodeId); // This is the parent node
 * ```
 *
 * @aware There should be aware of that the id of tree node must be global unique
 */
export class TreeViewUtil<T extends IWithIdProps = any>
    implements ITreeInterface<T> {
    protected hashMap: Map<string, IMapNode<T>> = new Map();
    count: number = 0;
    obj: T;

    constructor(obj: T) {
        this.obj = cloneDeep(obj);
        this.count = 1;
        this.generate(this.obj);
    }

    private addMap(key: string, value: IMapNode<T>) {
        if (this.hashMap.has(key)) {
            logger.error(
                `There is already a data whose key is ${key} in hashMap`
            );
            return;
        } else {
            this.hashMap.set(key, value);
            this.count += 1;
        }
    }

    private generateChildren(children: T[], parent: IMapNode<T>) {
        const childrenIds: string[] = [];
        children.forEach((child) => {
            const mapNode: IMapNode<T> = {
                id: child.id.toString(),
                node: child,
            };
            if (parent.id) {
                mapNode.parent = parent.id;
            }
            this.addMap(child.id.toString(), mapNode);

            childrenIds.push(child.id.toString());

            if (child.children?.length) {
                this.generateChildren(child.children, mapNode);
            }
        });

        parent.children = childrenIds;

        childrenIds.forEach((id, i) => {
            const hash = this.hashMap.get(id)!;
            if (i > 0) {
                hash.prev = childrenIds[i - 1];
            }
            if (i < childrenIds.length - 1) {
                hash.next = childrenIds[i + 1];
            }
        });
    }

    // Generate hashMap by object
    private generate(obj: T) {
        const rootId = obj.id.toString();

        const mapNode: IMapNode<T> = { id: rootId, node: obj };
        this.addMap(rootId, mapNode);

        if (obj.children?.length) {
            this.generateChildren(obj.children, mapNode);
        }

        return mapNode;
    }

    getHashMap = (id: UniqueId) => {
        return this.hashMap.get(id.toString()) || null;
    };

    private removeHashMap = (id: UniqueId) => {
        const source = this.hashMap.get(id.toString());
        if (source) {
            this.hashMap.delete(id.toString());
            if (source.children?.length) {
                source.children.forEach((child) => {
                    this.removeHashMap(child);
                });
            }
        }
    };

    getNode = (id: UniqueId) => {
        const hash = this.getHashMap(id);
        return hash?.node || null;
    };

    removeNode = (id: UniqueId) => {
        const hash = this.getHashMap(id);
        if (hash) {
            const { node, parent } = hash;
            if (!parent) {
                logger.error("You're going to remove a root node");
                return null;
            }
            const parentHash = this.getHashMap(parent);
            const parentNode = parentHash?.node;

            if (parentNode) {
                parentNode.children?.splice(
                    parentNode.children.indexOf(node),
                    1
                );

                parentHash!.children?.splice(
                    parentHash!.children.indexOf(id.toString()),
                    1
                );
                this.removeHashMap(id);
                this.updateChildren(parentHash!.children);

                return node;
            }
        }
        return null;
    };

    updateNode = (id: UniqueId, extra: Omit<T, 'id' | 'children'>) => {
        const node = this.getNode(id);
        if (node) {
            Object.assign(node, extra);
            return node;
        }
        return null;
    };

    private updateChildren(children: string[] = []) {
        children.forEach((id, index) => {
            const hash = this.getHashMap(id);
            if (hash) {
                hash.prev = hash.next = undefined;
                if (index > 0) {
                    hash.prev = children[index - 1];
                }
                if (index < children.length - 1) {
                    hash.next = children[index + 1];
                }
            }
        });
    }

    insertNode = (obj: T, parentId: UniqueId, i: number) => {
        const parentHash = this.getHashMap(parentId);
        if (parentHash) {
            const parentNode = parentHash.node;
            const hashMap = this.generate(obj);

            hashMap.parent = parentId.toString();

            parentNode.children = parentNode.children || [];
            parentHash.children = parentHash.children || [];

            parentNode.children.splice(i, 0, obj);
            parentHash.children.splice(i, 0, hashMap.id);

            this.updateChildren(parentHash.children);

            if (parentHash.parent) {
                const grandParent = this.getHashMap(parentHash.parent);
                grandParent && this.updateChildren(grandParent.children);
            }

            return hashMap;
        }
        return null;
    };

    insertBefore = (obj: T, destId: UniqueId) => {
        const destinyHash = this.getHashMap(destId);
        if (destinyHash) {
            const parentId = destinyHash.parent;
            if (!parentId) {
                logger.error(
                    "You're going to insert a obj before the root node"
                );
                return null;
            }
            const parentHash = this.getHashMap(parentId);
            if (parentHash) {
                const index = (parentHash.children || []).indexOf(
                    destId.toString()
                );
                return this.insertNode(obj, parentId, index);
            }
        }
        return null;
    };

    insertAfter = (obj: T, destId: UniqueId) => {
        const destinyHash = this.getHashMap(destId);
        if (destinyHash) {
            const parentId = destinyHash.parent;
            if (!parentId) {
                logger.error(
                    "You're going to insert a obj after the root node"
                );
                return null;
            }
            const parentHash = this.getHashMap(parentId);
            if (parentHash) {
                const index = (parentHash.children || []).indexOf(
                    destId.toString()
                );
                return this.insertNode(obj, parentId, index + 1);
            }
        }
        return null;
    };

    prepend = (obj: T, destId: UniqueId) => {
        return this.insertNode(obj, destId, 0);
    };

    append = (obj: T, destId: UniqueId) => {
        const destinyHash = this.getHashMap(destId);
        if (destinyHash) {
            destinyHash.children = destinyHash.children || [];
            return this.insertNode(obj, destId, destinyHash.children.length);
        }
        return null;
    };
}
