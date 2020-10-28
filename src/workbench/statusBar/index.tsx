import 'mo/workbench/menuBar/style.scss';
import { mapState, statusBar, StatusBarEvent } from 'mo/services';
import StatusBar from './statusBar';
export * from './statusBar';

export const StatusBarView = mapState(StatusBar, statusBar, [
    StatusBarEvent.DataChanged,
]);
