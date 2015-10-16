var gulp = require('gulp');

var scripts = require('./gulpScripts'),
    styles = require('./gulpStyles'),
          notifier = require("node-notifier"),
    //templates = require('./gulpTemplates'),
    libs = require('./gulpLibs'),
    less = require('gulp-less');
//ut = require('./UT')


gulp.task('build', ['libs', 'scripts', 'styles'], function (cb) {   //'', 'templates',
    cb();
});

gulp.task('watch', ['watchAppScripts', 'watchBackGroundScripts', 'watchStyles'], function (cb) {//, 'watchTemplates'
    cb();
    notifier.notify({
        'title': 'Gulp Started',
        'message': 'Files updated'
    });

});

gulp.task('default', ['build', 'watch']);