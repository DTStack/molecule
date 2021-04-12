export declare function searchById(id: any): (item: any) => boolean;
export interface IIndex<T> {
    id?: number;
    node?: T;
    parent?: number;
    prev?: number;
    next?: number;
    [x: string]: any;
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
export declare class TreeViewUtil<T = any> implements ITreeInterface<T> {
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
    constructor(obj?: any, childNodeName?: string);
    generate(obj: any): IIndex<T>;
    getIndex(id: number): any;
    removeIndex(index: number): void;
    get(id: number): any;
    remove(id: number): any;
    update(id: number, extra?: {}): any;
    updateChildren(children: IIndex<T>): void;
    insert(obj: T, parentId: number, i: number): IIndex<T>;
    insertBefore(obj: T, destId: number): IIndex<T>;
    insertAfter(obj: T, destId: number): IIndex<T>;
    prepend(obj: T, destId: number): IIndex<T>;
    append(obj: T, destId: number): IIndex<T>;
}
