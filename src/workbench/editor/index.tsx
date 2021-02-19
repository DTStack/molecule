import 'reflect-metadata';
import { connect } from 'mo/react';
import { container } from 'tsyringe';
import { IEditor } from 'mo/model';
import { editorService, IEditorService } from 'mo/services';
import { EditorController, IEditorController } from 'mo/controller/editor';

import { Editor } from './editor';

const editorController = container.resolve(EditorController);

const EditorView = connect<IEditorService, IEditor, IEditorController>(
    editorService,
    Editor,
    editorController
);

export { Editor, EditorView };
