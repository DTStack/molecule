import { TreeViewUtil } from '../treeUtil';
import { searchById } from '../utils';

const mockTreeData = {
    id: 1,
    module: 'root',
    children: [
        {
            id: 2,
            module: 'a',
            children: [{ id: 3, module: 'c' }],
        },
        {
            id: 4,
            module: 'b',
        },
    ],
};

describe('Test the searchById function', () => {
    test('Should return the target', () => {
        const arr = [{ id: 1 }];
        const index = arr.findIndex(searchById(1));

        expect(index).toBe(0);
    });
});

describe('Test the treeView helper', () => {
    test('Should support to initial with empty', () => {
        const tree = new TreeViewUtil();
        expect(tree.obj).toEqual({ children: [] });
    });

    test('Should support to customize the childNodeName', () => {
        let tree = new TreeViewUtil(undefined, 'properties');

        expect(tree.obj).toEqual({ properties: [] });

        tree = new TreeViewUtil(
            {
                id: 10,
                propName: 'root',
                properties: [
                    {
                        id: 11,
                        propName: 'a',
                        properties: [{ id: 12, propName: 'c' }],
                    },
                    {
                        id: 13,
                        propName: 'b',
                    },
                ],
            },
            'properties'
        );
        const { obj, indexes } = tree;

        expect(indexes['10']).toEqual({
            id: 10,
            node: obj,
            properties: [11, 13],
        });

        expect(indexes['11']).toEqual({
            id: 11,
            parent: 10,
            properties: [12],
            node: obj.properties[0],
            next: 13,
        });

        expect(indexes['12']).toEqual({
            id: 12,
            parent: 11,
            node: obj.properties[0].properties[0],
        });

        expect(indexes['13']).toEqual({
            id: 13,
            parent: 10,
            node: obj.properties[1],
            prev: 11,
        });
    });

    test('Should support to initial with a tree node', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const { obj, indexes } = tree;

        expect(indexes['1']).toEqual({
            id: 1,
            node: obj,
            children: [2, 4],
        });

        expect(indexes['2']).toEqual({
            id: 2,
            parent: 1,
            children: [3],
            node: obj.children[0],
            next: 4,
        });

        expect(indexes['3']).toEqual({
            id: 3,
            parent: 2,
            node: obj.children[0].children?.[0],
        });

        expect(indexes['4']).toEqual({
            id: 4,
            parent: 1,
            node: obj.children[1],
            prev: 2,
        });
    });

    test('Should support to get a node from tree', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const { obj } = tree;

        expect(tree.get(1)).toEqual(obj);
        expect(tree.get(100)).toBeNull();
    });

    test('Should support to update a node in tree', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const node = tree.update(2, { module: 'test' });

        expect(node).toEqual({
            id: 2,
            module: 'test',
            children: [{ id: 3, module: 'c' }],
        });
    });

    test('Should get a null when update failed', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const node = tree.update(100, { module: 'test' });

        expect(node).toBeNull();
    });

    test('Should support to remove a node in tree', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const { obj } = tree;

        const node = tree.remove(2);

        expect(node).toEqual({
            id: 2,
            module: 'a',
            children: [{ id: 3, module: 'c' }],
        });

        expect(obj).toEqual({
            id: 1,
            module: 'root',
            children: [{ id: 4, module: 'b' }],
        });

        expect(tree.getIndex(2)).toBeNull();
        expect(tree.getIndex(3)).toBeNull();
    });

    test('Should get null when remove failed', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const node = tree.remove(100);

        expect(node).toBeNull();
    });

    test('Should support to insert a node', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const { obj } = tree;

        tree.insert({ id: 5, module: 'd', children: [] }, 3, 0);

        expect(obj).toEqual({
            id: 1,
            module: 'root',
            children: [
                {
                    id: 2,
                    module: 'a',
                    children: [
                        {
                            id: 3,
                            module: 'c',
                            children: [{ id: 5, module: 'd', children: [] }],
                        },
                    ],
                },
                { id: 4, module: 'b' },
            ],
        });

        const res = tree.insert({ id: 5, module: 'd', children: [] }, 100, 0);

        expect(res).toBeNull();
    });

    test('Should support to insert before a node', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const { obj } = tree;

        tree.insertBefore({ id: 5, module: 'd', children: [] }, 3);

        expect(obj).toEqual({
            id: 1,
            module: 'root',
            children: [
                {
                    id: 2,
                    module: 'a',
                    children: [
                        { id: 5, module: 'd', children: [] },
                        { id: 3, module: 'c' },
                    ],
                },
                { id: 4, module: 'b' },
            ],
        });

        const res = tree.insertBefore(
            { id: 5, module: 'd', children: [] },
            100
        );

        expect(res).toBeNull();
    });

    test('Should support to insert after a node', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const { obj } = tree;

        tree.insertAfter({ id: 5, module: 'd', children: [] }, 3);

        expect(obj).toEqual({
            id: 1,
            module: 'root',
            children: [
                {
                    id: 2,
                    module: 'a',
                    children: [
                        { id: 3, module: 'c' },
                        { id: 5, module: 'd', children: [] },
                    ],
                },
                { id: 4, module: 'b' },
            ],
        });

        const res = tree.insertAfter({ id: 5, module: 'd', children: [] }, 100);

        expect(res).toBeNull();
    });

    test('Should support to prepend a node', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const { obj } = tree;

        tree.prepend({ id: 5, module: 'd', children: [] }, 1);

        expect(obj).toEqual({
            id: 1,
            module: 'root',
            children: [
                {
                    id: 5,
                    module: 'd',
                    children: [],
                },
                {
                    id: 2,
                    module: 'a',
                    children: [{ id: 3, module: 'c' }],
                },
                { id: 4, module: 'b' },
            ],
        });
    });

    test('Should support to append a node', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const { obj } = tree;

        tree.append({ id: 5, module: 'd', children: [] }, 1);

        expect(obj).toEqual({
            id: 1,
            module: 'root',
            children: [
                {
                    id: 2,
                    module: 'a',
                    children: [{ id: 3, module: 'c' }],
                },
                { id: 4, module: 'b' },
                {
                    id: 5,
                    module: 'd',
                    children: [],
                },
            ],
        });

        const res = tree.append({ id: 5, module: 'd', children: [] }, 100);

        expect(res).toBeNull();
    });
});
