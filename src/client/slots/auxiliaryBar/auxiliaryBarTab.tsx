import { classNames } from 'mo/client/classNames';
import Icon from 'mo/client/components/icon';
import { useConnector } from 'mo/client/hooks';
import type { IAuxiliaryController } from 'mo/controllers/auxiliaryBar';
import { getNameForTitle, sortByIndex } from 'mo/utils';

import variables from './index.scss';

export type IAuxiliaryBarProps = IAuxiliaryController;

export default function AuxiliaryBarTab({ onClick }: IAuxiliaryBarProps) {
    const auxiliaryBar = useConnector('auxiliaryBar');
    const valid = auxiliaryBar.data.filter((item) => !item.hidden).sort(sortByIndex);
    return (
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
    );
}
