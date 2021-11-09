import type { UniqueId } from 'mo/common/types';
import { ITreeNodeItemProps } from 'mo/components';

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
export interface IProblemsItem<T = any> extends ITreeNodeItemProps {
    value: IRelatedInformation;
    children: IProblemsItem[];
}

export interface IProblems<T = any> {
    id: UniqueId;
    name: string;
    data: IProblemsItem<T>[];
    show?: boolean;
}

export class ProblemsModel<T> implements IProblems<T> {
    public id: UniqueId;
    public name: string;
    public data: IProblemsItem<T>[];
    public show: boolean;

    constructor(
        id: UniqueId = '',
        name: string = '',
        data: IProblemsItem<T>[] = [],
        show: boolean = false
    ) {
        this.id = id;
        this.name = name;
        this.show = show;
        this.data = data;
    }
}
