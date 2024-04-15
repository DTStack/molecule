import type { UniqueId } from '../types';

export class ActionModel {
    constructor(public actions: UniqueId[] = []) {}
}
