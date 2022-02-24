import {
    prefixClaName,
    getBEMElement,
    getBEMModifier,
} from 'mo/common/className';

export const defaultCollapseClassName = prefixClaName('collapse');
export const collapseItemClassName = getBEMElement(
    defaultCollapseClassName,
    'item'
);

export const collapsePaneClassName = getBEMElement(
    defaultCollapseClassName,
    'pane'
);

export const collapsingClassName = getBEMModifier(
    collapsePaneClassName,
    'collapsing'
);

export const collapseActiveClassName = getBEMModifier(
    defaultCollapseClassName,
    'active'
);
export const collapseHeaderClassName = getBEMElement(
    defaultCollapseClassName,
    'header'
);
export const collapseTitleClassName = getBEMElement(
    collapseHeaderClassName,
    'title'
);
export const collapseContentClassName = getBEMElement(
    defaultCollapseClassName,
    'content'
);
export const collapseExtraClassName = getBEMElement(
    defaultCollapseClassName,
    'extra'
);
