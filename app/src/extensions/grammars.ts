/**
 * How to add a new grammar?
 * 1. Open VSCode registry in Github, and then find `extensions` folder. https://github.com/microsoft/vscode/tree/main/extensions
 * 2. Find the grammar folder you want to add, here we make an example for python.
 * 3. Copy the file `python/syntaxes/MagicPython.tmLanguage.json` to specific folder in our project(In this project, It's public/configurations).
 * 4. Copy the file `python/language-configuration.json` into our project(In this project, It's public/grammars).
 * 5. Rename the `language-configuration.json` to `python.json`.(Why is python.json? Because the language's id which you could find in `python/package.json` is `python`)
 * 6. Push the part of `languages` field from `python/package.json` into this file.
 * 7. Add `grammar` which stands for the name of grammar file and `scopeName` which could find from `MagicPython.tmLanguage.json`
 * 8. done
 */
export default [
    {
        id: 'json',
        aliases: ['JSON', 'json'],
        extensions: [
            '.json',
            '.bowerrc',
            '.jscsrc',
            '.webmanifest',
            '.js.map',
            '.css.map',
            '.ts.map',
            '.har',
            '.jslintrc',
            '.jsonld',
            '.geojson',
        ],
        grammar: 'JSON.tmLanguage.json',
        scopeName: 'source.json',
    },
    {
        id: 'markdown',
        aliases: ['Markdown', 'markdown'],
        extensions: ['.md', '.mkd', '.mdwn', '.mdown', '.markdown', '.markdn', '.mdtxt', '.mdtext', '.workbook'],
        grammar: 'markdown.tmLanguage.json',
        scopeName: 'text.html.markdown',
    },
    {
        id: 'javascript',
        aliases: ['JavaScript', 'javascript', 'js'],
        extensions: ['.js', '.es6', '.mjs', '.cjs', '.pac'],
        filenames: ['jakefile'],
        firstLine: '^#!.*\\bnode',
        mimetypes: ['text/javascript'],
        grammar: 'JavaScript.tmLanguage.json',
        scopeName: 'source.js',
    },
    {
        id: 'typescript',
        aliases: ['TypeScript', 'ts', 'typescript'],
        extensions: ['.ts', '.cts', '.mts'],
        grammar: 'TypeScript.tmLanguage.json',
        scopeName: 'source.ts',
    },
    {
        id: 'typescriptreact',
        aliases: ['TypeScript JSX', 'TypeScript React', 'tsx'],
        extensions: ['.tsx'],
        grammar: 'TypeScriptReact.tmLanguage.json',
        scopeName: 'source.tsx',
    },
];
