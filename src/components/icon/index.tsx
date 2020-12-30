import { classNames, prefixClaName } from 'mo/common/className';
import * as React from 'react';
import 'vscode-codicons/dist/codicon.css';
export interface IIcon {
    type: string;
    className?: string;
}

export function Icon(props: IIcon) {
    const { className, type, ...others } = props;
    return (
        <span
            className={classNames(
                className,
                'codicon',
                prefixClaName(type, 'codicon')
            )}
            {...others}
        ></span>
    );
}
