import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { tabItemActiveClassName } from '@dtinsight/molecule-ui/esm/tabs/tab';

import EditorGroup from '../group';

const TEST_ID = 'test-id';
const TEST_MENU = 'test-menu';
const tabData = [
    {
        id: '1',
        active: true,
        index: 1,
        name: 'test1',
    },
    {
        id: '2',
        active: false,
        index: 2,
        name: 'test2',
    },
];
const menuData = [
    {
        id: 'File',
        name: 'File',
        data: [
            {
                id: 'New File',
                name: 'New File',
            },
            {
                id: 'OpenFile',
                name: 'Open',
            },
        ],
    },
];

jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    return {
        ...originReact,
        useRef: jest.fn(() => ({
            current: null,
        })),
    };
});

jest.mock('@dtinsight/molecule-ui', () => {
    const originalModule = jest.requireActual('@dtinsight/molecule-ui');
    return {
        ...originalModule,
        Tabs: ({ onContextMenu, children, ...others }) => {
            return (
                <div
                    data-testid={TEST_ID}
                    className="mo-tab__item--active"
                    onClick={onContextMenu}
                    {...others}
                >
                    {children}
                </div>
            );
        },
        useContextView: () => {
            const document = globalThis.window.document;
            const div = document.createElement('div');

            div.id = 'context-view';
            document.body.append(div);

            return {
                show: (_, content) => {
                    const p = document.createElement('p');
                    p.onclick = content().props.onClick;
                    p.dataset.testid = TEST_MENU;
                    div.append(p);
                },
                dispose: () => {},
                hide: () => {},
            };
        },
        Menu: ({ children }) => {
            return <p>{children}</p>;
        },
    };
});

describe('The Editor Component', () => {
    afterEach(cleanup);

    test('Should support to set click context menu', async () => {
        const fn = jest.fn();
        const { getByTestId } = render(
            <EditorGroup
                id="test"
                isActiveGroup={true}
                onClickActions={jest.fn()}
                onClickContextMenu={fn}
                menu={menuData}
                data={tabData}
            />
        );
        const tabs = getByTestId(TEST_ID);

        fireEvent.click(tabs);
        expect(tabs.classList).toContain(tabItemActiveClassName);

        await waitFor(async () => {
            const root = getByTestId(TEST_MENU);

            expect(root).not.toBeNull();
            fireEvent.click(root!);

            expect(fn).toBeCalled();
        });
    });
});
