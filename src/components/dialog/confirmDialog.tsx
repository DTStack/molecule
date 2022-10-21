import React from 'react';
import { classNames } from 'mo/common/className';
import {
    confirmClassName,
    containerConfirmClassName,
    indicatorConfirmClassName,
    contentConfirmClassName,
    messageConfirmClassName,
    btnsConfirmClassName,
    textConfirmClassName,
    centeredConfirmClassName,
    detailConfirmClassName,
    iconConfirmClassName,
} from './base';
import { Modal as Dialog, IModalFuncProps } from './modal';
import ActionButton from './actionButton';

interface ConfirmDialogProps extends IModalFuncProps {
    afterClose?: () => void;
    close: (...args: any[]) => void;
    actions?: React.ReactNode;
}

const ConfirmDialog = (props: ConfirmDialogProps) => {
    const {
        actions,
        icon,
        onCancel,
        onOk,
        close,
        maskStyle,
        okText = 'Ok',
        okButtonProps,
        cancelText = 'Cancel',
        cancelButtonProps,
        okCancel,
        bodyStyle,
        closable = false,
        className,
        width = 520,
        style = {},
        mask = true,
        maskClosable = false,
        transitionName = 'zoom',
        maskTransitionName = 'fade',
        type,
        visible,
    } = props;

    const confirmDescriperClassName = iconConfirmClassName(type);
    const classString = classNames(
        confirmClassName,
        confirmDescriperClassName,
        className
    );

    const cancelButton = okCancel && (
        <ActionButton actionFn={onCancel} close={close} {...cancelButtonProps}>
            {cancelText}
        </ActionButton>
    );

    return (
        <Dialog
            prefixCls={confirmClassName}
            className={classString}
            wrapClassName={classNames({
                [centeredConfirmClassName]: !!props.centered,
            })}
            onCancel={() => close({ triggerCancel: true })}
            transitionName={transitionName}
            maskTransitionName={maskTransitionName}
            mask={mask}
            maskClosable={maskClosable}
            style={style}
            width={width}
            closable={closable}
            footer=""
            title=""
            maskStyle={maskStyle}
            visible={visible}
        >
            <div className={containerConfirmClassName} style={bodyStyle}>
                <div className={contentConfirmClassName}>
                    <div className={indicatorConfirmClassName}> {icon} </div>
                    <div className={messageConfirmClassName}>
                        {props.title !== undefined && (
                            <span className={textConfirmClassName}>
                                {props.title}
                            </span>
                        )}
                        <div className={detailConfirmClassName}>
                            {props.content}
                        </div>
                    </div>
                </div>
                <div className={btnsConfirmClassName}>
                    {actions === undefined ? (
                        <>
                            {cancelButton}
                            {
                                <ActionButton
                                    actionFn={onOk}
                                    close={close}
                                    {...okButtonProps}
                                >
                                    {okText}
                                </ActionButton>
                            }
                        </>
                    ) : (
                        actions
                    )}
                </div>
            </div>
        </Dialog>
    );
};

export default ConfirmDialog;
