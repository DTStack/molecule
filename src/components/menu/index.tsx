import './style.scss';
import * as React from 'react';
import { classNames, prefixClaName } from 'mo/common/className';
import ActionBar, { IActionBar, IActionBarItem } from 'mo/components/actionbar';

export interface IMenuItem extends IActionBarItem {}
export interface IMenu extends IActionBar {}

export function Menu(props: IMenu) {
    const { className, ...others } = props;
    const claNames = classNames(prefixClaName('menu'), className);

    return (
        <menu className={claNames}>
            <ActionBar {...others} />
        </menu>
    );
}
