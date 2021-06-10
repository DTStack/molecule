import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import * as React from 'react';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { Controller } from 'mo/react/controller';
import {
    PanelEvent,
    PANEL_TOOLBOX_CLOSE,
    PANEL_TOOLBOX_RESIZE,
} from 'mo/model/workbench/panel';
import {
    IPanelService,
    PanelService,
    ILayoutService,
    LayoutService,
} from 'mo/services';

export interface IPanelController {
    onTabChange(key: string | undefined): void;
    onToolbarClick(e: React.MouseEvent, item: IActionBarItemProps): void;
}

@singleton()
export class PanelController extends Controller implements IPanelController {
    private readonly panelService: IPanelService;
    private readonly layoutService: ILayoutService;

    constructor() {
        super();
        this.panelService = container.resolve(PanelService);
        this.layoutService = container.resolve(LayoutService);
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
        item: IActionBarItemProps
    ): void => {
        if (item.id === PANEL_TOOLBOX_CLOSE.id) {
            this.layoutService.setPanelHidden();
        } else if (item.id === PANEL_TOOLBOX_RESIZE.id) {
            this.panelService.maximizeRestore();
        }
        this.emit(PanelEvent.onToolbarClick, e, item);
    };
}
