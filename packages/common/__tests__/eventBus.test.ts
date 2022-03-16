import { GlobalEvent } from '../src/event/index';

class Test extends GlobalEvent {}

describe('Test the event class', () => {
    const event = new Test();
    const ID_TEST = 'test';
    const mockFn = jest.fn();

    test('Count the subscribed events', () => {
        expect(event.count(ID_TEST)).toBe(0);
    });

    test('Subscribe the event', () => {
        event.subscribe(ID_TEST, mockFn);
        expect(event.count(ID_TEST)).toBe(1);
        event.subscribe(ID_TEST, mockFn);
        expect(event.count(ID_TEST)).toBe(2);
    });

    test('Emit the event', () => {
        event.emit(ID_TEST, 'test');
        expect(mockFn).toBeCalledTimes(2);
        expect(mockFn.mock.calls[0][0]).toEqual('test');
    });

    test('Unsubscribe the event', () => {
        event.unsubscribe(ID_TEST);
        expect(event.count(ID_TEST)).toBe(0);
    });
});
