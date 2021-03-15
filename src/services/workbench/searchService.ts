import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import { ISearch, ISearchModel } from 'mo/model/workbench/search';

export interface ISearchService extends Component<ISearch> {}

@singleton()
export class SearchService
    extends Component<ISearch>
    implements ISearchService {
    protected state: ISearch;
    constructor() {
        super();
        this.state = container.resolve(ISearchModel);
    }
}
