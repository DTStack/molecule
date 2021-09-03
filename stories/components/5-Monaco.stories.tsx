import React from 'react';

import { MonacoEditor } from 'mo/components/monaco';

import '../demo.scss';

export const MonacoDemo = () => (
    <div>
        <MonacoEditor
            options={{
                value: `select * from abc`,
                language: 'sql',
            }}
        />
    </div>
);

MonacoDemo.story = {
    name: 'Monaco Editor',
};

export default {
    title: 'Monaco Editor',
    component: MonacoDemo,
};
