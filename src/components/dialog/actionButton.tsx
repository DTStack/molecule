import React, { useRef } from 'react';
import { Button, IButtonProps } from 'mo/components/button';
export interface ActionButtonProps {
    actionFn?: (...args: any[]) => any | PromiseLike<any>;
    close?: Function;
    buttonProps?: IButtonProps;
    children?: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = (props) => {
    const clickedRef = useRef<boolean>(false);
    const { close } = props;

    const handlePromiseOnOk = (returnValueOfOnOk?: PromiseLike<any>) => {
        if (!returnValueOfOnOk || !returnValueOfOnOk.then) {
            return;
        }
        returnValueOfOnOk.then(
            (...args: any[]) => {
                close?.(...args);
            },
            (e: Error) => {
                // eslint-disable-next-line no-console
                console.error(e);
                clickedRef.current = false;
            }
        );
    };

    const onClick = () => {
        const { actionFn, close } = props;
        if (clickedRef.current) {
            return;
        }
        clickedRef.current = true;
        if (!actionFn) {
            close?.();
            return;
        }
        let returnValueOfOnOk;
        if (actionFn!.length) {
            returnValueOfOnOk = actionFn(close);
            clickedRef.current = false;
        } else {
            returnValueOfOnOk = actionFn();
            if (!returnValueOfOnOk) {
                close?.();
                return;
            }
        }
        handlePromiseOnOk(returnValueOfOnOk);
    };

    const { children, buttonProps } = props;
    return (
        <Button onClick={onClick} {...buttonProps}>
            {children}
        </Button>
    );
};

export default ActionButton;
