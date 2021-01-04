import { IPanel, PanelModel } from 'mo/model/workbench/panel';
import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';

export interface IPanelService extends Component<IPanel> {}

@singleton()
export class PanelService extends Component<IPanel> implements IPanelService {
    protected state: IPanel;

    constructor() {
        super();
        this.state = container.resolve(PanelModel);
    }
}
