import * as React from 'react';
import { IActionBarItem } from 'mo/components/actionBar';
import { Controller } from 'mo/react/controller';
import { panelService } from 'mo/services';
import { singleton } from 'tsyringe';
import {
    PanelEvent,
    PANEL_TOOLBOX_CLOSE,
    PANEL_TOOLBOX_RESIZE,
} from 'mo/model/workbench/panel';

export interface IPanelController {
    onTabChange(key: string | undefined): void;
    onToolbarClick(e: React.MouseEvent, item: IActionBarItem): void;
}

@singleton()
export class PanelController extends Controller implements IPanelController {
    constructor() {
        super();
    }

    public readonly onTabChange = (key: string | undefined): void => {
        const state = panelService.getState();
        if (key) {
            panelService.setState({
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
            panelService.showHide();
        } else if (item.id === PANEL_TOOLBOX_RESIZE.id) {
            panelService.maximizeRestore();
        }
        this.emit(PanelEvent.onToolbarClick, e, item);
    };
}
