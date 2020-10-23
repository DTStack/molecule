import 'reflect-metadata';
import * as React from 'react';
import { IExtensionEntry } from 'mo/core/extension';
import { ILocalization } from 'mo/core/localization';
import { extensionService } from 'mo/main';

interface IMoleculeProps {
    extensionEntry?: IExtensionEntry;
    locales?: ILocalization[];
}

export const MoleculeCtx = React.createContext({});

export class MoleculeProvider extends React.Component<IMoleculeProps> {
    constructor(props) {
        super(props);
        console.log('Molecule constructed.');
    }

    componentDidMount() {
        const { extensionEntry = {} } = this.props;
        extensionService.load(extensionEntry);
    }

    public render() {
        return (
            <MoleculeCtx.Provider value={{}}>
                { this.props.children }
            </MoleculeCtx.Provider>
        );
    }
}
