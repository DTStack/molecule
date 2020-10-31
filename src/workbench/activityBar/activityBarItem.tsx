import * as React from 'react';
import { memo } from 'react';
import classNames from 'classnames';

import { prefixClaName } from 'mo/common/className';
import { ID_ACTIVITY_BAR } from 'mo/common/id';
import { IActivityBarItem } from 'mo/model/activityBar';

function ActivityBarItem(props: IActivityBarItem) {
    const { checked = false, name = '', data = {}, render, iconName = '', onClick } = props;
    let content: React.ReactNode = '';
    if (render) {
        content = render();
    }

    const onClickItem = function(event) {
        if (onClick) {
            onClick(event, props);
        }
    };

    return (
        <li
            onClick={onClickItem}
            className={classNames(prefixClaName('item', ID_ACTIVITY_BAR), checked ? 'checked' : '')}
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
