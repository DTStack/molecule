import {
    IActionBarItemProps,
    ITreeNodeItemProps,
} from '@dtinsight/molecule-ui';
import { InfoTypeEnum } from '@dtinsight/molecule-ui/esm/search/input';

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
    validationInfo?: { type: InfoTypeEnum; text: string };
    isRegex?: boolean;
    isCaseSensitive?: boolean;
    isWholeWords?: boolean;
    preserveCase?: boolean;
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
    public validationInfo: { type: InfoTypeEnum; text: string } = {
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
        validationInfo: { type: InfoTypeEnum; text: string } = {
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
