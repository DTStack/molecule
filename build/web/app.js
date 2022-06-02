import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { create, Workbench } from '../../esm';
import '../../esm/style/mo.css';

const moInstance = create({
    extensions: [],
});

export const App = () => moInstance.render(<Workbench />);

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);
