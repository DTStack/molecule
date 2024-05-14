import { BaseService } from 'mo/glue';
import { SearchEvent, SearchModel } from 'mo/models/search';
import { Arraylize, InputValidateInfo, SearchMode, SearchModeLiteral, UniqueId } from 'mo/types';
import { arraylize } from 'mo/utils';
import { TreeNodeModel } from 'mo/utils/tree';
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

    public getMode() {
        return this.getState().mode;
    }

    public setValue(value: string) {
        this.dispatch((draft) => {
            draft.value = value;
        });
    }

    public setValidateInfo(message: string | InputValidateInfo) {
        this.dispatch((draft) => {
            draft.validateInfo = typeof message === 'string' ? { status: 'info', message } : message;
        });
    }

    public setMode(mode: SearchModeLiteral) {
        this.dispatch((draft) => {
            draft.mode = mode;
        });
    }

    public toggleMode(mode?: SearchModeLiteral) {
        const next = mode || (this.getMode() === SearchMode.list ? SearchMode.tree : SearchMode.list);
        this.setMode(next);
    }

    public setResult(resultData?: TreeNodeModel<any>[]) {
        this.dispatch((draft) => {
            draft.result = resultData || [];
        });
    }

    public setExpandedKeys(expandedKeys: UniqueId[]) {
        this.dispatch((draft) => {
            draft.expandedKeys = expandedKeys;
        });
    }

    public addExpandedKeys(expandedKeys: Arraylize<UniqueId>) {
        this.dispatch((draft) => {
            draft.expandedKeys.push(...arraylize(expandedKeys));
        });
    }

    public removeExpandedKeys(expandedKey: Arraylize<UniqueId>) {
        this.dispatch((draft) => {
            arraylize(expandedKey).forEach((key) => {
                const idx = draft.expandedKeys.indexOf(key);
                if (idx === -1) return;
                draft.expandedKeys.splice(idx, 1);
            });
        });
    }

    public toggleExpandedKey(expandedKey: UniqueId) {
        if (this.getExpandedKeys().includes(expandedKey)) {
            this.removeExpandedKeys(expandedKey);
        } else {
            this.addExpandedKeys(expandedKey);
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

    public onSelect(callback: (treeNode: TreeNodeModel<any>) => void): void {
        this.subscribe(SearchEvent.onSelect, callback);
    }

    public onEnter(callback: (value: string) => void): void {
        this.subscribe(SearchEvent.onEnter, callback);
    }
}
