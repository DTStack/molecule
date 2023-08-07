import * as esbuild from 'esbuild';
import * as fs from 'fs';
import { glob } from 'glob';
import * as gulp from 'gulp';
import * as path from 'path';

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'esm');

function replacePaths(source: string, filePath: string) {
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

gulp.task('dev', async () => {
    const tsfiles = await glob(path.join(src, '**', '*.ts'));
    const tsxfiles = await glob(path.join(src, '**', '*.tsx'));
    esbuild.build({
        entryPoints: tsfiles.concat(tsxfiles),
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
                        return { contents, loader: args.path.endsWith('.tsx') ? 'tsx' : 'ts' };
                    });
                },
            },
        ],
    });
});
