import * as React from 'react';
import {
    classNames,
    getBEMElement,
    getBEMModifier,
    prefixClaName,
} from 'mo/common/className';
import Dialog, { IModalFuncProps } from './modal';
import ActionButton from './actionButton';

interface ConfirmDialogProps extends IModalFuncProps {
    afterClose?: () => void;
    close: (...args: any[]) => void;
    actions?: React.ReactNode;
}

export const confirmClassName = prefixClaName('confirm');

const ConfirmDialog = (props: ConfirmDialogProps) => {
    const {
        actions,
        icon,
        onCancel,
        onOk,
        close,
        zIndex,
        afterClose,
        visible,
        keyboard,
        centered,
        getContainer,
        maskStyle,
        okText = 'Ok',
        okButtonProps,
        cancelText = 'Cancel',
        cancelButtonProps,
        bodyStyle,
        closable = true,
        closeIcon,
        className,
        okCancel,
        width = 520,
        style = {},
        mask = true,
        maskClosable = false,
        transitionName = 'zoom',
        maskTransitionName = 'fade',
    } = props;

    const confirmDescriperClassName = getBEMElement(
        confirmClassName,
        `${props.type}`
    );
    const containerClassName = getBEMElement(confirmClassName, 'container');
    const indicatorClassName = getBEMElement(confirmClassName, 'indicator');
    const contentClassName = getBEMElement(confirmClassName, 'content');
    const messageClassName = getBEMElement(confirmClassName, 'message');
    const btnsClassName = getBEMElement(confirmClassName, 'btns');

    const classString = classNames(
        confirmClassName,
        confirmDescriperClassName,
        className
    );

    const cancelButton = okCancel && (
        <ActionButton
            actionFn={onCancel}
            closeModal={close}
            buttonProps={cancelButtonProps}
        >
            {cancelText}
        </ActionButton>
    );

    return (
        <Dialog
            prefixCls={confirmClassName}
            className={classString}
            wrapClassName={classNames({
                [getBEMModifier(confirmClassName, 'centered')]: !!props.centered,
            })}
            onCancel={() => close({ triggerCancel: true })}
            visible={visible}
            title=""
            transitionName={transitionName}
            footer=""
            maskTransitionName={maskTransitionName}
            mask={mask}
            maskClosable={maskClosable}
            maskStyle={maskStyle}
            style={style}
            width={width}
            zIndex={zIndex}
            afterClose={afterClose}
            keyboard={keyboard}
            centered={centered}
            getContainer={getContainer}
            closable={closable}
            closeIcon={closeIcon}
        >
            <div className={containerClassName} style={bodyStyle}>
                <div className={contentClassName}>
                    <div className={indicatorClassName}> {icon} </div>
                    <div className={messageClassName}>
                        {props.title !== undefined && (
                            <span
                                className={getBEMModifier(
                                    messageClassName,
                                    'text'
                                )}
                            >
                                {props.title}
                            </span>
                        )}
                        <div
                            className={getBEMModifier(
                                messageClassName,
                                'detail'
                            )}
                        >
                            {props.content}
                        </div>
                    </div>
                </div>
                <div className={btnsClassName}>
                    {actions === undefined ? (
                        <>
                            {cancelButton}
                            {
                                <ActionButton
                                    actionFn={onOk}
                                    closeModal={close}
                                    buttonProps={okButtonProps}
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
