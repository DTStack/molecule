import * as React from 'react';
import { IStatusBarItem, StatusBarEvent } from 'mo';
import { Controller } from 'mo/react/controller';
import { statusBarService } from 'mo/services';
import { singleton } from 'tsyringe';
import { Icon } from 'mo/components/icon';

export interface IStatusBarController {
    onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
}

const problems: IStatusBarItem = {
    id: 'MoProblems',
    sortIndex: 1,
    name: 'Problems',
};

const notifications: IStatusBarItem = {
    id: 'MoNotification',
    sortIndex: 1,
    name: 'Notification',
    render: () => <Icon type="bell" />,
};

export const editorLineColumnItem: IStatusBarItem = {
    id: 'EditorCountInfo',
    sortIndex: 2,
    name: 'Go to Line/Column',
    render: () => <span>Ln 0, Col 0</span>,
};

@singleton()
export class StatusBarController
    extends Controller
    implements IStatusBarController {
    constructor() {
        super();
        this.initStatusBar();
    }

    public onClick = (e: React.MouseEvent, item: IStatusBarItem) => {
        this.emit(StatusBarEvent.onClick, e, item);
    };

    public notify() {
        console.log('service:', statusBarService);
    }

    private initStatusBar() {
        statusBarService.appendLeftItem(problems);
        statusBarService.appendRightItem(notifications);
        statusBarService.appendRightItem(editorLineColumnItem);
    }
}
