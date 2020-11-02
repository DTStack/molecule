import { activityBarService, IExtensionService } from 'mo';

export function activate(extensionCtx: IExtensionService) {
    const searchFeat = {
        id: 'search',
        name: 'Search',
        iconName: 'codicon-search',
    };

    activityBarService.push(searchFeat);
}
