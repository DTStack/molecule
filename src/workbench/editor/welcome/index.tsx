import { prefixClaName } from 'mo/common/className';
import * as React from 'react';

export default function Welcome() {
    return <div className={prefixClaName('welcome')}>Welcome Page.</div>;
}
