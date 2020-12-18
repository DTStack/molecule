import * as React from 'react';
import { Button, IButton } from 'mo/components/button';
export interface ActionButtonProps extends IButton {
    actionFn?: (...args: any[]) => any | PromiseLike<any>;
    closeModal: Function;
}

const ActionButton: React.FC<ActionButtonProps> = (props) => {
    const clickedRef = React.useRef<boolean>(false);

    const handlePromiseOnOk = (returnValueOfOnOk?: PromiseLike<any>) => {
        const { closeModal } = props;
        if (!returnValueOfOnOk || !returnValueOfOnOk.then) {
            return;
        }
        returnValueOfOnOk.then(
            (...args: any[]) => {
                closeModal(...args);
            },
            (e: Error) => {
                // eslint-disable-next-line no-console
                console.error(e);
                clickedRef.current = false;
            }
        );
    };

    const onClick = () => {
        const { actionFn, closeModal } = props;
        if (clickedRef.current) {
            return;
        }
        clickedRef.current = true;
        if (!actionFn) {
            closeModal();
            return;
        }
        let returnValueOfOnOk;
        if (actionFn.length) {
            returnValueOfOnOk = actionFn(closeModal);
            clickedRef.current = false;
        } else {
            returnValueOfOnOk = actionFn();
            if (!returnValueOfOnOk) {
                closeModal();
                return;
            }
        }
        handlePromiseOnOk(returnValueOfOnOk);
    };

    const { children, ...resetProps } = props;
    return (
        <Button onClick={onClick} {...resetProps}>
            {children}
        </Button>
    );
};

export default ActionButton;
