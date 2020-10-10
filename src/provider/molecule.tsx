import * as React from 'react';
import { IExtensionEntry } from '@/core/extension';
import { IMolecule } from '@/core/molecule';
import { ILocalization } from '@/core/localization';
import { ExtensionService } from '@/services/extensionService';
import { EditorService } from '@/services/editor/editorService';
import { ActivityBarService } from '@/services/activityBarService';
import { MoleculeService } from '@/services/moleculeService';
import { EditorInstService } from '@/services/editor/instanceService';
import { ITab } from '@/components/tabs';
import { ThemeService } from '@/services/themeServices';
import { SidebarBarService } from '@/services/sidebarService';
import { observable } from '@/common/observable';

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

const editorInstance = new EditorInstService(
    1,
    tab,
    [tab],
    [],
    ['a', 'b'],
    [{ id: '1', name: 'a' }],
    null,
);

const editorInstance1 = new EditorInstService(
    1,
    tab1,
    [tab1],
    [],
    ['a', 'b'],
    [{ id: '1', name: 'a' }],
    null,
);

const editorInstance2 = new EditorInstService(
    1,
    tab2,
    [tab2],
    [],
    ['a', 'b'],
    [{ id: '1', name: 'a' }],
    null,
);

const initialState = observable<IMolecule>(new MoleculeService(
    new ActivityBarService(),
    new EditorService(
        editorInstance,
        [editorInstance, editorInstance1, editorInstance2],
    ),
    new ThemeService('vs-dark', 'vs-dark'),
    new SidebarBarService(),
));

// https://medium.com/dev-genius/reactjs-manage-your-state-nicely-with-context-1ed3090a6a46

export const MoleculeCtx = React.createContext<IMolecule>(initialState);

export class MoleculeProvider extends React.Component<IMoleculeProps> {
    public state: IMolecule = initialState;

    private extensionService: ExtensionService;

    constructor(props) {
        super(props);
        // this.state = observe(initialState, this.changed);
        // initialState = observable<IMolecule>(initialState, this.changed);
        const { extensionEntry, locales } = this.props;
        this.changed = this.changed.bind(this);
        this.extensionService = new ExtensionService(extensionEntry, this.state);
        this.loadLocales(locales);
        console.log('Molecule constructed.');
    }

    componentDidMount() {
        console.log('nextState', this.state);

        initialState.observe(this.changed);
        // this.setState(observe(initialState, this.changed));
    }

    changed(nextState) {
        console.log('state eq:', nextState === this.state, nextState);
        // TODO 目前是很粗粒度的更新 state 对象
        this.setState( { ...nextState } );
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
