import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expectFnCalled } from '@test/utils';
import { FolderTree } from '../explore';
import type { IFolderTreeProps } from '../explore/folderTree';
import type { ITreeNodeItemProps } from 'mo/components';
import { dragToTargetNode } from 'mo/components/tabs/__tests__/tab.test';
import { folderTreeClassName, folderTreeEditClassName } from '../explore/base';

function FolderTreeViewPanel(props: Omit<IFolderTreeProps, 'panel'>) {
    return <FolderTree panel={{ id: 'test', name: 'test' }} {...props} />;
}

const mockFile = {
    id: 'file',
    name: 'file',
    isLeaf: true,
};

const mockFileInFolder = {
    id: 'folder-file',
    name: 'folder-file',
    isLeaf: true,
};

const mockEditFile = {
    ...mockFileInFolder,
    name: 'folder-file.tsx',
    isEditable: true,
};

const mockFolder = {
    id: 'folder',
    name: 'folder',
    isLeaf: false,
    children: [mockFileInFolder],
};

const mockTreeData: ITreeNodeItemProps[] = [
    {
        id: 'root',
        name: 'root',
        isLeaf: false,
        children: [mockFile, mockFolder],
    },
];

const mockTreeEditData = [
    {
        ...mockTreeData[0],
        children: [{ ...mockFolder, children: [mockEditFile] }],
    },
];

describe('The FolderTree Component', () => {
    afterEach(cleanup);

    test('Should render welcome page without data', () => {
        expectFnCalled((mockFn) => {
            const { rerender, getByTestId, container } = render(
                <FolderTreeViewPanel createTreeNode={mockFn} />
            );
            const wrapper = container.querySelector('div[data-content="test"]');

            expect(wrapper?.innerHTML).toContain(
                'you have not yet opened a folder'
            );

            fireEvent.click(wrapper?.querySelector('a')!);

            rerender(
                <FolderTreeViewPanel
                    entry={<div data-testid="welcome">welcome</div>}
                />
            );
            expect(getByTestId('welcome')).toBeInTheDocument();
        });
    });

    test('Should support to the right click event for tree item', () => {
        const mockFn = jest
            .fn()
            .mockImplementationOnce(() => [])
            .mockImplementation(() => [{ id: 'test', name: 'test' }]);
        const { getByTitle, container, getByRole } = render(
            <FolderTreeViewPanel
                folderTree={{ data: mockTreeData }}
                onRightClick={mockFn}
            />
        );

        const file = getByTitle('file');
        expect(file).toBeInTheDocument();

        fireEvent.contextMenu(file);

        expect(mockFn).toBeCalled();
        expect(container.querySelector('div[role="menu"]')).toBeNull();

        fireEvent.contextMenu(file);
        expect(mockFn).toBeCalledTimes(2);
        expect(getByRole('menu')).toBeInTheDocument();
    });

    test('Should support to trigger onClickContextMenu event', () => {
        const contextMenu = { id: 'test', name: 'test' };
        const mockFn = jest.fn().mockImplementation(() => [contextMenu]);
        const mockContextMenuFn = jest.fn();

        const { getByTitle, getByRole } = render(
            <FolderTreeViewPanel
                folderTree={{ data: mockTreeData }}
                onRightClick={mockFn}
                onClickContextMenu={mockContextMenuFn}
            />
        );
        const file = getByTitle('file');
        fireEvent.contextMenu(file);

        const menu = getByRole('menu');
        fireEvent.click(menu.firstElementChild!);

        expect(mockContextMenuFn).toBeCalled();
        expect(mockContextMenuFn.mock.calls[0][0]).toEqual(
            expect.objectContaining(contextMenu)
        );
        expect(mockContextMenuFn.mock.calls[0][1]).toEqual(
            expect.objectContaining(mockFile)
        );
    });

    test('Should support to render a input for the editing node', async () => {
        const { getByRole, container } = render(
            <FolderTreeViewPanel folderTree={{ data: mockTreeEditData }} />
        );

        const input = getByRole('input') as HTMLInputElement;

        expect(input).toBeInTheDocument();
        // expect to pass through name into input's value
        expect(input.value).toBe(mockEditFile.name);

        // expect to select the file name automatically
        expect(input.selectionStart).toBe(0);
        expect(input.selectionEnd).toBe(11);
        expect(
            container.querySelector(`.${folderTreeClassName}`)?.classList
        ).toContain(folderTreeEditClassName);
    });

    test('Should support to update file name via blur or keypress', () => {
        const mockFn = jest.fn();
        const { getByRole } = render(
            <FolderTreeViewPanel
                folderTree={{ data: mockTreeEditData }}
                onUpdateFileName={mockFn}
            />
        );

        const input = getByRole('input');
        const mockEnterValue = 'test-enter';
        fireEvent.keyDown(input, {
            keyCode: 13,
            target: { value: mockEnterValue },
        });
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(
            expect.objectContaining({ name: mockEnterValue })
        );

        const mockEscValue = 'test-esc';
        fireEvent.keyDown(input, {
            keyCode: 27,
            target: { value: mockEscValue },
        });
        expect(mockFn).toBeCalledTimes(2);
        expect(mockFn.mock.calls[1][0]).toEqual(
            expect.objectContaining({ name: mockEscValue })
        );

        const mockBlurValue = 'test-blur';
        fireEvent.blur(input, {
            target: { value: mockBlurValue },
        });
        expect(mockFn).toBeCalledTimes(3);
        expect(mockFn.mock.calls[2][0]).toEqual(
            expect.objectContaining({ name: mockBlurValue })
        );
    });

    test('Should support to drag tree node', () => {
        const mockFn = jest.fn();
        const { getByTitle } = render(
            <FolderTreeViewPanel
                folderTree={{ data: mockTreeData }}
                onDropTree={mockFn}
            />
        );

        dragToTargetNode(getByTitle('file'), getByTitle('folder'));

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual([
            {
                ...mockTreeData[0],
                children: [mockFolder, mockFile],
            },
        ]);
    });

    test('Should suppor to init contextMenu', () => {
        const contextMenu = { id: 'test', name: 'test' };
        const mockFn = jest.fn();
        const { container, getByRole } = render(
            <FolderTreeViewPanel
                folderTree={{
                    data: mockTreeData,
                    folderPanelContextMenu: [contextMenu],
                }}
                onClickContextMenu={mockFn}
            />
        );

        const wrapper = container.querySelector(`.${folderTreeClassName}`)!;

        fireEvent.contextMenu(wrapper);

        const menu = getByRole('menu');
        expect(menu).toBeInTheDocument();

        fireEvent.click(menu.firstElementChild!);
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(
            expect.objectContaining(contextMenu)
        );
        expect(mockFn.mock.calls[0][1]).toBeUndefined();
    });
});
