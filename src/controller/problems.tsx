import 'reflect-metadata';
import * as React from 'react';
import { IStatusBarItem } from 'mo';
import { Controller } from 'mo/react/controller';
import {
    IPanelService,
    PanelService,
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
    constructor() {
        super();
        this.panelService = container.resolve(PanelService);
        this.statusBarService = container.resolve(StatusBarService);
        this.init();
    }
    private showHideProblems() {
        const { current, hidden } = this.panelService.getState();
        if (hidden) {
            this.panelService.showHide();
            this.panelService.open(PANEL_PROBLEMS);
        } else {
            if (current?.id !== PANEL_PROBLEMS.id) {
                this.panelService.open(PANEL_PROBLEMS);
            } else {
                this.panelService.showHide();
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
