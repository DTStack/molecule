import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { IActivityBarItem } from './activityBar';

export interface ISearch {
    value?: string;
    replaceValue?: string;
    isRegex?: boolean;
    isCaseSensitive?: boolean;
    isWholeWords?: boolean;
    preserveCase?: boolean;
}

const builtInHeaderToolbar = [
    {
        id: 'Refresh',
        title: 'Refresh',
        disabled: true,
        iconName: 'codicon-refresh',
    },
    {
        id: 'Clear',
        disabled: true,
        title: 'Clear all',
        iconName: 'codicon-clear-all',
    },
    {
        id: 'Collapse',
        title: 'Collapse all',
        disabled: true,
        iconName: 'codicon-collapse-all',
    },
    {
        id: 'test',
        title: 'test',
        disabled: true,
        iconName: 'codicon-case-sensitive',
    },
];

@injectable()
export class ISearchModel implements ISearch {
    public headerToolBar: IActivityBarItem[];
    public value: string = '';
    public replaceValue: string = '';
    public isRegex: boolean = false;
    public isCaseSensitive: boolean = false;
    public isWholeWords: boolean = false;
    public preserveCase: boolean = false;

    constructor(
        headerToolBar: IActivityBarItem[] = builtInHeaderToolbar,
        value = '',
        replaceValue = '',
        isRegex = false,
        isCaseSensitive = false,
        isWholeWords = false,
        preserveCase = false
    ) {
        this.headerToolBar = headerToolBar;
        this.value = value;
        this.replaceValue = replaceValue;
        this.isRegex = isRegex;
        this.isCaseSensitive = isCaseSensitive;
        this.isWholeWords = isWholeWords;
        this.preserveCase = preserveCase;
    }
}
