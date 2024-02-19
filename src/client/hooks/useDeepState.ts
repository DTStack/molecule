import { useState } from 'react';
import { isEqual } from 'lodash-es';

export default function useDeepState<T>(initialValue: T) {
    const [state, setState] = useState(initialValue);

    const setDeepState = (value: T) => {
        if (!isEqual(value, state)) {
            setState(value);
        }
    };

    return [state, setDeepState] as const;
}
