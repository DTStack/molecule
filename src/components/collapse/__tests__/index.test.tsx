import React from 'react';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Collapse } from '../index';
import { sleep } from '@test/utils';
import { sashItemClassName } from 'mo/components/split/base';
import { collapsePaneClassName } from '../base';

afterEach(cleanup);

describe('Test The Collapse Component', () => {
    beforeAll(() => {
        // @ts-ignore
        window.innerHeight = 500;
    });

    let original;
    const observerFnCollection: any[] = [];
    beforeEach(() => {
        original = HTMLElement.prototype.getBoundingClientRect;
        // @ts-ignore
        HTMLElement.prototype.getBoundingClientRect = () => ({
            height: 500,
        });

        global.ResizeObserver = jest.fn().mockImplementation((fn) => {
            fn();
            observerFnCollection.push(fn);
            return {
                observe: jest.fn(),
                unobserve: jest.fn(),
                disconnect: jest.fn(),
            };
        });
    });

    afterEach(() => {
        HTMLElement.prototype.getBoundingClientRect = original;
        observerFnCollection.length = 0;
    });

    test('Match Snapshot', () => {
        const { asFragment } = render(
            <Collapse
                data={[
                    { id: 'mock1', name: 'test1', config: { grow: 0 } },
                    { id: 'mock2', name: 'test2', config: { grow: 2 } },
                    { id: 'mock2', name: 'test2' },
                ]}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });

    test('Should uncollapsing the mock2', async () => {
        const mockFn = jest.fn();
        const mockResize = jest.fn();
        const { container } = render(
            <Collapse
                data={[
                    { id: 'mock1', name: 'test1', config: { grow: 0 } },
                    { id: 'mock2', name: 'test2', config: { grow: 2 } },
                    { id: 'mock3', name: 'test3' },
                ]}
                onCollapseChange={mockFn}
                onResize={mockResize}
            />
        );

        const collaspeItem = container.querySelector(
            'div[data-collapse-id="mock2"]'
        );

        expect(collaspeItem?.parentElement?.style.height).toBe('26px');

        await act(async () => {
            // uncollasing mock2
            fireEvent.click(collaspeItem?.childNodes[0]!);
            await sleep(300);
        });
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual([, 'mock2']);

        expect(mockResize).toBeCalled();
        expect(mockResize.mock.calls[0][0]).toEqual([26, 448, 26]);

        mockFn.mockClear();
        mockResize.mockClear();

        await act(async () => {
            // collapsing mock2 to restore default status
            fireEvent.click(collaspeItem?.childNodes[0]!);
            await sleep(300);
        });
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual([, ,]);

        expect(mockResize).toBeCalled();
        expect(mockResize.mock.calls[0][0]).toEqual([26, 26, 26]);

        await act(async () => {
            // collapsing mock2 and mock3
            const mock3 = container.querySelector(
                'div[data-collapse-id="mock3"]'
            );
            fireEvent.click(collaspeItem?.childNodes[0]!);
            await sleep(300);
            fireEvent.click(mock3?.childNodes[0]!);

            await sleep(300);
        });
        expect(mockResize).toBeCalled();
        // divided the remaining space by grow number
        expect(mockResize.mock.calls[2][0]).toEqual([26, 316, 158]);
    });

    test('Should support to change size', async () => {
        const mockResize = jest.fn();
        const { container, getByTestId } = render(
            <Collapse
                data={[
                    { id: 'mock1', name: 'test1', config: { grow: 0 } },
                    { id: 'mock2', name: 'test2', config: { grow: 2 } },
                    {
                        id: 'mock3',
                        name: 'test3',
                        renderPanel: () => <div data-testid="test"></div>,
                    },
                ]}
                onResize={mockResize}
            />
        );
        expect(getByTestId('test')).toBeInTheDocument();

        await act(async () => {
            const mock2 = container.querySelector(
                'div[data-collapse-id="mock2"]'
            );
            const mock3 = container.querySelector(
                'div[data-collapse-id="mock3"]'
            );
            fireEvent.click(mock2?.childNodes[0]!);
            await sleep(300);
            fireEvent.click(mock3?.childNodes[0]!);
            await sleep(300);
        });

        mockResize.mockClear();
        const wrapper = container.querySelector(`.${collapsePaneClassName}`)!;
        const sashs = container.querySelectorAll(`.${sashItemClassName}`);
        fireEvent.mouseDown(sashs[1], { screenY: 0 });
        fireEvent.mouseMove(wrapper, { screenY: 10 });
        fireEvent.mouseUp(wrapper);

        expect(mockResize).toBeCalled();
        expect(mockResize.mock.calls[0][0]).toEqual([26, 326, 148]);
    });

    test('Should NOT trigger onChange', async () => {
        const mockResize = jest.fn();
        const { container, getByTestId } = render(
            <Collapse
                data={[
                    { id: 'mock1', name: 'test1', config: { grow: 0 } },
                    { id: 'mock2', name: 'test2', config: { grow: 2 } },
                    {
                        id: 'mock3',
                        name: 'test3',
                        renderPanel: () => <div data-testid="test"></div>,
                    },
                ]}
                onResize={mockResize}
            />
        );
        expect(getByTestId('test')).toBeInTheDocument();

        await act(async () => {
            const mock2 = container.querySelector(
                'div[data-collapse-id="mock2"]'
            );
            const mock3 = container.querySelector(
                'div[data-collapse-id="mock3"]'
            );
            fireEvent.click(mock2?.childNodes[0]!);
            await sleep(300);
            fireEvent.click(mock3?.childNodes[0]!);
            await sleep(300);
        });

        mockResize.mockClear();
        const wrapper = container.querySelector(`.${collapsePaneClassName}`)!;
        const sashs = container.querySelectorAll(`.${sashItemClassName}`);
        // ensure when there is no changes in sizes it won't trigger onResize event
        fireEvent.mouseDown(sashs[1]);
        fireEvent.mouseMove(wrapper, { screenX: 0, screenY: 0 });
        fireEvent.mouseUp(wrapper);
        expect(mockResize).not.toBeCalled();
    });

    test('Should resize grow:2 pane', async () => {
        const { container } = render(
            <Collapse
                data={[
                    { id: 'mock1', name: 'test1', config: { grow: 0 } },
                    { id: 'mock2', name: 'test2', config: { grow: 2 } },
                    {
                        id: 'mock3',
                        name: 'test3',
                    },
                ]}
            />
        );

        const mock2 = container.querySelector('div[data-collapse-id="mock2"]');
        await act(async () => {
            fireEvent.click(mock2?.childNodes[0]!);
            await sleep(300);
        });

        expect(mock2?.parentElement?.style.height).toBe('448px');

        await act(async () => {
            // @ts-ignore
            HTMLElement.prototype.getBoundingClientRect = () => ({
                height: 1000,
            });
            observerFnCollection.forEach((f) => f());
            await sleep(150);
        });

        expect(mock2?.parentElement?.style.height).toBe('948px');
    });

    test('Should NOT render hidden pane', async () => {
        const { container } = render(
            <Collapse
                data={[
                    {
                        id: 'mock1',
                        name: 'test1',
                        config: { grow: 0 },
                        hidden: true,
                    },
                    { id: 'mock2', name: 'test2', config: { grow: 2 } },
                    {
                        id: 'mock3',
                        name: 'test3',
                    },
                ]}
            />
        );
        const mock1 = container.querySelector('div[data-collapse-id="mock1"]');
        expect(mock1?.parentElement?.style.height).toBe('0px');

        await act(async () => {
            const mock2 = container.querySelector(
                'div[data-collapse-id="mock2"]'
            );
            fireEvent.click(mock2?.childNodes[0]!);
            await sleep(300);
        });

        // didn't effect the hidden pane
        expect(mock1?.parentElement?.style.height).toBe('0px');
    });

    test('Should support to collapse a auto height pane', async () => {
        const { container } = render(
            <Collapse
                data={[
                    {
                        id: 'mock1',
                        name: 'test1',
                        config: { grow: 0 },
                        renderPanel: () => (
                            <div data-content="mock1" style={{ height: 500 }}>
                                1
                            </div>
                        ),
                    },
                    { id: 'mock2', name: 'test2', config: { grow: 2 } },
                    {
                        id: 'mock3',
                        name: 'test3',
                    },
                ]}
            />
        );

        const mock1 = container.querySelector('div[data-collapse-id="mock1"]');
        expect(mock1?.parentElement?.style.height).toBe('26px');

        await act(async () => {
            fireEvent.click(mock1?.childNodes[0]!);
            await sleep(300);
        });

        expect(mock1?.parentElement?.style.height).toBe('220px');

        await act(async () => {
            // collapsing it
            fireEvent.click(mock1?.childNodes[0]!);
            await sleep(300);
            // @ts-ignore
            HTMLElement.prototype.getBoundingClientRect = () => ({
                height: 100,
            });

            // re-uncollapse it
            fireEvent.click(mock1?.childNodes[0]!);
            await sleep(300);
        });
        expect(mock1?.parentElement?.style.height).toBe('126px');
    });

    test('Should NOT uncollapse the empty grow-0 pane', async () => {
        const { container } = render(
            <Collapse
                data={[
                    {
                        id: 'mock1',
                        name: 'test1',
                        config: { grow: 0 },
                        renderPanel: () => null,
                    },
                    { id: 'mock2', name: 'test2', config: { grow: 2 } },
                    {
                        id: 'mock3',
                        name: 'test3',
                    },
                ]}
            />
        );
        const mock1 = container.querySelector('div[data-collapse-id="mock1"]');
        expect(mock1?.parentElement?.style.height).toBe('26px');

        await act(async () => {
            fireEvent.click(mock1?.childNodes[0]!);
            await sleep(300);
        });

        expect(mock1?.parentElement?.style.height).toBe('26px');
    });

    test('Should support to cache the adjusted size', async () => {
        const { container } = render(
            <Collapse
                data={[
                    { id: 'mock1', name: 'test1', config: { grow: 0 } },
                    { id: 'mock2', name: 'test2', config: { grow: 2 } },
                    { id: 'mock3', name: 'test3' },
                ]}
            />
        );

        // uncollaspe the mock2 and mock3
        const mock2 = container.querySelector('div[data-collapse-id="mock2"]');
        const mock3 = container.querySelector('div[data-collapse-id="mock3"]');
        await act(async () => {
            fireEvent.click(mock2?.childNodes[0]!);
            await sleep(300);
            fireEvent.click(mock3?.childNodes[0]!);
            await sleep(300);
        });

        expect(mock2?.parentElement?.style.height).toBe('316px');
        expect(mock3?.parentElement?.style.height).toBe('158px');

        // adjust the sizes of the mock2 and mock3
        const wrapper = container.querySelector(`.${collapsePaneClassName}`)!;
        const sashs = container.querySelectorAll(`.${sashItemClassName}`);
        fireEvent.mouseDown(sashs[1], { screenY: 0 });
        fireEvent.mouseMove(wrapper, { screenY: 10 });
        fireEvent.mouseUp(wrapper);

        expect(mock2?.parentElement?.style.height).toBe('326px');
        expect(mock3?.parentElement?.style.height).toBe('148px');

        await act(async () => {
            // collapse the mock3
            fireEvent.click(mock3?.childNodes[0]!);
            await sleep(300);
        });

        expect(mock2?.parentElement?.style.height).toBe('448px');
        expect(mock3?.parentElement?.style.height).toBe('26px');

        await act(async () => {
            // uncollapse the mock3
            fireEvent.click(mock3?.childNodes[0]!);
            await sleep(300);
        });

        expect(mock2?.parentElement?.style.height).toBe('326px');
        expect(mock3?.parentElement?.style.height).toBe('148px');
    });

    test('Should support to onToolbarClick', async () => {
        const mockFn = jest.fn();
        const { container, getByTestId } = render(
            <Collapse
                data={[
                    { id: 'mock1', name: 'test1', config: { grow: 0 } },
                    {
                        id: 'mock2',
                        name: 'test2',
                        config: { grow: 2 },
                        toolbar: [
                            { id: 'toolbar1', 'data-testid': 'toolbar1' },
                        ],
                    },
                    { id: 'mock3', name: 'test3' },
                ]}
                onToolbarClick={mockFn}
            />
        );

        await act(async () => {
            // uncollaspe the mock2 and mock3
            const mock2 = container.querySelector(
                'div[data-collapse-id="mock2"]'
            );
            fireEvent.click(mock2?.childNodes[0]!);
            await sleep(300);
        });

        expect(getByTestId('toolbar1')).toBeInTheDocument();
        fireEvent.click(getByTestId('toolbar1'));
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(
            expect.objectContaining({
                id: 'toolbar1',
                'data-testid': 'toolbar1',
            })
        );
        expect(mockFn.mock.calls[0][1]).toEqual({
            id: 'mock2',
            name: 'test2',
            config: { grow: 2 },
            toolbar: [{ id: 'toolbar1', 'data-testid': 'toolbar1' }],
        });
    });

    test('Should support to set activePanelKeys', async () => {
        const { container } = render(
            <Collapse
                data={[
                    { id: 'mock1', name: 'test1', config: { grow: 0 } },
                    {
                        id: 'mock2',
                        name: 'mock2',
                    },
                    { id: 'mock3', name: 'test3' },
                ]}
                activePanelKeys={['mock2']}
            />
        );
        const metaData = (
            container.querySelector('div[data-collapse-id="mock2"]') as any
        )?.dataset.collapseId;

        expect(metaData).toBe('mock2');
    });
});
