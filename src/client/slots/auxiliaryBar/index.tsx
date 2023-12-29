import { classNames } from 'mo/client/classNames';
import Icon from 'mo/client/components/icon';
import useConnector from 'mo/client/hooks/useConnector';
import type { IAuxiliaryController } from 'mo/controllers/auxiliaryBar';
import { searchById, sortByIndex } from 'mo/utils';

import variables from './index.scss';

export default function AuxiliaryBar({ onClick }: IAuxiliaryController) {
    const auxiliaryBar = useConnector('auxiliaryBar');
    if (!auxiliaryBar.data.length) return null;

    const valid = auxiliaryBar.data.filter((item) => !item.hidden).sort(sortByIndex);
    const current = valid.find(searchById(auxiliaryBar.current));
    return (
        <div className={variables.container}>
            {!!current && <div className={variables.content}>{current.render?.(current)}</div>}
            <div className={variables.tabs}>
                {valid.map(({ id, name, icon }) => (
                    <div
                        key={id}
                        className={classNames(
                            variables.item,
                            auxiliaryBar.current === id && variables.active
                        )}
                        onClick={() => onClick?.(id)}
                    >
                        <Icon type={icon} title={name}>
                            {name}
                        </Icon>
                    </div>
                ))}
            </div>
        </div>
    );
}
