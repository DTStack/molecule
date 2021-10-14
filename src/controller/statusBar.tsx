import 'reflect-metadata';
import React from 'react';
import { IStatusBarItem, StatusBarEvent } from 'mo/model';
import { Controller } from 'mo/react/controller';
import { MenuBarController } from 'mo/controller';
import { IMenuItemProps } from 'mo/components/menu';
import { container, singleton } from 'tsyringe';
import {
    BuiltinService,
    IBuiltinService,
    IStatusBarService,
    StatusBarService,
} from 'mo/services';
import { EditorStatusBarView } from 'mo/workbench/editor';
import { cloneDeep } from 'lodash';

export interface IStatusBarController {
    initView?: () => void;
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
    private readonly statusBarService: IStatusBarService;
    private readonly builtinService: IBuiltinService;

    constructor() {
        super();
        this.menuBarController = container.resolve(MenuBarController);
        this.statusBarService = container.resolve(StatusBarService);
        this.builtinService = container.resolve(BuiltinService);
    }

    public initView() {
        const {
            STATUS_EDITOR_INFO,
            CONTEXT_MENU_HIDE_STATUS_BAR,
        } = this.builtinService.getModules();

        const nextRightItems = cloneDeep(
            this.statusBarService.getState().rightItems
        );
        const nextContextMenu = cloneDeep(
            this.statusBarService.getState().contextMenu || []
        );
        if (STATUS_EDITOR_INFO) {
            nextRightItems.push({
                ...STATUS_EDITOR_INFO,
                render: (item: IStatusBarItem) => (
                    <EditorStatusBarView {...item} />
                ),
            });
        }

        if (CONTEXT_MENU_HIDE_STATUS_BAR) {
            nextContextMenu.push(CONTEXT_MENU_HIDE_STATUS_BAR);
        }
        this.statusBarService.setState({
            rightItems: nextRightItems,
            contextMenu: nextContextMenu,
        });
    }

    public onClick = (e: React.MouseEvent, item: IStatusBarItem) => {
        this.emit(StatusBarEvent.onClick, e, item);
    };

    public readonly onContextMenuClick = (
        e: React.MouseEvent,
        item: IMenuItemProps | undefined
    ) => {
        const menuId = item?.id;
        const { STATUS_BAR_HIDE_ID } = this.builtinService.getConstants();
        switch (menuId) {
            case STATUS_BAR_HIDE_ID:
                this.menuBarController.updateStatusBar();
                break;
        }
    };
}
