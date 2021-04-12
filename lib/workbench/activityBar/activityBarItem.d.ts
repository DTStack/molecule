import * as React from 'react';
import { IActivityBarItem } from 'mo/model/workbench/activityBar';
import { IActivityBarController } from 'mo/controller/activityBar';
declare function ActivityBarItem(props: IActivityBarItem & IActivityBarController): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof ActivityBarItem>;
export default _default;
