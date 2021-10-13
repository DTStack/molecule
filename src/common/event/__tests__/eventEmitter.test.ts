import { EventEmitter } from '../index';

describe('Test the EventEmitter class', () => {
    const event = new EventEmitter();
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

        event.subscribe(['a', 'b'], mockFn);
        expect(event.count('a')).toBe(1);
        expect(event.count('b')).toBe(1);
    });

    test('Emit the event', () => {
        event.emit(ID_TEST, 'test');
        expect(mockFn).toBeCalledTimes(2);
        expect(mockFn.mock.calls[0][0]).toEqual('test');

        event.emit('unknown');
        expect(mockFn).toBeCalledTimes(2);
    });

    test('Unsubscribe the event', () => {
        event.unsubscribe(ID_TEST);
        expect(event.count(ID_TEST)).toBe(0);

        expect(event.count('a')).toBe(1);
        event.unsubscribe(['a', 'b']);
        expect(event.count('a')).toBe(0);
    });
});
