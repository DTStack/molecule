import { Children, cloneElement, isValidElement } from 'react';
import type { ArraylizeOrSingle, IconType, IMenuItemProps, RecordWithId, UniqueId } from 'mo/types';

export function searchById<T extends RecordWithId<Record<string, any>>>(id: UniqueId) {
    return (item: T) => item.id === id;
}

type sortIndexRequired = { sortIndex?: number; [key: string]: any };
/**
 * The smaller the sort number is, the more front the order is
 */
export function sortByIndex(a: sortIndexRequired, b: sortIndexRequired) {
    const prev = a.sortIndex || 0;
    const next = b.sortIndex || 0;
    return prev - next;
}

/**
 * Clone react children props
 * @param children React.ReactNode
 * @param props Parent props
 */
export function cloneReactChildren<P>(children: React.ReactNode, props: P): React.ReactNode {
    return Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child, props);
        }
        return child;
    });
}

/**
 * Make an object to be obejct array
 */
export function arraylize<T>(data: ArraylizeOrSingle<T>) {
    return Array.isArray(data) ? data : [data];
}

/**
 * Extract ids from arr
 */
export function extract<T extends { id: UniqueId }>(arr: T[], ids: UniqueId[]) {
    return arr.filter((i) => !ids.includes(i.id));
}

/**
 * Classify arr into two parts
 */
export function classify<T>(arr: T[], predicate: (value: T, index: number) => boolean) {
    return classifyBy(arr, (...args) => Number(!predicate(...args)));
}

/**
 * Classify arr into multiply parts
 */
export function classifyBy<T>(arr: T[], predicate: (value: T, index: number) => number) {
    return arr.reduce<T[][]>((acc, cur, index) => {
        const idx = predicate(cur, index);
        acc[idx] ??= [];
        acc[idx].push(cur);
        return acc;
    }, []);
}

export function get<T extends RecordWithId<{ children?: T[] }>>(
    obj: ArraylizeOrSingle<T>,
    keyPath: string[]
) {
    let root = { children: arraylize(obj) } as T;
    const stack = [...keyPath];
    while (stack.length) {
        const item = stack.shift();
        const next = root.children?.find((i) => i.id === item);
        if (!next) break;
        root = next;
    }
    return root as T;
}

/**
 * get the next icon
 * @param prev previous icon
 * @param checked
 */
export function toggleNextIcon(prev?: IconType, checked?: boolean) {
    if (typeof checked === 'boolean') {
        return checked === true ? 'check' : undefined;
    }
    if (typeof prev === 'string' || typeof prev === 'undefined') {
        return prev === 'check' ? undefined : 'check';
    }
    // JSX.Element doesn't change icon status
    return prev as IconType;
}

export function randomId() {
    return Date.now() + Math.round(Math.random() * 1000);
}

export function concatMenu(...args: IMenuItemProps[][]) {
    const nonEmptyArgs = args.filter((i) => i.length);
    if (!nonEmptyArgs.length) return [];
    return nonEmptyArgs.reduce((acc, cur) => {
        return acc.concat({ id: randomId(), type: 'divider' }, cur);
    });
}
