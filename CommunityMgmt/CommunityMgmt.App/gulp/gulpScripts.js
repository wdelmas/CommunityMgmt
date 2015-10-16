var gulp = require('gulp'),
    path = require('path'),
     fs = require('fs'),
    replace = require('gulp-replace'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    del = require('del'),
    uglify = require('gulp-uglify'),
         notifier = require("node-notifier"),
     ngAnnotate = require('gulp-ng-annotate'),
      notifier = require("node-notifier"),
chmod = require('gulp-chmod');
var gutil = require('gulp-util');

// var globalConfig = require('./globalConfig');

var apps = [
    {
        name: 'app',
        src: [
            '../app/**/**.js',
             '!../app/app.run.background.js',
        ],
        dest: '../build/'
    },

    {
        dest: '../build/',
        name: 'background',
        src: [
            '../app/**/**.js',
             '!../app/app.run.js'
        ],

    }];


gulp.task('scripts', function (cb) {

    apps.forEach(function (app) {
        fs.exists(app.dest + 'CmtMgmt.' + app.name + '.js', function (exists) {
            gulp.src(app.src)
            .pipe(ngAnnotate())
           .pipe(concat('CmtMgmt.' + app.name + '.js'))
           //.pipe(uglify())
           .pipe(chmod(666))
           .pipe(gulp.dest(app.dest));

        });

    });
    notifier.notify({
        'title': 'SCRIPT Update',
        'message': 'SCRIPT Files updated'
    });
    cb();
});




gulp.task('cleanScripts', function (cb) {
    apps.forEach(function (app) {
        del([app + paths.dest + 'CmtMgmt.' + app.name + '.js'], { force: true });
        cb();
    });
});

gulp.task('watchAppScripts', function () {

    return gulp.watch([apps[0].src], ['scripts']);//'cleanScripts',

});

gulp.task('watchBackGroundScripts', function () {
    return gulp.watch([apps[1].src], ['scripts']);//'cleanScripts',
});