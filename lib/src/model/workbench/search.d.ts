import 'reflect-metadata';
import { IActionBarItem } from 'mo/components/actionBar';
export interface ISearch {
    headerToolBar?: IActionBarItem[];
    searchAddons?: IActionBarItem[];
    replaceAddons?: IActionBarItem[];
    value?: string;
    replaceValue?: string;
    isRegex?: boolean;
    isCaseSensitive?: boolean;
    isWholeWords?: boolean;
    preserveCase?: boolean;
}
export declare const SEARCH_CASE_SENSITIVE_COMMAND_ID = "search.matchCase";
export declare const SEARCH_WHOLE_WORD_COMMAND_ID = "search.matchWholeWord";
export declare const SEARCH_REGULAR_EXPRESSION_COMMAND_ID = "search.useRegularExpression";
export declare const SEARCH_PRESERVE_CASE_COMMAND_ID = "search.preserveCase";
export declare const SEARCH_REPLACE_ALL_COMMAND_ID = "search.replaceAll";
export declare class ISearchModel implements ISearch {
    headerToolBar: IActionBarItem[];
    searchAddons: IActionBarItem[];
    replaceAddons: IActionBarItem[];
    value: string;
    replaceValue: string;
    isRegex: boolean;
    isCaseSensitive: boolean;
    isWholeWords: boolean;
    preserveCase: boolean;
    constructor(headerToolBar?: IActionBarItem[], searchAddons?: IActionBarItem[], replaceAddons?: IActionBarItem[], value?: string, replaceValue?: string, isCaseSensitive?: boolean, isWholeWords?: boolean, isRegex?: boolean, preserveCase?: boolean);
}
