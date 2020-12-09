import * as React from 'react';
import Dialog from 'rc-dialog';
import { IDialogPropTypes } from 'rc-dialog/lib/IDialogPropTypes';

import { classNames, prefixClaName } from 'mo/common/className';

import { Button, IButton } from 'mo/components/button';

let mousePosition

const getClickPosition = (e: MouseEvent) => {
    mousePosition = {
        x: e.pageX,
        y: e.pageY,
    };
    setTimeout(() => {
        mousePosition = null;
    }, 100);
};

// 只有点击事件支持从鼠标位置动画展开
if (typeof window !== 'undefined' && window.document?.documentElement) {
    document.documentElement.addEventListener('click', getClickPosition, true);
}

export const destroyFns: Array<() => void> = [];

export interface IModalProps extends IDialogPropTypes {
    /** 点击确定回调 */
    onOk?: (e: React.MouseEvent<HTMLElement>) => void;
    /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调 */
    onCancel?: (e: React.SyntheticEvent<Element, Event>) => void;
    /** 垂直居中 */
    centered?: boolean;
    /** 确认按钮文字 */
    okText?: React.ReactNode;
    /** 取消按钮文字 */
    cancelText?: React.ReactNode;
    okButtonProps?: IButton;
    cancelButtonProps?: IButton;
}

export interface IModalFuncProps extends IDialogPropTypes {
    content?: React.ReactNode;
    onOk?: (...args: any[]) => any;
    onCancel?: (...args: any[]) => any;
    okButtonProps?: IButton;
    cancelButtonProps?: IButton;
    centered?: boolean;
    okText?: React.ReactNode;
    cancelText?: React.ReactNode;
    icon?: React.ReactNode;
    okCancel?: boolean;
    type?: string;
    autoFocusButton?: null | 'ok' | 'cancel';
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

    const renderFooter = () => {
        const { okText, cancelText } = props;
        return (
            <>
                <Button onClick={handleCancel} {...props.cancelButtonProps}>
                    {cancelText}
                </Button>
                <Button onClick={handleOk} {...props.okButtonProps}>
                    {okText}
                </Button>
            </>
        );
    };

    const {
        footer,
        visible,
        wrapClassName,
        centered,
        getContainer,
        closeIcon,
        focusTriggerAfterClose = true,
        ...restProps
    } = props;

    const prefixCls = prefixClaName('modal');
    const defaultFooter = renderFooter;

    const closeIconToRender = (
        <span className={`${prefixCls}-close-x`}>{closeIcon}</span>
    );

    const wrapClassNameExtended = classNames(wrapClassName, {
        [`${prefixCls}-centered`]: !!centered,
    });
    return (
        <Dialog
            {...restProps}
            getContainer={getContainer}
            prefixCls={prefixCls}
            wrapClassName={wrapClassNameExtended}
            footer={footer === undefined ? defaultFooter : footer}
            visible={visible}
            mousePosition={mousePosition}
            onClose={handleCancel}
            closeIcon={closeIconToRender}
            focusTriggerAfterClose={focusTriggerAfterClose}
        />
    );
};

Modal.defaultProps = {
    width: 520,
    transitionName: 'zoom',
    maskTransitionName: 'fade',
    visible: false,
};

export default Modal;
