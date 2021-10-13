import { expectLoggerErrorToBeCalled } from '@test/utils';
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
    test('Should support to initial with a tree node', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const { obj, getHashMap } = tree;

        expect(getHashMap(1)).toEqual({
            id: '1',
            node: obj,
            children: ['2', '4'],
        });

        expect(getHashMap(2)).toEqual({
            id: '2',
            parent: '1',
            children: ['3'],
            node: obj.children[0],
            next: '4',
        });

        expect(getHashMap(3)).toEqual({
            id: '3',
            parent: '2',
            node: obj.children[0].children?.[0],
        });

        expect(getHashMap(4)).toEqual({
            id: '4',
            parent: '1',
            node: obj.children[1],
            prev: '2',
        });
    });

    test('Should support to get a node from tree', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const { obj } = tree;

        expect(tree.getNode(1)).toEqual(obj);
        expect(tree.getNode(100)).toBeNull();
    });

    test('Should support to update a node in tree', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const node = tree.updateNode(2, { module: 'test' });

        expect(node).toEqual({
            id: 2,
            module: 'test',
            children: [{ id: 3, module: 'c' }],
        });
    });

    test('Should get a null when update failed', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const node = tree.updateNode(100, { module: 'test' });

        expect(node).toBeNull();
    });

    test('Should support to remove a node in tree', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const { obj } = tree;

        const node = tree.removeNode(2);

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

        expect(tree.getHashMap(2)).toBeNull();
        expect(tree.getHashMap(3)).toBeNull();
    });

    test('Should get null when remove failed', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const node = tree.removeNode(100);

        expect(node).toBeNull();
    });

    test('Should support to insert a node', () => {
        const tree = new TreeViewUtil(mockTreeData);
        const { obj } = tree;

        tree.insertNode({ id: 5, module: 'd', children: [] }, 3, 0);

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

        const res = tree.insertNode(
            { id: 5, module: 'd', children: [] },
            100,
            0
        );

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

    test('Should log ERROR message when duplicated key', () => {
        expectLoggerErrorToBeCalled(() => {
            const tree = new TreeViewUtil(mockTreeData);
            tree.append({ id: 3, module: 'duplicated key', children: [] }, 1);
        });
    });

    test('Should NOT support to remove a root node', () => {
        expectLoggerErrorToBeCalled(() => {
            const tree = new TreeViewUtil(mockTreeData);
            tree.removeNode(mockTreeData.id);
        });
    });

    test('Should NOT support to insert a node before root', () => {
        expectLoggerErrorToBeCalled(() => {
            const tree = new TreeViewUtil(mockTreeData);
            tree.insertBefore(
                { id: 5, module: 'insert', children: [] },
                mockTreeData.id
            );
        });
    });

    test('Should NOT support to insert a node after root', () => {
        expectLoggerErrorToBeCalled(() => {
            const tree = new TreeViewUtil(mockTreeData);
            tree.insertAfter(
                { id: 5, module: 'insert', children: [] },
                mockTreeData.id
            );
        });
    });
});
