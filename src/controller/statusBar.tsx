import * as React from 'react';
import { IStatusBarItem, StatusBarEvent } from 'mo';
import { Controller } from 'mo/react/controller';
import { statusBarService } from 'mo/services';
import { singleton } from 'tsyringe';
export interface IStatusBarController {
    onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
}

const problems: IStatusBarItem = {
    id: 'MoProblems',
    sortIndex: 1,
    name: 'Problems',
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

    private initStatusBar() {
        statusBarService.appendLeftItem(problems);
        statusBarService.appendRightItem(editorLineColumnItem);
    }
}
