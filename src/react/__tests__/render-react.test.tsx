jest.mock('react-dom', () => {
    const originalModule = jest.requireActual('react-dom');
    return {
        ...originalModule,
        render: jest.fn(),
        unmountComponentAtNode: jest.fn(() => true),
        version: '16.0.0',
    };
});

import React from 'react';
import { cleanup } from '@testing-library/react';
import * as ReactDOM from 'react-dom';
import { render, renderedSign, unmout } from '../render';
import { act } from 'react-test-renderer';
import '@testing-library/jest-dom';

describe('Test react16 render', () => {
    test('Should createRoot in react16', () => {
        console.log(ReactDOM.version);
        const container = document.createElement('div');
        container.id = 'container';
        document.body.appendChild(container);

        const TestNode = () => <div data-testid="test">test</div>;
        act(() => {
            render(<TestNode />, container);
        });

        expect(container[renderedSign]).toBeUndefined();
    });

    test('Should unmount in react16', () => {
        const container = document.getElementById('container')!;

        act(() => {
            expect(unmout(container)).toBeTruthy();
        });

        document.body.innerHTML = '';
        cleanup();
    });
});
