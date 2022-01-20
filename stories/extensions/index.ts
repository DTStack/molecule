import { IExtension } from 'mo/model/extension';
import { ExtendsDataSync } from './data-sync';
import { ExtendsProblems } from './problems';
import { ExtendsLocalesPlus } from './locales-plus';

import { ExtendsTestPane } from './test';

import { ExtendPanel } from './extend-panel';

export const customExtensions: IExtension[] = [
    ExtendsDataSync,
    ExtendsTestPane,
    ExtendsProblems,
    ExtendPanel,
    ExtendsLocalesPlus,
];
