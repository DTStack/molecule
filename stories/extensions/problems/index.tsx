import { IExtensionService } from 'mo/services';
import { IExtension } from 'mo/model';
import molecule from 'mo';

function init() {
    const MockItem = {
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
    molecule.problems.add(MockItem);
}

export const ExtendsProblems: IExtension = {
    activate(extensionCtx: IExtensionService) {
        init();
    },
};
