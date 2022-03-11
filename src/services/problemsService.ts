import 'reflect-metadata';
import {
    IProblems,
    IProblemsItem,
    ProblemsModel,
    MarkerSeverity,
    IProblemsTreeNode,
    ProblemsEvent,
} from 'mo/model/problems';
import { IStatusBarItem } from 'mo/model/workbench/statusBar';
import {
    StatusBarService,
    IStatusBarService,
    IBuiltinService,
    BuiltinService,
} from 'mo/services';
import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';
import { searchById } from 'mo/common/utils';
import logger from 'mo/common/logger';
import type { UniqueId } from 'mo/common/types';

export interface IProblemsService extends Component<IProblems> {
    /**
     * Add single or multiple items data
     * @param data
     */
    add(data: IProblemsItem | IProblemsItem[]): void;
    /**
     * Remove the specific problem items
     * @param id single or multiple ids
     */
    remove(id: UniqueId | UniqueId[]): void;
    /**
     * Reset the ProblemsService state data
     */
    reset(): void;
    /**
     * Update the specific data
     * @param data single or multiple problems
     */
    update<T>(data: IProblemsItem<T> | IProblemsItem<T>[]): void;
    /**
     * Toggle the Problems view between display or hidden
     */
    toggleProblems(): void;
    /**
     * Listen to select a problem tree node
     * @param callback
     */
    onSelect(callback: (node: IProblemsTreeNode) => void): void;
}

@singleton()
export class ProblemsService
    extends Component<IProblems>
    implements IProblemsService
{
    protected state: IProblems;
    private readonly statusBarService: IStatusBarService;
    private readonly builtinService: IBuiltinService;
    constructor() {
        super();
        this.state = container.resolve(ProblemsModel);
        this.statusBarService = container.resolve(StatusBarService);
        this.builtinService = container.resolve(BuiltinService);
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
            } else {
                logger.error(
                    `Update problems failed, because there is no problem found via ${problem.id}`
                );
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
    public remove(id: UniqueId | UniqueId[]): void {
        const ids = Array.isArray(id) ? id : [id];

        const { data = [] } = this.state;
        ids.forEach((problemId) => {
            const index = data.findIndex(searchById(problemId));
            if (index > -1) {
                data.splice(index, 1);
            } else {
                logger.error(
                    `Remove problems failed, because there is no problem found via ${problemId}`
                );
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

    public reset(): void {
        const { builtInStatusProblems } = this.builtinService.getModules();
        this.setState({
            ...this.state,
            data: [],
        });
        if (builtInStatusProblems) {
            this.updateStatus(builtInStatusProblems);
        }
    }

    public onSelect(callback: (node: IProblemsTreeNode) => void) {
        this.subscribe(ProblemsEvent.onSelect, callback);
    }

    private updateStatusBar<T>(): void {
        const { data = [] } = this.state;
        const markersData = this.getProblemsMarkers(data);
        const { builtInStatusProblems } = this.builtinService.getModules();

        if (builtInStatusProblems) {
            this.updateStatus(
                Object.assign(builtInStatusProblems, {
                    data: markersData,
                })
            );
        }
    }

    private updateStatus<T>(item: IStatusBarItem<T>): void {
        this.statusBarService.update(item);
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
