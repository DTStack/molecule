import { connect } from 'mo/react';
import { statusBarService } from 'mo/services';
import StatusBar from './statusBar';
import { StatusBarController } from 'mo/controller/statusBar';
import { container } from 'tsyringe';

export * from './statusBar';

const statusBarController = container.resolve(StatusBarController);

export const StatusBarView = connect(
    statusBarService,
    StatusBar,
    statusBarController
);
