import 'mo/workbench/editor/style.scss';
import { Editor } from './editor';
import { editorService } from 'mo/services';
import { mapState } from 'mo/react';

const EditorView = mapState(Editor, editorService.getState());

export {
    Editor,
    EditorView,
};
