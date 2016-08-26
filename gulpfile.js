const del = require('del');

const gulp = require('gulp');

const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');
const tsconfig = require('./tsconfig.json');

gulp.task('clean', function () {
    return del('dist/**/*');
});

gulp.task('inject:css', function () {
    //
});
gulp.task('inject', function () {
    gulp.start('inject:css');
});

gulp.task('transpile:ts', function () {
    return gulp
        .src("app/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(typescript(tsconfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/app'));
});
gulp.task('transpile', function () {
    gulp.start('transpile:ts');
});

gulp.task('compile', function () {
    gulp.start('inject');
    gulp.start('transpile');
});
gulp.task('build', ['clean'], function () {
    gulp.start('compile');
});
gulp.task('default', ['build']);