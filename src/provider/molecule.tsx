import 'mo/style/main.scss';
import 'vscode-codicons/dist/codicon.css';
import * as React from 'react';
import { container } from 'tsyringe';
import { ITheme } from 'mo/model/theme';
import { defaultExtensions } from 'mo/extensions';
import { IExtension } from 'mo/model/extension';
import { ILocalization } from 'mo/model/localization';
import { ExtensionService, IExtensionService } from 'mo/services/extensionService';

interface Props {
    extensions?: IExtension[];
    locales?: ILocalization[];
    colorTheme?: ITheme[];
}

export const MoleculeCtx = React.createContext({});
export class MoleculeProvider extends React.Component<Props> {
    private extensionService!: IExtensionService;
    constructor(props) {
        super(props);
        console.log('Molecule constructed.');
    }

    componentDidMount() {
        const { extensions = [] } = this.props;
        this.extensionService = container.resolve(ExtensionService);
        this.extensionService.load(defaultExtensions);
        this.extensionService.load(extensions);
    }

    public render() {
        return (
            <MoleculeCtx.Provider value={{}}>
                { this.props.children }
            </MoleculeCtx.Provider>
        );
    }
}
