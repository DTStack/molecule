import ActivityBar from './activityBar';
import { ActivityBarEvent, activityBar, mapState, ActivityBarService } from 'mo/services';

export * from './activityBar';
export * from './activityBarItem';

export const ActivityBarView = mapState<ActivityBarService>(ActivityBar, activityBar, [
    ActivityBarEvent.DataChanged, ActivityBarEvent.Selected,
]);
