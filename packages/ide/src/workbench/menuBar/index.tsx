import 'reflect-metadata';
import { connect } from '@dtinsight/molecule-glue';

import MenuBar from './menuBar';
import { MenuBarService } from 'mo/services';
import { container } from 'tsyringe';
import { MenuBarController } from 'mo/controller/menuBar';

const menuBarService = container.resolve(MenuBarService);
const menuBarController = container.resolve(MenuBarController);

const MenuBarView = connect(menuBarService, MenuBar, menuBarController);

export { MenuBar, MenuBarView };
