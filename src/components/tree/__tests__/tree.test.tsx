import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TreeView, { ITreeNodeItemProps } from '../index';
import { dragToTargetNode, expectFnCalled, sleep } from '@test/utils';
import { act } from 'react-test-renderer';
import { unexpandTreeNodeClassName, expandTreeNodeClassName } from '../base';

const mockData: ITreeNodeItemProps[] = [
    {
        id: '1',
        name: 'test1',
        children: [
            {
                id: '1-1',
                name: 'test1-1',
                icon: 'test',
                isLeaf: true,
            },
        ],
    },
    {
        id: '2',
        name: 'test2',
    },
];

jest.mock('lodash', () => {
    const originalModule = jest.requireActual('lodash');
    return {
        ...originalModule,
        debounce: (fn) => fn,
    };
});

describe('Test the Tree component', () => {
    afterEach(cleanup);

    test('Should render name', async () => {
        const { getByTitle, findByTitle } = render(
            <TreeView data={mockData} />
        );
        expect(getByTitle('test1')).toBeInTheDocument();
        expect(getByTitle('test2')).toBeInTheDocument();

        fireEvent.click(getByTitle('test1'));
        expect(await findByTitle('test1-1')).toBeInTheDocument();
    });

    test('Should render custom title', async () => {
        const { container, getByTitle } = render(
            <TreeView
                renderTitle={(node) => {
                    if (node.id === '1') {
                        return "I'm renderTitle";
                    }
                    return node.name!;
                }}
                data={mockData}
            />
        );

        const testDom = await waitFor(() =>
            container.querySelector('[title="test1"]')
        );
        const dom = await waitFor(() =>
            container.querySelector('[title="I\'m renderTitle"]')
        );

        expect(testDom).not.toBeInTheDocument();
        expect(dom).toBeInTheDocument();
        expect(getByTitle('test2')).toBeInTheDocument();
    });

    test('Should have correct levels', async () => {
        const { container, getByTitle } = render(<TreeView data={mockData} />);
        const parentNode = container.querySelector<HTMLDivElement>(
            'div[data-id="mo_treeNode_1"]'
        );

        fireEvent.click(getByTitle('test1'));
        const childNode = await waitFor(() =>
            container.querySelector<HTMLDivElement>(
                'div[data-id="mo_treeNode_1_1-1"]'
            )
        );

        expect(parentNode?.dataset.indent).toBe('0');
        expect(childNode?.dataset.indent).toBe('1');
    });

    test('Should render customer icon only in leaf node & render specific icon in non-leaf node', async () => {
        const { container, getByTitle } = render(<TreeView data={mockData} />);
        fireEvent.click(getByTitle('test1'));

        const parentIcon = container
            .querySelector<HTMLDivElement>('div[data-id="mo_treeNode_1"]')
            ?.querySelector('span.codicon-chevron-down');

        const childNode = await waitFor(() =>
            container.querySelector<HTMLDivElement>(
                'div[data-id="mo_treeNode_1_1-1"]'
            )
        );
        const childIcon = childNode?.querySelector('span.codicon-test') || null;

        expect(parentIcon).toBeInTheDocument();
        expect(childIcon).not.toBeNull();
    });

    test('Should support to render React.ReactNode icon in leaf node', async () => {
        mockData[0].children![0].icon = <span role="icon"></span>;
        const { container, getByTitle } = render(<TreeView data={mockData} />);
        fireEvent.click(getByTitle('test1'));
        const childNode = await waitFor(() =>
            container.querySelector<HTMLDivElement>(
                'div[data-id="mo_treeNode_1_1-1"]'
            )
        );
        const childIcon = childNode?.querySelector('span[role="icon"]');
        expect(childIcon).toBeInTheDocument();
    });

    test('Should calculate key by id', async () => {
        const data = [
            {
                id: '1',
                name: 'test1',
                children: [
                    {
                        id: '2',
                        name: 'test2',
                    },
                ],
            },
        ];
        const { container, getByTitle } = render(<TreeView data={data} />);
        fireEvent.click(getByTitle('test1'));

        const parentNode = container.querySelector<HTMLDivElement>(
            'div[data-id="mo_treeNode_1"]'
        );
        const childNode = await waitFor(() =>
            container.querySelector<HTMLDivElement>(
                'div[data-id="mo_treeNode_1_2"]'
            )
        );

        expect(parentNode).toBeInTheDocument();
        expect(childNode).toBeInTheDocument();
    });

    test('Should trigger events', async () => {
        const mockFn = jest.fn();
        const mockRightClickFn = jest.fn();
        const { getByTitle } = render(
            <TreeView
                data={mockData}
                onSelect={mockFn}
                onRightClick={mockRightClickFn}
            />
        );

        await waitFor(() => {
            fireEvent.click(getByTitle('test2'));
            fireEvent.contextMenu(getByTitle('test2'));
        });

        expect(mockFn).toBeCalled();
        expect(mockRightClickFn).toBeCalled();
    });

    test('Should fold when click expand node', async () => {
        const { getByTitle, findByTitle } = render(
            <TreeView data={mockData} />
        );

        fireEvent.click(getByTitle('test1'));
        expect((await findByTitle('test1')).className).toContain('open');

        fireEvent.click(getByTitle('test1'));
        expect((await findByTitle('test1')).className).toContain('close');
    });

    test('Should expand the parent of editable node', async () => {
        const data = [
            {
                id: '1',
                name: 'test1',
                children: [
                    {
                        id: '2',
                        name: 'test2',
                        isEditable: true,
                    },
                ],
            },
        ];
        const { findByTitle } = render(<TreeView data={data} />);

        expect(await findByTitle('test2')).toBeInTheDocument();
    });

    test('Should support to drag into children', async () => {
        const data = [
            {
                id: '1',
                name: 'test1',
                children: [
                    {
                        id: '2',
                        name: 'test2',
                        isEditable: true,
                    },
                ],
            },
        ];
        const { findByTitle } = render(<TreeView data={data} />);

        expect(await findByTitle('test2')).toBeInTheDocument();
    });

    test('Should NOT support to sort via drag', async () => {
        const data = [
            { id: '1', name: 'test1', isLeaf: true },
            { id: '2', name: 'test2', isLeaf: true },
            { id: '3', name: 'test3', isLeaf: true },
        ];
        const mockFn = jest.fn();
        const { findByTitle } = render(
            <TreeView draggable onDropTree={mockFn} data={data} />
        );

        dragToTargetNode(
            await findByTitle('test3'),
            await findByTitle('test1')
        );

        expect(mockFn).not.toBeCalled();
    });

    test('Should NOT darg to the its parent node', async () => {
        const data = [
            {
                id: '1',
                name: 'test1',
                isLeaf: false,
                children: [{ id: '1-1', name: 'test1-1', isLeaf: true }],
            },
        ];
        const mockFn = jest.fn();
        const { findByTitle, getByTitle } = render(
            <TreeView draggable onDropTree={mockFn} data={data} />
        );

        fireEvent.click(getByTitle('test1'));

        dragToTargetNode(
            await findByTitle('test1-1'),
            await findByTitle('test1')
        );

        expect(mockFn).not.toBeCalled();
    });

    test('Should support to drag into children', async () => {
        const source = { id: '2', name: 'test2', isLeaf: true };
        const target = { id: '1-1', name: 'test1-1', isLeaf: false };
        const data = [
            {
                id: '1',
                name: 'test1',
                isLeaf: false,
                children: [target],
            },
            source,
        ];
        const mockFn = jest.fn();
        const { findByTitle, getByTitle } = render(
            <TreeView draggable onDropTree={mockFn} data={data} />
        );

        fireEvent.click(getByTitle('test1'));

        dragToTargetNode(
            await findByTitle(source.name),
            await findByTitle(target.name)
        );

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(source);
        expect(mockFn.mock.calls[0][1]).toEqual(target);
    });

    test('Should support to drag to the folder rather than a file', async () => {
        const source = { id: '2-1', name: 'test2-1', isLeaf: true };
        const target = { id: '1-1', name: 'test1-1', isLeaf: true };
        const data = [
            {
                id: '1',
                name: 'test1',
                isLeaf: false,
                children: [target],
            },
            {
                id: '2',
                name: 'test2',
                isLeaf: false,
                children: [source],
            },
        ];
        const mockFn = jest.fn();
        const { findByTitle, getByTitle } = render(
            <TreeView draggable onDropTree={mockFn} data={data} />
        );

        fireEvent.click(getByTitle('test1'));
        fireEvent.click(getByTitle('test2'));

        dragToTargetNode(
            await findByTitle(source.name),
            await findByTitle(target.name)
        );

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(source);
        expect(mockFn.mock.calls[0][1]).toEqual({
            id: '1',
            name: 'test1',
            isLeaf: false,
            children: [target],
        });
    });

    test('Should NOT drag node to its parent node or drag node to its siblings or drag node to itself', async () => {
        const data = [
            {
                id: '1',
                name: 'test1',
                children: [
                    { id: '1-1', isLeaf: true, name: 'test1-1' },
                    { id: '1-2', isLeaf: true, name: 'test1-2' },
                ],
            },
            {
                id: '2',
                name: 'test2',
                isLeaf: true,
            },
        ];
        const mockFn = jest.fn();
        const { findByTitle } = render(
            <TreeView draggable onDropTree={mockFn} data={data} />
        );

        fireEvent.click(await findByTitle('test1'));

        dragToTargetNode(
            await findByTitle('test1-1'),
            await findByTitle('test1')
        );

        expect(mockFn).not.toBeCalled();

        dragToTargetNode(
            await findByTitle('test1-2'),
            await findByTitle('test1-1')
        );
        expect(mockFn).not.toBeCalled();

        dragToTargetNode(
            await findByTitle('test1'),
            await findByTitle('test1')
        );
        expect(mockFn).not.toBeCalled();
    });

    test('Should end drop when drag node out of tree', async () => {
        const data = [
            {
                id: '1',
                name: 'test1',
                children: [
                    { id: '1-1', isLeaf: true, name: 'test1-1' },
                    { id: '1-2', isLeaf: true, name: 'test1-2' },
                ],
            },
        ];
        const mockFn = jest.fn();
        const { findByTitle, container, getByTestId } = render(
            <TreeView draggable onDropTree={mockFn} data={data} />
        );

        // creat a dom insert into body as the drop node
        const outOfTree = document.createElement('div');
        outOfTree.dataset.testid = 'outOfTree';
        outOfTree.style.width = '100px';
        outOfTree.style.height = '100px';
        container.appendChild(outOfTree);

        // expand the parent node
        fireEvent.click(await findByTitle('test1'));
        fireEvent.dragStart(await findByTitle('test1'));
        fireEvent.dragOver(await findByTitle('test1'));

        expect(container.querySelectorAll('.drag-over').length).not.toBe(0);

        // drag node out of tree and drop it
        fireEvent.dragOver(getByTestId('outOfTree'));
        fireEvent.dragEnd(getByTestId('outOfTree'));

        expect(container.querySelectorAll('.drag-over').length).toBe(0);
    });

    test('Should expand the drop node if this node is a folder', async () => {
        const data = [
            {
                id: '1',
                name: 'test1',
                children: [{ id: '1-1', isLeaf: true, name: 'test1-1' }],
            },
            { id: '2', isLeaf: true, name: 'test2' },
        ];
        const { getByText } = render(<TreeView draggable data={data} />);

        expect(getByText('test1').parentElement!.classList).toContain(
            unexpandTreeNodeClassName
        );
        dragToTargetNode(getByText('test2'), getByText('test1'));

        expect(getByText('test1').parentElement!.classList).toContain(
            expandTreeNodeClassName
        );

        // drag to itself won't expand
        dragToTargetNode(getByText('test1'), getByText('test1'));
        expect(getByText('test1').parentElement!.classList).toContain(
            unexpandTreeNodeClassName
        );
    });

    test('Should support to loadData in sync', async () => {
        const data = [
            {
                id: '1',
                name: 'test1',
                isLeaf: false,
                children: [],
            },
        ];
        const mockFn = jest.fn().mockImplementation(() => sleep(1000));
        const { getByText, container, rerender } = render(
            <TreeView data={data} onLoadData={mockFn} loadedKeys={[]} />
        );

        act(() => {
            fireEvent.click(getByText('test1'));
        });

        expect(container.querySelector('.codicon-spin')).toBeInTheDocument();
        expect(mockFn).toBeCalledTimes(1);

        await act(async () => {
            await sleep(1000);
        });
        expect(container.querySelector('.codicon-spin')).toBeNull();

        rerender(
            <TreeView data={data} onLoadData={mockFn} loadedKeys={['1']} />
        );

        act(() => {
            // unfold it and open it again
            fireEvent.click(getByText('test1'));
            fireEvent.click(getByText('test1'));
        });

        // didn't trigger onLoadData this time
        expect(mockFn).toBeCalledTimes(1);
    });

    test('Should support to be controlled', () => {
        const mockFn = jest.fn();
        const { getByText, rerender } = render(
            <TreeView data={mockData} expandKeys={[]} onExpand={mockFn} />
        );

        expect(getByText('test1').parentElement?.classList).toContain(
            unexpandTreeNodeClassName
        );

        fireEvent.click(getByText('test1'));

        expect(getByText('test1').parentElement?.classList).toContain(
            unexpandTreeNodeClassName
        );
        expect(mockFn).toBeCalled();

        rerender(
            <TreeView
                data={mockData}
                expandKeys={[mockData[0].id.toString()!]}
                onExpand={mockFn}
            />
        );

        expect(getByText('test1').parentElement?.classList).toContain(
            expandTreeNodeClassName
        );
    });

    test('Should support to trigger tree click event', () => {
        expectFnCalled((fn) => {
            const { getByRole } = render(
                <TreeView data={mockData} onTreeClick={fn} />
            );

            const wrapper = getByRole('tree');
            fireEvent.click(wrapper);
        });
    });
});
