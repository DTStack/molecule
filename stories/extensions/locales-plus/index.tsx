import molecule from 'mo';
import { IExtension } from 'mo/model/extension';

const jp = require('./locale/jp.json');
const languagePacks = [jp];

export const ExtendsLocalesPlus: IExtension = {
    id: 'LocalesPlus',
    name: 'Locales Plus',
    activate() {
        molecule.il8n.addLocales(languagePacks);
    },
    dispose() {
        const idList = languagePacks.map((item) => item.id);
        idList.forEach((id) => {
            molecule.il8n.removeLocale(id);
        });
    },
};
