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

            // Handle nls.messages.js
            build.onLoad({ filter: /esm[\\\/]vs[\\\/]nls\.messages\.js/ }, async () => {
                return {
                    contents: getNLSMessagesCode(),
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
        code = code.replace(/localize\(/g, `localize('${path}', `).replace(/localize2\(/g, `localize2('${path}', `);
    }
    return code;
}

function getLocalizeCode() {
    return `
// replace monaco-editor/esm/vs/nls.js
import { getNLSLanguage, getNLSMessages } from './nls.messages.js';

function _format(message, args) {
    // Make sure message is a string
    if (typeof message !== 'string') {
        message = String(message || '');
    }
    
    let result;
    if (args.length === 0) {
        result = message;
    } else {
        result = message.replace(/\{(\d+)\}/g, function (match, rest) {
            const index = rest[0];
            const arg = args[index];
            let result = match;
            if (typeof arg === 'string') {
                result = arg;
            }
            else if (typeof arg === 'number' || typeof arg === 'boolean' || arg === void 0 || arg === null) {
                result = String(arg);
            }
            return result;
        });
    }
    return result;
}

/**
 * @skipMangle
 */
export function localize(path, data, defaultMessage) {
    const key = typeof data === "object" ? data.key : data;
    const lang = document?.documentElement.getAttribute("lang") || "en";
    const _data = window.__locale__?.[lang] || {};
    let message = (_data[path] || {})[key];
    if (!message) {
        message = defaultMessage;
    }
    
    // Make sure message is a string
    if (typeof message !== 'string') {
        return defaultMessage || key || '';
    }
    
    const args = [];
    for (let _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    return _format(message, args);
}

/**
 * Only used when built: Looks up the message in the global NLS table.
 * This table is being made available as a global through bootstrapping
 * depending on the target context.
 */
function lookupMessage(index, fallback) {
    const message = getNLSMessages()?.[index];
    if (typeof message !== 'string') {
        if (typeof fallback === 'string') {
            return fallback;
        }
        throw new Error(\`!!! NLS MISSING: \${index} !!!\`);
    }
    return message;
}

/**
 * @skipMangle
 */
export function localize2(path, data, originalMessage) {
    const key = typeof data === "object" ? data.key : data;
    const lang = document?.documentElement.getAttribute("lang") || "en";
    const _data = window.__locale__?.[lang] || {};
    let message = (_data[path] || {})[key];
    if (!message) {
        message = originalMessage;
    }
    
    // Make sure message is a string
    if (typeof message !== 'string') {
        message = originalMessage || key || '';
    }
    if (typeof originalMessage !== 'string') {
        originalMessage = key || '';
    }
    
    const args = [];
    for (let _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    const value = _format(message, args);
    return {
        value,
        original: originalMessage === message ? value : _format(originalMessage, args)
    };
}

// Re-export from nls.messages.js for compatibility
export { getNLSLanguage, getNLSMessages } from './nls.messages.js';
`;
}

function getNLSMessagesCode() {
    return `
// replace monaco-editor/esm/vs/nls.messages.js
export function getNLSMessages() {
    return globalThis._VSCODE_NLS_MESSAGES;
}

export function getNLSLanguage() {
    return document?.documentElement.getAttribute("lang") || "en";
}
`;
}
