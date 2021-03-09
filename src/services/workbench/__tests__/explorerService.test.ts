import 'reflect-metadata';
import { TreeViewUtil } from '../../helper';
// import { container } from 'tsyringe';
// import { IExplorerService, ExplorerService } from '../explorerService';
describe('Test panelService', () => {
    // TODO: error: Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function...
    // const explorerService = container.resolve<IExplorerService>(ExplorerService);
    // console.log('explorerService', explorerService)
});

describe('Test TreeViewUtil Class', () => {
    const createTree = () => {
        return new TreeViewUtil({
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
        });
    };

    test('empty Tree', () => {
        const tree = new TreeViewUtil();
        expect(tree.obj).toEqual({ children: [] });
    });

    test('custom TreeViewUtil childNodeName', () => {
        let tree = new TreeViewUtil(null, 'properties');
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

    test('Test TreeViewUtil generate method', () => {
        const tree = createTree();
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
            node: obj.children[0].children[0],
        });

        expect(indexes['4']).toEqual({
            id: 4,
            parent: 1,
            node: obj.children[1],
            prev: 2,
        });
    });

    test('Test TreeViewUtil get method', () => {
        const tree = createTree();
        const { obj } = tree;

        expect(tree.get(1)).toEqual(obj);
        expect(tree.get(100)).toBeNull();
    });

    test('Test TreeViewUtil remove method', () => {
        const tree = createTree();
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
        expect(tree.getIndex(2)).toBeUndefined();
        expect(tree.getIndex(3)).toBeUndefined();
    });

    test('Test TreeViewUtil insert method', () => {
        const tree = createTree();
        const { obj } = tree;

        tree.insert({ id: 5, module: 'd' }, 3, 0);

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
                            children: [{ id: 5, module: 'd' }],
                        },
                    ],
                },
                { id: 4, module: 'b' },
            ],
        });
    });

    test('Test TreeViewUtil insertBefore method', () => {
        const tree = createTree();
        const { obj } = tree;
        tree.insertBefore({ id: 5, module: 'd' }, 3);

        expect(obj).toEqual({
            id: 1,
            module: 'root',
            children: [
                {
                    id: 2,
                    module: 'a',
                    children: [
                        { id: 5, module: 'd' },
                        { id: 3, module: 'c' },
                    ],
                },
                { id: 4, module: 'b' },
            ],
        });
    });

    test('Test TreeViewUtil insertAfter method', () => {
        const tree = createTree();
        const { obj } = tree;
        tree.insertAfter({ id: 5, module: 'd' }, 3);

        expect(obj).toEqual({
            id: 1,
            module: 'root',
            children: [
                {
                    id: 2,
                    module: 'a',
                    children: [
                        { id: 3, module: 'c' },
                        { id: 5, module: 'd' },
                    ],
                },
                { id: 4, module: 'b' },
            ],
        });
    });

    test('Test TreeViewUtil prepend method', () => {
        const tree = createTree();
        const { obj } = tree;
        tree.prepend({ id: 5, module: 'd' }, 1);

        expect(obj).toEqual({
            id: 1,
            module: 'root',
            children: [
                {
                    id: 5,
                    module: 'd',
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

    test('Test TreeViewUtil append method', () => {
        const tree = createTree();
        const { obj } = tree;
        tree.append({ id: 5, module: 'd' }, 1);

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
                },
            ],
        });
    });
});
