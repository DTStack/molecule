import 'reflect-metadata';
import { connect } from 'mo/react';
import { container } from 'tsyringe';
import { editorService } from 'mo/services';
import { EditorController } from 'mo/controller/editor';

import { Editor } from './editor';

const editorController = container.resolve(EditorController);

const EditorView = connect(editorService, Editor, editorController);

export { Editor, EditorView };
