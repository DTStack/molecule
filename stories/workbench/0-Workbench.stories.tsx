import React from 'react';
import molecule, { create, Workbench } from 'mo';
import 'mo/style/mo.scss';
import { customExtensions } from '../extensions';
import '../demo.scss';

const moInstance = create({
    extensions: customExtensions,
    defaultLocale: 'japanese',
});

moInstance.onBeforeInit(() => {
    molecule.builtin.inactiveModule('activityBarData');
});

export default {
    title: 'Workbench',
};

export const NormalWorkbench = () => moInstance.render(<Workbench />);

export const EmbeddedWorkbench = () => {
    return (
        <div
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
            }}
        >
            <h1 style={{ textAlign: 'center', lineHeight: '40px' }}>
                Embedded
            </h1>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: 'calc(100% - 40px)',
                }}
            >
                {moInstance.render(<Workbench />)}
            </div>
        </div>
    );
};
