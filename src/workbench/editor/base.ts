import { getBEMElement, prefixClaName } from 'mo/common/className';

export const defaultEditorClassName = prefixClaName('editor');
export const groupClassName = getBEMElement(defaultEditorClassName, 'group');
export const groupContainerClassName = getBEMElement(
    defaultEditorClassName,
    'group-container'
);
export const groupHeaderClassName = getBEMElement(
    defaultEditorClassName,
    'group-header'
);
export const groupTabsClassName = getBEMElement(
    defaultEditorClassName,
    'group-tabs'
);
export const groupActionsClassName = getBEMElement(
    defaultEditorClassName,
    'group-actions'
);
export const groupActionsItemClassName = getBEMElement(
    defaultEditorClassName,
    'group-actions-item'
);

export const groupBreadcrumbClassName = getBEMElement(
    defaultEditorClassName,
    'group-breadcrumb'
);
