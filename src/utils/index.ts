import { Children, cloneElement, isValidElement } from 'react';
import { merge, omitBy } from 'lodash-es';
import type { editor } from 'mo/monaco';
import type { Arraylize, IColorTheme, IconType, IMenuItemProps, IterableItem, RecordWithId, UniqueId } from 'mo/types';

export function searchById<T extends RecordWithId<Record<string, any>>>(id?: UniqueId) {
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
export function arraylize<T>(data: Arraylize<T>) {
    return Array.isArray(data) ? data : [data];
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

export function get<T extends RecordWithId<{ children?: T[] }>>(obj: Arraylize<T>, keyPath: string[]) {
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
    const nonEmptyArgs = args.filter((i) => Array.isArray(i) && i.length);
    if (!nonEmptyArgs.length) return [];
    return nonEmptyArgs.reduce((acc, cur) => {
        return acc.concat({ id: randomId(), type: 'divider' }, cur);
    });
}

/**
 * Converts an object of color values into CSS variables.
 *
 * @param {Record<string, string>} colors - The object containing color values.
 * @return {string} The CSS variables string.
 */
export function convertToCSSVars(colors: Record<string, string | null>): string {
    return `
        :root {
            ${Object.keys(colors)
                .map((id) => {
                    const color = colors[id];
                    if (!color) return '';
                    const colorName = id.replace('.', '-');
                    return `--${colorName}: ${color};`;
                })
                .filter(Boolean)
                .join('\n')}
        }
    `;
}

/**
 * Converts a token to a token theme rule.
 *
 * @param {IColorTheme['tokenColors']} token - The token to be converted.
 * @return {editor.ITokenThemeRule[]} The converted token theme rule.
 */
export function convertToToken(token?: IColorTheme['tokenColors']) {
    return token?.reduce<editor.ITokenThemeRule[]>((acc, cur) => {
        if (Array.isArray(cur.scope)) {
            cur.scope.forEach((s) => () => {
                if (!s) return;
                const target = acc.find((r) => r.token === s);
                if (target) {
                    Object.assign(target, {
                        ...cur.settings,
                    });
                } else {
                    acc.push({
                        token: s,
                        ...cur.settings,
                    });
                }
            });
        }
        return acc;
    }, []);
}

export function colorsToString(colors: Record<string, string | null>) {
    return omitBy(colors, (value) => !value) as Record<string, string>;
}

/**
 * It's converts a flatted object to a normal object,
 *  eg: { 'a.b': 'test' }, result is : { a: { b: 'test' }}
 * @param target flat target
 */
export function normalizeFlattedObject(target: Record<string, any>): Record<string, any> {
    let normalized: Record<string, any> = {};

    for (const prop in target) {
        if (prop) {
            const flattedProps = prop.split('.');
            let prevProp = '';
            let root: Record<string, any> = {};
            let prevObj = root;
            for (let i = 0; i < flattedProps.length; ++i) {
                if (i === flattedProps.length) break;
                const key = flattedProps[i];
                const current = { [key]: '' };

                if (prevProp) {
                    prevObj[prevProp] = current;
                }
                prevObj = current;
                prevProp = key;
                if (i === 0) {
                    root = current;
                }
            }
            prevObj[prevProp] = target[prop];
            normalized = merge(normalized, root);
        }
    }
    return normalized;
}
/**
 * It's converts an object to a flatted object,
 * eg: { a: { b: 'test' }}, result is : { 'a.b': 'test' }
 * @param target flat target
 */
export function flatObject(target: Record<string, any>): Record<string, any> {
    const flatted: Record<string, any> = {};
    const recurse = (parent: string, target: Record<string, any>) => {
        for (const prop in target) {
            if (prop) {
                const value = target[prop];
                const path = parent ? `${parent}.${prop}` : prop;
                if (typeof value === 'object') {
                    recurse(path, value);
                } else {
                    flatted[path] = value;
                }
            }
        }
    };
    recurse('', target);
    return flatted;
}

export function getPrevOrNext<T>(arr: T[], idx: number) {
    return arr[idx - 1] ?? arr[idx + 1];
}

export function isElementInParentView(ele: HTMLElement, parent: HTMLElement) {
    const elRect = ele.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    const left = elRect.left >= parentRect.left;
    const right = elRect.left + elRect.width <= parentRect.left + parentRect.width;
    const top = elRect.top >= parentRect.top;
    const bottom = elRect.top + elRect.height <= parentRect.top + parentRect.height;
    const overlay = left && right && top && bottom;
    let isWhichSide: 'right' | 'left' | 'top' | 'bottom' | undefined;
    if (!overlay) {
        if (!left) isWhichSide = 'left';
        else if (!right) isWhichSide = 'right';
        else if (!top) isWhichSide = 'top';
        else if (!bottom) isWhichSide = 'bottom';
    }
    return [overlay, isWhichSide] as const;
}

export function getNameForTitle(name: IterableItem['name']) {
    return typeof name === 'string' ? name : undefined;
}

// Taken from https://github.com/eclipse-theia/theia/blob/38eb31945130bb68fc793d4291d8d9f416541cdb/packages/monaco/src/browser/textmate/monaco-theme-registry.ts#L157-L169
export function normalizeColor(color: string | undefined): string | undefined {
    if (!color) {
        return undefined;
    }
    const normalized = String(color).replace(/^\#/, '').slice(0, 6);
    if (normalized.length < 6 || !normalized.match(/^[0-9A-Fa-f]{6}$/)) {
        // ignoring not normalized colors to avoid breaking token color indexes between monaco and vscode-textmate
        console.error(`Color '${normalized}' is NOT normalized, it must have 6 positions.`);
        return undefined;
    }
    return '#' + normalized;
}

/**
 * Given a string and a max length returns a shorted version. Shorting
 * happens at favorable positions - such as whitespace or punctuation characters.
 * The return value can be longer than the given value of `n`. Leading whitespace is always trimmed.
 * @Taken [from](https://github.com/microsoft/vscode/blob/b2e6cd0212dd5751bc852591608036fa6d76adbd/src/vs/base/common/strings.ts#L742-L765)
 */
export function lcut(text: string, n: number, prefix = '') {
    const trimmed = text.trimStart();

    if (trimmed.length < n) {
        return trimmed;
    }

    const re = /\b/g;
    let i = 0;
    while (re.test(trimmed)) {
        if (trimmed.length - re.lastIndex < n) {
            break;
        }

        i = re.lastIndex;
        re.lastIndex += 1;
    }

    if (i === 0) {
        return trimmed;
    }

    return prefix + trimmed.substring(i).trimStart();
}

export function matchKeyword(text: string, str: string) {
    const trimmed = text.trimStart();
    const startIdx = trimmed.toLocaleLowerCase().indexOf(str.toLocaleLowerCase());
    if (startIdx === -1) return '';
    const fullBefore = trimmed.substring(0, startIdx);
    const before = lcut(fullBefore, 26, '...');
    return before + trimmed.substring(startIdx);
}

/**
 * As same as the Array.find, but if the target is not found, it will push the default value into the array and return it
 */
export function find<T>(arr: T[], predicate: (item: T) => boolean, defaultValue: T): T {
    const target = arr.find(predicate);
    if (!target) {
        arr.push(defaultValue);
        return defaultValue;
    }
    return target;
}
