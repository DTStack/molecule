import type { InputValidateInfo, SearchResultItem, UniqueId } from 'mo/types';

export enum SearchEvent {
    onChange = 'search.onChange',
    onSearch = 'search.onSearch',
    onResultClick = 'search.onResultClick',
    onToolbarClick = 'search.onToolbarClick',
}

export interface ISearchProps {
    value?: string;
    result: SearchResultItem[];
    expandKeys: UniqueId[];
    validateInfo?: InputValidateInfo;
}

export class SearchModel implements ISearchProps {
    constructor(
        public value: string = '',
        public result: SearchResultItem[] = [],
        public expandKeys: UniqueId[] = [],
        public validateInfo: InputValidateInfo = {
            status: 'info',
            message: '',
        }
    ) {}
}
