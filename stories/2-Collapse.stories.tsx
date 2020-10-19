import * as React from 'react';

import Collapse, { Panel } from 'mo/components/collapse';

export default {
    title: 'Collapse',
};

export const Basic = () => (
    <Collapse>
        <Panel header="hello" headerClass="my-header-class">this is panel content</Panel>
        <Panel header="title2">this is panel content2 or other</Panel>
    </Collapse>
);
