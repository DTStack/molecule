import { EventEmitter } from 'mo/common/event/eventEmitter';
export declare const EventBus: EventEmitter;
export declare abstract class GlobalEvent {
    /**
     * Subscribe the service event
     * @param name Event name
     * @param callback Callback function
     */
    subscribe(name: string | string[], callback: Function): void;
    /**
     * Emit the service event
     * @param name Event name
     * @param args Arguments
     */
    emit(name: string, ...args: any): void;
}
