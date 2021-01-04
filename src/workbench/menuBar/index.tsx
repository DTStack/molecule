import 'mo/workbench/menuBar/style.scss';
import { menuBarService } from 'mo/services';
import { connect } from 'mo/react';

import MenuBar from './menuBar';
import { container } from 'tsyringe';
import { MenuBarController } from 'mo/controller/menuBar';

const menuBarController = container.resolve(MenuBarController);

const MenuBarView = connect(menuBarService, MenuBar, menuBarController);

export { MenuBar, MenuBarView };
