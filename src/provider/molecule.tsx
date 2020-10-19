import 'reflect-metadata';
import * as React from 'react';
import { IExtensionEntry } from 'mo/core/extension';
import { IMolecule } from 'mo/core/molecule';
import { ILocalization } from 'mo/core/localization';
import { ExtensionService } from 'mo/services/extensionService';
import { EditorService } from 'mo/services/editor/editorService';
import { ActivityBarService } from 'mo/services/activityBarService';
import { MoleculeService } from 'mo/services/moleculeService';
import { EditorGroupService } from 'mo/services/editor/groupService';
import { ITab } from 'mo/components/tabs';
import { ThemeService } from 'mo/services/themeServices';
import { SidebarBarService } from 'mo/services/sidebarService';

interface IMoleculeProps {
    extensionEntry?: IExtensionEntry;
    locales?: ILocalization[];
}

// const DEFAULT_COLOR_THEME = 'light-vs';
// const DEFAULT_LOCALE_LANG = 'en-us';
const tab: ITab = {
    id: 1,
    name: 'test1',
    mode: 'sql',
    value: 'select * from test',
};

const tab1: ITab = {
    id: 2,
    name: 'test2',
    mode: 'sql',
    value: 'select * from test',
};

const tab2: ITab = {
    id: 3,
    name: 'test3',
    mode: 'sql',
    value: 'select * from test',
};

const editorGroup0 = new EditorGroupService(
    1,
    tab,
    [tab],
    [],
    ['a', 'b'],
    [{ id: '1', name: 'a' }],
    null,
);

const editorGroup1 = new EditorGroupService(
    1,
    tab1,
    [tab1],
    [],
    ['a', 'b'],
    [{ id: '1', name: 'a' }],
    null,
);

const editorGroup2 = new EditorGroupService(
    1,
    tab2,
    [tab2],
    [],
    ['a', 'b'],
    [{ id: '1', name: 'a' }],
    null,
);

export const Molecule = new MoleculeService(
    new ActivityBarService(),
    new EditorService(
        editorGroup0,
        [
            editorGroup0,
            editorGroup1, editorGroup2,
        ],
    ),
    new ThemeService('vs-dark', 'vs-dark'),
    new SidebarBarService(),
);

// https://medium.com/dev-genius/reactjs-manage-your-state-nicely-with-context-1ed3090a6a46

export const MoleculeCtx = React.createContext<IMolecule>(Molecule);

export class MoleculeProvider extends React.Component<IMoleculeProps> {
    public state: IMolecule;

    private extensionService: ExtensionService;

    constructor(props) {
        super(props);
        const { extensionEntry, locales } = this.props;
        this.state = Molecule; // observable<IMolecule>(Molecule);

        this.loadLocales(locales);
        this.extensionService = new ExtensionService(extensionEntry, this.state);
        this.stateChanged = this.stateChanged.bind(this);
        console.log('Molecule constructed.');
    }

    componentDidMount() {
        // this.state.observe(this.stateChanged);
    }

    stateChanged() {
        console.log('state eq:', this.state === Molecule);
        // TODO 目前是很粗粒度的更新 state 对象
        this.setState( { ...this.state } );
        // this.setState(Object.assign({}, this.state));
    }

    public initMolecule() {
        console.log('Init molecule component.', this.extensionService);
    }

    public loadLocales(locales?: ILocalization[]) {

    }

    public getValue(): any {
        return this.state;
    }

    public render() {
        return (
            <MoleculeCtx.Provider
                value={this.state}>
                { this.props.children }
            </MoleculeCtx.Provider>
        );
    }
}
