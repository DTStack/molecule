export * from './sidebar';
import { Sidebar } from './sidebar';
import { sideBarService } from 'mo/services';
import { connect } from 'mo/react';
import { sidebarController } from 'mo/controller';

export const SidebarView = connect(sideBarService, Sidebar, sidebarController);
