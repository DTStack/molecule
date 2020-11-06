import * as React from 'react';
import RcCollapse from 'rc-collapse';
import { CollapseProps } from 'rc-collapse/lib/interface';
import { prefixClaName, classNames } from 'mo/common/className';
import './style.scss';

export const Collapse: React.FunctionComponent<CollapseProps> = (props: CollapseProps) => {
    const { className, ...others } = props;
    return (
        <div className={classNames(prefixClaName('collapse'), className)}>
            <RcCollapse
                {...others}
            />
        </div>
    );
};

export const Panel = RcCollapse.Panel;
export default Collapse;
