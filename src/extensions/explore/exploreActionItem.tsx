import * as React from 'react';
import { memo } from 'react';
import { classNames } from 'mo/common/className';

import { IExplorerFileActionItem } from 'mo/model/workbench/exolorer';
function ExploreActionItem(props: IExplorerFileActionItem) {
    const { name = '', id, render, iconName = '', onClick } = props;
    let content: React.ReactNode = '';
    if (render) {
        content = render();
    }

    const onClickItem = function(event) {
        event.stopPropagation();
        if (onClick) {
            onClick(event, props);
        }
    };

    return (
        <a className={classNames('codicon', iconName)}
            onClick={onClickItem}
            title={name}
            data-id={id}
        ></a>
    );
};

export default memo(ExploreActionItem);
