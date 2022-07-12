jest.mock('react-dom', () => {
    const originalModule = jest.requireActual('react-dom');
    return {
        ...originalModule,
        version: '18.0.0',
    };
});

import React from 'react';
import { cleanup, queryByTestId } from '@testing-library/react';
import * as ReactDOM from 'react-dom';
import { render, renderedSign, unmout } from '../render';
import { act } from 'react-test-renderer';
import '@testing-library/jest-dom';

describe('Test react render', () => {
    test('Should createRoot in react18', () => {
        console.log(ReactDOM.version);
        const container = document.createElement('div');
        container.id = 'container';
        document.body.appendChild(container);

        const TestNode = () => <div data-testid="test">test</div>;
        act(() => {
            render(<TestNode />, container);
        });

        expect(container[renderedSign]).not.toBeNull();
        expect(queryByTestId(container, 'test')).toBeInTheDocument();
    });

    test('Should unmount in react18', () => {
        const container = document.getElementById('container')!;
        const unmountFn = jest.fn();
        container[renderedSign].unmount = unmountFn;

        act(() => {
            expect(unmout(container)).toBeTruthy();
        });

        expect(unmountFn).toBeCalled();
        expect(container[renderedSign]).toBeUndefined();

        document.body.innerHTML = '';
        cleanup();
    });
});
