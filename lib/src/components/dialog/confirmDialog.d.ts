import * as React from 'react';
import { IModalFuncProps } from './modal';
interface ConfirmDialogProps extends IModalFuncProps {
    afterClose?: () => void;
    close: (...args: any[]) => void;
    actions?: React.ReactNode;
}
export declare const confirmClassName: string;
declare const ConfirmDialog: (props: ConfirmDialogProps) => JSX.Element;
export default ConfirmDialog;
