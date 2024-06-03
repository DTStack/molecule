import { useConnector } from 'mo/client/hooks';
import type { IAuxiliaryController } from 'mo/controllers/auxiliaryBar';
import { searchById, sortByIndex } from 'mo/utils';

import variables from './index.scss';

export type IAuxiliaryBarProps = IAuxiliaryController;

export default function AuxiliaryBar() {
    const auxiliaryBar = useConnector('auxiliaryBar');

    if (!auxiliaryBar.data.length) return null;

    const valid = auxiliaryBar.data.filter((item) => !item.hidden).sort(sortByIndex);

    const current = valid.find(searchById(auxiliaryBar.current));

    return (
        <div className={variables.container}>
            {!!current && <div className={variables.content}>{current.render?.(current)}</div>}
        </div>
    );
}
