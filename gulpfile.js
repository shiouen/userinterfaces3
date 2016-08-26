const del = require('del');

const gulp = require('gulp');

const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');
const tsconfig = require('./tsconfig.json');

const sass = require('gulp-sass');

gulp.task('clean', function () {
    return del('dist');
});

gulp.task('transpile:scss', function () {
    gulp.src('app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/app'));
});
gulp.task('transpile:ts', function () {
    return gulp
        .src('app/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsconfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/app'));
});
gulp.task('transpile', function () {
    gulp.start('transpile:scss');
    gulp.start('transpile:ts');
});

gulp.task('watch:scss', function () {
    gulp.watch('app/**/*.scss', ['transpile:scss']);
});
gulp.task('watch:ts', function () {
    gulp.watch('app/**/*.ts', ['transpile:ts']);
});
gulp.task('watch', function () {
    gulp.start('watch:scss');
    gulp.start('watch:ts');
});

gulp.task('compile', function () {
    gulp.start('transpile');
});
gulp.task('build', ['clean'], function () {
    gulp.start('compile');
    gulp.start('watch');
});
gulp.task('default', ['build']);