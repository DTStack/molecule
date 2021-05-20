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
import { Button, IButtonProps } from 'mo/components/button';
export interface IModalProps extends IDialogPropTypes {
    onOk?: (e: React.MouseEvent<HTMLElement>) => void;
    onCancel?: (e: React.SyntheticEvent<Element, Event>) => void;
    centered?: boolean;
    cancelText?: React.ReactNode;
    okText?: React.ReactNode;
    okButtonProps?: IButtonProps;
    cancelButtonProps?: IButtonProps;
    okCancel?: boolean;
}
export interface IModalFuncProps extends IDialogPropTypes {
    cancelText?: React.ReactNode;
    okText?: React.ReactNode;
    icon?: React.ReactNode;
    content?: React.ReactNode;
    onOk?: (...args: any[]) => any;
    onCancel?: (...args: any[]) => void;
    okButtonProps?: IButtonProps;
    cancelButtonProps?: IButtonProps;
    centered?: boolean;
    okCancel?: boolean;
    type?: string;
}

export const destroyFns: Array<() => void> = [];
export const modalClassName = prefixClaName('modal');

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

const closeClassName = getBEMElement(modalClassName, 'close');
const closeDescriptorClassName = getBEMModifier(`${closeClassName}`, 'x');
const closeIconToRender = (
    <span className={closeDescriptorClassName}>
        <Icon type="close" />
    </span>
);

export const Modal: React.FC<IModalProps> = (props: IModalProps) => {
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
        cancelText = 'cancel',
        okText = 'ok',
        ...restProps
    } = props;

    const wrapClassNameExtended = classNames(wrapClassName, {
        [getBEMModifier(`${modalClassName}`, 'centered')]: !!centered,
    });

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
