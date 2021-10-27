import {
    ExplorerService,
    BuiltinService,
    EditorTreeService,
} from 'mo/services';
import { constants, modules } from 'mo/services/builtinService/const';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { EditorTreeController } from '../explorer/editorTree';

const editorTreeController = container.resolve(EditorTreeController);
const editorTreeService = container.resolve(EditorTreeService);
const explorerService = container.resolve(ExplorerService);
const builtinService = container.resolve(BuiltinService);

describe('The editor tree controller', () => {
    test('Should inject the default value into service', () => {
        editorTreeController.initView();

        const { data } = explorerService.getState();
        expect(data).toHaveLength(1);
        const {
            groupToolbar,
            ...restEditor
        } = modules.builtInExplorerEditorPanel();
        expect(data[0]).toEqual(expect.objectContaining(restEditor));

        explorerService.reset();
    });

    test('Should support to controll the default value', () => {
        builtinService.inactiveModule('builtInExplorerEditorPanel');
        editorTreeController.initView();
        const { data } = explorerService.getState();
        expect(data).toHaveLength(0);

        builtinService.reset();
    });

    test('Should execute the onContextMenu method', () => {
        const mockItem = { id: constants.EDITOR_MENU_CLOSE };
        const mockGroupId = 1;
        const mockFile = { id: 'file' };
        const mockFn = jest.fn();
        editorTreeService.onClose(mockFn);
        editorTreeController.onContextMenu(mockItem, mockGroupId, mockFile);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(mockFile.id);
        expect(mockFn.mock.calls[0][1]).toBe(mockGroupId);
        mockFn.mockClear();

        // close others
        editorTreeService.onCloseOthers(mockFn);
        mockItem.id = constants.EDITOR_MENU_CLOSE_OTHERS;
        editorTreeController.onContextMenu(mockItem, mockGroupId, mockFile);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(mockFile);
        expect(mockFn.mock.calls[0][1]).toBe(mockGroupId);
        mockFn.mockClear();

        // close saved
        editorTreeService.onCloseSaved(mockFn);
        mockItem.id = constants.EDITOR_MENU_CLOSE_SAVED;
        editorTreeController.onContextMenu(mockItem, mockGroupId, mockFile);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(mockGroupId);
        mockFn.mockClear();

        // close all
        editorTreeService.onCloseAll(mockFn);
        mockItem.id = constants.EDITOR_MENU_CLOSE_ALL;
        editorTreeController.onContextMenu(mockItem, mockGroupId, mockFile);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(mockGroupId);
        mockFn.mockClear();

        // default
        editorTreeService.onContextMenu(mockFn);
        mockItem.id = 'custom-id';
        editorTreeController.onContextMenu(mockItem, mockGroupId, mockFile);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(mockItem);
        expect(mockFn.mock.calls[0][1]).toEqual(mockFile);
        expect(mockFn.mock.calls[0][2]).toEqual(mockGroupId);
    });

    test('Should support to emit events', () => {
        const mockTabId = '1';
        const mockGroupId = 1;
        const mockFn = jest.fn();
        editorTreeService.onClose(mockFn);
        editorTreeController.onClose(mockTabId, mockGroupId);

        expect(mockFn).toBeCalled();
        mockFn.mockClear();

        // onSelect
        editorTreeService.onSelect(mockFn);
        editorTreeController.onSelect(mockTabId, mockGroupId);
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(mockTabId);
        expect(mockFn.mock.calls[0][1]).toBe(mockGroupId);
        mockFn.mockClear();

        // onCloseGroup
        editorTreeService.onCloseAll(mockFn);
        editorTreeController.onCloseGroup(mockGroupId);
        expect(mockFn).toBeCalled();
        mockFn.mockClear();

        // onSaveGroup
        editorTreeService.onSaveAll(mockFn);
        editorTreeController.onSaveGroup(mockGroupId);
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(mockGroupId);
        mockFn.mockClear();

        // onToolbarClick
        const mockToolbar = { id: 'test' };
        editorTreeService.onToolbarClick(mockFn);
        editorTreeController.onToolbarClick(mockToolbar, mockGroupId);
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(mockToolbar);
        expect(mockFn.mock.calls[0][1]).toBe(mockGroupId);
        mockFn.mockClear();
    });
});
