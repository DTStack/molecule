import 'mo/workbench/menuBar/style.scss';
import * as React from 'react';
import { prefixClaName } from 'mo/common/className';
import { IMenuBar } from 'mo/model/workbench/menuBar';

export interface IMenuBarProps {
    // menuBar: IMenuBar;
}

function MenuBar(props: IMenuBar) {
    const menuBar = props;
    const click = function (e) {
        menuBar.onClick(e, {
            name: 'test',
        });
    };
    return (
        <div className={prefixClaName('menuBar')}>
            <a className="menu-action codicon codicon-menu" onClick={click}></a>
        </div>
    );
}

export default MenuBar;
