import * as React from 'react';
import { Button, IButton } from 'mo/components/button';

export interface ActionButtonProps {
  actionFn?: (...args: any[]) => any | PromiseLike<any>;
  closeModal: Function;
  autoFocus?: boolean;
  buttonProps?: IButton;
}

const ActionButton: React.FC<ActionButtonProps> = props => {
  const clickedRef = React.useRef<boolean>(false);
  const ref = React.useRef<any>();

  React.useEffect(() => {
    let timeoutId: number;
    if (props.autoFocus) {
      const $this = ref.current as HTMLInputElement;
      timeoutId = setTimeout(() => $this.focus());
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const handlePromiseOnOk = (returnValueOfOnOk?: PromiseLike<any>) => {
    const { closeModal } = props;
    if (!returnValueOfOnOk || !returnValueOfOnOk.then) {
      return;
    }
    returnValueOfOnOk.then(
      (...args: any[]) => {
        // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
        closeModal(...args);
      },
      (e: Error) => {
        // eslint-disable-next-line no-console
        console.error(e);
        clickedRef.current = false;
      },
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

  const { children, buttonProps } = props;
  return (
    <Button
      onClick={onClick}
      {...buttonProps}
      ref={ref}
    >
      {children}
    </Button>
  );
};

export default ActionButton;