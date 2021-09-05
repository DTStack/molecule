import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Workbench, MoleculeProvider } from '../../esm';
import '../../esm/style/mo.css';

const App = () => (
    <StrictMode>
        <MoleculeProvider>
            <Workbench />
        </MoleculeProvider>
    </StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));
