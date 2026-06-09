const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compilaSass() {
    return gulp.src(path.resolve(__dirname, 'src', 'styles', 'main.scss'))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(path.resolve(__dirname, 'dist', 'styles')));
}

function comprimeJavaScript() {
    return gulp.src('src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
}

function comprimeImagens() {
    return gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

exports.sass = compilaSass;
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;

exports.default = gulp.parallel(
    compilaSass,
    comprimeJavaScript,
    comprimeImagens
);