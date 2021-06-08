const path = require('path');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const through = require('through2');
const tsProject = ts.createProject('../tsconfig.build.json');
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

gulp.task('build:esm', function () {
    return tsProject
        .src()
        .pipe(tsProject())
        .pipe(relativeImport(tsProject.config.compilerOptions))
        .on('error', function (error, callback) {
            console.error(error.stack);
        })
        .pipe(gulp.dest(output));
});
