import { connect, panelService } from 'mo';
import { PanelController } from 'mo/controller/panel';
import { container } from 'tsyringe';
import Panel from './panel';

const panelController = container.resolve(PanelController);

const PanelView = connect(panelService, Panel, panelController);

export { PanelView };
