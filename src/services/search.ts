import { BaseService } from 'mo/glue';
import { ISearchProps, SearchEvent, SearchModel } from 'mo/models/search';
import type { SearchResultItem, UniqueId } from 'mo/types';
import { inject, injectable } from 'tsyringe';

import { BuiltinService } from './builtin';

export interface ISearchService extends BaseService<SearchModel> {
    /**
     * Set information about validate
     * @param message - If provided a string, molecule will set it status as `info`
     */
    setValidateInfo: (message: string | ISearchProps['validateInfo']) => void;
    /**
     * Set value for search input
     */
    setValue: (value?: string) => void;
    /**
     * Set status for result is tree
     */
    setResultIsTree: (isTree: boolean) => void;
    /**
     * Set result data for search
     */
    setResult: (resultData?: SearchResultItem[]) => void;
    /**
     * Set result tree expand keys
     */
    setExpandKeys: (expandKeys: UniqueId[]) => void;
    /**
     * Set result tree folder's expand key
     */
    onResultFolderClick: (expandKey: UniqueId) => void;
    /**
     * Reset the search input and result data
     */
    reset(): void;
    /**
     * Listen to the event about the search value
     */
    onChange(callback: (value: string) => void): void;
    /**
     * Listen to the event about going to search result via values
     */
    onSearch(callback: (value: string) => void): void;
    /**
     * Listen to the click event in result data
     */
    onResultClick(callback: (item: SearchResultItem) => void): void;
}

@injectable()
export class SearchService extends BaseService<SearchModel> implements ISearchService {
    protected state: SearchModel;

    constructor(@inject('builtin') private builtin: BuiltinService) {
        super('search');
        this.state = new SearchModel();
    }

    public setValidateInfo(message: string | ISearchProps['validateInfo']) {
        this.setState({
            validateInfo: typeof message === 'string' ? { status: 'info', message } : message,
        });
    }

    public setValue(value?: string) {
        this.setState({
            value,
        });
    }

    public setResultIsTree(resultIsTree: boolean) {
        this.setState({
            resultIsTree,
        });
    }

    public setResult(resultData?: SearchResultItem[]) {
        this.setState({
            result: resultData || [],
        });
    }

    public setExpandKeys(expandKeys: UniqueId[]) {
        this.setState({
            expandKeys,
        });
    }

    public onResultFolderClick(folderId: UniqueId) {
        const expandKeys = this.getState().expandKeys;
        const index = expandKeys.indexOf(folderId);
        if (index > -1) {
            expandKeys.splice(index, 1);
        } else {
            expandKeys.push(folderId);
        }
        this.setExpandKeys(expandKeys);
    }

    public reset() {
        this.setState(new SearchModel());
    }

    public onChange(callback: (value: string) => void): void {
        this.subscribe(SearchEvent.onChange, callback);
    }

    public onSearch(callback: (value: string) => void): void {
        this.subscribe(SearchEvent.onSearch, callback);
    }

    public onResultClick(callback: (item: SearchResultItem) => void): void {
        this.subscribe(SearchEvent.onResultClick, callback);
    }
}
