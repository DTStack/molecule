import useConnector from 'mo/client/hooks/useConnector';

import variables from './index.scss';

export default function AuxiliaryBar() {
    const auxiliaryBar = useConnector('auxiliaryBar');
    if (auxiliaryBar.mode === 'default') return null;
    return <div className={variables.container}>{auxiliaryBar.children}</div>;
}
