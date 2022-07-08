import { cleanup, waitFor } from '@testing-library/react';
import React from 'react';

import { IContextView, useContextView } from '../index';
import { shadowClassName } from '../base';
import { act } from 'react-test-renderer';

afterEach(() => cleanup());

describe('Test ContextView Component', () => {
    test('Create the contextView by the useContextView', () => {
        let contextView: IContextView;
        act(() => {
            contextView = useContextView();
            expect(contextView.view).not.toBeUndefined();
        });
        act(() => {
            contextView.dispose();
        });
    });

    test('Create the contextView by the render ReactNode content', () => {
        const contextView: IContextView = useContextView({
            render: () => <div id="contextViewId">Hello</div>,
        });

        act(() => {
            contextView.show({ x: 10, y: 10 });
        });

        expect(
            contextView.view?.querySelector('#contextViewId')
        ).not.toBeNull();

        act(() => {
            contextView.hide();
        });

        expect(contextView.view?.querySelector('#contextViewId')).toBeNull();
        contextView.dispose();
    });

    test('The render props is required', () => {
        const contextView: IContextView = useContextView({});
        expect(() => {
            contextView.show({ x: 10, y: 10 });
        }).toThrow(' the render parameter is required!');
        contextView.dispose();
    });

    test('Disable the contextView shadow style', () => {
        const contextView: IContextView = useContextView({
            shadowOutline: false,
        });
        expect(
            contextView.view?.querySelector('.' + shadowClassName)
        ).not.toBeUndefined();
        contextView.dispose();
    });

    test('Show the contextView', () => {
        const contextView: IContextView = useContextView({
            render: () => <div>test</div>,
        });

        act(() => {
            contextView.show({
                x: 10,
                y: 10,
            });
        });
        expect(contextView.view?.style.top).toEqual('10px');
        expect(contextView.view?.style.visibility).toEqual('visible');
        contextView.dispose();
    });

    test('Render the contextView by the custom content', () => {
        const contextView: IContextView = useContextView({
            render: () => <div>test</div>,
        });
        act(() => {
            contextView.show(
                {
                    x: 10,
                    y: 10,
                },
                () => <div id="testId">custom content</div>
            );
        });
        expect(contextView.view?.style.visibility).toEqual('visible');
        expect(contextView.view?.querySelector('#testId')).not.toBeUndefined();
        contextView.dispose();
    });

    test('Hide the contextView', () => {
        const contextView: IContextView = useContextView({
            shadowOutline: false,
            render: () => <div>test</div>,
        });

        act(() => {
            contextView.show(
                {
                    x: 10,
                    y: 10,
                },
                () => <div>test</div>
            );
        });
        expect(contextView.view?.style.visibility).toEqual('visible');
        contextView.hide();
        expect(contextView.view?.style.visibility).toEqual('hidden');
        contextView.dispose();
    });

    test('Listen to the contextView hide event', () => {
        const contextView: IContextView = useContextView({
            render: () => <div>test</div>,
        });
        const mockFun = jest.fn();
        contextView.onHide(mockFun);

        act(() => {
            contextView.show({
                x: 10,
                y: 10,
            });
        });

        contextView.hide();

        expect(mockFun).toHaveBeenCalled();
        contextView.dispose();
    });

    test('Dispose the contextView', async () => {
        let contextView: IContextView;
        act(() => {
            contextView = useContextView({
                render: () => <div>test</div>,
            });
        });
        const mockFun = jest.fn();
        // @ts-ignore
        contextView.onHide(mockFun);

        act(() => {
            contextView.show({
                x: 10,
                y: 10,
            });
        });

        // @ts-ignore
        contextView.hide();
        expect(mockFun).toHaveBeenCalled();

        // After the contextView disposed, the view now is hidden,
        // and the onHide is invalid
        // @ts-ignore
        contextView.dispose();
        waitFor(async () => {
            await expect(mockFun).not.toHaveBeenCalled();
        });
    });

    test('Append the contextView to the molecule element', () => {
        document.body.innerHTML = `<div id="molecule"></div>`;

        let contextView: IContextView;
        act(() => {
            contextView = useContextView({
                render: () => <div>test</div>,
            });
        });

        act(() => {
            contextView.show({
                x: 10,
                y: 10,
            });
        });

        const root = document.getElementById('molecule');
        expect(root).not.toBeNull();

        const view = root?.querySelector('.mo-context-view');
        expect(view).not.toBeNull();
        // @ts-ignore
        contextView.dispose();
    });

    test('Click the Mask overlay', async () => {
        let contextView: IContextView;
        act(() => {
            contextView = useContextView({
                render: () => <div>test</div>,
            });
        });

        const mockFun = jest.fn();
        // @ts-ignore
        contextView.onHide(mockFun);

        act(() => {
            contextView.show({
                x: 10,
                y: 10,
            });
        });

        const maskLayer = document.querySelector<HTMLDivElement>(
            '.mo-context-view__block'
        );

        act(() => {
            if (maskLayer) {
                maskLayer.click();
            }
        });

        await waitFor(() => {
            expect(mockFun).toHaveBeenCalled();
        });
        // @ts-ignore
        contextView.dispose();
    });
});
