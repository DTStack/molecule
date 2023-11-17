import { debounce } from 'lodash-es';
import type { IExtension } from 'mo/types';

export const ExtendsSettings: IExtension = {
    id: 'ExtendsSettings',
    name: 'Extend The Default Settings',
    activate: function (molecule): void {
        const updateSettings = debounce((value) => {
            const settings: Record<string, any> = JSON.parse(value);
            molecule.settings.update(settings);
        }, 2000);

        molecule.settings.onChange((value) => {
            try {
                updateSettings(value);
            } catch (error) {}
        });
    },
};
