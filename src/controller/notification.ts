import * as React from 'react';
import { IStatusBarItem, StatusBarEvent } from 'mo';
import { Controller } from 'mo/react/controller';
import { statusBarService } from 'mo/services';
import { singleton } from 'tsyringe';

export interface INotificationController {
    onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
}

@singleton()
export class NotificationController
    extends Controller
    implements INotificationController {
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
    }
}
