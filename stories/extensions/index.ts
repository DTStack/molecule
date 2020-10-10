import { IExtension, IExtensionEntry } from '@/core/extension';

import * as DataSyncPkg from './data-sync/package.json';

const requireContext = require.context('./');

const DataSync: IExtension = DataSyncPkg as any; // require('./data-sync/package');
DataSync.activate = require('./data-sync/src/index').activate;

export const customExtensions: IExtensionEntry = {
    location: requireContext,
    extensions: [
        DataSync as any,
    ],
};
