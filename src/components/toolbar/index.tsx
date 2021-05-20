import * as React from 'react';
import { prefixClaName, classNames } from 'mo/common/className';
import { ActionBar, IActionBarProps } from 'mo/components/actionBar';

export interface IToolbarProps<T = any> extends IActionBarProps {}

const rootClassName = 'tool-bar';

export function Toolbar<T = any>(props: IToolbarProps<T>) {
    const { className, ...custom } = props;

    return (
        <div className={classNames(prefixClaName(rootClassName), className)}>
            <ActionBar {...custom} />
        </div>
    );
}
