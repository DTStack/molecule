import ActivityBar from './activityBar';
import { activityBar } from 'mo/services';
import { mapState } from 'mo/react';

export * from './activityBar';
export { default as ActivityBarItem } from './activityBarItem';

export const ActivityBarView = mapState(ActivityBar, activityBar.getState());
