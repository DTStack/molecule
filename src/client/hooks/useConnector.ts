import { useContext } from 'react';

import { Context } from '../workbench';

export default function useConnector() {
    const { molecule } = useContext(Context);

    return molecule;
}
