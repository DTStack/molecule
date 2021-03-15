import 'reflect-metadata';
import { injectable } from 'tsyringe';

export interface ISearch {
    data?: any[];
}

@injectable()
export class ISearchModel implements ISearch {
    public data = [];

    constructor(data = []) {
        this.data = data;
    }
}
