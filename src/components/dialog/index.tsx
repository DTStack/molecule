import './style.scss';
import OriginModal, { IModalFuncProps, destroyFns } from './modal';
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

export default Modal;
