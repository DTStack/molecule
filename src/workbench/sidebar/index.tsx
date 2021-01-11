export * from './sidebar';
import { Sidebar } from './sidebar';
import { sidebarService } from 'mo/services';
import { connect } from 'mo/react';
import { SidebarController } from 'mo/controller/sidebar';
import { container } from 'tsyringe';
import './explore';

const sidebarController = container.resolve(SidebarController);

export const SidebarView = connect(sidebarService, Sidebar, sidebarController);
