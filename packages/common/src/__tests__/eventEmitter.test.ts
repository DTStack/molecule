import { EventEmitter } from '../event';

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

    test('Unsubscribe the event by pass the callback', () => {
        const evt = new EventEmitter();
        const eventName = 'event1';
        const mockFn1 = jest.fn();
        const mockFn2 = jest.fn();
        evt.subscribe(eventName, mockFn1);
        evt.subscribe(eventName, mockFn2);

        expect(evt.count(eventName)).toBe(2);

        evt.unsubscribe(eventName, mockFn1);
        expect(evt.count(eventName)).toBe(1);
        evt.emit(eventName);
        expect(mockFn1).toBeCalledTimes(0);
        expect(mockFn2).toBeCalledTimes(1);

        evt.subscribe(eventName, mockFn1);
        expect(evt.count(eventName)).toBe(2);

        evt.unsubscribe(eventName);
        expect(evt.count(eventName)).toBe(0);
    });
});
