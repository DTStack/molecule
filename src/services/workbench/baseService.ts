import { EventService } from '../eventService';

export abstract class BaseService<S = any> {
    public abstract getState(): S;
    /**
     * Subscribe the service event
     * @param name Event name
     * @param callback Callback function
     */
    public subscribe(name: string | string [], callback: Function) {
        EventService.subscribe(name, callback);
    }

    /**
     * Emit the service event
     * @param name Event name
     * @param args Arguments
     */
    public emit(name: string, ...args: any) {
        EventService.emit(name, args);
    }
}
