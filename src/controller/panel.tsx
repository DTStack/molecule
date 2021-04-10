import * as React from 'react';
import { container, singleton } from 'tsyringe';
import { IActionBarItem } from 'mo/components/actionBar';
import { Controller } from 'mo/react/controller';
import {
    PanelEvent,
    PANEL_TOOLBOX_CLOSE,
    PANEL_TOOLBOX_RESIZE,
} from 'mo/model/workbench/panel';
import { IPanelService, PanelService } from 'mo/services';

export interface IPanelController {
    onTabChange(key: string | undefined): void;
    onToolbarClick(e: React.MouseEvent, item: IActionBarItem): void;
}

@singleton()
export class PanelController extends Controller implements IPanelController {
    private readonly panelService: IPanelService;

    constructor() {
        super();
        this.panelService = container.resolve(PanelService);
    }

    public readonly onTabChange = (key: string | undefined): void => {
        const state = this.panelService.getState();
        if (key) {
            this.panelService.setState({
                current: state.data?.find((item) => item.id === key),
            });
        }
        this.emit(PanelEvent.onTabChange, key);
    };

    public readonly onToolbarClick = (
        e: React.MouseEvent,
        item: IActionBarItem
    ): void => {
        if (item.id === PANEL_TOOLBOX_CLOSE.id) {
            this.panelService.showHide();
        } else if (item.id === PANEL_TOOLBOX_RESIZE.id) {
            this.panelService.maximizeRestore();
        }
        this.emit(PanelEvent.onToolbarClick, e, item);
    };
}
