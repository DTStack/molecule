import { connect, panelService } from 'mo';
import { panelController } from 'mo/controller';
import Panel from './panel';

const PanelView = connect(panelService, Panel, panelController);

export { PanelView };
