import type { InputValidateInfo, SearchResultItem, UniqueId } from 'mo/types';

export enum SearchEvent {
    onChange = 'search.onChange',
    onSearch = 'search.onSearch',
    onSelect = 'search.onSelect',
}

export class SearchModel {
    constructor(
        public value: string = '',
        public resultIsTree: boolean = false,
        public result: SearchResultItem[] = [],
        public expandedKeys: UniqueId[] = [],
        public validateInfo: InputValidateInfo = {
            status: 'info',
            message: '',
        }
    ) {}
}
