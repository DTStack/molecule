export declare class EventEmitter {
    private _events;
    emit(name: string, ...args: any[]): void;
    subscribe(name: string | string[], callback: Function): void;
    unsubscribe(name: string | string[]): void;
    assignEvent<T>(name: string, callback: Function): void;
}
