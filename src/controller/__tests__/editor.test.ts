import 'reflect-metadata';
import { container } from 'tsyringe';
import { EditorService, StatusBarService, BuiltinService } from 'mo/services';
import { EditorController } from '../editor';
import { editor as MonacoEditor, IDisposable, Position } from 'mo/monaco';

const editorController = container.resolve(EditorController);
const editorService = container.resolve(EditorService);
const statusBarService = container.resolve(StatusBarService);
const builtinService = container.resolve(BuiltinService);

describe('The ediotr controller', () => {
    test('The initEditorEvents method', () => {
        const editorInstance = {} as MonacoEditor.IStandaloneCodeEditor;
        const position = { lineNumber: 1, column: 1 } as Position;
        let contentListener;
        let focusListener;
        let cursorListener;
        let blurListener;

        editorInstance.onDidChangeModelContent = jest.fn((listener) => {
            contentListener = listener;
            return {} as IDisposable;
        });
        editorInstance.onDidFocusEditorText = jest.fn((listener) => {
            focusListener = listener;
            return {} as IDisposable;
        });
        editorInstance.onDidChangeCursorSelection = jest.fn((listener) => {
            cursorListener = listener;
            return {} as IDisposable;
        });
        editorInstance.onDidBlurEditorText = jest.fn((listener) => {
            blurListener = listener;
            return {} as IDisposable;
        });
        editorInstance.getPosition = jest.fn(() => position);

        const testTab = {
            id: 'testTab',
            name: 'testTab',
        };
        editorService.open(testTab);
        const { current } = editorService.getState();
        editorController.initEditorEvents(editorInstance, current?.id!);

        // focus
        focusListener?.();
        expect(editorService.getState().current?.tab?.id).toEqual(testTab.id);

        // change content
        editorInstance.getModel = jest.fn(() => {
            return { getValue: () => 'newValue' } as MonacoEditor.ITextModel;
        });
        contentListener?.();
        expect(editorService.getState().current?.tab?.data?.value).toEqual(
            'newValue'
        );

        // change cursor
        const { STATUS_EDITOR_INFO } = builtinService.getModules();
        statusBarService.setState({ rightItems: [STATUS_EDITOR_INFO] });
        cursorListener?.();
        expect(statusBarService.getState().rightItems[0]?.data).toEqual({
            ln: 1,
            col: 1,
        });

        // blur
        const viewState = {
            viewState: { scrollTop: 10 },
        } as MonacoEditor.ICodeEditorViewState;
        editorInstance.saveViewState = jest.fn(() => viewState);
        blurListener?.();
        expect(
            editorController.getViewState(current?.tab?.id?.toString()!)
        ).toEqual(viewState);

        // reset services
        statusBarService.reset();
        editorService.setState({ current: null, groups: [] });
    });
});
