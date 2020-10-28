import 'mo/workbench/menuBar/style.scss';
import Sidebar from './sidebar';
import { mapState, sidebar } from 'mo/services';
import { SideBarEvent } from 'mo/core';

const SidebarView = mapState(Sidebar, sidebar, [
    SideBarEvent.DataChanged,
]);

export {
    Sidebar,
    SidebarView,
};
