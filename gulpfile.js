const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')

function compileSass(){
    console.log("Executando sass, via Gulp")
    return gulp.src('./src/style/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/style'))
}

exports.default = compileSass

exports.watch = function() {
    gulp.watch('./src/style/*.sass',{ ignoreInitial: false }, gulp.series(compileSass))
    gulp.watch('./src/style/modules/*.sass',{ ignoreInitial: false }, gulp.series(compileSass))
}