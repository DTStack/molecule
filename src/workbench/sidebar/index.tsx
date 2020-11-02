import 'mo/workbench/menuBar/style.scss';
import Sidebar from './sidebar';
import { sidebar } from 'mo/services';
import { mapState } from 'mo/react';

const SidebarView = mapState(Sidebar, sidebar.getState());

export {
    Sidebar,
    SidebarView,
};
