import { EventEmitter } from 'mo/common/event/eventEmitter';

export const EventBus = new EventEmitter();

export abstract class GlobalEvent {
    /**
     * Subscribe the service event
     * @param name Event name
     * @param callback Callback function
     */
    public subscribe(name: string | string[], callback: Function) {
        EventBus.subscribe(name, callback);
    }

    /**
     * Emit the service event
     * @param name Event name
     * @param args Arguments
     */
    public emit(name: string, ...args: any) {
        EventBus.emit(name, ...args);
    }

    /**
     * Count the service event
     * @param name Event name
     */
    public count(name: string) {
        return EventBus.count(name);
    }

    /**
     * Unsubscribe the specific event and the callback function
     * @param name The event name
     * @param callback optional, it unsubscribes events via name if not pass the callback function
     */
    public unsubscribe(name, callback?: Function) {
        EventBus.unsubscribe(name, callback);
    }
}
