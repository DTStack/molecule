import { EventBus } from '../common/eventBus';

export abstract class BaseService<S = any> {
    /**
     * Subscribe the service event
     * @param name Event name
     * @param callback Callback function
     */
    public subscribe(name: string | string [], callback: Function) {
        EventBus.subscribe(name, callback);
    }

    /**
     * Emit the service event
     * @param name Event name
     * @param args Arguments
     */
    public emit(name: string, ...args: any) {
        EventBus.emit(name, args);
    }
}
