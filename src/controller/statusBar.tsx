import 'reflect-metadata';
import * as React from 'react';
import { IStatusBarItem, StatusBarEvent } from 'mo/model';
import { Controller } from 'mo/react/controller';
import { menuBarController } from 'mo/controller';
import { IMenuItem } from 'mo/components/menu';
import { CONTEXT_MENU_HIDE } from 'mo/model/workbench/statusBar';
import { singleton } from 'tsyringe';
export interface IStatusBarController {
    onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
    onContextMenuClick?: (
        e: React.MouseEvent,
        item: IMenuItem | undefined
    ) => void;
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

    public readonly onContextMenuClick = (
        e: React.MouseEvent,
        item: IMenuItem | undefined
    ) => {
        const menuId = item?.id;
        switch (menuId) {
            case CONTEXT_MENU_HIDE.id:
                menuBarController.updateStatusBar();
                break;
        }
    };
}
