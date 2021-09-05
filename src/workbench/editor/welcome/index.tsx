import { prefixClaName } from 'mo/common/className';
import React from 'react';

export default function Welcome() {
    return (
        <div className={prefixClaName('welcome')}>
            <h1>Molecule.</h1>
        </div>
    );
}
