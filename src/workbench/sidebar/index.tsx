import 'mo/workbench/menuBar/style.scss';
import Sidebar from './sidebar';
import { mapState, sidebar } from 'mo/services';

const SidebarView = mapState(Sidebar, sidebar.getState());

export {
    Sidebar,
    SidebarView,
};
