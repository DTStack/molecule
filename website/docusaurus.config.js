const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
    title: 'Molecule',
    tagline: 'A lightweight Web IDE UI framework!',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'DTStack', // Usually your GitHub org/user name.
    projectName: 'molecule', // Usually your repo name.
    i18n: {
        defaultLocale: 'zh-CN',
        locales: ['zh-CN', 'en'],
        localeConfigs: {
            'zh-CN': {
                label: '中文',
                direction: 'ltr',
            },
            en: {
                label: 'English',
                direction: 'ltr',
            },
        },
    },
    plugins: [
        [
            'docusaurus-plugin-typedoc',
            // Plugin / TypeDoc options
            {
                entryPoints: ['../src/index.ts'],
                tsconfig: '../tsconfig.json',
                name: 'Molecule',
            },
        ],
    ],
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                path: 'docs',
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: function ({
                        locale,
                        versionDocsDirPath,
                        docPath,
                    }) {
                        console.log('---editUrl', locale, versionDocsDirPath);
                        if (locale !== 'en') {
                            return `https://github.com/DTStack/molecule/website/i18n/${locale}`;
                        }
                        return `https://github.com/DTStack/molecule/website/${docPath}`;
                    },
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Molecule',
                logo: {
                    alt: 'Molecule Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'introduction',
                        position: 'left',
                        label: 'Docs',
                    },
                    {
                        type: 'doc',
                        docId: 'api/modules',
                        label: 'API',
                        position: 'left',
                    },
                    {
                        type: 'doc',
                        docId: 'examples/index',
                        label: 'Showcase',
                        position: 'left',
                    },
                    {
                        type: 'search',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/DTStack/molecule',
                        label: 'GitHub',
                        position: 'left',
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                        dropdownItemsAfter: [
                            {
                                to: 'https://my-site.com/help-us-translate',
                                label: 'Help us translate',
                            },
                        ],
                    },
                ],
            },
            footer: {
                style: 'light',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Quick Start',
                                to: '/docs/introduction',
                            },
                            {
                                label: 'Guides',
                                to: '/docs/guides/the-first-extension',
                            },
                            {
                                label: 'API',
                                to: '/docs/api/modules',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href:
                                    'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href:
                                    'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/DTStack/molecule',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} DTStack, Inc. 数栈 UED 团队.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
});
