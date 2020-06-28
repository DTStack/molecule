import * as React from 'react';

import Sidebar from './sidebar';

export const Workbench: React.SFC = function() {
    return (
        <div>
            <Sidebar />
            Workbench
        </div>
    );
};

export default Workbench;
