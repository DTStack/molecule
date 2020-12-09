import OriginModal, { IModalFuncProps, destroyFns } from './Modal';
import confirm, {
  withWarn,
  ModalStaticFunctions,
} from './confirm';

export { ActionButtonProps } from './ActionButton';
export { IModalProps, IModalFuncProps } from './Modal';

function modalWarn(props: IModalFuncProps) {
  return confirm(withWarn(props));
}

type ModalType = typeof OriginModal &
  ModalStaticFunctions & { destroyAll: () => void};

const Modal = OriginModal as ModalType;

Modal.warning = modalWarn;

Modal.warn = modalWarn;


Modal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    const close = destroyFns.pop();
    if (close) {
      close();
    }
  }
};

export default Modal;