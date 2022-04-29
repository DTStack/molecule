import { GlobalEvent } from '@dtinsight/molecule-common';

export abstract class Controller extends GlobalEvent {
    public abstract initView(): void;
}
