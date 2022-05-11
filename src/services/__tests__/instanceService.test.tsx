import React from 'react';
import { defaultExtensions } from 'mo/extensions';
import InstanceService from '../instanceService';
import { render } from '@testing-library/react';
import { ExtendsLocales } from 'mo/extensions/locales-defaults';

describe('The InstanceService', () => {
    test('Constuctor with default config', () => {
        const instance = new InstanceService({}, {} as any);
        const config = instance.getConfig();
        expect(config.defaultLocale).toBe('en');
        expect(config.extensions).toEqual(defaultExtensions);
    });

    test('Should init with params', () => {
        const instance = new InstanceService(
            {
                defaultLocale: 'test',
                extensions: [
                    {
                        id: 1,
                        name: 'test',
                        activate: () => {},
                        dispose: () => {},
                    },
                ],
            },
            {} as any
        );
        const config = instance.getConfig();
        expect(config.defaultLocale).toBe('test');
        expect(config.extensions).toHaveLength(defaultExtensions.length + 1);
    });

    test('Should support render workbench', () => {
        const mockFn = jest.fn();
        const instance = new InstanceService(
            {},
            {
                // @ts-ignore
                extension: {
                    load: jest.fn(),
                    splitLanguagesExts: jest.fn((ext) => [ext, []]),
                },
                // @ts-ignore
                i18n: {
                    initialize: mockFn,
                },
                // @ts-ignore
                monacoService: {
                    initWorkspace: jest.fn(),
                },
                // @ts-ignore
                layout: {
                    container: document.body,
                },
            }
        );
        const { asFragment } = render(instance.render(<div>123</div>));
        expect(asFragment()).toMatchSnapshot();

        expect(mockFn.mock.calls[0][0]).toHaveLength(3);
        expect(mockFn.mock.calls[0][0]).toEqual(
            ExtendsLocales.contributes!.languages
        );
    });

    test('Should support liftCycle hooks', () => {
        const instance = new InstanceService(
            {},
            {
                // @ts-ignore
                extension: {
                    splitLanguagesExts: jest.fn(() => [[], []] as any),
                    load: jest.fn(),
                },
                // @ts-ignore
                i18n: {
                    initialize: jest.fn(),
                },
                // @ts-ignore
                monacoService: {
                    initWorkspace: jest.fn(),
                },
                // @ts-ignore
                layout: {
                    container: document.body,
                },
            }
        );
        const mockFn = jest.fn();
        instance.onBeforeInit(mockFn);
        instance.onBeforeLoad(mockFn);
        instance.render(<div>123</div>);

        expect(mockFn).toBeCalledTimes(2);
    });
});
