import 'mo/workbench/menuBar/style.scss';
import { mapState } from 'mo/react';
import { statusBarService } from 'mo/services';
import StatusBar from './statusBar';

export * from './statusBar';
export const StatusBarView = mapState(StatusBar, statusBarService.getState());
