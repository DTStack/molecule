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

    constructor() {
        super();
        this.panelService = container.resolve(PanelService);
        this.statusBarService = container.resolve(StatusBarService);
        this.layoutService = container.resolve(LayoutService);
        this.init();
    }

    private showHideProblems() {
        const { current } = this.panelService.getState();
        const {
            panel: { hidden },
        } = this.layoutService.getState();
        if (hidden) {
            this.layoutService.setPanelHidden();
            this.panelService.open(builtInPanelProblems());
        } else {
            if (current?.id !== builtInPanelProblems().id) {
                this.panelService.open(builtInPanelProblems());
            } else {
                this.layoutService.setPanelHidden();
            }
        }
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
