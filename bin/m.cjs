#!/usr/bin/env node
const { glob } = require('glob');
const path = require('path');
const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const esbuild = require('esbuild');
const { spawn } = require('child_process');
const chalk = require('chalk');

const src = path.join(__dirname, '..', 'src');
const dist = path.join(__dirname, '..', 'esm');

const tsFilePath = path.join(src, '**', '*.ts');
const tsxFilePath = path.join(src, '**', '*.tsx');

const gray = chalk.rgb(138, 146, 155);
const blur = chalk.rgb(50, 189, 200);
const yellow = chalk.rgb(240, 152, 95);

// 打印 process.argv
yargs(hideBin(process.argv))
    .command('dev', false, async () => {
        const tsfiles = await glob(tsFilePath);
        const tsxfiles = await glob(tsxFilePath);

        transform([...tsfiles, ...tsxfiles]);
        transformTyping();
    })
    .parse();

/**
 *
 * @param {string[]} entryPoints
 * @returns
 */
async function transform(entryPoints) {
    log(`Starting ${blur('transform')}...`);
    const ctx = await esbuild.context({
        entryPoints,
        bundle: false,
        format: 'esm',
        outdir: dist,
        plugins: [
            {
                name: 'alias',
                setup(build) {
                    build.onLoad({ filter: /.*/ }, async (args) => {
                        const source = await fs.promises.readFile(args.path, 'utf8');
                        const contents = replacePaths(source, args.path);
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
    log(`Starting ${yellow('watching Files change')}...`);
}

/**
 * @type {ChildProcess}
 */
async function transformTyping() {
    spawn('tsc', ['--watch'], { stdio: 'inherit' });
}

/**
 *
 * @param {string} source
 * @param {string} filePath
 * @returns
 */
function replacePaths(source, filePath) {
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
