import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Workbench, MoleculeProvider } from '../../esm';
import '../../esm/style/mo.css';

const App = () => (
    <React.StrictMode>
        <MoleculeProvider>
            <Workbench />
        </MoleculeProvider>
    </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));
