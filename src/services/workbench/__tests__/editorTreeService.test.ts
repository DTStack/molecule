import 'reflect-metadata';
import { container } from 'tsyringe';
import {
    IEditorTreeService,
    EditorTreeService,
} from '../explorer/editorTreeService';
import { EditorTreeEvent } from 'mo/model/workbench/explorer/editorTree';
import { expectFnCalled } from '@test/utils';

describe('Test StatusBarService', () => {
    const editorTreeService = container.resolve<IEditorTreeService>(
        EditorTreeService
    );

    test('SearchBarService Class instance', () => {
        expect(editorTreeService).not.toBeUndefined();
    });

    test('Should support to trigger close', () => {
        expectFnCalled((testFn) => {
            editorTreeService.onClose(testFn);
            editorTreeService.emit(EditorTreeEvent.onClose);
        });
    });

    test('Should support to trigger close others', () => {
        expectFnCalled((testFn) => {
            editorTreeService.onCloseOthers(testFn);
            editorTreeService.emit(EditorTreeEvent.onCloseOthers);
        });
    });

    test('Should support to trigger close saved', () => {
        expectFnCalled((testFn) => {
            editorTreeService.onCloseSaved(testFn);
            editorTreeService.emit(EditorTreeEvent.onCloseSaved);
        });
    });

    test('Should support to trigger select', () => {
        expectFnCalled((testFn) => {
            editorTreeService.onSelect(testFn);
            editorTreeService.emit(EditorTreeEvent.onSelect);
        });
    });

    test('Should support to trigger close all', () => {
        expectFnCalled((testFn) => {
            editorTreeService.onCloseAll(testFn);
            editorTreeService.emit(EditorTreeEvent.onCloseAll);
        });
    });

    test('Should support to trigger save all', () => {
        expectFnCalled((testFn) => {
            editorTreeService.onSaveAll(testFn);
            editorTreeService.emit(EditorTreeEvent.onSaveAll);
        });
    });

    test('Should support to trigger split editor layout', () => {
        expectFnCalled((testFn) => {
            editorTreeService.onLayout(testFn);
            editorTreeService.emit(EditorTreeEvent.onSplitEditorLayout);
        });
    });

    test('Should support to trigger context menu', () => {
        expectFnCalled((testFn) => {
            editorTreeService.onContextMenu(testFn);
            editorTreeService.emit(EditorTreeEvent.onContextMenu);
        });
    });
});
