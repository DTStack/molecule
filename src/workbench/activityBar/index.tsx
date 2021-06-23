import 'reflect-metadata';
import { connect } from 'mo/react';
import { ActivityBarController } from 'mo/controller/activityBar';

import ActivityBar from './activityBar';
import { container } from 'tsyringe';
import { ActivityBarService } from 'mo/services';
import { KeybindingController } from 'mo/controller';
export * from './activityBar';
export { ActivityBarItem } from './activityBarItem';

const activityBarService = container.resolve(ActivityBarService);
const activityBarController = container.resolve(ActivityBarController);
const keybindingController = container.resolve(KeybindingController);

export const ActivityBarView = connect(activityBarService, ActivityBar, {
    activityBarController,
    keybindingController,
});
