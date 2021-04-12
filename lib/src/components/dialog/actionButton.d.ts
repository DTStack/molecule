import * as React from 'react';
import { IButton } from 'mo/components/button';
export interface ActionButtonProps extends IButton {
    actionFn?: (...args: any[]) => any | PromiseLike<any>;
    closeModal: Function;
}
declare const ActionButton: React.FC<ActionButtonProps>;
export default ActionButton;
