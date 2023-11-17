import { normalizeFlattedObject } from 'mo/utils';

import useConnector from './useConnector';

export default function useSettings() {
    const settings = useConnector('settings');

    return normalizeFlattedObject(settings.data);
}
