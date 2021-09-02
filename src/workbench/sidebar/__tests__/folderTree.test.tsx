import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expectFnCalled } from '@test/utils';
import { FolderTree } from '../explore';
import type { IFolderTreeProps } from '../explore/folderTree';
import type { ITreeNodeItemProps } from 'mo/components';
import { dragToTargetNode } from 'mo/components/tabs/__tests__/tab.test';
import { folderTreeClassName, folderTreeEditClassName } from '../explore/base';

// mock Scrollable component
jest.mock('mo/components/scrollable', () => {
    const originalModule = jest.requireActual('mo/components/scrollable');
    return {
        ...originalModule,
        Scrollable: ({ children }) => {
            return <>{children}</>;
        },
    };
});

function FolderTreeViewPanel(props: Omit<IFolderTreeProps, 'panel'>) {
    return <FolderTree panel={{ id: 'test', name: 'test' }} {...props} />;
}

const mockTreeData: ITreeNodeItemProps[] = [
    {
        id: 'root',
        name: 'root',
        isLeaf: false,
        children: [
            {
                id: 'file',
                name: 'file',
                isLeaf: true,
            },
            {
                id: 'folder',
                name: 'folder',
                isLeaf: false,
                children: [
                    {
                        id: 'folder-file',
                        name: 'folder-file',
                        isLeaf: true,
                    },
                ],
            },
        ],
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
        const mockFn = jest
            .fn()
            .mockImplementation(() => [{ id: 'test', name: 'test' }]);
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
            expect.objectContaining({
                id: 'test',
                name: 'test',
            })
        );
        expect(mockContextMenuFn.mock.calls[0][1]).toEqual(
            expect.objectContaining({
                id: 'file',
                name: 'file',
                isLeaf: true,
            })
        );
    });

    test('Should support to render a input for the editing node', async () => {
        const data: ITreeNodeItemProps[] = [
            {
                id: 'root',
                name: 'root',
                isLeaf: false,
                children: [
                    {
                        id: 'folder',
                        name: 'folder',
                        isLeaf: false,
                        children: [
                            {
                                id: 'folder-file',
                                name: 'folder-file.tsx',
                                isLeaf: true,
                                isEditable: true,
                            },
                        ],
                    },
                ],
            },
        ];
        const { getByRole, container } = render(
            <FolderTreeViewPanel folderTree={{ data }} />
        );

        const input = getByRole('input') as HTMLInputElement;
        expect(input).toBeInTheDocument();
        // expect to pass through name into input's value
        expect(input.value).toBe('folder-file.tsx');
        // expect to select the file name automatically
        expect(input.selectionStart).toBe(0);
        expect(input.selectionEnd).toBe(11);
        expect(
            container.querySelector(`.${folderTreeClassName}`)?.classList
        ).toContain(folderTreeEditClassName);
    });

    test('Should suppor to update file name via blur or keypress', () => {
        const data: ITreeNodeItemProps[] = [
            {
                id: 'root',
                name: 'root',
                isLeaf: false,
                children: [
                    {
                        id: 'folder',
                        name: 'folder',
                        isLeaf: false,
                        children: [
                            {
                                id: 'folder-file',
                                name: 'folder-file',
                                isLeaf: true,
                                isEditable: true,
                            },
                        ],
                    },
                ],
            },
        ];
        const mockFn = jest.fn();
        const { getByRole } = render(
            <FolderTreeViewPanel
                folderTree={{ data }}
                onUpdateFileName={mockFn}
            />
        );

        const input = getByRole('input');
        fireEvent.keyDown(input, {
            keyCode: 13,
            target: { value: 'test-enter' },
        });
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(
            expect.objectContaining({ name: 'test-enter' })
        );

        fireEvent.keyDown(input, {
            keyCode: 27,
            target: { value: 'test-esc' },
        });
        expect(mockFn).toBeCalledTimes(2);
        expect(mockFn.mock.calls[1][0]).toEqual(
            expect.objectContaining({ name: 'test-esc' })
        );

        fireEvent.blur(input, {
            target: { value: 'test-blur' },
        });
        expect(mockFn).toBeCalledTimes(3);
        expect(mockFn.mock.calls[2][0]).toEqual(
            expect.objectContaining({ name: 'test-blur' })
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
                id: 'root',
                name: 'root',
                isLeaf: false,
                children: [
                    {
                        id: 'folder',
                        name: 'folder',
                        isLeaf: false,
                        children: [
                            {
                                id: 'folder-file',
                                name: 'folder-file',
                                isLeaf: true,
                            },
                        ],
                    },
                    {
                        id: 'file',
                        name: 'file',
                        isLeaf: true,
                    },
                ],
            },
        ]);
    });

    test('Should suppor to init contextMenu', () => {
        const mockFn = jest.fn();
        const { container, getByRole } = render(
            <FolderTreeViewPanel
                folderTree={{
                    data: mockTreeData,
                    folderPanelContextMenu: [{ id: 'test', name: 'test' }],
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
            expect.objectContaining({ id: 'test', name: 'test' })
        );
        expect(mockFn.mock.calls[0][1]).toBeUndefined();
    });
});
