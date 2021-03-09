export function searchById(id) {
    return (item) => item.id === id;
}


export interface IIndex<T> {
    id?: number;
    node?: T;
    parent?: number;
    prev?: number;
    next?: number;
    [x: string]: any; // default: children: []
}
export interface IIndexs<T> {
    [index: number]: IIndex<T>;
}
export interface ITreeInterface<T> {
    count: number;
    obj: T;
    indexes: IIndexs<T>;
    childNodeName: string;
}

export class TreeViewUtil<T = any> implements ITreeInterface<T> {
    count: number;
    obj: T;
    indexes: IIndexs<T>;
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
    }

    removeIndex(index: number) {
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

    updateChildren(children: IIndex<T>) {
        const self = this;
        children.forEach(function (id, i) {
            const index = self.getIndex(id);
            index.prev = index.next = null;
            if (i > 0) index.prev = children[i - 1];
            if (i < children.length - 1) index.next = children[i + 1];
        });
    }

    insert(obj: T, parentId: number, i: number) {
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

    insertBefore(obj: T, destId: number) {
        const destIndex = this.getIndex(destId);
        const parentId = destIndex.parent;
        const i = this.getIndex(parentId)[this.childNodeName].indexOf(destId);
        return this.insert(obj, parentId, i);
    }

    insertAfter(obj: T, destId: number) {
        const destIndex = this.getIndex(destId);
        const parentId = destIndex.parent;
        const i = this.getIndex(parentId)[this.childNodeName].indexOf(destId);
        return this.insert(obj, parentId, i + 1);
    }

    prepend(obj: T, destId: number) {
        return this.insert(obj, destId, 0);
    }

    append(obj: T, destId: number) {
        const destIndex = this.getIndex(destId);
        destIndex[this.childNodeName] = destIndex[this.childNodeName] || [];
        return this.insert(obj, destId, destIndex[this.childNodeName].length);
    }
}