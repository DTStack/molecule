import { IExtension } from 'mo/model';
import InstanceService from 'mo/services/instanceService';

export interface IConfigProps {
    /**
     * Molecule Extension instances, after the MoleculeProvider
     * did mount, then handle it.
     */
    extensions?: IExtension[];
    /**
     * Specify a default locale Id, the Molecule built-in `zh-CN`, `en` two languages, and
     * default locale Id is `en`.
     */
    defaultLocale?: string;
}

namespace standalone {
    let instance: InstanceService | null = null;

    /**
     * Create an instance
     */
    export function create(config: IConfigProps) {
        if (instance) {
            return instance;
        }
        instance = new InstanceService(config);
        return instance;
    }

    /**
     * Do NOT call it in production, ONLY used for test cases
     */
    export function clearInstance() {
        instance = null;
    }
}

export default function create(config: IConfigProps) {
    return standalone.create(config);
}

/**
 * Do NOT call it in production, ONLY used for test cases
 */
export function clearInstance() {
    standalone.clearInstance();
}
