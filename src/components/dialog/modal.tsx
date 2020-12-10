import * as React from 'react';
import Dialog from 'rc-dialog';
import { IDialogPropTypes } from 'rc-dialog/lib/IDialogPropTypes';

import {
    classNames,
    prefixClaName,
    getBEMElement,
    getBEMModifier,
} from 'mo/common/className';
import { Icon } from 'mo/components/icon';
import { Button, IButton } from 'mo/components/button';

let mousePosition: any;

const getClickPosition = (e: MouseEvent) => {
    mousePosition = {
        x: e.pageX,
        y: e.pageY,
    };
    setTimeout(() => {
        mousePosition = null;
    }, 100);
};

if (typeof window !== 'undefined' && window.document?.documentElement) {
    document.documentElement.addEventListener('click', getClickPosition, true);
}

export const destroyFns: Array<() => void> = [];

export const modalClassName = prefixClaName('modal');

export interface IModalProps extends IDialogPropTypes {
    onOk?: (e: React.MouseEvent<HTMLElement>) => void;
    onCancel?: (e: React.SyntheticEvent<Element, Event>) => void;
    centered?: boolean;
    cancelText?: React.ReactNode;
    okText?: React.ReactNode;
    okButtonProps?: IButton;
    cancelButtonProps?: IButton;
    okCancel?: boolean;
}

export interface IModalFuncProps extends IDialogPropTypes {
    cancelText?: React.ReactNode;
    okText?: React.ReactNode;
    icon?: React.ReactNode;
    content?: React.ReactNode;
    onOk?: (...args: any[]) => any;
    onCancel?: (...args: any[]) => void;
    okButtonProps?: IButton;
    cancelButtonProps?: IButton;
    centered?: boolean;
    okCancel?: boolean;
    type?: string;
}

const Modal: React.FC<IModalProps> = (props) => {
    const handleCancel = (e: React.SyntheticEvent<Element, Event>) => {
        const { onCancel } = props;
        onCancel?.(e);
    };

    const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { onOk } = props;
        onOk?.(e);
    };
    const {
        footer,
        visible,
        wrapClassName,
        centered,
        getContainer,
        closeIcon,
        cancelText = 'Ok',
        okText = 'Save',
        ...restProps
    } = props;

    const wrapClassNameExtended = classNames(wrapClassName, {
        [getBEMModifier(`${modalClassName}`, 'centered')]: !!centered,
    });

    const closeClassName = getBEMElement(modalClassName, 'close');
    const closeDescriptorClassName = getBEMModifier(`${closeClassName}`, 'x');

    const closeIconToRender = (
        <span className={closeDescriptorClassName}>
            <Icon type="close" />
        </span>
    );

    const renderFooter = () => {
        const { footer, cancelButtonProps, okButtonProps } = props;
        if (footer !== undefined) return footer;
        return (
            <>
                <Button onClick={handleCancel} {...cancelButtonProps}>
                    {cancelText}
                </Button>
                <Button onClick={handleOk} {...okButtonProps}>
                    {okText}
                </Button>
            </>
        );
    };
    return (
        <Dialog
            {...restProps}
            getContainer={getContainer}
            prefixCls={modalClassName}
            wrapClassName={wrapClassNameExtended}
            footer={renderFooter()}
            visible={visible}
            mousePosition={mousePosition}
            onClose={handleCancel}
            closeIcon={closeIconToRender}
        />
    );
};

export default Modal;
