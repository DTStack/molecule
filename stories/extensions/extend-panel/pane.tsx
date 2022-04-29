import React from 'react';
import molecule from '@dtinsight/molecule';

export const Pane = molecule.gule.connect(
    molecule.editor,
    function ({ current }: molecule.model.IEditor) {
        const value: string = current?.tab?.data?.value || '!!!';
        return <div style={{ padding: 20 }}>Editor Input: {value}</div>;
    }
);
