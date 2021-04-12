import './style.scss';
import OriginModal from './modal';
import { ModalStaticFunctions } from './confirm';
declare type ModalType = typeof OriginModal & ModalStaticFunctions & {
    destroyAll: () => void;
};
declare const Modal: ModalType;
export default Modal;
