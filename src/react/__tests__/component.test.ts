import { Component } from 'mo/react';

class Test extends Component {
    state = {
        data: 'test',
    };
}

describe('Test Component', () => {
    const instance = new Test();

    test('Set and Get the component state', () => {
        const expected = 'updated';
        instance.setState({
            data: expected,
        });
        expect(instance.getState().data).toBe(expected);
    });

    test('Set the component state and executing callback', () => {
        const expected = {
            data: 'updated',
        };
        const fn = jest.fn();
        instance.setState(expected, fn);
        expect(fn).toBeCalled();
        expect(fn.mock.calls[0][1]).toEqual(expected);
    });

    test('Render and Update the component', () => {
        const expected = {
            data: 'updated',
        };
        const fn = jest.fn();
        instance.onUpdateState(fn);
        instance.render(expected);
        expect(fn).toBeCalled();
        expect(fn.mock.calls[0][1]).toEqual(expected);
    });

    test('Remove the removeOnUpdateState event', () => {
        const expected = {
            data: 'updated',
        };
        const fn = jest.fn();
        instance.onUpdateState(fn);
        instance.render(expected);
        expect(fn).toBeCalledTimes(1);

        instance.removeOnUpdateState();
        instance.render(expected);
        expect(fn).toBeCalledTimes(1);
    });

    test('Force Update the component', () => {
        const expected = {
            data: 'updated',
        };
        const fn = jest.fn();
        instance.onUpdateState(fn);
        instance.setState(expected);
        instance.forceUpdate();
        expect(fn).toBeCalledTimes(2);
        expect(fn.mock.calls[0][0]).toEqual(expected);
    });
});
