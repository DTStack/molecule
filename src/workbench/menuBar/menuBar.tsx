import 'mo/workbench/menuBar/style.scss';
import * as React from 'react';
import { prefixClaName } from 'mo/common/className';

export interface IMenuBarProps {
    // menuBar: IMenuBar;
}

export interface IMenuBarItem {
    id?: string;
    name?: string;
    data?: any;
    iconName?: string;
    render?: () => React.ReactNode | JSX.Element;
    onClick?:(e: React.MouseEvent, option: IMenuBarItem) => any;
}

export interface IMenuBar {
    data: IMenuBarItem[];
    onClick:(event: React.MouseEvent<any, any>, item: IMenuBarItem) => void;
    render?: () => React.ReactNode | JSX.Element;
}

function MenuBar(props: IMenuBar) {
    const menuBar = props;
    console.log('menubar:', props);
    const click = function(e) {
        menuBar.onClick(e, {
            name: 'test',
        });
    };
    return (
        <div className={prefixClaName('menuBar')}>
            <a className="menu-action codicon codicon-menu" onClick={click}></a>
        </div>
    );
};

export default MenuBar;
