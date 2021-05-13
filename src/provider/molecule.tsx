import 'reflect-metadata';
import * as React from 'react';
import { container } from 'tsyringe';
import { IColorTheme } from 'mo/model/colorTheme';
import { defaultExtensions } from 'mo/extensions';
import { IExtension } from 'mo/model/extension';
import { ILocalization } from 'mo/model/localization';
import {
    ExtensionService,
    IExtensionService,
} from 'mo/services/extensionService';
import { ID_APP } from 'mo/common/id';
import { IMonacoService, MonacoService } from 'mo/monaco/monacoService';
import { CommandQuickAccessViewAction } from 'mo/monaco/quickAccessViewAction';
import { registerAction2 } from 'mo/monaco/common';
import { SelectColorThemeAction } from 'mo/monaco/selectColorThemeAction';

interface Props {
    extensions?: IExtension[];
    locales?: ILocalization[];
    colorTheme?: IColorTheme[];
}

export const MoleculeCtx = React.createContext({});
export class MoleculeProvider extends React.Component<Props> {
    private readonly extensionService!: IExtensionService;
    private readonly monacoService!: IMonacoService;

    constructor(props) {
        super(props);
        console.log('Molecule constructed.');
        this.extensionService = container.resolve(ExtensionService);
        this.monacoService = container.resolve(MonacoService);
    }

    componentDidMount() {
        this.initWorkbench();
        const { extensions = [] } = this.props;
        this.extensionService.load(defaultExtensions);
        this.extensionService.load(extensions);
    }

    initWorkbench() {
        const container = document.getElementById(ID_APP) || document.body;
        this.monacoService.initWorkspace(container);
        // The initWorkbenchActions depends on initWorkspace, so there must wait the before exec end.
        this.initWorkbenchActions();
    }

    initWorkbenchActions() {
        console.log(
            'CommandQuickAccessViewAction: ',
            CommandQuickAccessViewAction
        );
        registerAction2(CommandQuickAccessViewAction);
        registerAction2(SelectColorThemeAction);
    }

    public render() {
        return (
            <MoleculeCtx.Provider value={{}}>
                {this.props.children}
            </MoleculeCtx.Provider>
        );
    }
}
