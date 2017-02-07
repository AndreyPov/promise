import gulp from "gulp";
import browserify from "browserify";
import babelify from "babelify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import sourcemaps from "gulp-sourcemaps";
import gutil from 'gulp-util';


gulp.task('default', () => {
  browserify({
    entries: 'src/exp.js',
    debug: true
  })
  .transform('babelify', {presets: ["es2015"]})
  .bundle()
  .on('error', err => {
    gutil.log("browserify Error", gutil.colors.red(err.message));
  })
  .pipe(source('exp.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write("./maps"))
  .pipe(gulp.dest('./dist'));
});
