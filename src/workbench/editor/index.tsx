import 'mo/workbench/editor/style.scss';
import { Editor } from './editor';
import { editor } from 'mo/services';
import { mapState } from 'mo/react';

const EditorView = mapState(Editor, editor.getState());

export {
    Editor,
    EditorView,
};
