import {
    getBEMElement,
    getBEMModifier,
    prefixClaName,
} from '@dtinsight/molecule-common';

export const defaultTreeClassName = prefixClaName('tree');
export const defaultTreeNodeClassName = getBEMElement(
    defaultTreeClassName,
    'treenode'
);
export const activeTreeNodeClassName = getBEMModifier(
    defaultTreeNodeClassName,
    'active'
);

export const expandTreeNodeClassName = getBEMModifier(
    defaultTreeNodeClassName,
    'open'
);

export const unexpandTreeNodeClassName = getBEMModifier(
    defaultTreeNodeClassName,
    'close'
);

export const indentClassName = getBEMElement(defaultTreeClassName, 'indent');
export const indentGuideClassName = getBEMElement(indentClassName, 'guide');

export const treeNodeTitleClassName = getBEMElement(
    defaultTreeNodeClassName,
    'title'
);
