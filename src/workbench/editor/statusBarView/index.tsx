import React, { memo } from 'react';
import { IStatusBarItem } from 'mo/model/workbench/statusBar';
import { localize } from 'mo/i18n/localize';

export function EditorStatusBarView(props: IStatusBarItem) {
    const { data = { ln: 0, col: 0 } } = props;
    return (
        <span>
            {localize(
                'editor.singleSelection',
                'Line ${i}, Column ${i}',
                data.ln,
                data.col
            )}
        </span>
    );
}
export default memo(EditorStatusBarView);
