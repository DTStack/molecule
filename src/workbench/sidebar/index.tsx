import 'mo/workbench/menuBar/style.scss';
export * from './sidebar';
import { Sidebar } from './sidebar';
import { sidebarService } from 'mo/services';
import { mapState } from 'mo/react';

export const SidebarView = mapState(Sidebar, sidebarService.getState());
