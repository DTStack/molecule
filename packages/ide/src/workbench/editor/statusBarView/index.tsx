import React, { memo } from 'react';
import { IStatusBarItem } from 'mo/model/workbench/statusBar';

export function EditorStatusBarView(props: IStatusBarItem) {
    const { data = { ln: 0, col: 0 } } = props;
    return <span>{`Ln ${data.ln}, Col ${data.col}`}</span>;
}
export default memo(EditorStatusBarView);
