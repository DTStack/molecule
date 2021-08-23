import * as React from 'react';
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
        okText = 'delete',
        okButtonProps,
        cancelText = 'cancel',
        cancelButtonProps,
        bodyStyle,
        closable = true,
        className,
        okCancel,
        width = 520,
        style = {},
        mask = true,
        maskClosable = false,
        transitionName = 'zoom',
        maskTransitionName = 'fade',
        type,
        ...resetProps
    } = props;

    const confirmDescriperClassName = iconConfirmClassName(type);

    const classString = classNames(
        confirmClassName,
        confirmDescriperClassName,
        className
    );
    const cancelButton = okCancel && (
        <ActionButton
            actionFn={onCancel}
            closeModal={close}
            {...cancelButtonProps}
        >
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
            title=""
            transitionName={transitionName}
            footer=""
            maskTransitionName={maskTransitionName}
            mask={mask}
            maskClosable={maskClosable}
            style={style}
            width={width}
            closable={closable}
            {...resetProps}
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
                                    closeModal={close}
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
