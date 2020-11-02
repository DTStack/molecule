import 'mo/workbench/menuBar/style.scss';
import Sidebar from './sidebar';
import { sidebarService } from 'mo/services';
import { mapState } from 'mo/react';

const SidebarView = mapState(Sidebar, sidebarService.getState());

export {
    Sidebar,
    SidebarView,
};
