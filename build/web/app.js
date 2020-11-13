import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Workbench, MoleculeProvider } from 'mo';

const App = () => (
    <React.StrictMode>
        <MoleculeProvider>
            <Workbench />
        </MoleculeProvider>
    </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));
