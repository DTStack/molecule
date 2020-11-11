import './style.scss';
import * as React from 'react';
import { prefixClaName, classNames } from 'mo/common/className';
import ActionBar, { IActionBar } from 'mo/components/actionbar';

export interface IToolBar<T = any> extends IActionBar {}

const rootClassName = 'tool-bar';

export default function ToolBar<T = any>(props: IToolBar<T>) {
    const { className, ...others } = props;

    return (
        <div className={classNames(prefixClaName(rootClassName), className)}>
            <ActionBar {...others} />
        </div>
    );
}
