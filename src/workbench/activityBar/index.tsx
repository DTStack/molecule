import { connect } from 'mo/react';
import { ActivityBarController } from 'mo/controller/activityBar';

import ActivityBar from './activityBar';
import { container } from 'tsyringe';
import { ActivityBarService } from 'mo/services';
export * from './activityBar';
export { default as ActivityBarItem } from './activityBarItem';

const activityBarService = container.resolve(ActivityBarService);
const activityBarController = container.resolve(ActivityBarController);

export const ActivityBarView = connect(
    activityBarService,
    ActivityBar,
    activityBarController
);
