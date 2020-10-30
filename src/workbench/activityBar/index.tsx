import ActivityBar from './activityBar';
import { ActivityBarEvent, activityBar, mapState } from 'mo/services';

export * from './activityBar';
export * from './activityBarItem';

export const ActivityBarView = mapState(ActivityBar, activityBar, [
    ActivityBarEvent.DataChanged,
    ActivityBarEvent.Selected,
    ActivityBarEvent.ReRender,
]);
