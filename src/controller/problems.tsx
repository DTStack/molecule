import 'reflect-metadata';
import * as React from 'react';
import { IStatusBarItem } from 'mo/model';
import { Controller } from 'mo/react/controller';
import {
    IPanelService,
    PanelService,
    ILayoutService,
    LayoutService,
    IStatusBarService,
    StatusBarService,
} from 'mo/services';
import { singleton, container } from 'tsyringe';
import { STATUS_PROBLEMS, PANEL_PROBLEMS } from 'mo/model/problems';
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
            this.panelService.open(PANEL_PROBLEMS);
        } else {
            if (current?.id !== PANEL_PROBLEMS.id) {
                this.panelService.open(PANEL_PROBLEMS);
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
            Object.assign(STATUS_PROBLEMS, {
                onClick: this.onClick,
            })
        );
        this.panelService.add(PANEL_PROBLEMS);
    }
}
