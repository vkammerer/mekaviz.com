var	fs = require('fs'),
	gulp = require('gulp'),
	watch = require('gulp-watch'),
	ftp = require('gulp-ftp');

var config = fs.readFileSync('config.json'),
	configcss = JSON.parse(config),
	configjs = JSON.parse(config);

configcss.remotePath += '/css';
configjs.remotePath += '/js';

gulp.task('default', function () {
	gulp.src('css/**/*.css')
		.pipe(watch(function(files) {
			files.pipe(ftp(configcss));
		}));
	gulp.src('js/**/*.js')
		.pipe(watch(function(files) {
			files.pipe(ftp(configjs));
		}));
});