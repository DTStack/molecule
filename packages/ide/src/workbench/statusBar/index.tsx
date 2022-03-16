import 'reflect-metadata';
import { container } from 'tsyringe';
import { connect } from '@dtinsight/molecule-glue';
import { StatusBar } from './statusBar';
import { StatusBarService } from 'mo/services';
import { StatusBarController } from 'mo/controller/statusBar';

export * from './statusBar';
export * from './item';

const statusBarService = container.resolve(StatusBarService);
const statusBarController = container.resolve(StatusBarController);

export const StatusBarView = connect(
    statusBarService,
    StatusBar,
    statusBarController
);
