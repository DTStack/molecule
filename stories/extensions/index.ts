import { IExtension } from 'mo/model/extension';
import { ExtendDataSync } from './data-sync';

import { ExtendTestPane } from './test';

export const customExtensions: IExtension[] = [ExtendDataSync, ExtendTestPane];
