import { activityBarService } from 'mo/main';
import { ExtensionService } from 'mo/services/extensionService';

export function activate(extensionCtx: ExtensionService) {
    const searchFeat = {
        id: 'search',
        name: 'Search',
        iconName: 'codicon-search',
    };

    activityBarService.push([searchFeat]);
}
