import * as React from 'react';
import { IStatusBarItem, StatusBarEvent } from 'mo';
import { Controller } from 'mo/react/controller';
import { panelService } from 'mo/services';
import { singleton } from 'tsyringe';
import { PANEL_PROBLEMS } from 'mo/model/workbench/panel';

export interface IStatusBarController {
    onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
}
export const editorLineColumnItem: IStatusBarItem = {
    id: 'MoEditorInfo',
    sortIndex: 2,
    data: null,
    name: 'Go to Line/Column',
    render: () => <span>Ln 0, Col 0</span>,
};

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
            case 'MoProblems':
                const { current,hidden } = panelService.getState();
                if(hidden){
                    panelService.showHide();
                } else if(current?.id!==PANEL_PROBLEMS.id){
                    panelService.open(PANEL_PROBLEMS)
                } else {
                    panelService.showHide();
                }
                break;
            case 'MoNotification':
                break;
            case 'MoEditorInfo':
                break;
            default:
        }
        this.emit(StatusBarEvent.onClick, e, item);
    };
}
