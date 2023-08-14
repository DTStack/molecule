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

const styleVariablesFileName = 'style__variables.js';

const gray = chalk.rgb(104, 106, 102);
const blue = chalk.rgb(50, 189, 200);
const yellow = chalk.rgb(240, 152, 95);
const green = chalk.rgb(100, 182, 120);

// 打印 process.argv
yargs(hideBin(process.argv))
    .command('dev', false, async () => {
        rimrafSync(dist);
        const tsfiles = await glob(tsFilePath);
        const tsxfiles = await glob(tsxFilePath);

        const scssfiles = await glob(scssFilePath);

        transform([...tsfiles, ...tsxfiles]);
        transformTyping();
        transformStyle(scssfiles);
    })
    .parse();

/**
 *
 * @param {string[]} entryPoints
 * @returns
 */
async function transform(entryPoints) {
    log(`Starting ${blue('transform')}...`);
    const ctx = await esbuild.context({
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
    await ctx.watch();
    log(`Finishing ${blue('transform')}`);
    log(`Starting ${yellow('watching tsx Files change')}...`);
}

async function transformTyping() {
    spawn('tsc', ['--watch', '--preserveWatchOutput'], { stdio: 'inherit' });
}

/**
 *
 * @param {string[]} entrys
 */
async function transformStyle(entrys) {
    log(`Starting ${green('transform styles')}...`);
    await Promise.all(entrys.map((entry) => _transform(entry)));
    log(`Finishing ${green('transform styles')}`);
    log(`Starting ${yellow('watching style Files change')}...`);
    // One-liner for current directory
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
            console.log('exportModules:', exportModules);
            fs.writeFileSync(
                path.join(dirname, styleVariablesFileName),
                exportModules
                    .replace(':export', 'export default')
                    .replace(/: .*;/gm, (substring) => {
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
 * @param {string} source
 * @param {string} filePath
 * @returns
 */
function alias(source, filePath) {
    let target = source;
    const regex = /^import.*(mo\/.*)';/gm;
    target = target.replace(regex, (substring, $1) => {
        const idx = substring.indexOf($1);
        const absolutePath = $1.replace('mo', src);
        const relative = path.relative(path.dirname(filePath), absolutePath);
        return substring.substring(0, idx) + relative + substring.substring(idx + $1.length);
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
        return `import ${matcher[0].replace(/.scss/, '.css')}\n${substring.substring(
            0,
            matcher.index
        )} './${styleVariablesFileName}'`;
    });
    return target;
}

/**
 *
 * @param {string} text
 */
function log(text) {
    const date = new Date();
    const current = `${date.getHours().toString().padStart(2, '0')}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    console.log(`[${gray(current)}] ${text}`);
}
