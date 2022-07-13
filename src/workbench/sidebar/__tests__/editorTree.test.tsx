import 'reflect-metadata';
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expectFnCalled } from '@test/utils';

import { EditorTree, IOpenEditProps } from '../explore/editorTree';
import {
    editorTreeActiveItemClassName,
    editorTreeGroupClassName,
} from '../explore/base';
import { constants } from 'mo/services/builtinService/const';
import { container } from 'tsyringe';
import { LocaleService } from 'mo/i18n';
import { ExtendsLocales } from 'mo/extensions/locales-defaults';

const PaneEditorTree = (props: Omit<IOpenEditProps, 'panel'>) => {
    return <EditorTree panel={{ id: 'test', name: 'test' }} {...props} />;
};

const mockTab1 = {
    id: 'tab1',
    name: 'tab1',
    data: {
        path: 'tab',
    },
};

const mockTab2 = {
    id: 'tab2',
    name: 'tab2',
    data: {
        path: 'tab',
    },
};
const TAB1_PATH = `${mockTab1.data.path}/${mockTab1.name}`;
const TAB2_PATH = `${mockTab2.data.path}/${mockTab2.name}`;

const mockGroups = [
    {
        id: 1,
        tab: {
            id: 'tab1',
            name: 'tab1',
        },
        data: [mockTab1, mockTab2],
    },
];

// mock Toolbar component
jest.mock('mo/components/toolbar', () => {
    const originalModule = jest.requireActual('mo/components/toolbar');
    return {
        ...originalModule,
        Toolbar: ({ onClick, data = [] }) => (
            <div data-testid="toolbar">
                {data.map((item, index) => (
                    <span key={index} onClick={(e) => onClick(e, item)}>
                        toolbar-{index}
                    </span>
                ))}
            </div>
        ),
    };
});

// to mock useRef
jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    return {
        ...originReact,
        useRef: jest.fn(() => ({
            current: null,
        })),
    };
});

describe('The EditorTree Component', () => {
    // initial locales
    const localeService = container.resolve(LocaleService);
    localeService.initialize(ExtendsLocales.contributes!.languages!, 'en');

    afterEach(cleanup);

    test('Match Snapshot', () => {
        let component;
        act(() => {
            component = renderer.create(<PaneEditorTree groups={mockGroups} />);
        });
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should get null without groups', () => {
        const { container } = render(<PaneEditorTree />);
        expect(container.innerHTML).toBe('');
    });

    test('Should not render title without path in data', () => {
        const { container } = render(
            <PaneEditorTree
                groups={[
                    {
                        id: 1,
                        tab: {
                            id: 'tab1',
                            name: 'tab1',
                        },
                        data: [
                            {
                                id: 'tab1',
                                name: 'tab1',
                            },
                            {
                                id: 'tab2',
                                name: 'tab2',
                            },
                        ],
                    },
                ]}
            />
        );
        expect(container.querySelector("*[title='tab/tab1']")).toBeNull();
    });

    test('Should support to active the pane', () => {
        const { getByTitle } = render(
            <PaneEditorTree groups={mockGroups} current={mockGroups[0]} />
        );

        const tab1 = getByTitle('tab/tab1');
        expect(tab1.classList).toContain(editorTreeActiveItemClassName);
    });

    test('Should support to close tab', () => {
        expectFnCalled((testFn) => {
            const { getByTitle } = render(
                <PaneEditorTree
                    groups={mockGroups}
                    onClose={testFn}
                    current={mockGroups[0]}
                />
            );

            const tab1 = getByTitle(TAB1_PATH);
            fireEvent.click(tab1.querySelector('span.codicon-close')!);

            expect(testFn.mock.calls[0][0]).toBe(mockTab1.name);
            expect(testFn.mock.calls[0][1]).toBe(1);
        });
    });

    test('Should support to contextMenu event', () => {
        const contextMenu = {
            id: 'test',
            name: 'menu',
        };
        expectFnCalled((contextMenuFn) => {
            const { getByTitle, getByRole } = render(
                <PaneEditorTree
                    groups={mockGroups}
                    current={mockGroups[0]}
                    contextMenu={[contextMenu]}
                    onContextMenu={contextMenuFn}
                />
            );

            const tab1 = getByTitle(TAB1_PATH);
            fireEvent.contextMenu(tab1);

            const menu = getByRole('menu');
            expect(menu).toBeInTheDocument();

            fireEvent.click(menu.firstElementChild!);

            expect(contextMenuFn.mock.calls[0][0]).toEqual(
                expect.objectContaining(contextMenu)
            );
            expect(contextMenuFn.mock.calls[0][1]).toEqual(1);
            expect(contextMenuFn.mock.calls[0][2]).toEqual(mockTab1);
        });
    });

    test('Should support to select tab', () => {
        expectFnCalled((selectFn) => {
            const { getByTitle } = render(
                <PaneEditorTree
                    groups={mockGroups}
                    current={mockGroups[0]}
                    onSelect={selectFn}
                />
            );

            const tab1 = getByTitle(TAB1_PATH);
            fireEvent.click(tab1);
            // same current tab won't triiger onSelect event
            expect(selectFn).not.toBeCalled();

            const tab2 = getByTitle(TAB2_PATH);
            fireEvent.click(tab2);
        });
    });

    test('Should not to scroll into view when scollerHeight is invalid', () => {
        const mockScroll = jest.fn();
        (React.useRef as jest.Mock).mockImplementation(() => ({
            current: { scrollHeight: 100, scrollTo: mockScroll },
        }));

        const current = mockGroups[0];

        render(<PaneEditorTree groups={mockGroups} current={current} />);
        expect(mockScroll).not.toBeCalled();
    });

    test('Should scroll into view when add an active tab', () => {
        const mockScroll = jest.fn();
        (React.useRef as jest.Mock).mockImplementation(() => ({
            current: { scrollHeight: 200, scrollTo: mockScroll },
        }));

        const current = mockGroups[0];

        render(<PaneEditorTree groups={mockGroups} current={current} />);
        expect(mockScroll).toBeCalled();
    });
});

