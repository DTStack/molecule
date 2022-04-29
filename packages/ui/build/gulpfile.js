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
    const finalPath = relativePath ? './' + relativePath + '/' : './';
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
    // ignore tests files
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

gulp.task('build:copy-files', function () {
    return gulp.src('../src/common.scss').pipe(gulp.dest(output));
});

gulp.task('build:sass', function () {
    return gulp
        .src('../src/**/*.scss')
        .pipe(
            sass({
                importer: aliasImporter({
                    mo: path.resolve(__dirname, '../src'),
                }),
            })
        )
        .pipe(gulp.dest(output));
});

gulp.task(
    'default',
    gulp.series('clean', 'build:esm', 'build:sass', 'build:copy-files')
);

gulp.task(
    'watch',
    gulp.series(
        'clean',
        'build:esm',
        'build:sass',
        'build:copy-files',
        function watchFiles() {
            gulp.watch('../src/**/*.scss', gulp.series('build:sass'));
            gulp.watch(
                ['../src/**/*.ts', '../src/**/*.tsx'],
                gulp.series('build:esm')
            );
            gulp.watch('../src/common.scss', gulp.series('build:copy-files'));
        }
    )
);
