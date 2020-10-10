import * as React from 'react';
import classNames from 'classnames';

import { IMolecule } from '@/core/molecule';
import { MoleculeCtx } from '@/provider/molecule';

import { prefixClaName } from '@/common/className';
import { IActivityBarItem } from '@/core/activityBar';

import './activityBar.scss';

export interface IActivityBarProps {
}

export const ROOT_CLASS_NAME = 'activityBar';

export const ActivityBarItem = React.memo(function FnActivityBarItem(props: IActivityBarItem) {
    const { checked = false, name = '', data = {}, render, iconName = '' } = props;
    let content = '';
    if (render) {
        content = render();
    }

    return (
        <li
            className={classNames(prefixClaName('item', ROOT_CLASS_NAME), checked ? 'checked' : '')}
            data-id={data.id}
        >
            <a title={name} className={classNames('item-label', 'codicon', iconName)}>
                {content}
            </a>
            { checked ? <div className="active-item-indicator"></div> : null }
        </li>
    );
});

export const ActivityBar = React.memo(function FnActivityBar(props: IActivityBarProps) {
    const moleculeCtx: IMolecule = React.useContext(MoleculeCtx);
    const { activityBar } = moleculeCtx;

    let content = activityBar.data?.map((item: IActivityBarItem, index: number) => (
        <ActivityBarItem key={item.id} {...item} data-index={index} checked={activityBar.selected === item.id}/>
    ));
    if (activityBar.render) {
        content = activityBar.render();
    }

    const onClick = (e: React.MouseEvent) => {
        activityBar.onClick(e, {} as any );
    };

    return (
        <div className={prefixClaName(ROOT_CLASS_NAME)} onClick={onClick}>
            <ul
                className={prefixClaName('container', ROOT_CLASS_NAME)}
            >
                {content}
            </ul>
        </div>
    );
});

export default ActivityBar;
