import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Editor from '../editor';
import EditorStatusBarView from '../statusBarView';
import { defaultEditorClassName, groupClassName } from '../base';
import { expectFnCalled } from '@test/utils';
import { LayoutModel } from 'mo/model/workbench/layout';
import '@testing-library/jest-dom';

const mockItems = {
    id: 'MoEditorInfo',
    sortIndex: 2,
    data: {
        ln: 0,
        col: 0,
    },
    name: 'Go to Line/Column',
};
const current = {
    id: 1,
};
const TEST_ID = 'test-id';

jest.mock('@dtinsight/molecule-ui', () => {
    const originalModule = jest.requireActual('@dtinsight/molecule-ui');
    return {
        ...originalModule,
        Tabs: (props) => {
            const { children, onSelectTab, onMoveTab, onCloseTab, ...others } =
                props;
            return (
                <div
                    data-testid={TEST_ID}
                    onClick={() => {
                        onMoveTab?.();
                        onSelectTab?.();
                        onCloseTab?.();
                    }}
                    {...others}
                >
                    {props.children}
                </div>
            );
        },
        Scrollable: ({ children }) => {
            return <>{children}</>;
        },
    };
});

describe('The Editor Component', () => {
    afterEach(cleanup);

    test('Match the welcome snapshot', () => {
        const component = renderer.create(
            <Editor onClickActions={jest.fn()} />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Match the editor group snapshot', () => {
        const groups = [current, Object.assign({}, current, { id: 2 })];
        const { asFragment } = render(
            <Editor
                onClickActions={jest.fn()}
                editor={{ current, groups }}
                layout={new LayoutModel()}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('Match the status snapshot', () => {
        const component = renderer.create(
            <EditorStatusBarView {...mockItems} />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should support to set entry', () => {
        const testJSX = <div data-testid={TEST_ID}></div>;
        const { getByTestId } = render(
            <Editor onClickActions={jest.fn()} editor={{ entry: testJSX }} />
        );

        expect(getByTestId(TEST_ID)).toBeInTheDocument();
    });

    test('Should support to set entry', () => {
        const testJSX = <div data-testid={TEST_ID}></div>;
        const { getByTestId } = render(
            <Editor onClickActions={jest.fn()} editor={{ entry: testJSX }} />
        );

        expect(getByTestId(TEST_ID)).toBeInTheDocument();
    });

    test('Should have default class name', () => {
        const { container } = render(<Editor onClickActions={jest.fn()} />);

        expect(container.firstElementChild!.classList).toContain(
            defaultEditorClassName
        );
    });

    test('Should support to set single editor', () => {
        const groups = [current];
        const { container } = render(
            <Editor
                onClickActions={jest.fn()}
                editor={{
                    current,
                    groups,
                }}
            />
        );

        expect(
            container.querySelector(`.${groupClassName}`)
        ).toBeInTheDocument();
    });

    test('Should support to set group editor', () => {
        const groups = [current, Object.assign({}, current, { id: 2 })];
        const { container } = render(
            <Editor
                onClickActions={jest.fn()}
                editor={{
                    current,
                    groups,
                }}
                layout={new LayoutModel()}
            />
        );

        expect(container.querySelectorAll(`.${groupClassName}`)).toHaveLength(
            groups.length
        );
    });

    test('Should support to set single editor', () => {
        const groups = [current];
        expectFnCalled((fn) => {
            const { getByTestId } = render(
                <Editor
                    onClickActions={jest.fn()}
                    editor={{
                        current,
                        groups,
                    }}
                    onMoveTab={fn}
                    onCloseTab={fn}
                    onSelectTab={fn}
                />
            );
            const component = getByTestId('test-id');

            fireEvent.click(component);
            expect(fn).toBeCalledTimes(3);
        });
    });
});
