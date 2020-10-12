import * as React from 'react';
import { memo } from 'react';

import { IMolecule } from '@/core/molecule';
import { MoleculeCtx } from '@/provider/molecule';

import { prefixClaName } from '@/common/className';
import { IActivityBarItem } from '@/core/activityBar';

import ActivityBarItem from './activityBarItem';

import './activityBar.scss';

export interface IActivityBarProps {
}

export const ROOT_CLASS_NAME = 'activityBar';

function ActivityBar(props: IActivityBarProps) {
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
};

export default memo(ActivityBar);
