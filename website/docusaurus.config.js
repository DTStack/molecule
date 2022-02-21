const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
    module.exports = {
        title: 'Molecule',
        tagline: 'A lightweight Web IDE UI framework',
        url: 'https://dtstack.github.io',
        baseUrl: '/molecule/',
        onBrokenLinks: 'error',
        onBrokenMarkdownLinks: 'error',
        favicon: 'img/favicon.png',
        organizationName: 'DTStack', // Usually your GitHub org/user name.
        projectName: 'molecule', // Usually your repo name.
        i18n: {
            defaultLocale: 'en',
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
                    readme: 'none',
                    excludeExternals: true,
                },
            ],
        ],
        presets: [
            [
                '@docusaurus/preset-classic',
                /** @type {import('@docusaurus/preset-classic').Options} */
                ({
                    docs: {
                        sidebarPath: require.resolve('./sidebars.js'),
                        // Please change this to your repo.
                        editUrl: function ({
                            locale,
                            versionDocsDirPath,
                            docPath,
                            version,
                        }) {
                            const versionName =
                                version === 'current'
                                    ? version
                                    : `version-${version}`;
                            if (locale !== 'en') {
                                return `https://github.com/DTStack/molecule/edit/main/website/i18n/${locale}/docusaurus-plugin-content-docs/${versionName}/${docPath}`;
                            }
                            return `https://github.com/DTStack/molecule/edit/main/website/${versionDocsDirPath}/${docPath}`;
                        },
                    },
                    theme: {
                        customCss: require.resolve('./src/css/custom.css'),
                    },
                    gtag: {
                        trackingID: 'G-QWXN7DD46Z',
                        anonymizeIP: true,
                    },
                }),
            ],
        ],

        themeConfig:
            /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                metadata: [
                    {
                        name: 'keywords',
                        content: 'web ide, ide, vscode, monaco-editor, web-ide',
                    },
                ],
                navbar: {
                    title: 'Molecule',
                    logo: {
                        alt: 'Molecule Logo',
                        src: 'img/logo@3x.png',
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
                            docId: 'api/index',
                            label: 'API',
                            position: 'left',
                        },
                        {
                            to: 'case',
                            label: 'Showcase',
                            position: 'left',
                        },
                        {
                            href: 'https://github.com/DTStack/molecule',
                            label: 'GitHub',
                            position: 'left',
                        },
                        {
                            type: 'docsVersionDropdown',
                            position: 'right',
                        },
                        {
                            type: 'localeDropdown',
                            position: 'right',
                            dropdownItemsAfter: [
                                {
                                    to: 'https://github.com/DTStack/molecule/tree/main/website',
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
                                    to: '/docs/quick-start',
                                },
                                {
                                    label: 'The First Extension',
                                    to: '/docs/the-first-extension',
                                },
                                {
                                    label: 'Guides',
                                    to: '/docs/guides/extension',
                                },
                                {
                                    label: 'API',
                                    to: '/docs/api',
                                },
                            ],
                        },
                        {
                            title: 'Community',
                            items: [
                                {
                                    label: 'GitHub',
                                    href: 'https://github.com/DTStack/molecule',
                                },
                                {
                                    label: 'Discord',
                                    href: 'https://discord.gg/b62gpHwNA7',
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
                algolia: {
                    appId: 'T0LPBPMKRS',
                    apiKey: '335846e20b354fe1cf4ecd24d61515d2',
                    indexName: 'molecule',
                    contextualSearch: true,
                },
            }),
    }
);
