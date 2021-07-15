export function searchById(id) {
    return (item) => item.id === id;
}

interface BaseProps {
    id?: number;

    [key: string]: any;
}

export interface IIndex<T> {
    id?: number;
    node?: T;
    parent?: number;
    prev?: number | null;
    next?: number | null;
    [x: string]: any; // default: children: []
}
export interface IIndexs<T> {
    [index: string]: IIndex<T>;
}
export interface ITreeInterface<T extends BaseProps> {
    count: number;
    obj: T;
    indexes: IIndexs<T>;
    childNodeName: string;
}

export class TreeViewUtil<T extends BaseProps> implements ITreeInterface<T> {
    count: number;
    obj: T;
    indexes: IIndexs<T>;
    childNodeName: string;

    /**
     *
     * indexes data structure example:
     * ```ts
     * {
     *   [2]: {
     *      id: 2,
     *      node: {},
     *      parent: 1,
     *      prev: null,
     *      next: 3
     *   },
     *   ...
     * }
     * ```
     */
    constructor(obj?: T, childNodeName = 'children') {
        this.count = 1; // nodes count
        this.obj = obj || ({ [childNodeName]: [] } as any);
        this.indexes = {};
        this.childNodeName = childNodeName;
        this.generate(this.obj);
    }

    generate(obj: T) {
        const indexes = this.indexes;
        const startId = obj.id;
        const self = this;

        const index: IIndex<T> = { id: startId, node: obj };
        indexes[startId + ''] = index;
        this.count++;

        if (obj[this.childNodeName]?.length) {
            walk(obj[this.childNodeName], index);
        }

        function walk(objs, parent) {
            const children: number[] = []; // current children ids
            objs.forEach(function (obj: any, i) {
                const index: IIndex<T> = {};
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

    getIndex(id: number) {
        const index = this.indexes[id + ''];
        if (index) return index;
        return null;
    }

    removeIndex(index: IIndex<T>) {
        delete this.indexes[index.id + ''];
        if (index[this.childNodeName]?.length) {
            index[this.childNodeName].forEach((child) => {
                const childIndex = this.getIndex(child);
                childIndex && this.removeIndex(childIndex);
            });
        }
    }

    get(id: number) {
        const index = this.getIndex(id);
        if (index?.node) return index.node;
        return null;
    }

    remove(id: number) {
        const index = this.getIndex(id);
        if (index) {
            const node = this.get(id);
            const parentIndex = this.getIndex(index.parent!);
            const parentNode = this.get(index.parent!);

            if (parentNode && parentIndex) {
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
        }
        return null;
    }

    update(id: number, extra = {}) {
        const index = this.getIndex(id);
        const node = this.get(id);
        if (index) {
            const parentIndex = this.getIndex(index.parent!);
            const parentNode = this.get(index.parent!);
            if (parentNode && parentIndex) {
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
        }
        return null;
    }

    updateChildren(children: IIndex<T>) {
        const self = this;
        children.forEach(function (id, i) {
            const index = self.getIndex(id);
            if (index) {
                index.prev = index.next = null;
                if (i > 0) index.prev = children[i - 1];
                if (i < children.length - 1) index.next = children[i + 1];
            }
        });
    }

    insert(obj: T, parentId: number, i: number) {
        const parentIndex = this.getIndex(parentId);
        const parentNode = this.get(parentId);
        if (parentNode && parentIndex) {
            const index = this.generate(obj);
            index.parent = parentId;

            (parentNode as BaseProps)[this.childNodeName] =
                parentNode[this.childNodeName] || [];
            parentIndex[this.childNodeName] =
                parentIndex[this.childNodeName] || [];

            parentNode[this.childNodeName].splice(i, 0, obj);
            parentIndex[this.childNodeName].splice(i, 0, index.id);

            this.updateChildren(parentIndex[this.childNodeName]);
            if (parentIndex.parent) {
                const fartherParent = this.getIndex(parentIndex.parent);
                fartherParent &&
                    this.updateChildren(fartherParent[this.childNodeName]);
            }

            return index;
        }
        return null;
    }

    insertBefore(obj: T, destId: number) {
        const destIndex = this.getIndex(destId);
        if (destIndex) {
            const parentId = destIndex.parent;
            const parent = this.getIndex(parentId!);
            if (parent) {
                const i = parent[this.childNodeName].indexOf(destId);
                return this.insert(obj, parentId!, i);
            }
        }
        return null;
    }

    insertAfter(obj: T, destId: number) {
        const destIndex = this.getIndex(destId);
        if (destIndex) {
            const parentId = destIndex.parent;
            const parent = this.getIndex(parentId!);
            if (parent) {
                const i = parent[this.childNodeName].indexOf(destId);
                return this.insert(obj, parentId!, i + 1);
            }
        }
        return null;
    }

    prepend(obj: T, destId: number) {
        return this.insert(obj, destId, 0);
    }

    append(obj: T, destId: number) {
        const destIndex = this.getIndex(destId);
        if (destIndex) {
            destIndex[this.childNodeName] = destIndex[this.childNodeName] || [];
            return this.insert(
                obj,
                destId,
                destIndex[this.childNodeName].length
            );
        }
        return null;
    }
}
