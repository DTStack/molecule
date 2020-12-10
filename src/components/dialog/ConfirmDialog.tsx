import * as React from 'react';
import { classNames, prefixClaName } from 'mo/common/className';
import Dialog, { IModalFuncProps } from './modal';
import ActionButton from './actionButton';

interface ConfirmDialogProps extends IModalFuncProps {
    afterClose?: () => void;
    close: (...args: any[]) => void;
    actions?: any;
}

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
        okText = 'Save',
        okButtonProps,
        cancelText = 'Cancel',
        cancelButtonProps,
        prefixCls,
        bodyStyle,
        closable = false,
        closeIcon,
        okCancel,
    } = props;
    const contentPrefixCls = `${prefixCls}-confirm`;
    const width = props.width || 416;
    const style = props.style || {};
    const mask = props.mask === undefined ? true : props.mask;
    // 默认为 false，保持旧版默认行为
    const maskClosable =
        props.maskClosable === undefined ? false : props.maskClosable;
    const transitionName = props.transitionName || 'zoom';
    const maskTransitionName = props.maskTransitionName || 'fade';

    const classString = classNames(
        contentPrefixCls,
        `${contentPrefixCls}-${props.type}`,
        props.className,
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
            prefixCls={prefixCls}
            className={classString}
            wrapClassName={classNames({
                [`${contentPrefixCls}-centered`]: !!props.centered,
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
            <div className={`${contentPrefixCls}-body`} style={bodyStyle}>
                <div className={`${contentPrefixCls}__icon`}> {icon} </div>
                <div className={`${contentPrefixCls}__message`}>
                    {props.title !== undefined && (
                        <span className={`${contentPrefixCls}__message--text`}>
                            {props.title}
                        </span>
                    )}
                    <div className={`${contentPrefixCls}__message--detail`}>
                        {props.content}
                    </div>
                </div>
                <div className={`${contentPrefixCls}__btns`}>
                {
                    actions === undefined ? (
                        <>
                            {cancelButton}
                            {<ActionButton
                                actionFn={onOk}
                                closeModal={close}
                                buttonProps={okButtonProps}
                            >
                                {okText}
                            </ActionButton>
                        }
                        </>
                    ) : actions
                }
                </div>
            </div>
        </Dialog>
    );
};

export default ConfirmDialog;
