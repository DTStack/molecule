import { IExtension } from 'mo/model/extension';
import { ExtendDataSync } from './data-sync';
import { ExtendsProblems } from './problems';

import { ExtendTestPane } from './test';

export const customExtensions: IExtension[] = [
    ExtendDataSync,
    ExtendTestPane,
    ExtendsProblems,
];
