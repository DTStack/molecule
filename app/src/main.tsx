import React from 'react';
import ReactDOM from 'react-dom/client';
import { create } from '@dtinsight/molecule';
import Workbench from '@dtinsight/molecule/esm/client/workbench';

const moInstance = create({
    extensions: [],
});

const App = () => moInstance.render(<Workbench />);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
