export abstract class BaseService {
    /**
     * Subscribe the service event
     * @param name Event name
     * @param callback Callback function
     */
    public abstract subscribe(name: string | string [], callback: Function);
}
