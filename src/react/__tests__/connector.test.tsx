import React, { forwardRef, useImperativeHandle } from 'react';
import { Component, connect } from 'mo/react';
import { fireEvent, render } from '@testing-library/react';

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
    initView = () => {};
    methodA = () => {};
}

class TestControllerB extends Controller {
    initView = () => {};
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

    test('Connect one Service and Controller to the Component', () => {
        function Comp({ data, onClick }) {
            return <span onClick={onClick}>{data}</span>;
        }
        const fn = jest.fn();
        (actionA as any).onClick = fn;
        const TestView = connect(serviceA, Comp, actionA);
        const { getByText } = render(<TestView />);
        const ele = getByText('A');
        expect(ele).not.toBeNull();
        fireEvent.click(ele);
        expect(fn).toBeCalled();
    });

    test('Connect invalid Service to the Component', () => {
        const TestView = connect({}, TestComponent);
        const { queryByText } = render(<TestView />);
        expect(queryByText('A')).toBeNull();
    });

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

    test('Should bind refs into controller', () => {
        const withRef = new TestControllerA();
        const RefComponent = forwardRef((props, ref) => {
            useImperativeHandle(ref, () => ({
                test: jest.fn(),
            }));
            return <div>test</div>;
        });
        const TestView = connect(serviceA, RefComponent, withRef);
        render(<TestView />);

        // @ts-ignore
        expect(withRef.ref.current).toEqual({
            test: jest.fn(),
        });
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

    test('Update an unmounted Component.', () => {
        serviceA.removeOnUpdateState = jest.fn();

        const TestView = connect({ A: serviceA }, TestComponent);
        const { unmount } = render(<TestView />);

        unmount();

        expect(serviceA.removeOnUpdateState).toBeCalled();
    });
});
