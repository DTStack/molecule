import { statusBarController } from 'mo/controller';
import { connect } from 'mo/react';
import { statusBarService } from 'mo/services';
import StatusBar from './statusBar';

export * from './statusBar';

export const StatusBarView = connect(
    statusBarService,
    StatusBar,
    statusBarController
);
