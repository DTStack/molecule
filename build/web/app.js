
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Workbench, MoleculeProvider } from 'mo';

ReactDOM.render(
    <React.StrictMode>
        <MoleculeProvider>
            <Workbench />
        </MoleculeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
