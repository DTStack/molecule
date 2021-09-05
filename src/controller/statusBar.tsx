import 'reflect-metadata';
import React from 'react';
import { IStatusBarItem, StatusBarEvent } from 'mo/model';
import { Controller } from 'mo/react/controller';
import { MenuBarController } from 'mo/controller';
import { IMenuItemProps } from 'mo/components/menu';
import { CONTEXT_MENU_HIDE_STATUS_BAR } from 'mo/model/workbench/statusBar';
import { container, singleton } from 'tsyringe';
export interface IStatusBarController {
    onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
    onContextMenuClick?: (
        e: React.MouseEvent,
        item: IMenuItemProps | undefined
    ) => void;
}
@singleton()
export class StatusBarController
    extends Controller
    implements IStatusBarController {
    private readonly menuBarController;

    constructor() {
        super();
        this.menuBarController = container.resolve(MenuBarController);
    }

    public onClick = (e: React.MouseEvent, item: IStatusBarItem) => {
        this.emit(StatusBarEvent.onClick, e, item);
    };

    public readonly onContextMenuClick = (
        e: React.MouseEvent,
        item: IMenuItemProps | undefined
    ) => {
        const menuId = item?.id;
        switch (menuId) {
            case CONTEXT_MENU_HIDE_STATUS_BAR.id:
                this.menuBarController.updateStatusBar();
                break;
        }
    };
}
