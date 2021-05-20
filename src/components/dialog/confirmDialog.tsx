import * as React from 'react';
import {
    classNames,
    getBEMElement,
    getBEMModifier,
    prefixClaName,
} from 'mo/common/className';
import { Modal as Dialog, IModalFuncProps } from './modal';
import ActionButton from './actionButton';

interface ConfirmDialogProps extends IModalFuncProps {
    afterClose?: () => void;
    close: (...args: any[]) => void;
    actions?: React.ReactNode;
}

export const confirmClassName = prefixClaName('confirm');
const containerClassName = getBEMElement(confirmClassName, 'container');
const indicatorClassName = getBEMElement(confirmClassName, 'indicator');
const contentClassName = getBEMElement(confirmClassName, 'content');
const messageClassName = getBEMElement(confirmClassName, 'message');
const btnsClassName = getBEMElement(confirmClassName, 'btns');

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
        ...resetProps
    } = props;

    const confirmDescriperClassName = getBEMElement(
        confirmClassName,
        `${props.type}`
    );
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
                [getBEMModifier(
                    confirmClassName,
                    'centered'
                )]: !!props.centered,
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
