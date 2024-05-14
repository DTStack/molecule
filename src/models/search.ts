import { type InputValidateInfo, SearchMode, type SearchModeLiteral, type UniqueId } from 'mo/types';
import type { TreeNodeModel } from 'mo/utils/tree';

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
        public result: TreeNodeModel<any>[] = [],
        public expandedKeys: UniqueId[] = [],
        public validateInfo: InputValidateInfo = {
            status: 'info',
            message: '',
        }
    ) {}
}
