
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Workbench } from 'mo/workbench';
import { MoleculeProvider } from 'mo/provider/molecule';

ReactDOM.render(
    <React.StrictMode>
        <MoleculeProvider>
            <Workbench />
        </MoleculeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
