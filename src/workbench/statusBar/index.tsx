import { connect } from 'mo/react';
import StatusBar from './statusBar';
import { StatusBarService } from 'mo/services';
import { container } from 'tsyringe';
import { StatusBarController } from 'mo/controller/statusBar';

export * from './statusBar';

const statusBarService = container.resolve(StatusBarService);
const statusBarController = container.resolve(StatusBarController);

export const StatusBarView = connect(
    statusBarService,
    StatusBar,
    statusBarController
);
