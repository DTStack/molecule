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

        molecule.panel.onTabClose((key) => {
            const { data = [], current } = molecule.panel.getState();
            if (current?.id === key) {
                const index = data.findIndex((item) => item.id === key);
                const next =
                    index === data.length - 1 ? data.length - 2 : index + 1;
                const nextPanel = data[next];
                if (nextPanel) {
                    molecule.panel.open(nextPanel);
                }
            }

            molecule.panel.remove(key);
        });
    },
};
