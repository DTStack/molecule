import React from 'react';
import { defaultExtensions } from 'mo/extensions';
import InstanceService from '../instanceService';
import { render } from '@testing-library/react';
import { LayoutEvents } from 'mo/model/workbench/layout';
import molecule from 'mo';

describe('The InstanceService', () => {
    test('Constuctor with default config', () => {
        const instance = new InstanceService({});
        const config = instance.getConfig();
        expect(config.defaultLocale).toBe('en');
        expect(config.extensions).toEqual(defaultExtensions);
    });

    test('Should init with params', () => {
        const instance = new InstanceService({
            defaultLocale: 'test',
            extensions: [
                {
                    id: 1,
                    name: 'test',
                    activate: () => {},
                    dispose: () => {},
                },
            ],
        });
        const config = instance.getConfig();
        expect(config.defaultLocale).toBe('test');
        expect(config.extensions).toHaveLength(defaultExtensions.length + 1);
    });

    test('Should support render workbench', () => {
        const instance = new InstanceService({});
        const { asFragment } = render(instance.render(<div>123</div>));
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should support liftCycle hooks', () => {
        const instance = new InstanceService({});
        const mockFn = jest.fn();
        instance.onBeforeInit(mockFn);
        instance.onBeforeLoad(mockFn);
        molecule.layout.emit(LayoutEvents.OnWorkbenchDidMount);
        instance.render(<div>123</div>);

        expect(mockFn).toBeCalledTimes(2);
    });
});
