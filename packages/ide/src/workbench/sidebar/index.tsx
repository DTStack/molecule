import 'reflect-metadata';
export * from './sidebar';
import { Sidebar } from './sidebar';
import { connect } from '@dtinsight/molecule-glue';
import { SidebarService } from 'mo/services';
import { container } from 'tsyringe';
import { SidebarController } from 'mo/controller/sidebar';

const sidebarService = container.resolve(SidebarService);
const sidebarController = container.resolve(SidebarController);

export const SidebarView = connect(sidebarService, Sidebar, sidebarController);
