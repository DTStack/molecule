import * as React from 'react';
import { IStatusBarItem } from 'mo/model/workbench/statusBar';
import { IPanelItem } from 'mo/model/workbench/panel';
import { ProblemsStatusBarView, ProblemsPaneView } from 'mo/workbench/problems';

export enum MarkerSeverity {
    Hint = 1,
    Info = 2,
    Warning = 4,
    Error = 8,
}
export interface IRelatedInformation {
    code: string;
    message: string;
    startLineNumber: number;
    startColumn: number;
    endLineNumber: number;
    endColumn: number;
    status: MarkerSeverity;
}
export interface IProblemsItem<T = any> {
    id?: number;
    name: string;
    value: IRelatedInformation;
    children: IProblemsItem[];
}

export interface IProblems<T = any> {
    id: string;
    name: string;
    data: IProblemsItem<T>[];
    show?: boolean;
}
export const STATUS_PROBLEMS: IStatusBarItem = {
    id: 'MoProblems',
    sortIndex: 1,
    data: {
        warnings: 0,
        errors: 0,
        infos: 0,
    },
    name: 'Problems',
    render: (item: IStatusBarItem) => <ProblemsStatusBarView {...item} />,
};
export const PANEL_PROBLEMS: IPanelItem = {
    id: 'ProblemsPane',
    name: 'problems',
    data: null,
    renderPane: (item) => <ProblemsPaneView {...item} />,
};

export class ProblemsModel<T> implements IProblems<T> {
    static readonly ID = 'MO_PROBLEMS';
    static readonly NAME = 'Problems';
    public id: string;
    public name: string;
    public data: IProblemsItem<T>[];
    public show: boolean;

    constructor(
        id: string = ProblemsModel.ID,
        name: string = ProblemsModel.NAME,
        data: IProblemsItem<T>[] = [],
        show: boolean = false
    ) {
        this.id = id;
        this.name = name;
        this.show = show;
        this.data = data;
    }
}
