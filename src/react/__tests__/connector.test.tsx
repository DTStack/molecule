import React from 'react';
import { Component, connect } from 'mo/react';
import { render } from '@testing-library/react';

class TestServiceA extends Component {
    state = {
        data: 'A',
    };
}

class TestServiceB extends Component {
    state = {
        data: 'B',
    };
}

class TestControllerA extends Controller {
    methodA = () => {};
}

class TestControllerB extends Controller {
    methodB = () => {};
}

function TestComponent(props: any) {
    const { A = {}, B = {}, actionA = {}, actionB = {} } = props;
    return (
        <div>
            <span onClick={actionA.methodA}>{A.data}</span>
            <span onClick={actionB.methodB}>{B.data}</span>
        </div>
    );
}

import { Controller } from '../controller';
describe('Test Connector Component', () => {
    const serviceA = new TestServiceA();
    const serviceB = new TestServiceB();

    const actionA = new TestControllerA();
    const actionB = new TestControllerB();
    test('Test connect method bind multiple Services and Controllers to the Component', () => {
        const TestView = connect(
            {
                A: serviceA,
                B: serviceB,
            },
            TestComponent,
            {
                actionA: actionA,
                actionB: actionB,
            }
        );
        const { getByText } = render(
            <>
                <TestView />
            </>
        );
        expect(getByText('A')).not.toBeNull();
        expect(getByText('B')).not.toBeNull();
    });

    test('Test connect update to the Component view after state changed.', () => {
        const TestView = connect(
            {
                A: serviceA,
                B: serviceB,
            },
            TestComponent,
            {
                actionA: actionA,
                actionB: actionB,
            }
        );
        const { getByText } = render(
            <>
                <TestView />
            </>
        );
        expect(getByText('A')).not.toBeNull();
        expect(getByText('B')).not.toBeNull();
        serviceA.setState({
            data: 'updateA',
        });
        serviceB.setState({
            data: 'updateB',
        });
        expect(getByText('updateA')).not.toBeNull();
        expect(getByText('updateB')).not.toBeNull();
    });
});
