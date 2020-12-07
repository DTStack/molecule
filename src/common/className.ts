import { isEmpty } from 'loadsh';
import { APP_PREFIX } from 'mo/common/const';
/**
 * This function help you prefix a css class name, default is molecule.
 * Example: prefixClaName('test') will return 'molecule-test',
 * prefixClaName('test', 'c') will return 'c-test'
 * @param name Default class name
 * @param prefix The prefix of class name you want to append
 */
export function prefixClaName(name: string, prefix: string = APP_PREFIX) {
    return name ? `${prefix}-${name}` : '';
}

export function classNames(...args) {
    if (isEmpty(args)) return;
    let classList: string [] = [];
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
 * Element names may consist of Latin letters, digits, dashes and underscores.
 * CSS class is formed as block name plus two underscores plus element name: .block__elem
 * @param block
 * @param element
 */
export function getBEMElement(block: string, element: string) {
    return `${block}__${element}`;
}

/**
 * CSS class is formed as block’s or element’s name plus two dashes:
 * .block--mod or .block__elem--mod and .block--color-black with .block--color-red.
 * Spaces in complicated modifiers are replaced by dash.
 * @param blockOrElement
 * @param modifier
 */
export function getBEMModifier(blockOrElement: string, modifier: string) {
    return `${blockOrElement}--${modifier}`;
}
