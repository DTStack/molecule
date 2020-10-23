import 'mo/workbench/menuBar/style.scss';
import * as React from 'react';
import Sidebar from './sidebar';
import { SidebarCtx } from 'mo/provider/sidebar';

function SidebarView(props) {
    const sidebar = React.useContext(SidebarCtx);
    return (
        <Sidebar {...props} {...sidebar} />
    );
};

export {
    Sidebar,
    SidebarView,
};
