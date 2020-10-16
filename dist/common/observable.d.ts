export interface IObservable {
    observe: (handler: (target: any, property: any, value: any) => void) => void;
}
export declare function observable<T>(object: any, callback?: any): IObservable & T;
