import * as React from 'react';
import Dialog from 'rc-dialog';
import { IDialogPropTypes } from 'rc-dialog/lib/IDialogPropTypes';

import { classNames, prefixClaName, getBEMModifier } from 'mo/common/className';
import { Icon } from 'mo/components/icon';
import { Button, IButton } from 'mo/components/button';

let mousePosition;

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
        cancelText = 'Cancel',
        okText = 'Save',
        ...restProps
    } = props;

    const prefixCls = prefixClaName('modal');

    const closeIconToRender = (
        <span className={getBEMModifier(`${prefixCls}-close`, 'x')}><Icon type="close"/></span>
    );

    const wrapClassNameExtended = classNames(wrapClassName, {
        [getBEMModifier(`${prefixCls}`, 'centered')]: !!centered,
    });
    console.log(props)
    return (
        <Dialog
            {...restProps}
            getContainer={getContainer}
            prefixCls={prefixCls}
            wrapClassName={wrapClassNameExtended}
            footer={footer === undefined ? (
                <>
                    <Button onClick={handleCancel} {...props.cancelButtonProps}>
                        {cancelText}
                    </Button>
                    <Button onClick={handleOk} {...props.okButtonProps}>
                        {okText}
                    </Button>
                </>
            ) : footer}
            visible={visible}
            mousePosition={mousePosition}
            onClose={handleCancel}
            closeIcon={closeIconToRender}
        />
    );
};

export default Modal;
