import * as React from 'react';

export function EditorStatusBarView(props: any) {
    const { data = { ln: 0, col: 0 } } = props;
    return <span>{`Ln ${data.ln}, Col ${data.col}`}</span>;
}
