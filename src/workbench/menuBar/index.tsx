import 'mo/workbench/menuBar/style.scss';
import MenuBar from './menuBar';
import { mapState, MenuBarEvent, menuBar } from 'mo/services';

const MenuBarView = mapState(MenuBar, menuBar, [
    MenuBarEvent.DataChanged,
]);

export {
    MenuBar,
    MenuBarView,
};
