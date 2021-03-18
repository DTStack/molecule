import * as React from 'react';
import { Icon } from 'mo/components/icon';
export function ProblemsMarkers(props: any) {
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
