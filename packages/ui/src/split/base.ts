import {
    getBEMElement,
    getBEMModifier,
    prefixClaName,
} from '@dtinsight/molecule-common';

export const splitClassName = prefixClaName('split');

export const sashContainerClassName = getBEMElement(splitClassName, 'sash');
export const paneContainerClassName = getBEMElement(splitClassName, 'pane');
export const sashItemClassName = getBEMElement(sashContainerClassName, 'item');
export const paneItemClassName = getBEMElement(paneContainerClassName, 'item');

export const sashVerticalClassName = getBEMModifier(
    sashItemClassName,
    'vertical'
);
export const sashHorizontalClassName = getBEMModifier(
    sashItemClassName,
    'horizontal'
);
export const sashDisabledClassName = getBEMModifier(
    sashItemClassName,
    'disabled'
);
export const sashHoverClassName = getBEMModifier(sashItemClassName, 'hover');

export const paneItemVisibleClassName = getBEMModifier(
    paneItemClassName,
    'visible'
);
