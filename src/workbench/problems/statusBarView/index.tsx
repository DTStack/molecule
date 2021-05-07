import * as React from 'react';
import { Icon } from 'mo/components/icon';
import { IStatusBarItem } from 'mo/model/workbench/statusBar';

export function ProblemsStatusBarView(props: IStatusBarItem) {
    const { data = { errors: 0, warnings: 0, infos: 0 } } = props;
    return (
        <React.Fragment>
            <Icon type="error" />
            {` ${data.errors} `}
            <Icon type="warning" />
            {` ${data.warnings} `}
            <Icon type="info" />
            {` ${data.infos}`}
        </React.Fragment>
    );
}
export default React.memo(ProblemsStatusBarView);
