import * as React from 'react';
import { Icon } from 'mo/components/icon';
export function Problems(props: any) {
    const { data = { error: 0, warn: 0, info: 0 } } = props;
    return (
        <React.Fragment>
            <Icon type="error" />
            {` ${data.error} `}
            <Icon type="warning" />
            {` ${data.warn} `}
            <Icon type="info" />
            {` ${data.info}`}
        </React.Fragment>
    );
}
