import 'reflect-metadata';
import * as React from 'react';
import { IStatusBarItem, StatusBarEvent } from 'mo/model';
import { Controller } from 'mo/react/controller';
import { singleton } from 'tsyringe';
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
        this.emit(StatusBarEvent.onClick, e, item);
    };
}
