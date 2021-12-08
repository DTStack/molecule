/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
    // But you can create a sidebar manually

    docs: [
        'introduction',
        'overview',
        'quick-start',
        'the-first-extension',
        {
            type: 'category',
            label: 'Guides',
            collapsed: false,
            items: [
                'guides/extension',
                {
                    type: 'category',
                    collapsed: false,
                    label: 'UI',
                    items: [
                        'guides/extend-workbench',
                        'guides/extend-builtin-ui',
                    ],
                },
                'guides/extend-color-theme',
                'guides/extend-keybinding',
                'guides/extend-quick-access',
                'guides/extend-locales',
                'guides/extend-settings',
                'guides/icons',
            ],
        },
        {
            type: 'category',
            collapsed: false,
            label: 'Advanced Guides',
            items: ['advanced/customize-workbench'],
        },
        'contributing',
    ],
    api: [
        'api/index',
        'api/namespaces/molecule',
        {
            type: 'category',
            label: 'Namespaces',
            collapsed: false,
            items: [
                'api/namespaces/molecule.component',
                'api/namespaces/molecule.react',
                'api/namespaces/molecule.event',
            ],
        },
        {
            type: 'category',
            label: 'Interfaces',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'api/interfaces',
                },
            ],
        },
        {
            type: 'category',
            label: 'Classes',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'api/classes',
                },
            ],
        },
        {
            type: 'category',
            label: 'Enums',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'api/enums',
                },
            ],
        },
    ],
};
