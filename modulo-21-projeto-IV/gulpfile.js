const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function compilaSass() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/css'));
}

function comprimeJavaScript() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function acompanhaArquivos() {
    gulp.watch('./src/styles/*.scss', compilaSass);
    gulp.watch('./src/scripts/*.js', comprimeJavaScript);
}

exports.default = gulp.parallel(
    compilaSass,
    comprimeJavaScript,
    acompanhaArquivos
);

exports.build = gulp.parallel(
    compilaSass,
    comprimeJavaScript
);