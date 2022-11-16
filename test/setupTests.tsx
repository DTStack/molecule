import React from 'react';

jest.mock('mo/monaco/monacoService', () => {
    function MonacoService() {}
    const getter = { get: () => {} };

    MonacoService.prototype.create = function (dom, options, override) {};
    MonacoService.prototype.initWorkspace = function (
        container: HTMLElement
    ) {};
    MonacoService.prototype.services = getter;
    MonacoService.prototype.commandService = getter;
    MonacoService.prototype.container = getter;

    return {
        MonacoService: MonacoService,
    };
});

// mock scrollBar component
jest.mock('mo/components/scrollBar', () => {
    const originalModule = jest.requireActual('mo/components/scrollBar');
    return {
        ...originalModule,
        ScrollBar: ({ children, className }) => {
            return className ? (
                <div className={className}>{children}</div>
            ) : (
                <>{children}</>
            );
        },
    };
});

global.ResizeObserver = jest.fn().mockImplementation(() => {
    return {
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
    };
});
