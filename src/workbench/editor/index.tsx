import 'mo/workbench/editor/style.scss';
import { Editor } from './editor';
import { editor, mapState } from 'mo/services';

const EditorView = mapState(Editor, editor.getState());

export {
    Editor,
    EditorView,
};
