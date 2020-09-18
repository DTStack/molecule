import * as React from 'react';
import { IExtension } from '@/core/extension';
import { IMolecule } from '@/core/molecule';
import { ILocalization } from '@/core/localization';
import { ExtensionService } from '@/services/extensionService';
import { ActivityBarService } from '@/services/activityBarService';
import { MoleculeService } from '@/services/moleculeService';

// TODO This way just for development
import CustomizedActivityBar from '@/extensions/workbench-extension/src/app';

interface IMoleculeProps {
    extensions: IExtension[];
    locales: ILocalization[];
}

// const DEFAULT_COLOR_THEME = 'light-vs';
// const DEFAULT_LOCALE_LANG = 'en-us';

const initialState: IMolecule = new MoleculeService(
    new ActivityBarService(),
);

export const MoleculeCtx = React.createContext(initialState);

export class MoleculeProvider extends React.Component<IMoleculeProps> {
    public state: IMolecule = initialState;

    private extensionService: ExtensionService;

    constructor(props) {
        super(props);
        this.extensionService = new ExtensionService();
        const { extensions, locales } = this.props;
        this.loadExtensions(extensions);
        this.loadLocales(locales);
        const ext = new CustomizedActivityBar();
        ext.active(this.state);
        console.log('Molecule constructed.');
    }

    public initMolecule() {
        console.log('Init molecule component.');
    }

    public loadExtensions(extensions: IExtension[]) {
        if (extensions) {
            // TODO register extension to memory, and
            this.extensionService.getAll(extensions);
            // this.setState({
            //     extensions: this.extensionService.getAll(extensions),
            // });
        }
    }

    public loadLocales(locales: ILocalization[]) {

    }

    public getValue() {
        return this.state;
    }

    public render() {
        return (
            <MoleculeCtx.Provider
                value={this.getValue()}>
                { this.props.children }
            </MoleculeCtx.Provider>
        );
    }
}
