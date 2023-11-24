import { Utils } from '@dtinsight/dt-utils/lib';
import { isEmpty } from 'lodash-es';
import { APP_PREFIX } from 'mo/const';

/**
 * This function help you prefix a css class name, default is molecule.
 * Example: prefix('test') will return 'molecule-test',
 * prefix('test', 'c') will return 'c-test'
 * @param name Default class name
 * @param prefix The prefix of class name you want to append
 */
export function prefix(name: string, prefix: string = APP_PREFIX) {
    return name ? `${prefix}-${name}` : '';
}

/**
 * As same as classnames
 */
export function classNames(...args: any[]) {
    if (isEmpty(args)) return;
    const classList: string[] = [];
    for (const arg of args) {
        if (!arg) continue;
        const argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
            classList.push(`${arg}`);
            continue;
        }
        if (argType === 'object') {
            if (arg.toString !== Object.prototype.toString) {
                classList.push(arg.toString());
                continue;
            }
            for (const key in arg) {
                if (Object.hasOwnProperty.call(arg, key) && arg[key]) {
                    classList.push(key);
                }
            }
        }
    }
    return classList.join(' ');
}

/**
 * Returns the className of font-family in mac
 * @returns
 */
export function getFontInMac() {
    return Utils.isMacOs() ? 'mac' : '';
}
