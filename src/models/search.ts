import type { InputValidateInfo, SearchResultItem, UniqueId } from 'mo/types';

export enum SearchEvent {
    onChange = 'search.onChange',
    onSearch = 'search.onSearch',
    onResultClick = 'search.onResultClick',
}

export interface ISearchProps {
    value?: string;
    resultIsTree?: boolean;
    result: SearchResultItem[];
    expandKeys: UniqueId[];
    validateInfo?: InputValidateInfo;
}

export class SearchModel implements ISearchProps {
    constructor(
        public value: string = '',
        public resultIsTree: boolean = false,
        public result: SearchResultItem[] = [],
        public expandKeys: UniqueId[] = [],
        public validateInfo: InputValidateInfo = {
            status: 'info',
            message: '',
        }
    ) {}
}
