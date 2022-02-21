import molecule from 'mo';
import { IEditor } from 'mo/model';
import { connect } from 'mo/react';
import React from 'react';

export const Pane = connect(molecule.editor, function ({ current }: IEditor) {
    const value: string = current?.tab?.data?.value || '!!!';
    return <div style={{ padding: 20 }}>Editor Input: {value}</div>;
});
