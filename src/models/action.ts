import type { IDisposable } from 'mo/monaco';

export class ActionModel {
    constructor(public actions: IDisposable[] = []) {}
}
