import 'reflect-metadata';

import * as instance from './services/instance';

export * from './types';

export function create(config: instance.IConfigProps) {
    return new instance.InstanceService(config);
}

export * as components from './client/components';
export * as hooks from './client/hooks';
export * as slots from './client/slots';
export * as controllers from './controllers';
export * as glue from './glue';
export * as utils from './utils';
export * as tree from './utils/tree';
