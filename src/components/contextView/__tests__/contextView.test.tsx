import React from 'react';

import { IContextView, useContextView, shadowClassName } from '../index';

describe('Test ContextView Component', () => {
    test('Create the contextView by the useContextView', () => {
        const contextView: IContextView = useContextView();
        expect(contextView.view).not.toBeUndefined();
    });

    test('Create the contextView by the render ReactNode content', () => {
        const contextView: IContextView = useContextView({
            render: () => <div id="contextViewId">Hello</div>,
        });
        expect(
            contextView.view?.querySelector('#contextViewId')
        ).not.toBeUndefined();
    });

    test('Disable the contextView shadow style', () => {
        const contextView: IContextView = useContextView({
            shadowOutline: false,
        });
        expect(
            contextView.view?.querySelector('.' + shadowClassName)
        ).not.toBeUndefined();
    });

    test('Show the contextView', () => {
        const contextView: IContextView = useContextView({
            render: () => <div>test</div>,
        });
        contextView.show({
            x: 10,
            y: 10,
        });
        expect(contextView.view?.style.visibility).toEqual('visible');
    });

    test('Render the contextView by the custom content', () => {
        const contextView: IContextView = useContextView({
            render: () => <div>test</div>,
        });
        contextView.show(
            {
                x: 10,
                y: 10,
            },
            () => <div id="testId">custom content</div>
        );
        expect(contextView.view?.style.visibility).toEqual('visible');
        expect(contextView.view?.querySelector('#testId')).not.toBeUndefined();
    });

    test('Hide the contextView', () => {
        const contextView: IContextView = useContextView({
            shadowOutline: false,
            render: () => <div>test</div>,
        });
        contextView.show(
            {
                x: 10,
                y: 10,
            },
            () => <div>test</div>
        );
        expect(contextView.view?.style.visibility).toEqual('visible');
        contextView.hide();
        expect(contextView.view?.style.visibility).toEqual('hidden');
    });

    test('Listen to the contextView hide event', () => {
        const contextView: IContextView = useContextView({
            render: () => <div>test</div>,
        });
        const mockFun = jest.fn();
        contextView.onHide(mockFun);

        contextView.show({
            x: 10,
            y: 10,
        });

        contextView.hide();

        expect(mockFun).toHaveBeenCalled();
    });
});
