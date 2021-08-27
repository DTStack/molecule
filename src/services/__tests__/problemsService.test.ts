import 'reflect-metadata';
import { logErrorFn } from '../../../test/utils';
import { container } from 'tsyringe';
import { ProblemsService } from '../problemsService';

const problemsService = container.resolve(ProblemsService);

const mockData = {
    id: 1,
    name: 'text.tsx',
    value: {
        code: 'text.tsx',
        message: '文件夹',
        startLineNumber: 0,
        startColumn: 1,
        endLineNumber: 0,
        endColumn: 1,
        status: 1,
    },
    children: [
        {
            id: 3,
            name: '0-1',
            value: {
                code: 'endLineNumber',
                message: '语法错误',
                startLineNumber: 0,
                startColumn: 1,
                endLineNumber: 0,
                endColumn: 1,
                status: 8,
            },
            children: [],
        },
        {
            id: 4,
            name: '0-1',
            value: {
                code: 'endLineNumber',
                message: '解析可能会存在问题',
                startLineNumber: 0,
                startColumn: 1,
                endLineNumber: 0,
                endColumn: 1,
                status: 4,
            },
            children: [],
        },
        {
            id: 5,
            name: '0-1',
            value: {
                code: 'endLineNumber',
                message: '住在山里，真不戳',
                startLineNumber: 0,
                startColumn: 1,
                endLineNumber: 0,
                endColumn: 1,
                status: 2,
            },
            children: [],
        },
    ],
};
describe('The Problems Service', () => {
    afterEach(() => {
        problemsService.reset();
    });

    test('Should support add a single problem', () => {
        problemsService.add(mockData);
        expect(problemsService.getState().data).toHaveLength(1);
        expect(problemsService.getState().data[0]).toEqual(mockData);
    });

    test('Should support add multiply problems', () => {
        problemsService.add([mockData]);
        expect(problemsService.getState().data).toHaveLength(1);
        expect(problemsService.getState().data[0]).toEqual(mockData);
    });

    test('Should replace problem which is found when add', () => {
        problemsService.add([mockData]);
        expect(problemsService.getState().data[0]).toEqual(mockData);

        const nextData = {
            id: 1,
            name: 'test.sql',
            value: {
                code: 'text.tsx',
                message: '文件夹',
                startLineNumber: 0,
                startColumn: 1,
                endLineNumber: 0,
                endColumn: 1,
                status: 1,
            },
            children: [],
        };
        problemsService.add(nextData);
        expect(problemsService.getState().data).toHaveLength(1);
        expect(problemsService.getState().data[0]).toEqual(nextData);
    });

    test('Should support to remove a single problem', () => {
        problemsService.add([mockData]);
        expect(problemsService.getState().data).toHaveLength(1);

        problemsService.remove(1);
        expect(problemsService.getState().data).toHaveLength(0);
    });

    test('Should support to batch remove problems', () => {
        problemsService.add([{ ...mockData }, { ...mockData, id: 2 }]);
        expect(problemsService.getState().data).toHaveLength(2);

        problemsService.remove([1, 2]);
        expect(problemsService.getState().data).toHaveLength(0);
    });

    test("Should log error when didn't find the problem in remove", () => {
        logErrorFn(() => {
            problemsService.add([mockData]);
            problemsService.remove(2);
        });
    });

    test('Should support to update a single problem', () => {
        problemsService.add([mockData]);
        expect(problemsService.getState().data[0]).toEqual(mockData);

        const nextData = { ...mockData, name: 'text.sql' };
        problemsService.update(nextData);
        expect(problemsService.getState().data[0]).toEqual(nextData);
    });

    test('Should support to batch update problems', () => {
        problemsService.add([{ ...mockData }, { ...mockData, id: 2 }]);
        expect(problemsService.getState().data[0]).toEqual(mockData);
        expect(problemsService.getState().data[1]).toEqual({
            ...mockData,
            id: 2,
        });

        const nextData = [
            {
                ...mockData,
                name: 'text.sql',
            },
            {
                ...mockData,
                id: 2,
                name: 'test.json',
            },
        ];
        problemsService.update(nextData);
        expect(problemsService.getState().data[0]).toEqual({
            ...mockData,
            name: 'text.sql',
        });
        expect(problemsService.getState().data[1]).toEqual({
            ...mockData,
            id: 2,
            name: 'test.json',
        });
    });

    test("Should log error when didn't find the problem in update", () => {
        logErrorFn(() => {
            problemsService.add([mockData]);
            problemsService.update({ ...mockData, id: 2 });
        });
    });

    test('Should support to toggle visibility', () => {
        expect(problemsService.getState().show).toBeFalsy();

        problemsService.toggleProblems();
        expect(problemsService.getState().show).toBeTruthy();
        problemsService.toggleProblems();
        expect(problemsService.getState().show).toBeFalsy();
    });
});
