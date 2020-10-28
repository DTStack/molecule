import 'mo/workbench/editor/style.scss';
import { Editor } from './editor';
import { editor, EditorEvent, mapState } from 'mo/services';

const EditorView = mapState(Editor, editor, [
    EditorEvent.OpenTab,
]);

export {
    Editor,
    EditorView,
};
