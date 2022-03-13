const { src, dest, watch, parallel } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoPrefixer = require('autoprefixer');
const cssNano = require('cssnano');
const postCss = require('gulp-postcss');
const sourceMaps = require('gulp-sourcemaps');

// Javascript
const terser = require('gulp-terser-js');

function compileCss(done) {
  src('src/scss/**/*.scss')
    .pipe(sourceMaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postCss([autoPrefixer(), cssNano()]))
    .pipe(sourceMaps.write('.'))
    .pipe(dest('build/css'));
  done();
}

function concatJs(done) {
  src('src/js/**/*.js').pipe(sourceMaps.init()).pipe(terser()).pipe(sourceMaps.write('.')).pipe(dest('build/js'));
  done();
}

// Watch
function dev(done) {
  watch('src/scss/**/*.scss', compileCss);
  watch('src/js/**/*.js', concatJs);
  done();
}

exports.css = compileCss;
exports.js = concatJs;
exports.dev = parallel(concatJs, dev);
