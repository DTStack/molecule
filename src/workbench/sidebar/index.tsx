export * from './sidebar';
import { Sidebar } from './sidebar';
import { sidebarService } from 'mo/services';
import { connect } from 'mo/react';
import { sidebarController } from 'mo/controller';

export const SidebarView = connect(sidebarService, Sidebar, sidebarController);
