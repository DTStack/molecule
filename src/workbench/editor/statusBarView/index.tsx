import * as React from 'react';
import { IStatusBarItem } from 'mo/model/workbench/statusBar';

export function EditorStatusBarView(props: IStatusBarItem) {
    const { data = { ln: 0, col: 0 } } = props;
    return <span>{`Ln ${data.ln}, Col ${data.col}`}</span>;
}
export default React.memo(EditorStatusBarView);
