var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
postcssSimpleVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import');

gulp.task('default', function(){
    console.log('Horray...We have just created a gulp project');
});


gulp.task('html', function(){
    console.log('Imagine something useful begin');
});

gulp.task('styles',function(){
   //console.log('Sass or PostCss work is going');
   return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssimport,postcssSimpleVars,nested,autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
   watch('./app/index.html', function (){
       gulp.start('html')
   });
   watch('./app/assets/styles/**/*.css', function(){
   gulp.start('styles')
   })
});
