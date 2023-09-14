import type { ServicesAccessor } from 'mo/monaco';

export abstract class BaseAction {
    static readonly ID: string;
    constructor(
        readonly desc: Readonly<{
            /**
             * Specify visible in quick access view
             */
            f1: boolean;
            [key: string]: any;
        }>
    ) {}
    abstract run(accessor: ServicesAccessor, ...args: any[]): any;
}
