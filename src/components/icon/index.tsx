import { classNames, prefixClaName } from 'mo/common/className';
import * as React from 'react';

export interface IIcon {
    type: string;
    className?: string;
}

export function Icon(props: IIcon) {
    const { className, type, ...others } = props;
    return (
        <span className={classNames(className, 'codicon', prefixClaName(type, 'codicon'))} {...others}></span>
    )
}