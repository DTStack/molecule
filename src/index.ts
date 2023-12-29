import 'reflect-metadata';

import * as action from './services/action';
import * as activityBar from './services/activityBar';
import * as auxiliaryBar from './services/auxiliaryBar';
import * as builtin from './services/builtin';
import * as colorTheme from './services/colorTheme';
import * as contextMenu from './services/contextMenu';
import * as editor from './services/editor';
import * as editorTree from './services/editorTree';
import * as explorer from './services/explorer';
import * as extension from './services/extension';
import * as folderTree from './services/folderTree';
import * as instance from './services/instance';
import * as layout from './services/layout';
import * as locale from './services/locale';
import * as menuBar from './services/menuBar';
import * as module from './services/module';
import * as monaco from './services/monaco';
import * as notification from './services/notification';
import * as output from './services/output';
import * as panel from './services/panel';
import * as search from './services/search';
import * as setting from './services/setting';
import * as sidebar from './services/sidebar';
import * as statusBar from './services/statusBar';

export * from './types';

export function create(config: instance.IConfigProps) {
    return new instance.InstanceService(config);
}

export const services = {
    action,
    activityBar,
    auxiliaryBar,
    builtin,
    colorTheme,
    contextMenu,
    editor,
    editorTree,
    explorer,
    extension,
    folderTree,
    instance,
    layout,
    locale,
    menuBar,
    module,
    monaco,
    notification,
    output,
    panel,
    search,
    setting,
    sidebar,
    statusBar,
};

export * as components from './client/components';
export * as hooks from './client/hooks';
export * as slots from './client/slots';
export * as controllers from './controllers';
export * as glue from './glue';
export * as monaco from './monaco';
export * as utils from './utils';
export * as tree from './utils/tree';
