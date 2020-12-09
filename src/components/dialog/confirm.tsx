import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Icon } from 'mo/components/icon';
import { IModalFuncProps, destroyFns } from './Modal';
import ConfirmDialog from './ConfirmDialog';

export type ModalFunc = (
    props: IModalFuncProps
) => {
    destroy: () => void;
};

export interface ModalStaticFunctions {
    warn: ModalFunc;
    warning: ModalFunc;
    confirm: ModalFunc;
}

export default function confirm(config: IModalFuncProps) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    let currentConfig = { ...config, close, visible: true } as any;

    function destroy(...args: any[]) {
        const unmountResult = ReactDOM.unmountComponentAtNode(div);
        if (unmountResult && div.parentNode) {
            div.parentNode.removeChild(div);
        }
        const triggerCancel = args.some(
            (param) => param && param.triggerCancel
        );
        if (config.onCancel && triggerCancel) {
            config.onCancel(...args);
        }
        for (let i = 0; i < destroyFns.length; i++) {
            const fn = destroyFns[i];
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            if (fn === close) {
                destroyFns.splice(i, 1);
                break;
            }
        }
    }

    function render({ okText, cancelText, prefixCls, ...props }: any) {
        ReactDOM.render(
            <ConfirmDialog
                {...props}
                prefixCls={prefixCls}
                okText={okText}
                cancelText={cancelText}
            />,
            div
        );
    }

    function close(...args: any[]) {
        currentConfig = {
            ...currentConfig,
            visible: false,
            afterClose: destroy.bind(this, ...args),
        };
        render(currentConfig);
    }

    render(currentConfig);

    destroyFns.push(close);

    return {
        destroy: close,
    };
}

export function withWarn(props: IModalFuncProps): IModalFuncProps {
    return {
        type: 'warning',
        icon: <Icon type="warning" />,
        okCancel: false,
        ...props,
    };
}
