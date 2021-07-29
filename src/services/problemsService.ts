import 'reflect-metadata';
import {
    IProblems,
    IProblemsItem,
    ProblemsModel,
    MarkerSeverity,
    builtInStatusProblems,
} from 'mo/model/problems';
import { IStatusBarItem } from 'mo/model/workbench/statusBar';
import { StatusBarService, IStatusBarService } from 'mo/services';
import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';
import { searchById } from './helper';
export interface IProblemsService extends Component<IProblems> {
    add(item: IProblemsItem | IProblemsItem[]): void;
    remove(id: number | number[]): void;
    clear(): void;
    update<T>(item: IProblemsItem<T> | IProblemsItem<T>[]): void;
    toggleProblems(): void;
}

@singleton()
export class ProblemsService
    extends Component<IProblems>
    implements IProblemsService {
    protected state: IProblems;
    private readonly statusBarService: IStatusBarService;
    constructor() {
        super();
        this.state = container.resolve(ProblemsModel);
        this.statusBarService = container.resolve(StatusBarService);
    }

    public toggleProblems(): void {
        this.setState({
            ...this.state,
            show: !this.state.show,
        });
    }
    public add<T>(item: IProblemsItem<T> | IProblemsItem<T>[]): void {
        const problems = Array.isArray(item) ? item : [item];
        const { data } = this.state;

        problems.forEach((problem) => {
            const index = data.findIndex(searchById(problem.id));
            if (index > -1) {
                data.splice(index, 1, problem);
            } else {
                data.push(problem);
            }
        });

        this.setState(
            {
                data: [...data],
            },
            () => {
                this.updateStatusBar();
            }
        );
    }
    public update<T>(item: IProblemsItem<T> | IProblemsItem<T>[]) {
        const problems = Array.isArray(item) ? item : [item];
        const { data } = this.state;

        problems.forEach((problem) => {
            const index = data.findIndex(searchById(problem.id));
            if (index > -1) {
                data.splice(index, 1, problem);
            }
        });

        this.setState(
            {
                data: [...data],
            },
            () => {
                this.updateStatusBar();
            }
        );
    }
    public remove(id: number | number[]): void {
        const ids = Array.isArray(id) ? id : [id];

        const { data = [] } = this.state;
        ids.forEach((problemId) => {
            const index = data.findIndex(searchById(problemId));
            if (index > -1) {
                data.splice(index, 1);
            }
        });

        this.setState(
            {
                data: [...data],
            },
            () => {
                this.updateStatusBar();
            }
        );
    }

    public clear(): void {
        this.setState({
            ...this.state,
            data: [],
        });
        this.updateStatus(builtInStatusProblems());
    }

    private updateStatusBar<T>(): void {
        const { data = [] } = this.state;
        const markersData = this.getProblemsMarkers(data);
        this.updateStatus(
            Object.assign(builtInStatusProblems(), {
                data: markersData,
            })
        );
    }

    private updateStatus<T>(item: IStatusBarItem<T>): void {
        this.statusBarService.updateItem(item);
    }

    private getProblemsMarkers = (
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
