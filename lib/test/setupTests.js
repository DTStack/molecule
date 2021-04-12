"use strict";
jest.mock('mo/monaco/monacoService', function () { return ({
    monacoService: {
        create: function (dom, options, override) { },
    },
}); });
//# sourceMappingURL=setupTests.js.map