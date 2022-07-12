module.exports = {
    languages: {
        register: function (language) {},
        setMonarchTokensProvider: function (name, tokens) {},
        registerCompletionItemProvider: function (name, provider) {},
    },
    editor: {
        defineTheme: function (name, theme) {},
        setTheme: function (theme) {},
        create: function (dom, options, override) {},
    },
    Uri: {
        parse: function () {},
    },
    KeyMod: {},
    KeyCode: {},
};
