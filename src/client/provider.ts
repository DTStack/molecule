import InstanceService, { type IConfigProps } from 'mo/services/instance';

export default function create(config: IConfigProps) {
    return new InstanceService(config);
}
