import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    IPanelItem,
    IExplorer,
    IExplorerModel,
    DEFAULT_PANELS,
    SAMPLE_FOLDER_PANEL,
} from 'mo/model/workbench/explorer/explorer';
import { searchById } from '../../helper';

export interface IExplorerService extends Component<IExplorer> {
    addPanel(panel: IPanelItem | IPanelItem[]): void;
    reset(): void;
    remove(id: string): void;
    togglePanel(id?: string): void;
    updateActionsCheckStatus(id?: string): void;
    addAction(action): void;
    removeAction(id: string): void;
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
            const existPanel = DEFAULT_PANELS.concat([
                SAMPLE_FOLDER_PANEL,
            ]).find(searchById(id));
            if (!existPanel) return;
            this.addPanel(existPanel);
        }
        this.updateActionsCheckStatus(id);
    }

    public addAction(action) {
        const { headerToolBar } = this.state;
        let newActions = headerToolBar?.contextMenu;
        if (Array.isArray(action)) {
            newActions = newActions?.concat(action);
        } else {
            newActions?.push(action);
        }
        const next = { ...headerToolBar, contextMenu: newActions };
        this.setState({
            headerToolBar: next,
        });
    }

    public removeAction(id: string) {
        const { headerToolBar } = this.state;
        const newActions = headerToolBar?.contextMenu || [];
        const index = newActions?.findIndex(searchById(id));
        if (index > -1) {
            newActions.splice(index, 1);
        }
        const next = { ...headerToolBar, contextMenu: newActions };
        this.setState({
            headerToolBar: next,
        });
    }

    public updateActionsCheckStatus(id: string) {
        const { headerToolBar, data } = this.state;
        const existPanel = data?.find(searchById(id));
        const newActions = headerToolBar?.contextMenu?.map((item) => {
            return {
                ...item,
                icon:
                    item.id === id
                        ? Boolean(existPanel)
                            ? 'check'
                            : ''
                        : item.icon,
            };
        });
        const next = { ...headerToolBar, contextMenu: newActions };
        this.setState({
            headerToolBar: next,
        });
    }
}
