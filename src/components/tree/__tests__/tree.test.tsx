import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TreeView, { ITreeNodeItemProps } from '../index';
import { dragToTargetNode } from '@test/utils';

const mockData: ITreeNodeItemProps[] = [
    {
        key: '1',
        name: 'test1',
        children: [
            {
                key: '1-1',
                name: 'test1-1',
                icon: 'test',
                isLeaf: true,
            },
        ],
    },
    {
        key: '2',
        name: 'test2',
    },
];

async function dragExpect(fn: jest.Mock, result: any) {
    await waitFor(() => {
        expect(fn).toBeCalled();
        expect(fn.mock.calls[0][0]).toEqual(result);
    });
}

describe('Test the Tree component', () => {
    afterEach(cleanup);

    test('Should render name', async () => {
        const { getByTitle, findByTitle } = render(
            <TreeView data={mockData} />
        );
        expect(getByTitle('test1')).toBeInTheDocument();
        expect(getByTitle('test2')).toBeInTheDocument();

        fireEvent.click(getByTitle('test1').previousElementSibling!);
        expect(await findByTitle('test1-1')).toBeInTheDocument();
    });

    test('Should render custom title', async () => {
        const { container, getByTitle } = render(
            <TreeView
                renderTitle={(node) => {
                    if (node.key === '1') {
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

        fireEvent.click(getByTitle('test1').previousElementSibling!);
        const childNode = await waitFor(() =>
            container.querySelector<HTMLDivElement>(
                'div[data-id="mo_treeNode_1-1"]'
            )
        );

        expect(parentNode?.dataset.indent).toBe('0');
        expect(childNode?.dataset.indent).toBe('1');
    });

    test('Should render customer icon only in leaf node & render specific icon in non-leaf node', async () => {
        const { container, getByTitle } = render(<TreeView data={mockData} />);
        fireEvent.click(getByTitle('test1').previousElementSibling!);

        const parentIcon = container
            .querySelector<HTMLDivElement>('div[data-id="mo_treeNode_1"]')
            ?.querySelector('span.codicon-chevron-right');

        const childNode = await waitFor(() =>
            container.querySelector<HTMLDivElement>(
                'div[data-id="mo_treeNode_1-1"]'
            )
        );
        const childIcon = childNode?.querySelector('span.codicon-test') || null;

        expect(parentIcon).toBeInTheDocument();
        expect(childIcon).not.toBeNull();
    });

    test('Should support to render React.ReactNode icon in leaf node', async () => {
        mockData[0].children![0].icon = <span role="icon"></span>;
        const { container, getByTitle } = render(<TreeView data={mockData} />);
        fireEvent.click(getByTitle('test1').previousElementSibling!);
        const childNode = await waitFor(() =>
            container.querySelector<HTMLDivElement>(
                'div[data-id="mo_treeNode_1-1"]'
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
        fireEvent.click(getByTitle('test1').previousElementSibling!);

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

    test('Should support to sort via drag', async () => {
        const data = [
            { id: '1', name: 'test1' },
            { id: '2', name: 'test2' },
            { id: '3', name: 'test3' },
        ];
        const mockFn = jest.fn();
        const { findByTitle } = render(
            <TreeView draggable onDropTree={mockFn} data={data} />
        );

        dragToTargetNode(
            await findByTitle('test3'),
            await findByTitle('test1')
        );

        await dragExpect(mockFn, [
            { id: '1', name: 'test1' },
            { id: '3', name: 'test3' },
            { id: '2', name: 'test2' },
        ]);
    });

    test('Should support to drag into children', async () => {
        const data = [
            {
                id: '1',
                name: 'test1',
                children: [{ id: '1-1', name: 'test1-1' }],
            },
            {
                id: '2',
                name: 'test2',
            },
        ];
        const mockFn = jest.fn();
        const { findByTitle } = render(
            <TreeView
                draggable
                onDropTree={mockFn}
                defaultExpandAll
                data={data}
            />
        );

        dragToTargetNode(
            await findByTitle('test2'),
            await findByTitle('test1-1')
        );

        await dragExpect(mockFn, [
            {
                id: '1',
                name: 'test1',
                children: [
                    { id: '1-1', name: 'test1-1' },
                    { id: '2', name: 'test2' },
                ],
            },
        ]);
    });
});
