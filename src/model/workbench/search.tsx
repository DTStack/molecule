import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { IActivityBarItem } from 'mo/model';
import { IActionBarItem } from 'mo/components/actionBar'

export interface ISearch {
    headerToolBar?: IActivityBarItem[];
    searchAddons?: IActionBarItem[];
    replaceAddons?: IActionBarItem[];
    value?: string; // queryValue;
    replaceValue?: string;
    isRegex?: boolean;
    isCaseSensitive?: boolean;
    isWholeWords?: boolean;
    preserveCase?: boolean;
}

export const CASE_SENSITIVE_COMMAND_ID = 'MatchCase';
export const WHOLE_WORD_COMMAND_ID = 'MatchWholeWord';
export const REGULAR_EXPRESSION_COMMAND_ID = 'UseRegularExpression';
export const PRESERVE_CASE_COMMAND_ID = 'PreserveCase';
export const REPLACE_ALL_COMMAND_ID = 'ReplaceAll';

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

const defaultSearchAddons = [
    {
        id: CASE_SENSITIVE_COMMAND_ID,
        title: 'Match Case',
        disabled: false,
        checked: false,
        iconName: 'codicon-case-sensitive',
    },
    {
        id: WHOLE_WORD_COMMAND_ID,
        title: 'Match Whole Word',
        disabled: false,
        checked: false,
        iconName: 'codicon-whole-word',
    },
    {
        id: REGULAR_EXPRESSION_COMMAND_ID,
        disabled: false,
        checked: false,
        title: 'Use Regular Expression',
        iconName: 'codicon-regex',
    },
];

const defaultReplaceAddons = [
    {
        id: PRESERVE_CASE_COMMAND_ID,
        title: 'Preserve Case',
        disabled: false,
        checked: false,
        iconName: 'codicon-preserve-case',
    },
    {
        id: REPLACE_ALL_COMMAND_ID,
        title: 'Replace All',
        disabled: false,
        checked: false,
        iconName: 'codicon-replace-all',
    },
];

@injectable()
export class ISearchModel implements ISearch {
    public headerToolBar: IActivityBarItem[];
    public searchAddons: IActionBarItem[];
    public replaceAddons: IActionBarItem[];
    public value: string = '';
    public replaceValue: string = '';
    public isRegex: boolean = false;
    public isCaseSensitive: boolean = false;
    public isWholeWords: boolean = false;
    public preserveCase: boolean = false;

    constructor(
        headerToolBar: IActivityBarItem[] = builtInHeaderToolbar,
        searchAddons: IActionBarItem[] = defaultSearchAddons,
        replaceAddons: IActionBarItem[] = defaultReplaceAddons,
        value = '',
        replaceValue = '',
        isCaseSensitive = false,
        isWholeWords = false,
        isRegex = false,
        preserveCase = false
    ) {
        this.headerToolBar = headerToolBar;
        this.searchAddons = searchAddons;
        this.replaceAddons = replaceAddons;
        this.value = value;
        this.replaceValue = replaceValue;
        this.isCaseSensitive = isCaseSensitive;
        this.isWholeWords = isWholeWords;
        this.isRegex = isRegex;
        this.preserveCase = preserveCase;
    }
}
