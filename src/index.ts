import 'reflect-metadata';

import InstanceService, { type IConfigProps } from './services/instance';

export function create(config: IConfigProps) {
    return new InstanceService(config);
}
