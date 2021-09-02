import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expectFnCalled } from '@test/utils';
import { SearchPanel } from '../search';
import {
    emptyTextValueClassName,
    matchSearchValueClassName,
    replaceSearchValueClassName,
} from '../search/base';
import { replaceBtnClassName } from 'mo/components/search/base';

const mockResult = [
    {
        id: 'test',
        name: 'test',
        isLeaf: true,
    },
    {
        id: 'test2',
        name: 'qqqqqq-test2',
        isLeaf: true,
    },
];

describe('The SearchPanel Component', () => {
    afterEach(cleanup);

    test('Should render no data tips', () => {
        const { container } = render(<SearchPanel value="test" result={[]} />);

        const noData = container.querySelector(`.${emptyTextValueClassName}`);
        expect(noData).toBeInTheDocument();
    });

    test('Should support to change value in controlled', () => {
        expectFnCalled((mockFn) => {
            const { container } = render(
                <SearchPanel value="test" result={[]} setSearchValue={mockFn} />
            );

            const seachInput = container.querySelector('textarea');
            expect(seachInput).toBeInTheDocument();

            const nextValue = 'test-value';
            fireEvent.change(seachInput!, { target: { value: nextValue } });
            expect(mockFn.mock.calls[0][0]).toBe(nextValue);
        });
    });

    test('Should to support to change replace value in controlled', () => {
        const mockFn = jest.fn();
        const mockToggleModeFn = jest.fn();

        const { container } = render(
            <SearchPanel
                value="test"
                replaceValue=""
                result={[]}
                setReplaceValue={mockFn}
                toggleMode={mockToggleModeFn}
            />
        );

        const btn = container.querySelector(`.${replaceBtnClassName}`);
        expect(btn).toBeInTheDocument();

        fireEvent.click(btn!);

        expect(mockToggleModeFn).toBeCalled();
        expect(mockToggleModeFn.mock.calls[0][0]).toBeTruthy();

        const textareas = container.querySelectorAll('textarea');
        expect(textareas).toHaveLength(2);

        const replaceTextarea = textareas[1];
        const value = 'test';
        fireEvent.change(replaceTextarea, { target: { value } });

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(value);
    });

    test('Should support to search value', () => {
        const errorMessage = 'error';
        const mockValidation = jest
            .fn()
            .mockImplementationOnce((value, cb) => cb(new Error(errorMessage)))
            .mockImplementation((value, cb) => cb());
        const mockSetInfo = jest.fn();
        const mockSearch = jest.fn();

        const value = 'test';
        const replaceValue = 'replace';
        const { container } = render(
            <SearchPanel
                value={value}
                replaceValue={replaceValue}
                result={[]}
                validateValue={mockValidation}
                onSearch={mockSearch}
                setValidateInfo={mockSetInfo}
            />
        );

        const seachInput = container.querySelector('textarea');
        const nextValue = 'test-value';
        fireEvent.change(seachInput!, { target: { value: nextValue } });

        expect(mockValidation).toBeCalled();
        expect(mockSetInfo).toBeCalled();
        expect(mockSetInfo.mock.calls[0][0]).toEqual({
            type: 'error',
            text: errorMessage,
        });

        fireEvent.change(seachInput!, { target: { value: nextValue } });
        expect(mockSearch).toBeCalled();
        expect(mockSearch.mock.calls[0][0]).toBe(nextValue);
        expect(mockSearch.mock.calls[0][1]).toBe(replaceValue);
    });

    test('Should support to render title in result tree', () => {
        const value = 'test';
        const mockFn = jest
            .fn()
            .mockImplementationOnce(() => 0)
            .mockImplementation(() => 7);
        const { container, rerender } = render(
            <SearchPanel
                value={value}
                result={mockResult}
                getSearchIndex={mockFn}
            />
        );

        let target = mockResult[0];
        let treeNode = container.querySelector(
            `div[data-id=mo_treeNode_${target.id}]`
        );
        expect(treeNode).toBeInTheDocument();
        expect(
            treeNode!.querySelector(`.${matchSearchValueClassName}`)?.innerHTML
        ).toContain(value);

        target = mockResult[1];
        treeNode = container.querySelector(
            `div[data-id=mo_treeNode_${target.id}]`
        );
        expect(treeNode).toBeInTheDocument();
        expect(
            treeNode!.querySelector(`.${matchSearchValueClassName}`)?.innerHTML
        ).toContain(value);

        const replaceValue = 'replace';
        rerender(
            <SearchPanel
                value={value}
                replaceValue={replaceValue}
                result={mockResult}
                getSearchIndex={mockFn}
            />
        );

        treeNode = container.querySelector(
            `div[data-id=mo_treeNode_${target.id}]`
        );
        expect(
            treeNode!.querySelector(`.${replaceSearchValueClassName}`)
        ).toBeInTheDocument();
        expect(
            treeNode!.querySelector(`.${replaceSearchValueClassName}`)
                ?.innerHTML
        ).toBe(replaceValue);
    });

    test('Should support to click the result tree node', () => {
        expectFnCalled((mockFn) => {
            const { container } = render(
                <SearchPanel
                    value="test"
                    result={mockResult}
                    getSearchIndex={() => 0}
                    onResultClick={mockFn}
                />
            );

            const target = mockResult[0];
            const treeNode = container.querySelector(
                `div[data-id=mo_treeNode_${target.id}]`
            );

            const triggerDom = treeNode?.querySelector(
                '.rc-tree-node-content-wrapper'
            );
            fireEvent.click(triggerDom!);

            expect(mockFn.mock.calls[0][0]).toEqual(target);
            expect(mockFn.mock.calls[0][1]).toEqual(mockResult);
        });
    });

    test('Should directly return a name for non-leaf node', () => {
        const resultTree = [
            {
                id: 'test',
                name: 'non-leaf node',
                isLeaf: false,
                children: [
                    {
                        id: 'test2',
                        name: 'qqqqqq-test2',
                        isLeaf: true,
                    },
                ],
            },
        ];
        const { getByTitle } = render(
            <SearchPanel value="test" result={resultTree} />
        );

        expect(getByTitle(resultTree[0].name)).toBeInTheDocument();
    });
});
