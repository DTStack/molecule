import React from 'react';
import { Component, ComponentEvents, connect } from 'mo/react';
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
import { act } from 'react-test-renderer';
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
        act(() => {
            serviceA.setState({
                data: 'updateA',
            });
        });
        act(() => {
            serviceB.setState({
                data: 'updateB',
            });
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

    test('The Service connect multiple Components', () => {
        const testService = new TestServiceA();

        const TestView = connect({ A: testService }, TestComponent);
        const TestView2 = connect({ A: testService }, TestComponent);

        const { unmount } = render(<TestView />);
        const { unmount: unmount2 } = render(<TestView2 />);
        expect((testService as any)._event.count(ComponentEvents.Update)).toBe(
            2
        );

        unmount();
        expect((testService as any)._event.count(ComponentEvents.Update)).toBe(
            1
        );

        unmount2();
        expect((testService as any)._event.count(ComponentEvents.Update)).toBe(
            0
        );
    });
});
