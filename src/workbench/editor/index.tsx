import 'mo/workbench/editor/style.scss';
import * as React from 'react';

import { EditorCtx } from 'mo/provider/editor';
import { Editor } from 'mo/workbench/editor/editor';

export default function EditorView(props) {
    const editor = React.useContext(EditorCtx);
    return (
        <Editor {...props} {...editor}/>
    );
}

export {
    Editor,
};
