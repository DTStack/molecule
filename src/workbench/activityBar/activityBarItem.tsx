import * as React from 'react';
import { memo } from 'react';

import classNames from 'classnames';

import { prefixClaName } from '@/common/className';
import { IActivityBarItem } from '@/core/activityBar';

import { ROOT_CLASS_NAME } from './index';

function ActivityBarItem(props: IActivityBarItem) {
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
};

export default memo(ActivityBarItem);
