import { IExtension, IContributeType } from '@dtinsight/molecule';

const jp = require('./locale/jp.json');
const languagePacks = [jp];

export const ExtendsLocalesPlus: IExtension = {
    id: 'LocalesPlus',
    name: 'Locales Plus',
    contributes: {
        [IContributeType.Languages]: languagePacks,
    },
    activate() {},
    dispose() {},
};
