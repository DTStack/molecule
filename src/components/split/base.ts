import {
    getBEMElement,
    getBEMModifier,
    prefixClaName,
} from 'mo/common/className';

export const splitClassName = prefixClaName('split');

export const splitDraggingClassName = getBEMModifier(
    splitClassName,
    'dragging'
);
export const splitVerticalClassName = getBEMModifier(
    splitClassName,
    'vertical'
);
export const splitHorizontalClassName = getBEMModifier(
    splitClassName,
    'horizontal'
);

export const paneItemClassName = getBEMElement(splitClassName, 'pane');
export const sashItemClassName = getBEMElement(splitClassName, 'sash');

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
