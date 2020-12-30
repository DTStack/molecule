import { activityBarService } from 'mo/services';
import { connect } from 'mo/react';
import { ActivityBarController } from 'mo/controller/activityBar';

import ActivityBar from './activityBar';
import { container } from 'tsyringe';
export * from './activityBar';
export { default as ActivityBarItem } from './activityBarItem';

const activityBarController = container.resolve(ActivityBarController);

export const ActivityBarView = connect(
    activityBarService,
    ActivityBar,
    activityBarController
);
