#!/usr/bin/env node
const { glob } = require('glob');
const path = require('path');
const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const esbuild = require('esbuild');
const { spawn } = require('child_process');
const chalk = require('chalk');
const { rimrafSync } = require('rimraf');
const chokidar = require('chokidar');
const sass = require('sass');

const src = path.join(__dirname, '..', 'src');
const dist = path.join(__dirname, '..', 'esm');

const tsFilePath = path.join(src, '**', '*.ts');
const tsxFilePath = path.join(src, '**', '*.tsx');
const scssFilePath = path.join(src, '**', '*.scss');
const cssFilePath = path.join(src, '**', '*.css');
const jsonFilePath = path.join(src, '**', '*.json');

const styleVariablesFileName = 'style__variables.js';

const gray = chalk.rgb(104, 106, 102);
const blue = chalk.rgb(50, 189, 200);
const yellow = chalk.rgb(240, 152, 95);
const green = chalk.rgb(100, 182, 120);
const red = chalk.rgb(199, 134, 109);

// 打印 process.argv
yargs(hideBin(process.argv))
    .command('dev', false, async () => {
        rimrafSync(dist);
        const tsfiles = await glob(tsFilePath);
        const tsxfiles = await glob(tsxFilePath);

        const scssfiles = await glob(scssFilePath);

        const jsonfiles = await glob(jsonFilePath);
        const cssfiles = await glob(cssFilePath);

        transform([...tsfiles, ...tsxfiles], true);
        transformTyping(true);
        transformStyle(scssfiles, true);
        copyFile([...jsonfiles, ...cssfiles], true);
    })
    .command('build', false, async () => {
        rimrafSync(dist);
        const tsfiles = await glob(tsFilePath);
        const tsxfiles = await glob(tsxFilePath);

        const scssfiles = await glob(scssFilePath);

        const jsonfiles = await glob(jsonFilePath);
        const cssfiles = await glob(cssFilePath);

        await Promise.all([transform([...tsfiles, ...tsxfiles]), transformTyping(), transformStyle(scssfiles), copyFile([...jsonfiles, ...cssfiles])]);
        process.exit(0);
    })
    .parse();

/**
 * @type {Awaited<ReturnType<esbuild.context>> | undefined}
 */
let transformCtx;
/**
 * @type {ReturnType<spawn> | undefined}
 */
let typingCtx;

process.on('exit', () => {
    typingCtx?.kill();
    transformCtx?.cancel();
    transformCtx?.dispose();
});

/**
 *
 * @param {string[]} entryPoints
 * @returns
 */
async function transform(entryPoints, watch = false) {
    log(`Starting ${blue('transform')}...`);
    transformCtx = await esbuild.context({
        entryPoints,
        bundle: false,
        format: 'esm',
        outdir: dist,
        jsx: 'automatic',
        plugins: [
            {
                name: 'alias',
                setup(build) {
                    build.onLoad({ filter: /.*/ }, async (args) => {
                        const source = await fs.promises.readFile(args.path, 'utf8');
                        const contents = sassLoader(alias(source, args.path));
                        return {
                            contents,
                            loader: args.path.endsWith('.tsx') ? 'tsx' : 'ts',
                        };
                    });
                },
            },
        ],
    });
    if (watch) {
        await transformCtx.watch();
        log(`Finishing ${blue('transform')}`);
        log(`Starting ${yellow('watching tsx Files change')}...`);
    } else {
        await transformCtx.rebuild();
        log(`Finishing ${blue('transform')}`);
    }
}

function transformTyping(watch = false) {
    return new Promise((resolve) => {
        const command = watch ? 'tsc && (concurrently "tsc -w" "tsc-alias -w")' : 'tsc && tsc-alias';
        typingCtx = spawn(command, {
            stdio: 'inherit',
            shell: true,
        });
        typingCtx.on('close', () => {
            resolve();
        });
    });
}

/**
 *
 * @param {string[]} entrys
 */
async function transformStyle(entrys, watch = false) {
    log(`Starting ${green('transform styles')}...`);
    await Promise.all(entrys.map((entry) => _transform(entry)));
    log(`Finishing ${green('transform styles')}`);
    if (watch) {
        log(`Starting ${yellow('watching style Files change')}...`);
        chokidar.watch(entrys).on('change', (path) => {
            log(`Starting ${green('transform styles', path)}...`);
            _transform(path)
                .then(() => {
                    log(`Finishing ${green('transform styles')}`);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }

    /**
     *
     * @param {string} entry
     */
    async function _transform(entry) {
        const res = await sass.compileAsync(entry);
        const regex = /^:export {(\n|.)+}$/m;
        const target = entry.replace(/src\//, 'esm/').replace(/.scss/, '.css');
        const dirname = path.dirname(target);
        if (!fs.existsSync(dirname)) {
            fs.mkdirSync(dirname, { recursive: true });
        }
        const css = res.css.replace(regex, '');
        fs.writeFileSync(target, css);
        if (regex.test(res.css)) {
            const exportModules = res.css.match(regex)[0];
            fs.writeFileSync(
                path.join(dirname, styleVariablesFileName),
                exportModules.replace(':export', 'export default').replace(/: .*;/gm, (substring) => {
                    const stringLiteral = /(?<="|')\S+(?="|')/g;
                    if (!stringLiteral.test(substring)) {
                        const startIdx = substring.indexOf(':');
                        const endIdx = substring.indexOf(';');
                        return `:"${substring.substring(startIdx + 1, endIdx).trim()}",`;
                    } else {
                        return substring.replace(';', ',');
                    }
                })
            );
        }
    }
}

/**
 *
 * @param {string[]} entrys
 */
async function copyFile(entrys, watch = false) {
    log(`Starting ${red('copy files')}...`);
    entrys.map((entry) => _copyFile(entry));
    log(`Finishing ${red('copy files')}`);

    if (watch) {
        chokidar.watch(entrys).on('change', (path) => {
            log(`Starting ${red('copy files')}...`);
            _copyFile(path);
            log(`Finishing ${red('copy files')}`);
        });
    }

    /**
     *
     * @param {string} filePath
     */
    function _copyFile(filePath) {
        const dest = filePath.replace(/src\//, 'esm/');
        const dirname = path.dirname(dest);
        if (!fs.existsSync(dirname)) {
            fs.mkdirSync(dirname, { recursive: true });
        }
        fs.createReadStream(filePath, 'utf-8').pipe(fs.createWriteStream(dest));
    }
}

/**
 *
 * @param {string} source
 * @param {string} filePath
 * @returns
 */
function alias(source, filePath) {
    let target = source;
    const regex = /(?<=from).*(?=;)/gm;
    target = target.replace(regex, (substring) => {
        if (/mo\//.test(substring)) {
            const absolutePath = substring.match(/(?<="|')\S+(?="|')/gm)[0].replace(/mo\//, `${src}/`);
            const relative = path.relative(path.dirname(filePath), absolutePath);
            return `"${relative}"`;
        } else {
            return substring;
        }
    });
    return target;
}

/**
 *
 * @param {string} source
 */
function sassLoader(source) {
    let target = source;
    const regex = /^import.*(.scss)';/gm;
    target = target.replace(regex, (substring) => {
        const matcher = substring.match(/'(.*')/);
        const isVariables = substring.includes('from');
        return [`import ${matcher[0].replace(/.scss/, '.css')}`, isVariables && `${substring.substring(0, matcher.index)} './${styleVariablesFileName}'`].join('\n');
    });
    return target;
}

/**
 *
 * @param {string} text
 */
function log(text) {
    const date = new Date();
    const current = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    console.log(`[${gray(current)}] ${text}`);
}
