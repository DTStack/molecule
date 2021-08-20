import {
    getBEMElement,
    getBEMModifier,
    prefixClaName,
} from 'mo/common/className';

export const modalClassName = prefixClaName('modal');

export const confirmClassName = prefixClaName('confirm');

export const closeDialogClassName = getBEMElement(modalClassName, 'close');

export const closeDialogDescriptorClassName = getBEMModifier(
    closeDialogClassName,
    'x'
);
export const wrapDialogClassNameExtended = getBEMModifier(
    `${modalClassName}`,
    'centered'
);

export const containerConfirmClassName = getBEMElement(
    confirmClassName,
    'container'
);

export const indicatorConfirmClassName = getBEMElement(
    confirmClassName,
    'indicator'
);

export const contentConfirmClassName = getBEMElement(
    confirmClassName,
    'content'
);

export const messageConfirmClassName = getBEMElement(
    confirmClassName,
    'message'
);

export const btnsConfirmClassName = getBEMElement(confirmClassName, 'btns');

export const centeredConfirmClassName = getBEMModifier(
    confirmClassName,
    'centered'
);

export const textConfirmClassName = getBEMModifier(
    messageConfirmClassName,
    'text'
);

export const detailConfirmClassName = getBEMModifier(
    messageConfirmClassName,
    'detail'
);
