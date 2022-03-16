import molecule from '@dtinsight/molecule';
import { IEditor } from '@dtinsight/molecule';
import { connect } from '@dtinsight/molecule';
import React from 'react';

export const Pane = connect(molecule.editor, function ({ current }: IEditor) {
    const value: string = current?.tab?.data?.value || '!!!';
    return <div style={{ padding: 20 }}>Editor Input: {value}</div>;
});
