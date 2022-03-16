import 'reflect-metadata';
import { connect } from '@dtinsight/molecule-glue';
import { container } from 'tsyringe';
import { EditorController } from 'mo/controller/editor';
import { Editor } from './editor';
import { EditorService, LayoutService } from 'mo/services';

const editorService = container.resolve(EditorService);
const layoutService = container.resolve(LayoutService);
import { EditorStatusBarView } from './statusBarView';

const editorController = container.resolve(EditorController);

const EditorView = connect(
    { editor: editorService, layout: layoutService },
    Editor,
    editorController
);

export { Editor, EditorStatusBarView, EditorView };
