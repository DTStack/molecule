import { type InputValidateInfo, SearchMode, type SearchModeLiteral, SearchResult, type UniqueId } from 'mo/types';

export enum SearchEvent {
    onChange = 'search.onChange',
    onSearch = 'search.onSearch',
    onEnter = 'search.onEnter',
    onSelect = 'search.onSelect',
}

export class SearchModel {
    constructor(
        public value: string = '',
        public mode: SearchModeLiteral = SearchMode.list,
        public result: SearchResult = {
            total: 0,
            results: [],
        },
        public expandedKeys: UniqueId[] = [],
        public validateInfo: InputValidateInfo = {
            status: 'info',
            message: '',
        }
    ) {}
}
