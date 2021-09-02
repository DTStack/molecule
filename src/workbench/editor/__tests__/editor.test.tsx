import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Editor from '../editor';
import EditorStatusBarView from '../statusBarView';
import { defaultEditorClassName, groupClassName } from '../base';
import { expectFnCalled } from '@test/utils';
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

jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    return {
        ...originReact,
        useRef: jest.fn(() => ({
            current: null,
        })),
    };
});

jest.mock('mo/components/scrollable', () => {
    const originalModule = jest.requireActual('mo/components/scrollable');
    return {
        ...originalModule,
        Scrollable: ({ children }) => {
            return <>{children}</>;
        },
    };
});
jest.mock('mo/components/tabs', () => {
    const originalModule = jest.requireActual('mo/components/tabs');
    return {
        ...originalModule,
        Tabs: (props) => {
            const {
                children,
                onSelectTab,
                onMoveTab,
                onCloseTab,
                ...others
            } = props;
            return (
                <div
                    data-testid={'test-id'}
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
    };
});

describe('The Editor Component', () => {
    afterEach(cleanup);

    test('match the welcome snapshot', () => {
        const component = renderer.create(
            <Editor onClickActions={jest.fn()} />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('match the esitor group snapshot', () => {
        const groups = [current, Object.assign({}, current, { id: 2 })];
        const component = renderer.create(
            <Editor
                onClickActions={jest.fn()}
                current={current}
                groups={groups}
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('match the status snapshot', () => {
        const component = renderer.create(
            <EditorStatusBarView {...mockItems} />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should support to set entry', () => {
        const testJSX = <div data-testid={TEST_ID}></div>;
        const { getByTestId } = render(
            <Editor onClickActions={jest.fn()} entry={testJSX} />
        );

        expect(getByTestId(TEST_ID)).toBeInTheDocument();
    });

    test('Should support to set entry', () => {
        const testJSX = <div data-testid={TEST_ID}></div>;
        const { getByTestId } = render(
            <Editor onClickActions={jest.fn()} entry={testJSX} />
        );

        expect(getByTestId(TEST_ID)).toBeInTheDocument();
    });

    test('Should support to set entry', () => {
        const testJSX = <div data-testid={TEST_ID}></div>;
        const { getByTestId } = render(
            <Editor onClickActions={jest.fn()} entry={testJSX} />
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
                current={current}
                groups={groups}
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
                current={current}
                groups={groups}
            />
        );

        expect(container.querySelectorAll(`.${groupClassName}`).length).toBe(
            groups.length
        );
    });

    test('Should support to set single editor', () => {
        const groups = [current];
        expectFnCalled((fn) => {
            const { getByTestId } = render(
                <Editor
                    onClickActions={jest.fn()}
                    current={current}
                    groups={groups}
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
