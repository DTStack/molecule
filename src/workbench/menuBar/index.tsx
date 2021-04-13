import 'mo/workbench/menuBar/style.scss';
import { menuBarService } from 'mo/services';
import { connect } from 'mo/react';

import MenuBar from './menuBar';
import { menuBarController } from 'mo/controller';

const MenuBarView = connect(menuBarService, MenuBar, menuBarController);

export { MenuBar, MenuBarView };
