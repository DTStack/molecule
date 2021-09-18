import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProblemsPaneView from '../paneView';
import { MarkerSeverity } from 'mo/model';

const mockErrorPro = {
    id: 1,
    name: '0-1',
    isLeaf: true,
    value: {
        code: 'endLineNumber',
        message: '语法错误',
        startLineNumber: 0,
        startColumn: 1,
        endLineNumber: 0,
        endColumn: 1,
        status: MarkerSeverity.Error,
    },
    children: [],
};
const mockWarningPro = {
    id: 2,
    name: '0-2',
    isLeaf: true,
    value: {
        code: 'endLineNumber',
        message: '解析错误',
        startLineNumber: 0,
        startColumn: 1,
        endLineNumber: 0,
        endColumn: 1,
        status: MarkerSeverity.Warning,
    },
    children: [],
};

const mockInfoPro = {
    id: 3,
    name: '0-3',
    isLeaf: true,
    value: {
        code: 'endLineNumber',
        message: '有点问题',
        startLineNumber: 0,
        startColumn: 1,
        endLineNumber: 0,
        endColumn: 1,
        status: MarkerSeverity.Info,
    },
    children: [],
};

const mockDefaultPro = {
    id: 4,
    name: '0-4',
    isLeaf: true,
    value: {
        code: 'endLineNumber',
        message: 'problems',
        startLineNumber: 0,
        startColumn: 1,
        endLineNumber: 0,
        endColumn: 1,
        status: 0,
    },
    children: [],
};
const mockProblemFile = {
    id: 1,
    name: 'text.tsx',
    isLeaf: false,
    value: {
        code: 'text.tsx',
        message: '文件夹',
        startLineNumber: 0,
        startColumn: 1,
        endLineNumber: 0,
        endColumn: 1,
        status: 1,
    },
    children: [mockErrorPro, mockWarningPro, mockInfoPro, mockDefaultPro],
};

const mockRootData = {
    id: 'test',
    name: 'test-name',
    isLeaf: false,
    data: [mockProblemFile],
};

describe('The PaneView Component', () => {
    afterEach(cleanup);

    test('Match snapshot', () => {
        const { container, asFragment } = render(
            <ProblemsPaneView {...mockRootData} />
        );
        const wrapper = container.querySelector(
            `div[data-key="${mockProblemFile.id}"]`
        );
        fireEvent.click(wrapper!);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should render no data tips in Pane', () => {
        const { getByText } = render(
            <ProblemsPaneView id="test" name="problem" data={[]} />
        );

        const tips = getByText('未在工作区检测到问题');
        expect(tips).toBeInTheDocument();
    });
});
