import { IModalFuncProps } from './modal';
export declare type ModalFunc = (props: IModalFuncProps) => {
    destroy: () => void;
};
export interface ModalStaticFunctions {
    warn: ModalFunc;
    warning: ModalFunc;
    confirm: ModalFunc;
}
export default function confirm(config: IModalFuncProps): {
    destroy: (...args: any[]) => void;
};
export declare function withWarn(props: IModalFuncProps): IModalFuncProps;
export declare function withConfirm(props: IModalFuncProps): IModalFuncProps;
