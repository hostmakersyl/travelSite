var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
    console.log('Horray...We have just created a gulp project');
});


gulp.task('html', function(){
    console.log('Imagine something useful begin');
});

gulp.task('styles',function(){
   console.log('Sass or PostCss work is going');
});

gulp.task('watch', function(){
   watch('./app/index.html', function (){
       gulp.start('html')
   });
   watch('./app/assets/styles/**/*.css', function(){
   gulp.start('styles')
   })
});
