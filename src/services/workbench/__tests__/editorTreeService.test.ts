import 'reflect-metadata';
import { container } from 'tsyringe';
import {
    IEditorTreeService,
    EditorTreeService,
} from '../explorer/editorTreeService';
import { EditorTreeEvent } from 'mo/model/workbench/explorer/editorTree';

describe('Test StatusBarService', () => {
    const editorTreeService = container.resolve<IEditorTreeService>(
        EditorTreeService
    );
    let TEST_FN: (...args: any[]) => any;

    beforeEach(() => {
        TEST_FN = jest.fn();
    });

    test('SearchBarService Class instance', () => {
        expect(editorTreeService).not.toBeUndefined();
    });

    test('Should support to trigger close', () => {
        editorTreeService.onClose(TEST_FN);
        editorTreeService.emit(EditorTreeEvent.onClose);

        expect(TEST_FN).toBeCalled();
    });

    test('Should support to trigger close others', () => {
        editorTreeService.onCloseOthers(TEST_FN);
        editorTreeService.emit(EditorTreeEvent.onCloseOthers);

        expect(TEST_FN).toBeCalled();
    });

    test('Should support to trigger close saved', () => {
        editorTreeService.onCloseSaved(TEST_FN);
        editorTreeService.emit(EditorTreeEvent.onCloseSaved);

        expect(TEST_FN).toBeCalled();
    });

    test('Should support to trigger select', () => {
        editorTreeService.onSelect(TEST_FN);
        editorTreeService.emit(EditorTreeEvent.onSelect);

        expect(TEST_FN).toBeCalled();
    });

    test('Should support to trigger close all', () => {
        editorTreeService.onCloseAll(TEST_FN);
        editorTreeService.emit(EditorTreeEvent.onCloseAll);

        expect(TEST_FN).toBeCalled();
    });

    test('Should support to trigger save all', () => {
        editorTreeService.onSaveAll(TEST_FN);
        editorTreeService.emit(EditorTreeEvent.onSaveAll);

        expect(TEST_FN).toBeCalled();
    });

    test('Should support to trigger split editor layout', () => {
        editorTreeService.onLayout(TEST_FN);
        editorTreeService.emit(EditorTreeEvent.onSplitEditorLayout);

        expect(TEST_FN).toBeCalled();
    });

    test('Should support to trigger context menu', () => {
        editorTreeService.onContextMenu(TEST_FN);
        editorTreeService.emit(EditorTreeEvent.onContextMenu);

        expect(TEST_FN).toBeCalled();
    });
});
