import { useContext } from 'react';

import { Context } from '../context';

export default function useMonaco() {
    const { monaco } = useContext(Context);
    return monaco;
}
