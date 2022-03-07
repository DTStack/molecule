import 'reflect-metadata';
import { container } from 'tsyringe';
import { EditorService, StatusBarService, BuiltinService } from 'mo/services';
import { EditorController } from '../editor';
import { editor as MonacoEditor, Position } from 'mo/monaco';

const editorController = container.resolve(EditorController);
const editorService = container.resolve(EditorService);
const statusBarService = container.resolve(StatusBarService);
const builtinService = container.resolve(BuiltinService);

describe('The ediotr controller', () => {
    test('The open method', () => {
        const testTab = {
            id: 'testTab',
            name: 'testTab',
        };
        editorController.open(testTab);
        const { current } = editorService.getState();
        expect(current?.activeTab).toEqual('testTab');
    });

    test('The updateEditorLineColumnInfo method', () => {
        const editorInstance = {} as MonacoEditor.IStandaloneCodeEditor;
        const position = { lineNumber: 1, column: 1 } as Position;
        const { STATUS_EDITOR_INFO } = builtinService.getModules();
        editorInstance.getPosition = jest.fn(() => position);
        statusBarService.setState({ rightItems: [STATUS_EDITOR_INFO] });

        editorController.updateEditorLineColumnInfo(editorInstance);
        expect(statusBarService.getState().rightItems[0]?.data).toEqual({
            ln: 1,
            col: 1,
        });
    });
});
