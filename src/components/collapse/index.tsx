import * as React from 'react';
import RcCollapse from 'rc-collapse';
import classNames from 'classnames';

import './style.scss';
import { prefixClaName } from '@/common/className';

interface ICollapseProps {
    className?: string;
}

export const Collapse: React.FunctionComponent<ICollapseProps> = (props: ICollapseProps) => {
    return (
        <RcCollapse
            className={classNames(prefixClaName('collapse'), props.className)}
            {...props}
        />
    );
};

export const Panel = RcCollapse.Panel;
export default Collapse;
