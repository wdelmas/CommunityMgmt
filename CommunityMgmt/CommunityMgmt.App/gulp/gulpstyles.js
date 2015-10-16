var gulp = require('gulp'),
    del = require('del'),
    less = require('gulp-less'),
    gulpif = require('gulp-if'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    chmod = require('gulp-chmod');

var paths = {
    src: [
        '../css/*.css',
        '../bower_components/angular-material/angular-material.min.css',
         '../bower_components/angular-material-icons/angular-material-icons.css'
    ],
    dest: '../build/'
};


gulp.task('styles', function() {
    //return gulp.src(paths.src)
    //    .pipe(less())
    //    .pipe(gulpif(globalConfig.uglify, minifyCSS()))
    //    .pipe(concat('global.app.css'))
    //    .pipe(gulp.dest(paths.dest));
    gulp.src(paths.src)
        //.pipe(less())
         .pipe(concat('CmtMgmt.css'))
         .pipe(gulpif(true, minifyCSS({noAdvanced: true})))
        .pipe(chmod(666))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('cleanStyles', function(cb) {
    del([paths.dest + '*.css']);
    cb();
});

gulp.task('watchStyles', function() {
    return gulp.watch([paths.src], [ 'cleanStyles','styles']);
});