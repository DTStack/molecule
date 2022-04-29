import molecule from '@dtinsight/molecule';

const jp = require('./locale/jp.json');
const languagePacks = [jp];

export const ExtendsLocalesPlus: molecule.model.IExtension = {
    id: 'LocalesPlus',
    name: 'Locales Plus',
    contributes: {
        [molecule.model.IContributeType.Languages]: languagePacks,
    },
    activate() {},
    dispose() {},
};
