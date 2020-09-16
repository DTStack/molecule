import * as React from 'react';

import { prefixClaName } from '@/common/className';

import './editor.scss';

export const Editor: React.FunctionComponent = function() {
    return (
        <div className={prefixClaName('editor')}>
            Editor
        </div>
    );
};

export default Editor;
