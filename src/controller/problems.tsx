import 'reflect-metadata';
import * as React from 'react';
import { IStatusBarItem } from 'mo/model';
import { Controller } from 'mo/react/controller';
import {
    IPanelService,
    PanelService,
    IStatusBarService,
    StatusBarService,
    ILayoutService,
    LayoutService,
} from 'mo/services';
import { singleton, container } from 'tsyringe';
import { builtInPanelProblems, builtInStatusProblems } from 'mo/model/problems';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';
import { QuickTogglePanelAction } from 'mo/monaco/quickTogglePanelAction';
export interface IProblemsController {
    onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
}
@singleton()
export class ProblemsController
    extends Controller
    implements IProblemsController {
    private readonly panelService: IPanelService;
    private readonly statusBarService: IStatusBarService;
    private readonly layoutService: ILayoutService;
    private readonly monacoService: IMonacoService;

    constructor() {
        super();
        this.panelService = container.resolve(PanelService);
        this.statusBarService = container.resolve(StatusBarService);
        this.monacoService = container.resolve(MonacoService);
        this.layoutService = container.resolve(LayoutService);
        this.init();
    }

    private showHideProblems() {
        const { panel } = this.layoutService.getState();
        const { current } = this.panelService.getState();

        if (panel.hidden || current?.id === builtInPanelProblems().id) {
            this.monacoService.commandService.executeCommand(
                QuickTogglePanelAction.ID
            );
        }

        this.panelService.open(builtInPanelProblems());
    }

    public onClick = (e: React.MouseEvent, item: IStatusBarItem) => {
        this.showHideProblems();
    };

    private init() {
        this.statusBarService.appendLeftItem(
            Object.assign(builtInStatusProblems(), {
                onClick: this.onClick,
            })
        );
        this.panelService.add(builtInPanelProblems());
    }
}

container.resolve(ProblemsController);
