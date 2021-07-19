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
    ProblemsService,
} from 'mo/services';
import { singleton, container } from 'tsyringe';
import { builtInPanelProblems, builtInStatusProblems } from 'mo/model/problems';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';
import { QuickTogglePanelAction } from 'mo/monaco/quickTogglePanelAction';
import { ProblemsPaneView, ProblemsStatusBarView } from 'mo/workbench/problems';
import { connect } from 'mo/react';
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
    private readonly problemsService: ProblemsService;

    constructor() {
        super();
        this.panelService = container.resolve(PanelService);
        this.statusBarService = container.resolve(StatusBarService);
        this.monacoService = container.resolve(MonacoService);
        this.layoutService = container.resolve(LayoutService);
        this.problemsService = container.resolve(ProblemsService);

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
        const statusProblems = builtInStatusProblems();
        statusProblems.render = (item) => <ProblemsStatusBarView {...item} />;
        statusProblems.onClick = this.onClick;

        this.statusBarService.appendLeftItem(statusProblems);

        // keep ProblemsPaneView updated to problems' state
        const ProblemsView = connect(this.problemsService, ProblemsPaneView);

        const problemsPanel = builtInPanelProblems();
        problemsPanel.renderPane = () => <ProblemsView />;

        this.panelService.add(problemsPanel);
    }
}

container.resolve(ProblemsController);
