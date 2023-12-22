import { BaseService } from 'mo/glue';
import { SearchEvent, SearchModel } from 'mo/models/search';
import type { InputValidateInfo, SearchResultItem, UniqueId } from 'mo/types';
import { injectable } from 'tsyringe';

@injectable()
export class SearchService extends BaseService<SearchModel> {
    protected state: SearchModel;

    constructor() {
        super('search');
        this.state = new SearchModel();
    }

    public getValue() {
        return this.getState().value;
    }

    public getExpandedKeys() {
        return this.getState().expandedKeys;
    }

    public setValue(value: string) {
        this.dispatch((draft) => {
            draft.value = value;
        });
    }

    public setValidateInfo(message: string | InputValidateInfo) {
        this.dispatch((draft) => {
            draft.validateInfo =
                typeof message === 'string' ? { status: 'info', message } : message;
        });
    }

    public setResultIsTree(resultIsTree: boolean) {
        this.dispatch((draft) => {
            draft.resultIsTree = resultIsTree;
        });
    }

    public setResult(resultData?: SearchResultItem[]) {
        this.dispatch((draft) => {
            draft.result = resultData || [];
        });
    }

    public setExpandedKeys(expandedKeys: UniqueId[]) {
        this.dispatch((draft) => {
            draft.expandedKeys = expandedKeys;
        });
    }

    public addExpandedKeys(expandedKeys: UniqueId[]) {
        this.dispatch((draft) => {
            draft.expandedKeys.push(...expandedKeys);
        });
    }

    public removeExpandedKeys(expandedKey: UniqueId) {
        this.dispatch((draft) => {
            const idx = draft.expandedKeys.indexOf(expandedKey);
            if (idx === -1) return;
            draft.expandedKeys.splice(idx, 1);
        });
    }

    public toggleExpandedKey(expandedKey: UniqueId) {
        if (this.getExpandedKeys().includes(expandedKey)) {
            this.removeExpandedKeys(expandedKey);
        } else {
            this.addExpandedKeys([expandedKey]);
        }
    }

    public reset() {
        this.setState(new SearchModel());
    }

    // ===================== Subscriptions =====================
    public onChange(callback: (value: string) => void): void {
        this.subscribe(SearchEvent.onChange, callback);
    }

    public onSearch(callback: (value: string) => void): void {
        this.subscribe(SearchEvent.onSearch, callback);
    }

    public onSelect(callback: (treeNode: SearchResultItem) => void): void {
        this.subscribe(SearchEvent.onSelect, callback);
    }
}
