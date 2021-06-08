import { ILayout } from 'mo/model/workbench/layout';
import { IActivityBar, IMenuBar, IPanel, ISidebar, IStatusBar } from 'mo/model';

export * from './activityBar';
export * from './editor';
export * from './sidebar';
export * from './statusBar';
export * from './menuBar';
export * from './explorer/explorer';
export * from './explorer/folderTree';
export * from './search';
export * from './panel';
export interface IWorkbench {
    panel: IPanel;
    activityBar: IActivityBar;
    menuBar: IMenuBar;
    statusBar: IStatusBar;
    sideBar: ISidebar;
    layout: ILayout;
}
