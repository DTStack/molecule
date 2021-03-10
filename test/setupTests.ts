jest.mock('mo/monaco/monacoService', () => ({
    monacoService: {
        create: function (dom, options, override) {},
    },
}));
