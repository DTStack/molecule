import * as React from 'react';
import { IExtension } from '@/common/extension';
import { ILocalization } from '@/common/localization';
import { ExtensionService } from '@/services/extensionService';

interface IMoleculeProps {
    extensions: IExtension[];
    locales: ILocalization[];
}

interface IMoleculeState {
    /**
     * Workbench's status
     */
    workbench: object;
    /**
     * Loaded extensions
     */
    extensions: IExtension[];
    /**
     * Default user's setting
     */
    settings: object;
     /**
     * The current theme status
     */
    theme: string;
    /**
     * The icon theme for workbench
     */
    iconTheme: string;
    /**
     * Molecule's language
     */
    local: string;
    /**
     * IDE shortcut keys
     */
    shortcutKeys: object;
}

const DEFAULT_COLOR_THEME = 'light-vs';
const DEFAULT_LOCALE_LANG = 'en-us';

const initialState: IMoleculeState = {

    workbench: {
        editor: {
            value: '',
        },
        panels: [],
        terminal: null,
    },

    extensions: [],

    settings: {},

    theme: DEFAULT_COLOR_THEME,

    iconTheme: '',

    local: DEFAULT_LOCALE_LANG,

    shortcutKeys: {},
};

const MoleculeCtx = React.createContext(initialState);

export class MoleculeProvider
    extends React.Component<IMoleculeProps, IMoleculeState> {
    public state = initialState;

    private extensionService: ExtensionService;

    constructor(props) {
        super(props);
        this.extensionService = new ExtensionService();
        const { extensions, locales } = this.props;
        this.loadExtensions(extensions);
        this.loadLocales(locales);
    }

    public componentDidMount() {
        console.log('Molecule componentDidMount.');
    }

    public initMolecule() {
        console.log('Init molecule component.');
    }

    public loadExtensions(extensions: IExtension[]) {
        if (extensions) {
            // TODO register extension to memory, and
            this.setState({
                extensions: this.extensionService.getAll(extensions),
            });
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
