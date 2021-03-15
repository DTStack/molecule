import * as React from 'react';
import { IStatusBarItem, StatusBarEvent } from 'mo';
import { Controller } from 'mo/react/controller';
import { panelService } from 'mo/services';
import { singleton } from 'tsyringe';
import { PANEL_PROBLEMS } from 'mo/model/workbench/panel';
import { STATUS_PROBLEMS,STATUS_NOTIFICATIONS,STATUS_EDITOR_INFO } from 'mo/model/workbench/statusBar';

export interface IStatusBarController {
    onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
}
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
            case STATUS_PROBLEMS.id: /** Problems */
                const { current, hidden } = panelService.getState();
                if (hidden) {
                    panelService.showHide();
                } else if (current?.id !== PANEL_PROBLEMS.id) {
                    panelService.open(PANEL_PROBLEMS);
                } else {
                    panelService.showHide();
                }
                break;
            case STATUS_NOTIFICATIONS.id:  /** MoNotification */ 
                break;
            case STATUS_EDITOR_INFO.id: /** MoEditorInfo */  
                break;
            default:
        }
        this.emit(StatusBarEvent.onClick, e, item);
    };
}
