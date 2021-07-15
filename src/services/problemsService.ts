import 'reflect-metadata';
import {
    IProblems,
    IProblemsItem,
    ProblemsModel,
    MarkerSeverity,
    builtInStatusProblems,
    builtInPanelProblems,
} from 'mo/model/problems';
import { IPanelItem } from 'mo/model/workbench/panel';
import { IStatusBarItem } from 'mo/model/workbench/statusBar';
import {
    PanelService,
    IPanelService,
    StatusBarService,
    IStatusBarService,
} from 'mo/services';
import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';
import { searchById } from './helper';
export interface IProblemsService extends Component<IProblems> {
    updateStatus<T>(item: IStatusBarItem<T>): void;
    updatePanel<T>(item: IStatusBarItem<T>): void;
    removeProblems(id: number): void;
    clearProblems(): void;
    addProblems(item: IProblemsItem): void;
    updateProblems<T>(item: IProblemsItem<T>): void;
    updateStatus(item: IStatusBarItem): void;
    updatePanel(item: IPanelItem): void;
    showHideProblems(): void;
}

@singleton()
export class ProblemsService
    extends Component<IProblems>
    implements IProblemsService {
    protected state: IProblems;
    private readonly panelService: IPanelService;
    private readonly statusBarService: IStatusBarService;
    constructor() {
        super();
        this.state = container.resolve(ProblemsModel);
        this.panelService = container.resolve(PanelService);
        this.statusBarService = container.resolve(StatusBarService);
    }

    public showHideProblems(): void {
        this.setState({
            ...this.state,
            show: !this.state.show,
        });
    }
    public addProblems<T>(item: IProblemsItem<T>): void {
        const { data } = this.state;
        const index = data.findIndex(searchById(item.id));
        if (index > -1) {
            data.splice(index, 1, item);
        } else {
            data.push(item);
        }
        this.setState(
            {
                ...this.state,
                data: [...data],
            },
            () => {
                this.update();
            }
        );
    }
    public updateProblems<T>(item: IProblemsItem<T>) {
        const { data } = this.state;
        const index = data.findIndex(searchById(item.id));
        if (index > -1) {
            data.splice(index, 1, item);
            this.setState(
                {
                    ...this.state,
                    data: [...data],
                },
                () => {
                    this.update();
                }
            );
        } else {
            this.addProblems(item);
        }
    }
    public removeProblems(id: number): void {
        const { data = [] } = this.state;
        if (data.length > -1) {
            const index = data.findIndex(searchById(id));
            if (index > -1) {
                data.splice(index, 1);
                this.setState(
                    {
                        ...this.state,
                        data: [...data],
                    },
                    () => {
                        this.update();
                    }
                );
            }
        }
    }
    public clearProblems(): void {
        this.setState({
            ...this.state,
            data: [],
        });
        this.updateStatus(builtInStatusProblems());
        this.updatePanel(builtInPanelProblems());
    }
    public update<T>(): void {
        const { data = [] } = this.state;
        const markersData = this.getProblemsMarkers(data);
        this.updateStatus(
            Object.assign(builtInStatusProblems(), {
                data: markersData,
            })
        );
        this.updatePanel(Object.assign(builtInPanelProblems(), { data }));
    }
    public updateStatus<T>(item: IStatusBarItem<T>): void {
        this.statusBarService.updateItem(item);
    }
    public updatePanel<T>(item: IPanelItem<T>): void {
        this.panelService.update(item);
    }
    public getProblemsMarkers = (
        data: IProblemsItem[]
    ): { warnings: number; errors: number; infos: number } => {
        let warnings = 0;
        let errors = 0;
        let infos = 0;
        const loopTreeNode = (tree: IProblemsItem[]) => {
            tree.forEach((element: IProblemsItem) => {
                switch (element.value.status) {
                    case MarkerSeverity.Info:
                        infos += 1;
                        break;
                    case MarkerSeverity.Error:
                        errors += 1;
                        break;
                    case MarkerSeverity.Warning:
                        warnings += 1;
                        break;
                    default:
                }
                if (element.children && element.children.length) {
                    loopTreeNode(element.children);
                }
            });
        };
        loopTreeNode(data);
        return {
            warnings,
            errors,
            infos,
        };
    };
}
