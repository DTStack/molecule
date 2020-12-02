import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    IExpolorerModel,
    IExpolorer,
    IPanelItem
} from 'mo/model/workbench/explorer';

export interface IExplorerService extends Component<IExpolorer> {
    push(data: IPanelItem): void;
}

@singleton()
export class ExplorerService
    extends Component<IExpolorer>
    implements IExplorerService {
    protected state: IExpolorer;

    constructor() {
        super();
        this.state = container.resolve(IExpolorerModel);
    }
    public push(data: IPanelItem) {
        const original = this.state.data;
        original?.push(data);
    }

}
