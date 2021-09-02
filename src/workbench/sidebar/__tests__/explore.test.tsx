import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expectFnCalled } from '@test/utils';
import { Explorer } from '../explore';
import { toolbarClassName } from 'mo/components/toolbar';

const mockContextMenu = {
    id: 'contextMenu',
    name: 'contextMenu',
    'data-testid': 'test-toolbar',
};
const mockToolbar = {
    id: 'test',
    name: 'test',
    contextMenu: [mockContextMenu],
};
const mockData = [
    {
        id: 'open',
        name: 'Open',
    },
    {
        id: 'test',
        name: 'test',
        panel: [mockToolbar],
    },
];

// mock collapse
jest.mock('mo/components/collapse', () => {
    const originalModule = jest.requireActual('mo/components/collapse');
    return {
        ...originalModule,
        Collapse: jest
            .fn()
            // to mock originalModule once for ensure snapshot is the actual component
            .mockImplementationOnce(originalModule.Collapse)
            .mockImplementation(
                ({ data, onCollapseChange, onToolbarClick }) => (
                    <div data-testid="collapse">
                        {data.map((item, index) => {
                            const { panel = [] } = item;
                            return (
                                <span key={index}>
                                    <span
                                        data-testid={item.id}
                                        onClick={(e) =>
                                            onCollapseChange(item.id)
                                        }
                                    >
                                        collapse-{index}
                                    </span>
                                    {panel.map((p, index) => (
                                        <span
                                            data-testid={`${item.id}-${p.id}`}
                                            key={index}
                                            onClick={() =>
                                                onToolbarClick(p, item)
                                            }
                                        >
                                            panel-{index}
                                        </span>
                                    ))}
                                </span>
                            );
                        })}
                    </div>
                )
            ),
    };
});

describe('The Explorer Component', () => {
    afterEach(cleanup);

    test('Match Snapshot', () => {
        const component = renderer.create(
            <Explorer data={mockData} headerToolBar={mockToolbar} />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should trigger onToolbarClick event', () => {
        expectFnCalled((mockFn) => {
            const { getByTestId } = render(
                <Explorer
                    data={mockData}
                    headerToolBar={mockToolbar}
                    onToolbarClick={mockFn}
                />
            );

            const toolbar = getByTestId(`${mockData[1].id}-${mockToolbar.id}`);
            fireEvent.click(toolbar);

            expect(mockFn.mock.calls[0][0]).toEqual(mockToolbar);
            expect(mockFn.mock.calls[0][1]).toEqual(mockData[1]);
        });
    });

    test('Should trigger onCollapseChange event', () => {
        expectFnCalled((mockFn) => {
            const { getByTestId } = render(
                <Explorer
                    data={mockData}
                    headerToolBar={mockToolbar}
                    onCollapseChange={mockFn}
                />
            );

            const target = mockData[1];
            const header = getByTestId(target.id);
            fireEvent.click(header);

            expect(mockFn.mock.calls[0][0]).toEqual(target.id);
        });
    });

    test('Should trigger onActionsContextMenuClick event', () => {
        expectFnCalled((mockFn) => {
            const { container, getByTestId } = render(
                <Explorer
                    data={mockData}
                    headerToolBar={mockToolbar}
                    onActionsContextMenuClick={mockFn}
                />
            );

            const toolbar = container.querySelector(`.${toolbarClassName}`);
            const target = toolbar?.querySelector(`#${mockToolbar.id}`);

            expect(target).toBeInTheDocument();
            fireEvent.contextMenu(target!);

            const toolbarItem = getByTestId(mockContextMenu['data-testid']);
            fireEvent.click(toolbarItem);

            expect(mockFn.mock.calls[0][1]).toEqual(
                expect.objectContaining(mockContextMenu)
            );
        });
    });

    test('Should trigger onClick event in header toolbar', () => {
        expectFnCalled((mockFn) => {
            const { container, getByTestId } = render(
                <Explorer
                    data={mockData}
                    headerToolBar={mockToolbar}
                    onClick={mockFn}
                />
            );

            const toolbar = container.querySelector(`.${toolbarClassName}`);
            const target = toolbar?.querySelector(`#${mockToolbar.id}`);

            expect(target).toBeInTheDocument();
            fireEvent.click(target!);

            const toolbarItem = getByTestId(mockContextMenu['data-testid']);
            fireEvent.click(toolbarItem);

            expect(mockFn.mock.calls[0][1]).toEqual(
                expect.objectContaining(mockToolbar)
            );
        });
    });
});
