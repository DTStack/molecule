import ActivityBar from './activityBar';
import { activityBar, mapState } from 'mo/services';

export * from './activityBar';
export { default as ActivityBarItem } from './activityBarItem';

export const ActivityBarView = mapState(ActivityBar, activityBar.getState());
