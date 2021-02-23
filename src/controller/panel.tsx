import * as React from 'react';
import { IActionBarItem } from 'mo/components/actionBar';
import { PanelStatus } from 'mo/model/workbench/panel';
import { Controller } from 'mo/react/controller';
import { panelService } from 'mo/services';
import { singleton } from 'tsyringe';

export interface IPanelController {
    onTabChange(key: string | undefined): void;
    onToolbarClick(e: React.MouseEvent, item: IActionBarItem): void;
}

@singleton()
export class PanelController extends Controller implements IPanelController {
    constructor() {
        super();
    }

    public readonly onTabChange = (key: string): void => {
        const state = panelService.getState();
        if (key) {
            panelService.setState({
                current: state.data?.find((item) => item.id === key),
            });
        }
    };

    public readonly onToolbarClick = (
        e: React.MouseEvent,
        item: IActionBarItem
    ): void => {
        if (item.id === 'Closeable') {
            panelService.setState({
                status: PanelStatus.Close,
            });
        } else if (item.id === 'Resize') {
            panelService.setState({
                status: PanelStatus.Maximize,
            });
        }
    };
}
