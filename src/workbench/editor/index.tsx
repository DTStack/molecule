import 'reflect-metadata';
import { connect } from 'mo/react';
import { container } from 'tsyringe';
import { EditorController } from 'mo/controller/editor';

import { Editor } from './editor';
import { EditorService } from 'mo/services';

const editorService = container.resolve(EditorService);

const editorController = container.resolve(EditorController);

const EditorView = connect(editorService, Editor, editorController);

export { Editor, EditorView };
