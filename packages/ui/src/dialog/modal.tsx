import React, { useEffect } from 'react';
import Dialog from 'rc-dialog';
import { IDialogPropTypes } from 'rc-dialog/lib/IDialogPropTypes';

import { classNames } from '@dtinsight/molecule-common';
import {
    modalClassName,
    closeDialogDescriptorClassName,
    wrapDialogClassName,
} from './base';
import { ConfrimType } from './';
import { Icon } from '../icon';
import { Button, IButtonProps } from '../button';

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
    icon?: string | JSX.Element;
    content?: React.ReactNode;
    onOk?: (...args: any[]) => any;
    onCancel?: (...args: any[]) => void;
    okButtonProps?: IButtonProps;
    cancelButtonProps?: IButtonProps;
    centered?: boolean;
    okCancel?: boolean;
    type?: ConfrimType;
}

export const destroyFns: Array<() => void> = [];

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

const closeIconToRender = (
    <span className={closeDialogDescriptorClassName}>
        <Icon type="close" />
    </span>
);

export const Modal: React.FC<IModalProps> = (props: IModalProps) => {
    useEffect(() => {
        document.documentElement.addEventListener(
            'click',
            getClickPosition,
            true
        );
        return () => {
            document.documentElement.removeEventListener(
                'click',
                getClickPosition,
                true
            );
        };
    }, []);

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
        [wrapDialogClassName]: !!centered,
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
