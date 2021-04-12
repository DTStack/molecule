"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var helper_1 = require("../../helper");
// import { container } from 'tsyringe';
// import { IExplorerService, ExplorerService } from '../explorerService';
describe('Test panelService', function () {
    // TODO: error: Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function...
    // const explorerService = container.resolve<IExplorerService>(ExplorerService);
    // console.log('explorerService', explorerService)
});
describe('Test TreeViewUtil Class', function () {
    var createTree = function () {
        return new helper_1.TreeViewUtil({
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
    test('empty Tree', function () {
        var tree = new helper_1.TreeViewUtil();
        expect(tree.obj).toEqual({ children: [] });
    });
    test('custom TreeViewUtil childNodeName', function () {
        var tree = new helper_1.TreeViewUtil(null, 'properties');
        expect(tree.obj).toEqual({ properties: [] });
        tree = new helper_1.TreeViewUtil({
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
        }, 'properties');
        var obj = tree.obj, indexes = tree.indexes;
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
    test('Test TreeViewUtil generate method', function () {
        var tree = createTree();
        var obj = tree.obj, indexes = tree.indexes;
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
    test('Test TreeViewUtil get method', function () {
        var tree = createTree();
        var obj = tree.obj;
        expect(tree.get(1)).toEqual(obj);
        expect(tree.get(100)).toBeNull();
    });
    test('Test TreeViewUtil remove method', function () {
        var tree = createTree();
        var obj = tree.obj;
        var node = tree.remove(2);
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
    test('Test TreeViewUtil insert method', function () {
        var tree = createTree();
        var obj = tree.obj;
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
    test('Test TreeViewUtil insertBefore method', function () {
        var tree = createTree();
        var obj = tree.obj;
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
    test('Test TreeViewUtil insertAfter method', function () {
        var tree = createTree();
        var obj = tree.obj;
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
    test('Test TreeViewUtil prepend method', function () {
        var tree = createTree();
        var obj = tree.obj;
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
    test('Test TreeViewUtil append method', function () {
        var tree = createTree();
        var obj = tree.obj;
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
//# sourceMappingURL=explorerService.test.js.map