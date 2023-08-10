import { useContext } from 'react';

import { Context } from '../context';

export default function useConnector() {
    const { molecule } = useContext(Context);

    return molecule;
}
