import 'mo/workbench/menuBar/style.scss';
import MenuBar from './menuBar';
import { mapState, menuBar } from 'mo/services';

const MenuBarView = mapState(MenuBar, menuBar.getState());

export {
    MenuBar,
    MenuBarView,
};
