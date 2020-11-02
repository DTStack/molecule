import 'mo/workbench/menuBar/style.scss';
import { menuBar } from 'mo/services';
import { mapState } from 'mo/react';
import MenuBar from './menuBar';

const MenuBarView = mapState(MenuBar, menuBar.getState());

export {
    MenuBar,
    MenuBarView,
};
