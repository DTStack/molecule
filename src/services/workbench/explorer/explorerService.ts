import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    IPanelItem,
    IExplorer,
    IExplorerModel,
} from 'mo/model/workbench/explorer/explorer';
import { DEFAULT_PANELS } from 'mo/model/workbench/explorer/explorer';
import { searchById } from '../../helper';

export interface IExplorerService extends Component<IExplorer> {
    addPanel(panel: IPanelItem | IPanelItem[]): void;
    reset(): void;
    remove(id: string): void;
    togglePanel(id: string): void;
}

@singleton()
export class ExplorerService
    extends Component<IExplorer>
    implements IExplorerService {
    protected state: IExplorer;
    constructor() {
        super();
        this.state = container.resolve(IExplorerModel);
    }

    /* ============================Panel============================ */
    public addPanel(data: IPanelItem | IPanelItem[]) {
        let next = [...this.state.data!];
        if (Array.isArray(data)) {
            next = next?.concat(data);
        } else {
            next?.push(data);
        }
        this.setState({
            data: next,
        });
    }

    public reset() {
        this.setState({
            data: [],
        });
    }

    public togglePanel(id: string) {
        const { data } = this.state;
        const next = [...data!];
        const index = next.findIndex(searchById(id));
        if (index > -1) {
            this.remove(id);
        } else {
            const existPanel = DEFAULT_PANELS.find(searchById(id));
            if (!existPanel) return;
            this.addPanel(existPanel);
        }
    }

    public remove(id: string) {
        const { data } = this.state;
        const next = [...data!];
        const index = next.findIndex(searchById(id));
        if (index > -1) {
            next.splice(index, 1);
        }
        this.setState({
            data: next,
        });
    }

    // private updateHeaderToolBarCheckStatus(id: string) {
    //     const { headerToolBar, data } = this.state;
    //     const existPanel = data?.find(searchById(id));
    //     const next = [...headerToolBar!];
    //     this.setState({
    //         headerToolBar: next,
    //     });
    // }
}
