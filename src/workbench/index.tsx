export { WorkbenchView as Workbench } from './workbench';
export { ActivityBar } from 'mo/workbench/activityBar';
export { ActivityBarItem } from 'mo/workbench/activityBar/activityBarItem';
export { Editor } from 'mo/workbench/editor/editor';
export { EditorGroup } from 'mo/workbench/editor/group';
export { MenuBar } from 'mo/workbench/menuBar/menuBar';
export { Panel } from 'mo/workbench/panel/panel';
export { Sidebar } from 'mo/workbench/sidebar';
export { StatusBar, StatusItem } from 'mo/workbench/statusBar';

export type {
    IWorkbench,
    IActivityBar,
    IActivityBarItem,
    IEditor,
    IEditorGroup,
    IMenuBar,
    IPanel,
    ISidebar,
    IStatusBar,
    IStatusBarItem,
    IProblems,
    IProblemsItem,
    INotification,
    INotificationItem,
} from 'mo/model';

export type {
    IActivityBarController,
    ILayoutController,
    IEditorController,
    ISideBarController,
    IMenuBarController,
    ISettingsController,
    INotificationController,
    IPanelController,
    IProblemsController,
    IStatusBarController,
} from 'mo/controller';
