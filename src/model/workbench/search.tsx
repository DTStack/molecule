import { IActionBarItemProps } from 'mo/components/actionBar';
export interface ISearchProps {
    headerToolBar?: IActionBarItemProps[];
    searchAddons?: IActionBarItemProps[];
    replaceAddons?: IActionBarItemProps[];
    value?: string; // queryValue;
    replaceValue?: string;
    isRegex?: boolean;
    isCaseSensitive?: boolean;
    isWholeWords?: boolean;
    preserveCase?: boolean;
}

export const SEARCH_CASE_SENSITIVE_COMMAND_ID = 'search.matchCase';
export const SEARCH_WHOLE_WORD_COMMAND_ID = 'search.matchWholeWord';
export const SEARCH_REGULAR_EXPRESSION_COMMAND_ID =
    'search.useRegularExpression';
export const SEARCH_PRESERVE_CASE_COMMAND_ID = 'search.preserveCase';
export const SEARCH_REPLACE_ALL_COMMAND_ID = 'search.replaceAll';

export const SEARCH_ACTIVITY_ITEM = {
    id: 'search',
    name: 'Search',
    iconName: 'codicon-search',
};

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
];

const defaultSearchAddons = [
    {
        id: SEARCH_CASE_SENSITIVE_COMMAND_ID,
        title: 'Match Case',
        disabled: false,
        checked: false,
        iconName: 'codicon-case-sensitive',
    },
    {
        id: SEARCH_WHOLE_WORD_COMMAND_ID,
        title: 'Match Whole Word',
        disabled: false,
        checked: false,
        iconName: 'codicon-whole-word',
    },
    {
        id: SEARCH_REGULAR_EXPRESSION_COMMAND_ID,
        disabled: false,
        checked: false,
        title: 'Use Regular Expression',
        iconName: 'codicon-regex',
    },
];

const defaultReplaceAddons = [
    {
        id: SEARCH_PRESERVE_CASE_COMMAND_ID,
        title: 'Preserve Case',
        disabled: false,
        checked: false,
        iconName: 'codicon-preserve-case',
    },
    {
        id: SEARCH_REPLACE_ALL_COMMAND_ID,
        title: 'Replace All',
        disabled: false,
        checked: false,
        iconName: 'codicon-replace-all',
    },
];

export class ISearchModel implements ISearchProps {
    public headerToolBar: IActionBarItemProps[];
    public searchAddons: IActionBarItemProps[];
    public replaceAddons: IActionBarItemProps[];
    public value: string = '';
    public replaceValue: string = '';
    public isRegex: boolean = false;
    public isCaseSensitive: boolean = false;
    public isWholeWords: boolean = false;
    public preserveCase: boolean = false;

    constructor(
        headerToolBar: IActionBarItemProps[] = builtInHeaderToolbar,
        searchAddons: IActionBarItemProps[] = defaultSearchAddons,
        replaceAddons: IActionBarItemProps[] = defaultReplaceAddons,
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
