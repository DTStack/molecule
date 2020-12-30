import { getBEMElement, prefixClaName } from 'mo/common/className';
import { IStatusBarItem } from 'mo/model';

export const statusBarClassName = prefixClaName('statusBar');
export const leftItemsClassName = getBEMElement(
    statusBarClassName,
    'left-items'
);
export const rightItemsClassName = getBEMElement(
    statusBarClassName,
    'right-items'
);
export const itemClassName = getBEMElement(statusBarClassName, 'item');

export function sortByIndex(a: IStatusBarItem, b: IStatusBarItem) {
    return a.sortIndex - b.sortIndex;
}
