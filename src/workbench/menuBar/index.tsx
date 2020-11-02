import 'mo/workbench/menuBar/style.scss';
import { menuBarService } from 'mo/services';
import { mapState } from 'mo/react';
import MenuBar from './menuBar';

const MenuBarView = mapState(MenuBar, menuBarService.getState());

export {
    MenuBar,
    MenuBarView,
};
