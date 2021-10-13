import { IExtension } from 'mo/model/extension';
import { ExtendsDataSync } from './data-sync';
import { ExtendsProblems } from './problems';

import { ExtendsTestPane } from './test';

export const customExtensions: IExtension[] = [
    ExtendsDataSync,
    ExtendsTestPane,
    ExtendsProblems,
];
