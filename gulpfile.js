//task for converting .scss to .css
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');
var uncss = require('gulp-uncss');

gulp.task('compress-js', function () {
    return gulp.src('js/main-built.js')
        .pipe(uglify())
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest('js'));
});

gulp.task('ready-css', function () {
    return gulp.src('scss/custom.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 5%']
        }))
        .pipe(minifyCss({
            compatibility: 'ie8'
        }))
        .pipe(rename("style.min.css"))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('css'));
});

gulp.task('to-css', function () {
    gulp.src('scss/custom.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(rename("style.css"))
        .pipe(gulp.dest('css'));
});

gulp.task('watch-css', function () {
    gulp.watch('scss/**/*.scss', ['to-css', 'ready-css']);
});

gulp.task('default', ['watch-css']);