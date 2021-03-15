import * as React from 'react';
import { IStatusBarItem, StatusBarEvent } from 'mo';
import { Controller } from 'mo/react/controller';
import { panelService } from 'mo/services';
import { singleton } from 'tsyringe';
import { PANEL_PROBLEMS } from 'mo/model/workbench/panel';
<<<<<<< HEAD
import { STATUS_PROBLEMS,STATUS_NOTIFICATIONS,STATUS_EDITOR_INFO } from 'mo/model/workbench/statusBar';
=======
>>>>>>> feat(status bar): define the bottom status bar data structure and processing logic

export interface IStatusBarController {
    onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
}
<<<<<<< HEAD
=======
export const editorLineColumnItem: IStatusBarItem = {
    id: 'MoEditorInfo',
    sortIndex: 2,
    data: null,
    name: 'Go to Line/Column',
    render: () => <span>Ln 0, Col 0</span>,
};

>>>>>>> feat(status bar): define the bottom status bar data structure and processing logic
@singleton()
export class StatusBarController
    extends Controller
    implements IStatusBarController {
    constructor() {
        super();
    }

    public onClick = (e: React.MouseEvent, item: IStatusBarItem) => {
        const { id } = item;
        switch (id) {
<<<<<<< HEAD
            case STATUS_PROBLEMS.id: /** Problems */
                const { current, hidden } = panelService.getState();
                if (hidden) {
                    panelService.showHide();
                } else if (current?.id !== PANEL_PROBLEMS.id) {
                    panelService.open(PANEL_PROBLEMS);
=======
            case 'MoProblems':
                const { current,hidden } = panelService.getState();
                if(hidden){
                    panelService.showHide();
                } else if(current?.id!==PANEL_PROBLEMS.id){
                    panelService.open(PANEL_PROBLEMS)
>>>>>>> feat(status bar): define the bottom status bar data structure and processing logic
                } else {
                    panelService.showHide();
                }
                break;
<<<<<<< HEAD
            case STATUS_NOTIFICATIONS.id:  /** MoNotification */ 
                break;
            case STATUS_EDITOR_INFO.id: /** MoEditorInfo */  
=======
            case 'MoNotification':
                break;
            case 'MoEditorInfo':
>>>>>>> feat(status bar): define the bottom status bar data structure and processing logic
                break;
            default:
        }
        this.emit(StatusBarEvent.onClick, e, item);
    };
}
