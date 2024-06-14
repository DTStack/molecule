import { classNames } from 'mo/client/classNames';
import Icon from 'mo/client/components/icon';
import { useConnector } from 'mo/client/hooks';
import type { IAuxiliaryController } from 'mo/controllers/auxiliaryBar';
import { getNameForTitle, searchById, sortByIndex } from 'mo/utils';

import variables from './index.scss';

export type IAuxiliaryBarProps = IAuxiliaryController;

export default function AuxiliaryBar({ onClick }: IAuxiliaryBarProps) {
    const auxiliaryBar = useConnector('auxiliaryBar');

    const valid = auxiliaryBar.data.filter((item) => !item.hidden).sort(sortByIndex);

    const current = valid.find(searchById(auxiliaryBar.current));

    return (
        <div className={variables.container}>
            {!!current && <div className={variables.content}>{current.render?.(current)}</div>}
            <div className={variables.tabs}>
                {valid?.map(({ id, name, icon }) => (
                    <div
                        key={id}
                        className={classNames(variables.item, auxiliaryBar.current === id && variables.active)}
                        onClick={() => onClick?.(id)}
                    >
                        <Icon type={icon} title={getNameForTitle(name)} className={variables.tab}>
                            {name}
                        </Icon>
                    </div>
                ))}
            </div>
        </div>
    );
}
