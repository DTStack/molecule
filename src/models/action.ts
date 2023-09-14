import { IDisposable } from 'monaco-editor';

export class ActionModel {
    constructor(public actions: IDisposable[] = []) {}
}
