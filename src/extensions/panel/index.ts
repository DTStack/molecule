import { IExtension } from 'mo/model/extension';
import { IExtensionService } from 'mo/services';
import molecule from 'mo';
import { builtInOutputPanel, builtInPanelToolbox } from 'mo/model';

export const ExtendsPanel: IExtension = {
    activate(extensionCtx: IExtensionService) {
        const output = builtInOutputPanel();
        molecule.panel.setState({
            current: output,
            toolbox: builtInPanelToolbox(),
        });
        molecule.panel.add(output);
    },
};
