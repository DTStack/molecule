import { ITreeNodeItemProps } from 'mo/components';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { InfoTypeEnum } from 'mo/components/search/input';
import { localize } from 'mo/i18n/localize';

export enum SearchEvent {
    onChange = 'search.onChange',
    onSearch = 'search.onSearch',
    onReplaceAll = 'search.onReplaceAll',
    onResultClick = 'search.onResultClick',
}

export interface ISearchProps {
    headerToolBar?: IActionBarItemProps[];
    searchAddons?: IActionBarItemProps[];
    replaceAddons?: IActionBarItemProps[];
    result: ITreeNodeItemProps[];
    value?: string;
    replaceValue?: string;
    replaceMode?: boolean;
    validationInfo?: { type: keyof typeof InfoTypeEnum; text: string };
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
export const SEARCH_ACTIVITY_ITEM = 'sidebar.search.title';

export const SEARCH_TOOLBAR_REFRESH = 'search.toolbar.refresh';
export const SEARCH_TOOLBAR_CLEAR = 'search.toolbar.clearAll';
export const SEARCH_TOOLBAR_COLLAPSE = 'search.toolbar.collapseAll';

export function builtInSearchActivityItem() {
    return {
        id: SEARCH_ACTIVITY_ITEM,
        name: localize(SEARCH_ACTIVITY_ITEM, 'Search'),
        iconName: 'codicon-search',
    };
}

export function builtInHeaderToolbar() {
    return [
        {
            id: SEARCH_TOOLBAR_REFRESH,
            title: localize(SEARCH_TOOLBAR_REFRESH, 'Refresh'),
            disabled: true,
            iconName: 'codicon-refresh',
        },
        {
            id: SEARCH_TOOLBAR_CLEAR,
            disabled: true,
            title: localize(SEARCH_TOOLBAR_CLEAR, 'Clear all'),
            iconName: 'codicon-clear-all',
        },
        {
            id: SEARCH_TOOLBAR_COLLAPSE,
            title: localize(SEARCH_TOOLBAR_COLLAPSE, 'Collapse all'),
            disabled: true,
            iconName: 'codicon-collapse-all',
        },
    ];
}

export function builtInSearchAddons() {
    return [
        {
            id: SEARCH_CASE_SENSITIVE_COMMAND_ID,
            title: localize(SEARCH_CASE_SENSITIVE_COMMAND_ID, 'Match Case'),
            disabled: false,
            checked: false,
            iconName: 'codicon-case-sensitive',
        },
        {
            id: SEARCH_WHOLE_WORD_COMMAND_ID,
            title: localize(SEARCH_WHOLE_WORD_COMMAND_ID, 'Match Whole Word'),
            disabled: false,
            checked: false,
            iconName: 'codicon-whole-word',
        },
        {
            id: SEARCH_REGULAR_EXPRESSION_COMMAND_ID,
            disabled: false,
            checked: false,
            title: localize(
                SEARCH_REGULAR_EXPRESSION_COMMAND_ID,
                'Use Regular Expression'
            ),
            iconName: 'codicon-regex',
        },
    ];
}

export function builtInReplaceAddons() {
    return [
        {
            id: SEARCH_PRESERVE_CASE_COMMAND_ID,
            title: localize(SEARCH_PRESERVE_CASE_COMMAND_ID, 'Preserve Case'),
            disabled: false,
            checked: false,
            iconName: 'codicon-preserve-case',
        },
        {
            id: SEARCH_REPLACE_ALL_COMMAND_ID,
            title: localize(SEARCH_REPLACE_ALL_COMMAND_ID, 'Replace All'),
            disabled: false,
            checked: false,
            iconName: 'codicon-replace-all',
        },
    ];
}

export class SearchModel implements ISearchProps {
    public headerToolBar: IActionBarItemProps[];
    public searchAddons: IActionBarItemProps[];
    public replaceAddons: IActionBarItemProps[];
    public result: ITreeNodeItemProps[] = [];
    public value: string = '';
    public replaceValue: string = '';
    public replaceMode: boolean = false;
    public isRegex: boolean = false;
    public isCaseSensitive: boolean = false;
    public isWholeWords: boolean = false;
    public preserveCase: boolean = false;
    public validationInfo: { type: keyof typeof InfoTypeEnum; text: string } = {
        type: 'info',
        text: '',
    };

    constructor(
        headerToolBar: IActionBarItemProps[] = [],
        searchAddons: IActionBarItemProps[] = [],
        replaceAddons: IActionBarItemProps[] = [],
        result = [],
        value = '',
        replaceValue = '',
        replaceMode = false,
        isCaseSensitive = false,
        isWholeWords = false,
        isRegex = false,
        preserveCase = false,
        validationInfo: { type: keyof typeof InfoTypeEnum; text: string } = {
            type: 'info',
            text: '',
        }
    ) {
        this.headerToolBar = headerToolBar;
        this.searchAddons = searchAddons;
        this.replaceAddons = replaceAddons;
        this.value = value;
        this.replaceValue = replaceValue;
        this.replaceMode = replaceMode;
        this.isCaseSensitive = isCaseSensitive;
        this.isWholeWords = isWholeWords;
        this.isRegex = isRegex;
        this.preserveCase = preserveCase;
        this.result = result;
        this.validationInfo = validationInfo;
    }
}
