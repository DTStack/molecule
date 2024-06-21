import { IColorTheme, IContributeType, type IExtension } from 'mo/types';

import darkDefault from './dark_defaults.json';
import hcDefault from './hc_black_defaults.json';
import lightDefault from './light_defaults.json';

export const ColorThemeExtension: IExtension = {
    contributes: {
        [IContributeType.Themes]: [
            darkDefault as IColorTheme,
            lightDefault as IColorTheme,
            hcDefault as IColorTheme,
        ],
    },
    id: 'ExtendsThemes',
    name: 'Extends themes',
    activate() {},
};
