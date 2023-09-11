interface IOutput {
    value: string;
}

export class OutputModel implements IOutput {
    constructor(public value: string = '') {}
}
