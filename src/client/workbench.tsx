import React from 'react';

type IWorkbenchProps = any;

export default function Workbench({ molecule }: IWorkbenchProps) {
    console.log('molecule:', molecule);

    return <div>workbench</div>;
}
