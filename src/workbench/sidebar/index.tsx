import 'mo/workbench/menuBar/style.scss';
import Sidebar from './sidebar';
import { mapState, sidebar, SideBarEvent } from 'mo/services';

const SidebarView = mapState(Sidebar, sidebar, [
    SideBarEvent.DataChanged,
]);

export {
    Sidebar,
    SidebarView,
};
