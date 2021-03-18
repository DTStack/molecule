import * as React from 'react';
import { Icon } from 'mo/components/icon';
export function ProblemsMarkers(props: any) {
    const { data = { error: 0, warn: 0, info: 0 } } = props;
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
