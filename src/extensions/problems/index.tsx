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
                    status: 2,
                },
                children: [],
            },
        ],
    };
    molecule.problems.addProblems(MockItem);
}

export const ExtendProblems: IExtension = {
    activate(extensionCtx: IExtensionService) {
        init();
    },
};
