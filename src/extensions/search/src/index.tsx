import { activityBar, IExtensionService } from 'mo/index';

export function activate(extensionCtx: IExtensionService) {
    const searchFeat = {
        id: 'search',
        name: 'Search',
        iconName: 'codicon-search',
    };

    activityBar.push(searchFeat);
}
