import { Plugin as EsbuildPlugin } from 'esbuild';
import * as fs from 'fs';

/**
 * 在vite中dev模式下会使用esbuild对node_modules进行预编译，导致找不到映射表中的filepath，
 * 需要在预编译之前进行替换
 * @param options 替换语言包
 * @returns
 */
export function esbuildPluginMonacoEditorNls(): EsbuildPlugin {
    return {
        name: 'esbuild-plugin-monaco-editor-nls',
        setup(build) {
            build.onLoad({ filter: /esm[\\\/]vs[\\\/]nls\.js/ }, async () => {
                return {
                    contents: getLocalizeCode(),
                    loader: 'js',
                };
            });

            build.onLoad({ filter: /monaco-editor[\\\/]esm[\\\/]vs.+\.js/ }, async (args) => {
                return {
                    contents: transformLocalizeFuncCode(args.path),
                    loader: 'js',
                };
            });
        },
    };
}

/**
 * 替换调用方法接口参数，替换成相应语言包语言
 * @param filepath 路径
 * @param CURRENT_LOCALE_DATA 替换规则
 * @returns
 */
function transformLocalizeFuncCode(filepath: string) {
    let code = fs.readFileSync(filepath, 'utf8');
    const re = /(?:monaco-editor[\\\/]esm[\\\/])(.+)(?=\.js)/;
    if (re.exec(filepath)) {
        let path = RegExp.$1;
        path = path.replaceAll('\\', '/');
        code = code.replace(/localize\(/g, `localize('${path}', `);
    }
    return code;
}

function getLocalizeCode() {
    return `
// replace monaco-editor/esm/vs/nls.js _format
function _format(message, args) {
    let result;
    if (args.length === 0) {
        result = message;
    } else {
        result = String(message).replace(/\{(\d+)\}/g, function (match, rest) {
            const index = rest[0];
            return typeof args[index] !== "undefined" ? args[index] : match;
        });
    }
    return result;
}

// replace monaco-editor/esm/vs/nls.js localize
function localize(path, data, defaultMessage) {
    const key = typeof data === "object" ? data.key : data;
    const lang = document?.documentElement.getAttribute("lang") || "en";
    const _data = window.__locale__?.[lang] || {};
    let message = (_data[path] || {})[key];
    if (!message) {
        message = defaultMessage;
    }
    const args = [];
    for (let _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    return _format(message, args);
}
module.exports["localize"] = localize;

function loadMessageBundle(_file) {
    return localize;
}
module.exports["loadMessageBundle"] = loadMessageBundle;

function config(_opt) {
    return loadMessageBundle;
}
module.exports["config"] = config;

function getConfiguredDefaultLocale() {
    return undefined;
}
module.exports["getConfiguredDefaultLocale"] = getConfiguredDefaultLocale;`;
}
