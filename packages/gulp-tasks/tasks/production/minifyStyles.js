const gulp = require('gulp')
const rename = require('gulp-rename')
const csscomb = require('gulp-csscomb')
const groupCssMediaQueries = require('gulp-group-css-media-queries')
const cleanCSS = require('gulp-clean-css')

const { dist } = require('../config')

gulp.task('minifyStyles', () =>
  gulp.src(`${dist}/assets/css/*.css`)
    .pipe(rename({ suffix: '.min' }))
    .pipe(csscomb())
    .pipe(groupCssMediaQueries())
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${dist}/assets/css`))
)
