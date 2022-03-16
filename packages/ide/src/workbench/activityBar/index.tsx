import 'reflect-metadata';
import { connect } from '@dtinsight/molecule-glue';
import { ActivityBarController } from 'mo/controller';

import ActivityBar from './activityBar';
import { container } from 'tsyringe';
import { ActivityBarService } from 'mo/services';
export * from './activityBar';
export { ActivityBarItem } from './activityBarItem';

const activityBarService = container.resolve(ActivityBarService);
const activityBarController = container.resolve(ActivityBarController);

export const ActivityBarView = connect(
    activityBarService,
    ActivityBar,
    activityBarController
);
