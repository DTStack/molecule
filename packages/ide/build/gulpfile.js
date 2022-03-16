const path = require('path');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const through = require('through2');
const rimraf = require('rimraf');
const sass = require('gulp-sass')(require('sass'));
const aliasImporter = require('node-sass-alias-importer');
const tsProject = ts.createProject('../tsconfig.json');
const output = '../esm';

function replacePath(code, filePath, importOptions) {
    const sourcePath = path.dirname(filePath);
    const targetPath = path.resolve(output);
    const relativePath = path.relative(sourcePath, targetPath);
    // transform different platform separator to linux's separator
    const finalPath = relativePath
        ? './' + relativePath.split(path.sep).join('/') + '/'
        : './';
    return code.replace(/([from|import]\s+)'(mo\/|\bmo\b)/g, "$1'" + finalPath);
}

function relativeImport(compilerOptions) {
    return through.obj(function (file, encoding, cb) {
        if (!file.contents) {
            return;
        }
        let content = file.contents.toString('utf-8');
        content = replacePath(
            content,
            file.history.toString(),
            compilerOptions
        );
        file.contents = Buffer.from(content);
        this.push(file);
        cb();
    });
}

gulp.task('clean', function (cb) {
    rimraf(output, cb);
});

gulp.task('build:esm', function () {
    tsProject.config.exclude = ['src/**/__tests__/*'];
    return tsProject
        .src()
        .pipe(tsProject())
        .pipe(relativeImport(tsProject.config.compilerOptions))
        .on('error', function (error, callback) {
            console.error(error.stack);
        })
        .pipe(gulp.dest(output));
});

gulp.task('build:sass', function () {
    return gulp
        .src('../src/**/*.scss')
        .pipe(
            sass({
                importer: aliasImporter({
                    mo: path.resolve(__dirname, '../src'),
                    '~': path.resolve(__dirname, '..', 'node_modules'),
                }),
            })
        )
        .pipe(gulp.dest(output));
});

gulp.task('build:extensions', function () {
    // [issues]: I don't know why ignore doesn't work
    const extensionPath = '../src/extensions/**';
    return gulp
        .src(
            [
                path.resolve(extensionPath, '*.svg'),
                path.resolve(extensionPath, '*.json'),
                path.resolve(extensionPath, '*.png'),
                path.resolve(extensionPath, '*.md'),
            ],
            {
                dot: true,
                // ignore: ['*.ts', '*.tsx'],
            }
        )
        .pipe(gulp.dest(path.resolve(output, 'extensions')));
});

gulp.task('build:i18n', function () {
    return gulp
        .src('../src/i18n/**/*.json')
        .pipe(gulp.dest(path.resolve(output, 'i18n')));
});

gulp.task(
    'default',
    gulp.series(
        'clean',
        'build:esm',
        'build:sass',
        'build:extensions',
        'build:i18n'
    )
);

gulp.task(
    'watch',
    gulp.series(
        'clean',
        'build:esm',
        'build:sass',
        'build:extensions',
        'build:i18n',
        function watchFiles() {
            gulp.watch('../src/**/*.scss', gulp.series('build:sass'));
            gulp.watch(
                ['../src/**/*.ts', '../src/**/*.tsx'],
                gulp.series('build:esm')
            );
            gulp.watch(
                [
                    '../src/extension/**/*.svg',
                    '../src/extension/**/*.json',
                    '../src/extension/**/*.png',
                    '../src/extension/**/*.md',
                ],
                gulp.series('build:extensions')
            );
            gulp.watch('../src/i18n/**/*.json', gulp.series('build:i18n'));
        }
    )
);