const multipleGroups = [
    {
        id: 1,
        tab: {
            id: 'tab1',
            name: 'tab1',
        },
        data: [mockTab1, mockTab2],
    },
    {
        id: 2,
        tab: {
            id: 'tab1',
            name: 'tab1',
        },
        data: [mockTab1, mockTab2],
    },
];

describe('The EditorTree Component With multiple groups', () => {
    afterEach(cleanup);

    test('Match Snapshot', () => {
        const component = renderer.create(
            <PaneEditorTree groups={multipleGroups} />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should focus the first child in group when click group title', () => {
        expectFnCalled((selectFn) => {
            const { container } = render(
                <PaneEditorTree
                    groups={multipleGroups}
                    current={multipleGroups[0]}
                    onSelect={selectFn}
                />
            );

            const groups = container.querySelectorAll(
                `.${editorTreeGroupClassName}`
            );

            expect(groups).toHaveLength(2);

            const group1 = groups[0];
            fireEvent.click(group1);

            expect(
                (group1.nextElementSibling! as HTMLDivElement).focus
            ).toBeTruthy();

            expect(selectFn.mock.calls[0][0]).toBe(mockTab1.name);
            expect(selectFn.mock.calls[0][1]).toBe(multipleGroups[0].id);
        });
    });

    test('Should support trigger contextMenu event in group title', () => {
        const contextMenu = {
            id: 'test',
            name: 'menu',
        };
        expectFnCalled((contextMenuFn) => {
            const { container, getByRole } = render(
                <PaneEditorTree
                    groups={multipleGroups}
                    current={multipleGroups[0]}
                    headerContextMenu={[contextMenu]}
                    onContextMenu={contextMenuFn}
                />
            );

            const group1 = container.querySelector(
                `.${editorTreeGroupClassName}`
            );

            fireEvent.contextMenu(group1!);

            const menu = getByRole('menu');
            expect(menu).toBeInTheDocument();

            fireEvent.click(menu.firstElementChild!);

            expect(contextMenuFn.mock.calls[0][0]).toEqual(
                expect.objectContaining(contextMenu)
            );
            expect(contextMenuFn.mock.calls[0][1]).toEqual(
                multipleGroups[0].id
            );
            expect(contextMenuFn.mock.calls[0][2]).toBeUndefined();
        });
    });

    test('Should have a toolbar in group title', () => {
        const closeMockFn = jest.fn();
        const saveMockFn = jest.fn();
        const toolbarMockFn = jest.fn();

        const { getAllByTestId } = render(
            <PaneEditorTree
                groups={multipleGroups}
                current={multipleGroups[0]}
                groupToolbar={[
                    {
                        id: constants.EXPLORER_TOGGLE_SAVE_GROUP,
                        title: 'Save Group',
                        icon: 'save-all',
                    },
                    {
                        id: constants.EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS,
                        title: 'Close Group Editors',
                        icon: 'close-all',
                    },
                    {
                        id: 'test',
                        title: 'testing',
                    },
                ]}
                onCloseGroup={closeMockFn}
                onSaveGroup={saveMockFn}
                onToolbarClick={toolbarMockFn}
            />
        );

        const toolbars = getAllByTestId('toolbar');

        expect(toolbars).toHaveLength(multipleGroups.length);

        const index = 0;
        let triggerBtn = toolbars[index].firstElementChild!;

        fireEvent.click(triggerBtn);

        // first button is for saving
        expect(saveMockFn).toBeCalled();
        expect(saveMockFn.mock.calls[0][0]).toBe(multipleGroups[index].id);

        triggerBtn = triggerBtn.nextElementSibling!;
        fireEvent.click(triggerBtn);

        // next button is for closing
        expect(closeMockFn).toBeCalled();
        expect(closeMockFn.mock.calls[0][0]).toBe(multipleGroups[index].id);

        triggerBtn = triggerBtn.nextElementSibling!;
        fireEvent.click(triggerBtn);

        // last button is extra button
        expect(toolbarMockFn).toBeCalled();
        expect(toolbarMockFn.mock.calls[0][0]).toEqual({
            id: 'test',
            title: 'testing',
        });
        expect(toolbarMockFn.mock.calls[0][1]).toBe(multipleGroups[index].id);
    });
});
