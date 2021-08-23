import {
    Modal as OriginModal,
    IModalProps,
    IModalFuncProps,
    destroyFns,
} from './modal';
import confirm, {
    withWarn,
    withConfirm,
    ModalStaticFunctions,
} from './confirm';

function modalWarn(props: IModalFuncProps) {
    return confirm(withWarn(props));
}

type ModalType = typeof OriginModal &
    ModalStaticFunctions & { destroyAll: () => void };

const Modal = OriginModal as ModalType;

export enum ConfirmState {
    warning = 'warning',
    confirm = 'confirm',
}

export type ConfrimType = keyof typeof ConfirmState;

Modal.warning = modalWarn;

Modal.warn = modalWarn;

Modal.confirm = function confirmFn(props: IModalFuncProps) {
    return confirm(withConfirm(props));
};

Modal.destroyAll = function destroyAllFn() {
    while (destroyFns.length) {
        const close = destroyFns.pop();
        if (close) {
            close();
        }
    }
};

export { Modal };

export type { IModalFuncProps, IModalProps };
