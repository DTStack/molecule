import { useContext } from 'react';

import { Context } from '../context';

export default function useLocale() {
    const { localize } = useContext(Context);

    return localize;
}
