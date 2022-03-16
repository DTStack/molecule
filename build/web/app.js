import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Workbench, MoleculeProvider } from '../../packages/molecule';
import '../../packages/molecule/mo.css';

const App = () => (
    <StrictMode>
        <MoleculeProvider>
            <Workbench />
        </MoleculeProvider>
    </StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));
