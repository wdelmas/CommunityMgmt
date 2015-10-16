var gulp = require('gulp'),
    fs = require('fs'),
    concat = require('gulp-concat'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    chmod = require('gulp-chmod');

var paths = {
    src: [
        '../bower_components/angular/angular.min.js',
        '../bower_components/angular-ui-router/release/angular-ui-router.min.js',
        '../bower_components/lodash/dist/lodash.min.js',
        '../bower_components/ngstorage/ngstorage.min.js',
        //'../bower_components/prettyprint/prettyprint.js',
        '../bower_components/angular-sanitize/angular-sanitize.min.js',
        '../bower_components/angular-animate/angular-animate.min.js',
        '../bower_components/angular-aria/angular-aria.min.js',
        '../bower_components/angular-material-icons/angular-material-icons.min.js'
    ],
    dest: '../build/'
};

gulp.task('libs', function (cb) {
    fs.exists(paths.dest + 'CmtMgmt.libs.js', function (exists) {
        if (!exists) {
            gulp.src(paths.src)
                .pipe(concat('CmtMgmt.libs.js'))
                .pipe(uglify())
                .pipe(chmod(666))
                .pipe(gulp.dest(paths.dest));
        }
    });
    cb();
});

gulp.task('cleanLibs', function (cb) {
    del([paths.dest + 'CmtMgmt.libs.js'], { force: true });
    cb();
});