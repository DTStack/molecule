import * as React from 'react';
import { IStatusBarItem, StatusBarEvent } from 'mo';
import { Controller } from 'mo/react/controller';
import { container, singleton } from 'tsyringe';
import { PANEL_PROBLEMS } from 'mo/model/workbench/panel';
import { STATUS_PROBLEMS } from 'mo/model/workbench/statusBar';
import { IPanelService, PanelService } from 'mo/services';

export interface IStatusBarController {
    onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
}
@singleton()
export class StatusBarController
    extends Controller
    implements IStatusBarController {
    private readonly panelService: IPanelService;

    constructor() {
        super();
        this.panelService = container.resolve(PanelService);
    }

    public onClick = (e: React.MouseEvent, item: IStatusBarItem) => {
        const { id } = item;
        switch (id) {
            case STATUS_PROBLEMS.id /** Problems */:
                const { current, hidden } = this.panelService.getState();
                if (hidden) {
                    this.panelService.showHide();
                } else if (current?.id !== PANEL_PROBLEMS.id) {
                    this.panelService.open(PANEL_PROBLEMS);
                } else {
                    this.panelService.showHide();
                }
                break;
            default:
        }
        this.emit(StatusBarEvent.onClick, e, item);
    };
}
