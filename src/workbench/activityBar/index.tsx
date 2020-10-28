import ActivityBar from './activityBar';
import { activityBar, mapState } from 'mo/services';
import { ActivityBarEvent } from 'mo/core';

const ActivityBarView = mapState(ActivityBar, activityBar, [
    ActivityBarEvent.DataChanged, ActivityBarEvent.Selected,
]);

export {
    ActivityBar,
    ActivityBarView,
};
