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

export function classNames(...names) {
    return names.filter((name) => !!name).join(' ');
}
