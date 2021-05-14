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
