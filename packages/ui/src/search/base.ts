import { getBEMElement, prefixClaName } from '@dtinsight/molecule-common';

export const defaultSearchClassName = prefixClaName('search');

export const baseInputClassName = getBEMElement(
    defaultSearchClassName,
    'input'
);

export const inputGroupClassName = getBEMElement(
    defaultSearchClassName,
    'group'
);

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

export const validationBaseInputClassName = getBEMElement(
    defaultSearchClassName,
    'base'
);

export const validationInfoInputClassName = getBEMElement(
    defaultSearchClassName,
    'info'
);

export const validationWarningInputClassName = getBEMElement(
    defaultSearchClassName,
    'warning'
);

export const validationErrorInputClassName = getBEMElement(
    defaultSearchClassName,
    'error'
);
