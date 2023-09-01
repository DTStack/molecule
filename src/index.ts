import 'reflect-metadata';

import InstanceService, { type IConfigProps } from './services/instance';

// [TODO)

export function create(config: IConfigProps) {
    return new InstanceService(config);
}
