import 'mo/workbench/menuBar/style.scss';
import * as React from 'react';
import MenuBar from './menuBar';
import { MenuBarCtx } from 'mo/provider/menuBar';

function MenuBarView(props) {
    const menuBar = React.useContext(MenuBarCtx);
    return (
        <MenuBar {...props} {...menuBar} />
    );
};

export {
    MenuBar,
    MenuBarView,
};
