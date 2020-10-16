import * as React from 'react';

import MonacoEditor from 'dt-react-monaco-editor';

import './demo.scss';

export const MonacoDemo = () => (
    <div>
        <MonacoEditor
            value={`select * from abc`}
            language={'dtsql'}
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

