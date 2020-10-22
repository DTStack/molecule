import 'mo/workbench/editor/style.scss';
import * as React from 'react';

import { EditorCtx } from 'mo/provider/editor';
import { Editor } from './editor';

function EditorView(props) {
    const { editor } = React.useContext(EditorCtx);
    return (
        <Editor {...props} editor={editor}/>
    );
}

export {
    Editor,
    EditorView,
};
