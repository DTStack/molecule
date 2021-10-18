import { GlobalEvent } from 'mo/common/event';

export abstract class Controller extends GlobalEvent {
    public abstract initView(): void;
}
