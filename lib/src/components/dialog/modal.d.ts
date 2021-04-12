import * as React from 'react';
import { IDialogPropTypes } from 'rc-dialog/lib/IDialogPropTypes';
import { IButton } from 'mo/components/button';
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
export declare const destroyFns: Array<() => void>;
export declare const modalClassName: string;
declare const Modal: React.FC<IModalProps>;
export default Modal;
