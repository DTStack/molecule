import 'mo/workbench/menuBar/style.scss';
import MenuBar from './menuBar';
import { MenuBarEvent } from 'mo/core';
import { mapState, menuBar } from 'mo/services';

const MenuBarView = mapState(MenuBar, menuBar, [
    MenuBarEvent.DataChanged,
]);

export {
    MenuBar,
    MenuBarView,
};
