import 'mo/workbench/editor/style.scss';
import { Editor } from './editor';
import { editor, mapState } from 'mo/services';
import { EditorEvent } from 'mo/core';

const EditorView = mapState(Editor, editor, [
    EditorEvent.OpenTab,
]);

export {
    Editor,
    EditorView,
};
