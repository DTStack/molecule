import { getBEMElement, prefixClaName } from 'mo/common/className';

export const defaultSearchClassName = prefixClaName('search');

export const searchToolBarClassName = getBEMElement(
    defaultSearchClassName,
    'toolbar'
);

export const replaceContainerClassName = getBEMElement(
    defaultSearchClassName,
    'replace'
);

export const searchTargetContainerClassName = getBEMElement(
    defaultSearchClassName,
    'target'
);

export const replaceBtnClassName = getBEMElement(
    replaceContainerClassName,
    'button'
);
