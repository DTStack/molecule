import { activityBarService, IExtensionService } from 'mo';
import { IExtension } from 'mo/model/extension';

export const ExtendSearch: IExtension = {
    activate(extensionCtx: IExtensionService) {
        const searchFeat = {
            id: 'search',
            name: 'Search',
            iconName: 'codicon-search',
        };

        activityBarService.push(searchFeat);
    },
};
